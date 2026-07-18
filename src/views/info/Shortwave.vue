<script setup lang="ts">
import { computed, ref } from 'vue'

import axios, { type AxiosError } from 'axios';
import { presentAlert } from '../../scripts/alertMsg.ts';

import {
  IonPage, IonContent, IonInput, IonGrid, IonItem,
  IonList, IonText, IonLabel, IonNote,
} from "@ionic/vue";
import StackToolbar from "@/components/main/StackToolbar.vue";
import StackButtons from '../../components/main/StackButtons.vue';

type ShortwaveStations = {
  name: string
  lang: string
  days: string
  startUTC: string
  endUTC: string
}

const MIN_SW_FREQ: number = 2300
const MAX_SW_FREQ: number = 26100

const shortwaveFreq = ref(0)
const shortwaveStations = ref<ShortwaveStations[]>([])

const shortwaveFreqValidate = computed(() => shortwaveFreq.value >= MIN_SW_FREQ && shortwaveFreq.value <= MAX_SW_FREQ)

const getStations = async () => {
  try {
    /* const api = `https://corsproxy.io/?https://shortwave.live/khz?q=${shortwaveFreq.value}`
    const { data } = await axios.get(api) */
    const {data} = await axios.get('/shortwave/khz', {
      params: { q: shortwaveFreq.value }
    })

    const parser = new DOMParser()

    const page = parser.parseFromString(data, 'text/html')

    shortwaveStations.value = [...page.querySelectorAll("tbody tr")].map((el) => ({
      name: el.querySelector('#station')!.textContent,
      lang: el.querySelector('#language')!.textContent,
      days: el.querySelector('#days')!.textContent,
      startUTC: el.querySelector('#start')!.textContent,
      endUTC: el.querySelector('#end')!.textContent,
    }))

  } catch (err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error pagespeed',
      subHeader: 'problem to analyze',
    });
  }

  shortwaveFreq.value = 0
}

const clearStations = () => {
  shortwaveStations.value = []
}
</script>

<template>
  <ion-page>
    <stack-toolbar />

    <ion-content>
      <ion-item>
        <ion-input type="number" label="enter a freq" label-placement="floating" :min="MIN_SW_FREQ" :max="MAX_SW_FREQ"
          v-model="shortwaveFreq" />
      </ion-item>

      <ion-grid>
        <StackButtons init-btn-name="get stations" :init-validate="!shortwaveFreqValidate" @init-function="getStations"
          clear-btn-name="clear stations" :clear-validate="shortwaveStations.length === 0"
          @clear-function="clearStations" />
      </ion-grid>

      <ion-item v-if="shortwaveStations.length === 0">no stations</ion-item>

      <ion-list class="scroller" inset v-else>
        <ion-item v-for="({ days, endUTC, lang, name, startUTC }) of shortwaveStations">
          <ion-label>
            {{ name }} ({{ lang }}) <br />
            <ion-note>days: {{ days }}</ion-note>
          </ion-label>
          
          <ion-text color="secondary" slot="end" >
            {{ startUTC }} - {{ endUTC }} UTC
          </ion-text>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.scroller {
  height: 70%;
  overflow: auto;
}
</style>