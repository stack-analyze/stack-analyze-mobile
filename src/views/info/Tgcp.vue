<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import { ellipse } from 'ionicons/icons'

import { type TcgpCard } from '@/interfaces/TcgpInteface'
import { TCGP_SETS } from '@/scripts/tcgpSets'
import { presentAlert } from '@/scripts/alertMsg'

import {
  IonPage, IonContent, IonGrid, IonRow, IonCol,
  IonInput, IonSelect, IonSelectOption, IonItem,
  IonCard, IonCardHeader, IonCardContent, IonCardTitle,
  IonCardSubtitle, IonImg, IonLabel, IonBadge, IonIcon, IonText,
  IonThumbnail
} from '@ionic/vue'

import StackToolbar from '@/components/main/StackToolbar.vue'
import StackButtons from '@/components/main/StackButtons.vue'
import TcgEnegyCost from '@/components/TcgEnegyCost.vue'

// states
const tcgSet = ref('');
const tcgID = ref(0);
const tcgCardInfo = ref<Partial<TcgpCard>>({});
const tcgCardStage = ref('')
const tcgCardName = ref('')
const tcgCardType = ref('')

// computers
const tcgSetValidate = computed(() => tcgSet.value === '')
const helper = computed(() => `enter a id between 1 to ${TCGP_SETS[tcgSet.value]}`)
const tcgValidateID = computed(() => tcgID.value >=1 && tcgID.value <= TCGP_SETS[tcgSet.value])
const tcgImage = computed(
  () => tcgCardInfo.value.image ? `${tcgCardInfo.value.image}/high.webp` : '/assets/img/No-image-found.jpg'
)

// methods
const getCardInfo = async () => {
  try {
    const data = await (
      await fetch(`https://api.tcgdex.net/v2/en/sets/${tcgSet.value}/${tcgID.value}`)
    ).json()
    tcgCardInfo.value = data

    tcgCardStage.value = tcgCardInfo.value.stage !== 'Basic' ? `evolve from: ${tcgCardInfo.value.evolveFrom}` : 'pokemon basic'
    // - type: ${tcgCardInfo.value.types?.length === 0 ? tcgCardInfo.value.category : tcgCardInfo.value.types![0]}
    tcgCardName.value = `(${tcgCardInfo.value.id}) ${tcgCardInfo.value.name} "${tcgCardInfo.value.category}"`
    tcgCardType.value = `type: ${tcgCardInfo.value.trainerType || tcgCardInfo.value.types?.at(0)} - rarity: ${tcgCardInfo.value.rarity}`
  } catch (err) {
    presentAlert({
      msg: (err as Error).message,
      header: 'Error tcg api',
      subHeader: 'error 4xx or 5xx',
    });
   }

  tcgSet.value = ''
  tcgID.value = 0
}

const tcgColor = () => {
  switch (tcgCardInfo.value.types!.at(0)) {
    case 'Grass': return 'success';
    case 'Fire': return 'danger';
    case 'Water': return 'primary';
    case 'Lightning': return 'warning';
    case 'Psychic': return 'tertiary';
    case 'Fighting': return 'tcgFighting';
    case 'Darkness': return 'tcgDark';
    case 'Metal': return 'medium';
    default: return 'dark';
  }
}

const clearCardInfo = () => {
  tcgCardInfo.value = {}
  tcgCardStage.value = ''
  tcgCardName.value = ''
  tcgCardType.value = ''
}
</script>

<template>
  <ion-page>
    <stack-toolbar />

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-select interface="popover" label="select a expansion set:" label-placement="floating" mode="ios"
              v-model="tcgSet">
              <ion-select-option value="">no expansion</ion-select-option>
              <ion-select-option v-for="set of Object.keys(TCGP_SETS)" :value="set">
                {{ set }}
              </ion-select-option>
            </ion-select>
          </ion-col>

          <ion-col>
            <ion-input label="enter a card id:" label-placement="floating" type="number" min="1"
              :max="TCGP_SETS[tcgSet]" :disabled="tcgSetValidate" :helper-text="tcgSet ? helper : undefined"
              v-model="tcgID" />
          </ion-col>
        </ion-row>

        <stack-buttons init-btn-name="get info" :init-validate="!tcgValidateID" @init-function="getCardInfo"
          clear-btn-name="clear info" :clear-validate="Object.values(tcgCardInfo).length === 0" @clear-function="clearCardInfo" />
      </ion-grid>

      <ion-card class="stack-card" mode="ios">
        <ion-card-header mode="md">
          <ion-img class="github-img" :src="tcgImage" alt="card" />
          <ion-card-title :color="tcgCardInfo.suffix === 'EX' ? 'warning' : undefined">
            {{ tcgCardName }}
          </ion-card-title>

          <ion-card-subtitle>{{ tcgCardType }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content mode="md">
          <ion-grid :fixed="true">
            <ion-row v-show="tcgCardInfo.stage">
              <ion-col size="6">
                <ion-item>{{ tcgCardInfo.stage }}</ion-item>
              </ion-col>

              <ion-col>
                <ion-item>{{ tcgCardStage }}</ion-item>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="12" v-show="tcgCardInfo.effect">
                <ion-item>
                  <ion-label position="stacked">effect:</ion-label>
                  {{ tcgCardInfo.effect }}
                </ion-item>
              </ion-col>

              <ion-col size="12" v-show="tcgCardInfo.abilities">
                <ion-item v-for="{ effect, name } in tcgCardInfo.abilities">
                  <ion-badge slot="start" color="danger">{{ name }}</ion-badge>
                  {{ effect }}
                </ion-item>
              </ion-col>
            </ion-row>

            <ion-row v-show="tcgCardInfo.attacks">
              <ion-col size="12" v-for="attack in tcgCardInfo.attacks">
                <ion-item>
                  <ion-icon slot="start" :icon="ellipse" v-if="typeof attack.cost === 'undefined'" />

                  <ion-text v-else  slot="start">
                  <TcgEnegyCost 
                    v-for="type in attack.cost"
                    :energy-type="type"
                  />
                  </ion-text>

                  <ion-label>
                    {{ attack.name }}
                  </ion-label>
                  
                  <ion-badge 
                    slot="end" 
                    :color="tcgColor()"
                  >{{ attack.damage || 'special' }}</ion-badge>
                </ion-item>

                <ion-item v-show="attack.effect">{{ attack.effect }}</ion-item>
              </ion-col>
            </ion-row>

            <ion-row v-show="tcgCardInfo.weaknesses">
              <ion-col size="6">
                <ion-item>
                  {{tcgCardInfo.weaknesses?.at(0)?.type}}: {{tcgCardInfo.weaknesses?.at(0)?.value}}
                </ion-item>
              </ion-col>
              <ion-col size="6">
                <ion-item>retreat cost:{{tcgCardInfo.retreat}}</ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>