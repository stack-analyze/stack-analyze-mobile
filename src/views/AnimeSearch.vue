<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a anime to search:
        </ion-label>
        <ion-input
          v-model="anime"
          clearInput="true"
          autocomplete="off"
          required
          @keyup.enter="animeSearch"
        />
      </ion-item>
      <ion-button @click="reset" color="danger" expand="full" fill="outline">
        reset anime search
      </ion-button>
      <ion-grid fixed>
        <ion-row>
          <ion-col
            v-for="(anime, i) of animeResults"
            :key="i"
            size-lg="3"
            size-md="4"
            size-sm="6"
            size-xs="12"
          >
            <ion-card>
              <ion-card-header>
                <ion-img
                  :src="anime.image_url"
                  :alt="anime.title"
                  class="poster"
                />
              </ion-card-header>
              <ion-card-content>
                <ion-card-title class="ion-text-sm">
                  <ion-label>{{ anime.title }}</ion-label>
                </ion-card-title>
                <ion-button @click="openModal(anime.mal_id)"
                  >open anime info</ion-button
                >
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import axios from "axios";

import Toolbar from "@/components/Toolbar.vue";
import Modal from "@/components/Modal.vue";

// script
import presentAlert from "@/ts/alertMsg";

import {
  IonPage,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  modalController,
} from "@ionic/vue";

export default defineComponent({
  components: {
    Toolbar,
    IonPage,
    IonContent,
    IonImg,
    IonItem,
    IonLabel,
    IonInput,
    IonCol,
    IonGrid,
    IonRow,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonButton,
  },
  name: "anime",
  setup() {
    const anime = ref("");
    const animeResults = ref({});

    const animeSearch = async () => {
      try {
        const res = await axios.get("https://api.jikan.moe/v3/search/anime", {
          params: {
            q: anime.value,
          },
        });
        animeResults.value = res.data.results;
      } catch (err) {
        presentAlert(
          err.message,
          "Error anime Search",
          "problem to anime Search"
        );
      }
      anime.value = "";
    };

    const reset = () => (animeResults.value = {});

    const openModal = async (id: number) => {
      const modal = await modalController.create({
        component: Modal,
        componentProps: {
          animeId: id,
        },
        backdropDismiss: false,
        cssClass: "my-custom-class",
        mode: "ios",
      });

      return modal.present();
    };

    return {
      anime,
      animeResults,
      animeSearch,
      reset,
      openModal,
    };
  },
});
</script>

<style scoped>
.poster {
  --height: 334px;
  --width: 225px;
}

.my-custom-class {
  --width: 225px;
}
</style>
