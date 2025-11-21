<script setup lang="ts">
import { ref, computed } from 'vue';
import { AxiosError } from 'axios';

import {
  IonPage, IonContent, IonGrid, IonRow,
} from '@ionic/vue';

import animeApi from '@/api/animeApi';
import { type Anime } from '@/interfaces/AnimeInterface';
import { presentAlert } from '@/scripts/alertMsg';
import { openToast } from '@/scripts/warning-message';

import StackToolbar from '@/components/main/StackToolbar.vue';
import StackInput from '@/components/main/StackInput.vue';
import StackButtons from '@/components/main/StackButtons.vue';
import animeCard from '@/components/cards/animeCard.vue';

// states
const query = ref("");
const animeData = ref<Anime[]>([]);

const isEmptyResults = computed(() => animeData.value.length === 0);

const getAnimeSearch = async (): Promise<void> => {
  if(!query.value) {
    return openToast("this field is required", "warning");
  }
  
  try {
    const { data: animeSchema } = await animeApi.get("/anime", {
      params: { q: query.value }
    });
    
    animeData.value = animeSchema.data;
  } catch(err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error anime search',
      subHeader: 'problem to req api'
    });
  }
  
  query.value = "";
};

const clearAnimeSearch = () => {
  animeData.value = [];
};
</script>

<template>
  <ion-page>
    <stack-toolbar />
    
    <ion-content>
      <stack-input 
        v-model="query" 
        label-txt="enter a anime to search:" 
        input-type="text" 
      />
      
      <stack-buttons
        init-btn-name="get animes"
        clear-btn-name="clear animes"
        :init-validate="false"
        :clear-validate="isEmptyResults"
        @init-function="getAnimeSearch"
        @clear-function="clearAnimeSearch"
      />
      
      <ion-grid>
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

<style scoped>
ion-grid {
 columns: 4 320px;
}
</style>
