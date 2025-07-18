<script setup lang="ts">
import { ref } from 'vue';
import {
  IonCol, IonImg, IonButton, IonModal,
  IonCard, IonCardHeader, IonCardContent, IonCardTitle,
} from '@ionic/vue'

import { Anime } from '@/interfaces/AnimeInterface';

import ModalAnime from '../modals/ModalAnime.vue'

const { animeData } = defineProps<{ animeData: Anime }>();

const emit = defineEmits<{
  openModal: [ data: Anime ]
}>()

const isOpen = ref(false)

const toggleModal = (modalOpen: boolean) => {
 isOpen.value = modalOpen;
};

const fallbackImg = (e: Event) => {
  (e.target as HTMLImageElement).src = "/assets/img/No-image-found.jpg"
}
</script>

<template>
  <ion-col>
    <ion-card>
      <ion-card-header>
        <ion-img
          :src="animeData.images.webp.image_url"
          :alt="animeData.title"
          class="poster"
          @ion-error="fallbackImg"
        />
      </ion-card-header>
      <ion-card-content>
        <ion-card-title class="ion-text-sm">
          {{ animeData.title }}
        </ion-card-title>
        <ion-button 
        	expand="block" 
        	color="secondary" 
        	@click="toggleModal(true)"
        >
          show info
        </ion-button>
      </ion-card-content>
    </ion-card>
    
    <ion-modal
    	mode="ios"
    	class="modal-anime"
      :is-open="isOpen"
      :backdrop-dismiss="false"
    >
      <modal-anime 
      	:animeID="animeData.mal_id" 
      	@close-modal="toggleModal(false)"
      />
    </ion-modal>
  </ion-col>
</template>

<style>
.poster {
  --height: 334px;
  --width: 225px;
}

.modal-anime {
  --width: 90%;
  --height: 95%;
}
</style>
