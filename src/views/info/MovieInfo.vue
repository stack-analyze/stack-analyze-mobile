<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a movie:
        </ion-label>
        <ion-input
          v-model="movieTitle"
          :clearInput="true"
          autocomplete="off"
          required
        />
      </ion-item>
      
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button
              @click="movieSearch"
              color="secondary"
              fill="outline"
              expand="block"
            >
              start seach
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
              reset search
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <movie-card 
            v-for="movie of movies"
            :key="movie.id"
            :movieData="movie"
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
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

import { Movie } from "@/interfaces/MovieInterface";

// stack toolbar component
import StackToolbar from "@/components/Toolbar.vue";
import MovieCard from "@/components/MovieCard.vue";

import movieApi from "@/api/movieApi";

import presentAlert from "@/scripts/alertMsg";
import openToast from "@/scripts/warning-message";

const movieTitle = ref("");
const movies = ref<Movie[]>([]);

const resetStatus = computed(() => movies.value.length === 0);

const reset = () => {
  movies.value = []
};

const movieSearch = async (): Promise<void> => {
  if(!movieTitle.value) return openToast("this field is required", "warning");
  
  try {
    const { data } = await movieApi.get("/search/movie", {
      params: {
        api_key: import.meta.env.VITE_APP_MOVIE_CODE,
        query: movieTitle.value,
        page: 1,
      }
    });
    
    const results = data.results.sort((x: Movie, y: Movie) => {
      // date values
      const primaryDate = new Date(x.release_date);
      const secondaryDate = new Date(y.release_date);
      
      return primaryDate.getTime() - secondaryDate.getTime();
    });
    
    movies.value = results
  } catch(err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error movie info',
      subHeader: 'problem to req api'
    });
  }
  
  movieTitle.value = "";
};

</script>
