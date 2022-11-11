<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary"> enter a bitly link: </ion-label>
        <ion-input type="url" v-model="bitlyURL" :clearInput="true" autocomplete="off">
        </ion-input>
      </ion-item>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button @click="bitlyInfo" :disabled="validateBitly" color="secondary" fill="outline" expand="block">
              analyze bitly url
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button @click="resetBitlyInfo" :disabled="isEmptyBitlyInfo" color="danger" fill="outline"
              expand="block">
              reset bitly info
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            {{ bitlyResults.link }}
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>
            {{ format(bitlyResults.created_at) }}
          </ion-card-subtitle>
          <ion-item>
            {{ bitlyResults.long_url }}
          </ion-item>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import axios, { AxiosError } from "axios";
import { format } from "timeago.js";

// ionic components
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
} from "@ionic/vue";

import { Bitly } from "@/interfaces/BitlyInterface";

// stack toolbar component
import StackToolbar from "@/components/Toolbar.vue";
import presentAlert from "@/scripts/alertMsg";

// regexp
const bitlyRegexp = /bit\.ly\//;

// states
const bitlyURL = ref("");
const bitlyResults = ref<Bitly>(({} as Bitly));

// compúted
const validateBitly = computed(() => !bitlyRegexp.test(bitlyURL.value));

const isEmptyBitlyInfo = computed(() => Object.keys(bitlyResults.value).length === 0);

// methods
const resetBitlyInfo = (): void => {
  bitlyResults.value = ({} as Bitly);
};

const bitlyInfo = async (): Promise<void> => {
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
