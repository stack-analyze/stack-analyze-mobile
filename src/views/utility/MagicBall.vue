<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

import {
  IonPage, IonContent, IonGrid, IonRow, IonCol,
  IonInput, IonSelect, IonSelectOption,
  IonCard, IonCardContent, IonCardTitle,
} from '@ionic/vue'

import StackToolbar from '@/components/main/StackToolbar.vue';
import StackButtons from '@/components/main/StackButtons.vue';
import { MagicBall } from '@/interfaces/MagicBallInterface';

// static
const languageList = ['es', 'en']

const localeKeyword: { [s: string]: string; } = {
  en: "magic ball say:",
  es: "la bola magic te dice:"
};

const popoverOptions = {
  mode: 'ios',
  showBackdrop: true,
  backdropDismiss: false
};

// state
const question = ref('')
const lang = ref('')
const magicBall = ref<Partial<MagicBall>>({})
const magicBallSaying = ref('')
const errorTitle = ref('')
const errorMessage = ref('')

const initMagicBall = async () => {
  try {
    const api = `https://corsproxy.io/?https://eightballapi.com/api/biased?question=${question.value}&locale=${lang.value}`
    const { data } = await axios.get(api)

    magicBall.value = data
    magicBallSaying.value = localeKeyword[lang.value]
  } catch (err) {
    const {name, message} = (err as Error)
    errorTitle.value = name
    errorMessage.value = message
  }

  question.value = ''
  lang.value = ''
}

const ClearMagicBall = () => {
  magicBall.value = {}
}
</script>

<template>
  <ion-page>
    <stack-toolbar />

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-input 
              autocomplete="off"
              color="secondary"
              label="enter a question"
              label-placement="floating"
              v-model="question" 
            />
          </ion-col>
          <ion-col size="6">
            <ion-select
              placeholder="enter a language"
              label="language:"
              interface="popover"
              :interface-options="popoverOptions"
              v-model="lang"
            >
              <ion-select-option
                v-for="option in languageList"
                :value="option"
                :key="option"
              >{{ option }}</ion-select-option>
            </ion-select>
          </ion-col>
        </ion-row>
        <stack-buttons 
          init-btn-name="start magic ball" 
          :init-validate="question.length <= 10"
          @init-function="initMagicBall"
          clear-btn-name="clear question"
          :clear-validate="magicBall!.reading === ''"
          @clear-function="ClearMagicBall"
        />
      </ion-grid>

      <ion-card>
        <ion-card-title>{{ magicBallSaying || errorTitle }}</ion-card-title>
        <ion-card-content>{{ magicBall.reading || errorMessage }}</ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>