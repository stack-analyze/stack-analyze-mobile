<script setup lang="ts">
import { ref, computed } from 'vue';
import { AxiosError } from 'axios';

import {
  IonPage, IonContent, IonGrid, IonRow
} from '@ionic/vue'

import { type Movie } from '@/interfaces/MovieInterface';
import { presentAlert } from '@/scripts/alertMsg';
import { openToast } from '@/scripts/warning-message';
import movieApi from '@/api/movieApi';

import StackToolbar from '@/components/main/StackToolbar.vue';
import StackInput from '@/components/main/StackInput.vue';
import StackButtons from '@/components/main/StackButtons.vue';
import MovieCard from '@/components/cards/MovieCard.vue';

// states
const movieTitle = ref("");
const movies = ref<Movie[]>([]);

// computers
const isEmptyMovies = computed(() => movies.value.length === 0);

// methods
const clearMovies = () => {
  movies.value = []
};

const getMovies = async () => {
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

<template>
  <ion-page>
    <stack-toolbar />
    
    <ion-content>
      <stack-input 
        v-model="movieTitle" 
        label-txt="enter a movie:" 
        input-type="text" 
      />
      
      <stack-buttons
        init-btn-name="get movie list"
        clear-btn-name="clear movie list"
        :init-validate="false"
        :clear-validate="isEmptyMovies"
        @init-function="getMovies"
        @clear-function="clearMovies"
      />
      
      <ion-grid>
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

<style scoped>
ion-grid {
 columns: 4 320px;
}
</style>
