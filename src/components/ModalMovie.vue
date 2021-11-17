<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>movie info</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="closeModal" color="danger">
          <ion-icon :icon="closeCircleOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-card>
      <ion-card-header>
        <ion-img
          :src="movieResult.poster_path === null ? 'assets/img/No-image-found.jpg' : `http://image.tmdb.org/t/p/w500/${movieResult.poster_path}`"
          :alt="movieResult.title"
          class="poster"
        ></ion-img>
        <ion-card-title>{{ movieResult.title }}</ion-card-title>
        <ion-card-subtitle>
          release date: {{ movieResult.release_date }}
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <ion-item> {{ movieResult.overview }} </ion-item>
        <ion-item>
          <ion-label>
            vote average: {{ movieResult.vote_average }}
          </ion-label>
        </ion-item>
        <ion-item>
          vote count: {{ movieResult.vote_count }}
        </ion-item>
        <ion-item>language: {{ movieResult.original_language }}</ion-item>
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  modalController,
} from "@ionic/vue";

import { closeCircleOutline } from "ionicons/icons";

// scripts
import presentAlert from "@/ts/alertMsg";

export default defineComponent({
  name: "Modal",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonImg,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
  },
  props: {
    movieId: Number,
  },
  setup(props) {
    const movieResult = ref({});

    watchEffect(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${process.env.VUE_APP_MOVIE_CODE}`
        );

        const data = await res.json();
        movieResult.value = data
      } catch (err: any) {
        presentAlert(err, "Error movie Search", "problem to movie Search");
      }
    });

    function closeModal() {
      modalController.dismiss({
        dismissed: true,
      });
    }

    return {
      closeModal,
      closeCircleOutline,
      movieResult
    };
  },
});
</script>

<style scoped>
.poster {
  --height: 240px;
  --width: 225px;
}
</style>