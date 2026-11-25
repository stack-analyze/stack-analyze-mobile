<script setup lang="ts">
import { ref } from 'vue';
import axios, { AxiosError } from 'axios';
import { currencyList, currencyNames, type Currency } from '../../scripts/currencyItems.ts';
import { presentAlert } from '../../scripts/alertMsg.ts';

import { 
  IonBadge, IonCol, IonContent, IonGrid, IonItem, 
  IonLabel, IonList, IonListHeader, IonPage, IonRow, IonSelect, IonSelectOption 
} from '@ionic/vue'
import StackToolbar from '../../components/main/StackToolbar.vue';
import StackButtons from '../../components/main/StackButtons.vue';

// static
const interfaceOptions = {
  header: 'currency list',
  showBackdrop: true,
  backdropDismiss: false
};

// states
const currencyCode = ref('')
const currencyInfo = ref<Partial<Currency>>({})

// methods
const cancelSelect = () => {
  currencyCode.value = ''
}

const getCurrencyInfo = async () => {
  try {
    const { data } = await axios.get("https://fulusly.soft9.us/api/rates", {
      params: {
        base: currencyCode.value,
        symbols: "cop,usd,eur,jpy,brl,mxn"
      }
    });

    currencyInfo.value = data
  } catch (err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error github user info',
      subHeader: 'problem to req api'
    });
  }

  currencyCode.value = ''
};

const clearCurrencyInfo = () => {
  currencyInfo.value = {}
}
</script>

<template>
  <ion-page>
    <stack-toolbar />

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-select label="enter a currency code:" interface="alert" :interface-options @ion-cancel="cancelSelect"
              v-model="currencyCode">
              <ion-select-option value="">none</ion-select-option>
              <ion-select-option v-for="value in currencyList" :value>{{ currencyNames[value] }}</ion-select-option>
            </ion-select>
          </ion-col>
        </ion-row>

        <stack-buttons clear-btn-name="clear results" init-btn-name="get results" :init-validate="currencyCode === ''"
          :clear-validate="Object.values(currencyInfo).length === 0" @init-function="getCurrencyInfo" @clear-function="clearCurrencyInfo" />
      </ion-grid>

      <ion-list inset>
        <ion-list-header mode="ios" lines="inset">
          <ion-label>
            {{ Object.hasOwn(currencyNames, currencyInfo.base!) ? currencyNames[currencyInfo.base!] : 'no currency name' }}
          </ion-label>
        </ion-list-header>
        <ion-item v-for="(value, key) in currencyInfo.rates">
          <ion-label>{{ currencyNames[key] }}</ion-label>
          <ion-badge slot="end">{{ value }}</ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
