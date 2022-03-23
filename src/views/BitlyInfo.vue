<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a url:
        </ion-label>
        <ion-input
          type="url"
          v-model="bitlyURL"
          clearInput="true"
          autocomplete="off"
          required
        >
        </ion-input>
      </ion-item>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button
              @click="bitly"
              :disabled="validate"
              color="secondary"
              fill="outline"
              expand="block"
            >
              analyze bitly url
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button
              @click="reset"
              :disabled="resetInfo"
              color="danger"
              fill="outline"
              expand="block"
            >
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
import { computed, ref } from "vue";

import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

import axios from "axios";
import { format } from "timeago.js";

import Toolbar from "@/components/Toolbar.vue";

import presentAlert from "@/ts/alertMsg";
import { whoisRegex } from "@/ts/data";

const bitlyURL = ref("");
const bitlyResults = ref({});

const reset = () => {
  bitlyResults.value = {};
};

const validate = computed(() =>
  bitlyURL.value.match(whoisRegex) ? false : true
);

const resetInfo = computed(() =>
  Object.entries(bitlyResults.value).length === 0 ? true : false
);

const bitly = async () => {
  try {
    const { data } = await axios.post(
      "https://api-ssl.bitly.com/v4/expand",
      { bitlink_id: bitlyURL.value },
      {
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_BITLY_CODE}`,
          "Content-Type": "application/json",
        },
      }
    );

    bitlyResults.value = data;
  } catch (err: any) {
    presentAlert(err, "error info", "problem bitly info");
  }

  bitlyURL.value = "";
};
</script>
