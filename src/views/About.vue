<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <ion-slides :options="slideOpts">
        <ion-slide v-for="card of Cards" :key="card.id">
          <ion-card mode="ios" color="light">
            <ion-card-header mode="md">
              <ion-img :src="card.img" :alt="card.id" />
              <ion-card-subtitle>{{ card.details }}</ion-card-subtitle>
              <ion-card-title>{{ card.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content mode="md">
              <ion-button 
              v-for="social of card.social" :key="social.color"
              fill="clear"
              :href="social.link"
              target="_blank"
              :color="social.color"
              >
                <ion-icon slot="icon-only" :icon="social.logo"/>
              </ion-button>
            </ion-card-content>
          </ion-card>
        </ion-slide>
      </ion-slides>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { slideOpts, Cards } from '@/ts/data';

import {
  IonPage,
  IonContent,
  IonSlides,
  IonSlide,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonButton,
} from "@ionic/vue";

import Toolbar from "@/components/Toolbar.vue";

export default {
  name: "TechStack",
  components: {
    Toolbar,
    IonContent,
    IonPage,
    IonSlides,
    IonSlide,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
    IonButton,
  },
  setup() {
    return {
      slideOpts,
      Cards,
    };
  },
};
</script>