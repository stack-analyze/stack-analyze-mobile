<script setup lang="ts">
import { ref } from 'vue';

import {
  IonCol, IonImg, IonButton, IonModal,
  IonCard, IonCardHeader, IonCardContent, IonCardTitle,
} from '@ionic/vue'

import { type Movie } from '@/interfaces/MovieInterface';
import ModalMovie from '../modals/ModalMovie.vue'

const { movieData } = defineProps<{
  movieData: Movie
}>();

const isOpen = ref(false)

const toggleModal = (modalOpen: boolean) => {
  isOpen.value = modalOpen;
};

const poster = movieData?.poster_path
  ? `http://image.tmdb.org/t/p/w500/${movieData.poster_path}`
  : "assets/img/No-image-found.jpg"
</script>

<template>
  <ion-col>
    <ion-card>
      <ion-card-header>
        <ion-img :src="poster" :alt="movieData.title" />
      </ion-card-header>
      <ion-card-content>
        <ion-card-title>{{ movieData.title }}</ion-card-title>
        <ion-button @click="toggleModal(true)">
          show info
        </ion-button>
      </ion-card-content>
    </ion-card>

    <ion-modal 
      mode="ios" 
      class="modal-movie" 
      :is-open="isOpen" 
      :backdrop-dismiss="false"
    >
      <modal-movie 
        :movieId="movieData.id" @close-modal="toggleModal(false)" 
      />
    </ion-modal>
  </ion-col>
</template>

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
