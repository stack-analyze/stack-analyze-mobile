<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a anime to search:
        </ion-label>
        <ion-input
          v-model="anime"
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
              @click="animeSearch"
              color="secondary"
              fill="outline"
              expand="block"
            >
              start-analyze
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button
              @click="reset"
              :disabled="resetStatus"
              color="danger"
              fill="outline"
              expand="block"
            >
              reset tech-stack
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <anime-results :animeData="animeData"></anime-results>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import axios from "axios";

import Toolbar from "@/components/Toolbar.vue";
import animeResults from "@/components/animeInfo.vue";

// script
import presentAlert from "@/ts/alertMsg";
import openToast from "@/ts/warning-message";

import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonCol,
  IonGrid,
  IonRow,
  IonButton,
} from "@ionic/vue";

const anime = ref("");
const animeData = ref([]);

const animeSearch = async () => {
  if (anime.value === "") {
    openToast();
  } else {
    try {
      const res = await axios.get("https://api.jikan.moe/v3/search/anime", {
        params: {
          q: anime.value,
        },
      });
      animeData.value = res.data.results;
    } catch (err: any) {
      presentAlert(err, "Error anime Search", "problem to anime Search");
    }
    anime.value = "";
  }
};

const resetStatus = computed(() =>
  animeData.value[0] === undefined ? true : false
);

const reset = () => (animeData.value = []);
</script>
