<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import axios, { AxiosError } from 'axios';

import {
  IonPage, IonContent, IonList, IonItem, IonIcon,
  IonLabel, IonButton, IonBadge, IonFooter,
} from '@ionic/vue'

import { RecycleScroller } from 'vue-virtual-scroller'

import { playOutline, pauseOutline } from 'ionicons/icons'

import type { Station } from '@/interfaces/StationInterface';

import { presentAlert } from '@/scripts/alertMsg';
import { openToast } from '@/scripts/warning-message';

import StackToolbar from '@/components/main/StackToolbar.vue';
import StackInput from '@/components/main/StackInput.vue';
import StackButtons from '@/components/main/StackButtons.vue';

RecycleScroller

// 
const audio = new Audio()

// states
const country = ref('')
const stationsList = ref<Station[]>([])
const isPlaying = ref(false)
const radioName = ref('')

// methods
const getStations = async () => {
  if (!country.value) return openToast("this field is required", "warning");

  try {
    const { data } = await axios.get(`https://de1.api.radio-browser.info/json/stations/bycountry/${country.value}`)
    stationsList.value = data
  } catch (err) {
    presentAlert({
      header: 'Error for get stations',
      subHeader: 'req api',
      msg: (err as AxiosError).message,
    })
  }

  country.value = ''
}

const clearStation = () => {
  stationsList.value = []
}

const playRadio = (url: string, id: number) => {
  if (isPlaying.value) {
    audio.pause()
    audio.load()
  } else {
    isPlaying.value = true
  }

  audio.src = url
  radioName.value = stationsList.value[id].name
  audio.play()
}

const stopRadio = () => {
  audio.pause()
  audio.src = ''
  radioName.value = ''
  isPlaying.value = false
}
</script>

<template>
  <ion-page>
    <stack-toolbar />

    <ion-content>
      <stack-input input-type="text" label-txt="enter a country some countries using eng name" v-model="country" />
      <stack-buttons init-btn-name="get stations" :initValidate="false" @init-function="getStations"
        clear-btn-name="clear stations" :clearValidate="stationsList.length === 0" @clear-function="clearStation" />

      <ion-list class="scroller" inset lines="inset">
        <ion-item v-for="({ name, url, codec }, i) of stationsList">
          <ion-button fill="clear" color="secondary" slot="start" @click="playRadio(url, i)">
            <ion-icon :icon="playOutline" />
          </ion-button>
          <ion-label>{{ name }}</ion-label>
          
          <ion-badge color="secondary" slot="end">{{ codec }}</ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>

    <ion-footer v-if="isPlaying">
      <ion-item>
        <ion-button fill="clear" color="secondary" slot="start" @click="stopRadio">
          <ion-icon :icon="pauseOutline" />
        </ion-button>

        <ion-label>now playing: {{ radioName }}</ion-label>
      </ion-item>
    </ion-footer>
  </ion-page>
</template>

<style scoped>
.scroller {
  height: 83%;
  overflow-y: auto;
}
</style>