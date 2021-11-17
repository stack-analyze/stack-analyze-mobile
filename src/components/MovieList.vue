<template>
  <ion-grid>
    <ion-row>
      <ion-col
        v-for="movie of movieData"
        :key="movie.id"
        size-xl="3"
        size-lg="3"
        size-md="4"
        size-sm="4"
        size="12"
      >
        <ion-card>
          <ion-card-header>
            <ion-img
              :src="movie.poster_path === null ? 'assets/img/No-image-found.jpg' : `http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              :alt="movie.title"
            ></ion-img>
          </ion-card-header>
          <ion-card-content>
            <ion-card-title>
              {{ movie.title }}
            </ion-card-title>
            <ion-button @click="openModal(movie.id)"> show info </ion-button>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
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
import { defineComponent } from "vue";

import Modal from "@/components/ModalMovie.vue";

export default defineComponent({
  name: "MovieList",
  props: { 
    movieData: Array,
  },
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonImg,
    IonButton,
  },
  setup() {
        const openModal = async (id: number) => {
            const modal = await modalController.create({
                component: Modal,
                componentProps: {
                    movieId: id,
                },
                backdropDismiss: false,
                cssClass: "my-custom-class",
                mode: "ios",
            });

            return modal.present();
        }

        return {
            openModal
        }; 
    }
});
</script>

<style scoped>
.poster {
    --height: 334px;
    --width: 225px;
}

.my-custom-class {
    --width: 225px;
    --max-height: 100%;
}
</style>