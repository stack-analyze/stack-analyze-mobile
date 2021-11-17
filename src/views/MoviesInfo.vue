<template>
  <ion-page>
    <ion-content>
      <Toolbar />

      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a movie:
        </ion-label>
        <ion-input
          v-model="movieTitle"
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
      </ion-grid>
      <movie-list :movieData="movies" :api="movieKey"></movie-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

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

import axios from "axios";

import Toolbar from "@/components/Toolbar.vue";
import MovieList from "@/components/MovieList.vue";

import presentAlert from "@/ts/alertMsg";
import openToast from "@/ts/warning-message";

export default defineComponent({
  name: "MovieInfo",
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    Toolbar,
    MovieList,
  },
  setup() {
    const movieTitle = ref("");
    const movies = ref([]);
    
    const resetStatus = computed(() => (movies.value[0] === undefined ? true : false));

    const movieSearch = async (): Promise<void> => {
      try {
        if (movieTitle.value !== "") {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              api_key: process.env.VUE_APP_MOVIE_CODE,
              query: movieTitle.value,
              page: 1,
            },
          }
        );

        movies.value = data.results
          .sort((x: any, y: any): any => {
            // date values
            const primaryDate = new Date(x.release_date);
            const secondaryDate = new Date(y.release_date);

            return primaryDate.getTime() - secondaryDate.getTime();
          })
          .filter(
            ({ release_date }: any)  =>
              release_date !== undefined && release_date !== ""
          );
          } else {
            openToast();
          }
      } catch (err: any) {
        presentAlert(err, "Error movie Search", "problem to movie Search");
      }

      movieTitle.value = "";
    };
    
    const reset = () => (movies.value = []);

    return {
      movieTitle,
      movies,
      movieSearch,
      reset,
      resetStatus
    };
  },
});
</script>
