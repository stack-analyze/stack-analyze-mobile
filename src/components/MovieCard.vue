<template>
  <ion-col
    size-lg="3"
    size-md="4"
    size-sm="6"
    size="12"
  >
    <ion-card>
      <ion-card-header>
        <ion-img
          :src="poster"
          :alt="movieData.title"
        />
      </ion-card-header>
      <ion-card-content>
        <ion-card-title>{{ movieData.title }}</ion-card-title>
        <ion-button @click="openModal(movieData.id)">show info</ion-button>
      </ion-card-content>
    </ion-card>
  </ion-col>
</template>

<script setup lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonImg,
  IonButton,
  modalController,
} from "@ionic/vue";

import { Movie } from "@/interfaces/MovieInterface";

import Modal from "@/components/ModalMovie.vue";

const { movieData } = defineProps<{
  movieData: Movie
}>();

const openModal = async (id: number) => {
  const modal = await modalController.create({
    component: Modal,
    componentProps: {
      movieId: id,
    },
    backdropDismiss: false,
    cssClass: "modal-movie",
    mode: "ios",
  });

  return modal.present();
};

const poster = movieData?.poster_path 
  ? `http://image.tmdb.org/t/p/w500/${movieData.poster_path}`
  : "assets/img/No-image-found.jpg"

</script>

<style>
.poster {
  --height: 334px;
  --width: 225px;
}

.modal-movie {
  --width: 90%;
  --height: 95%;
}
</style>