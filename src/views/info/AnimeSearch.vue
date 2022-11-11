<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a anime to search:
        </ion-label>
        <ion-input
          v-model="anime"
          :clear-input="true"
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
        <ion-row>
          <anime-card 
            v-for="anime of animeData" 
            :key="anime.mal_id"
            :animeData="anime" 
          />
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import { AxiosError } from "axios";

// ionic components
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

import { Anime } from "@/interfaces/AnimeInterface";

// vue components
import StackToolbar from "@/components/Toolbar.vue";
import animeCard from "@/components/animeCard.vue";

// script
import animeApi from "@/api/animeApi";
import presentAlert from "@/scripts/alertMsg";
import openToast from "@/scripts/warning-message";

const anime = ref("");
const animeData = ref<Anime[]>([]);

const animeSearch = async (): Promise<void> => {
  if(!anime.value) return openToast("this field is required", "warning");
  
  try {
    const { data: animeSchema } = await animeApi.get("/anime", {
      params: { q: anime.value }
    });
    
    animeData.value = animeSchema.data;
  } catch(err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error github user info',
      subHeader: 'problem to req api'
    });
  }
  
  anime.value = "";
};

const resetStatus = computed(() => animeData.value.length === 0);

const reset = () => {
  animeData.value = []
};
</script>
