<script setup lang="ts">
import { ref, computed } from 'vue'
import axios, { AxiosError } from 'axios'
import { presentAlert } from '@/scripts/alertMsg'
import { format } from 'timeago.js'

import { Bitly } from '@/interfaces/BitlyInterface'

import {
  IonPage, IonContent, IonGrid, IonItem,
  IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle,
} from '@ionic/vue'
import StackToolbar from '@/components/main/StackToolbar.vue'
import StackInput from '@/components/main/StackInput.vue'
import StackButtons from '@/components/main/StackButtons.vue'


// regexp
const bitlyRegexp = /bit\.ly\//;

// states
const bitlyURL = ref("");
const bitlyResults = ref<Partial<Bitly>>({});

// compúted
const validateBitly = computed(() => !bitlyRegexp.test(bitlyURL.value));

const isEmptyBitlyInfo = computed(
  () => Object.keys(bitlyResults.value).length === 0
);

// methods
const resetBitlyInfo = () => {
  bitlyResults.value = {};
};

const getBitlyInfo = async () => {
  try {
    const { data } = await axios.post(
      "https://api-ssl.bitly.com/v4/expand",
      { bitlink_id: bitlyURL.value },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_BITLY_CODE}`,
          "Content-Type": "application/json",
        },
      }
    );

    bitlyResults.value = data;
  } catch (err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: "error info",
      subHeader: "problem bitly info",
    });
  }

  bitlyURL.value = "";
};

</script>

<template>
  <ion-page>
    <stack-toolbar />
    
    <ion-content>
      <stack-input 
        v-model="bitlyURL" 
        label-txt="enter a bitly link:" 
        input-type="url" 
      />

      <ion-grid>
        <stack-buttons
          init-btn-name="start bitly info"
          :init-validate="validateBitly"
          @init-function="getBitlyInfo"
          clear-btn-name="clear bitly info"
          :clear-validate="isEmptyBitlyInfo"
          @clear-function="resetBitlyInfo"
        />
      </ion-grid>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
           short url: {{ bitlyResults.link || 'no bitly link' }}
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>
            created at: {{ format(bitlyResults.created_at || 0) }}
          </ion-card-subtitle>
          <ion-item>
            long url: {{ bitlyResults.long_url || 'no long url' }}
          </ion-item>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
