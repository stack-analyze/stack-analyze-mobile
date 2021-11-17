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
      <anime-results :animeData="animeResults"></anime-results>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import axios from "axios";

import Toolbar from "@/components/Toolbar.vue";
import animeResults from "@/components/animeInfo.vue"

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

export default defineComponent({
  components: {
    Toolbar,
    animeResults,
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonCol,
    IonGrid,
    IonRow,
    IonButton,
  },
  name: "anime",
  setup() {
    const anime = ref("");
    const animeResults = ref([]);

    const animeSearch = async () => {
      if (anime.value === '') {
        openToast()
      } else {
        try {
        const res = await axios.get("https://api.jikan.moe/v3/search/anime", {
          params: {
            q: anime.value,
          },
        });
        animeResults.value = res.data.results;
      } catch (err: any) {
        presentAlert(
          err,
          "Error anime Search",
          "problem to anime Search"
        );
      }
      anime.value = "";
      }
    };
    
    const resetStatus = computed(() => (animeResults.value[0] === undefined ? true : false));

    const reset = () => (animeResults.value = []);

    return {
      anime,
      animeResults,
      animeSearch,
      reset,
      resetStatus
    };
  },
});
</script>
