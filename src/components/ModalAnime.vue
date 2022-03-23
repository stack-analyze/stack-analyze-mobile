<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>anime info</ion-title>
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
          :src="animeResult.image_url"
          :alt="animeResult.mal_id"
          class="poster"
        ></ion-img>
        <ion-card-title>{{ animeResult.title }}</ion-card-title>
        <ion-card-subtitle>
          airing: {{ !animeResult.airing ? "finish" : "current" }}
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <ion-item> rating: {{ animeResult.rating }} </ion-item>
        <ion-item>
          <ion-label>
            episodes:
            {{
              animeResult.episodes === null ? "counting " : animeResult.episodes
            }}
          </ion-label>
        </ion-item>
        <ion-item>
          <details>
            <summary>synopsis</summary>
            {{ animeResult.synopsis }}
          </details>
        </ion-item>
        <ion-item> aired duration: {{ duration }} </ion-item>
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

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

const props = defineProps({ animeId: Number });

const animeResult = ref({});
const duration = ref("");

watchEffect(async () => {
  try {
    const res = await fetch(`https://api.jikan.moe/v3/anime/${props.animeId}`);

    const data = await res.json();

    animeResult.value = data;
    duration.value = data.aired.string;
  } catch (err: any) {
    presentAlert(err, "Error anime Search", "problem to anime Search");
  }
});

function closeModal() {
  modalController.dismiss({
    dismissed: true,
  });
}
</script>

<style scoped>
.poster {
  --height: 334px;
  --width: 225px;
}
</style>