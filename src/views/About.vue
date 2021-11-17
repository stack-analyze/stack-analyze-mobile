<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <swiper
        effect="fade"
        slides-per-view="4"
        :loop="true"
        
      >
        <swiper-slide v-for="card of Cards" :key="card.id">
          <ion-card mode="ios" color="light">
            <ion-card-header mode="md">
              <ion-img :src="card.img" :alt="card.id"></ion-img>
              <ion-card-subtitle>{{ card.details }}</ion-card-subtitle>
              <ion-card-title>{{ card.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content mode="md">
              <ion-button
                v-for="social of card.social"
                :key="social.color"
                fill="clear"
                :href="social.link"
                target="_blank"
                :color="social.color"
              >
                <ion-icon slot="icon-only" :icon="social.logo"></ion-icon>
              </ion-button>
            </ion-card-content>
          </ion-card>
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import SwipperCore, { EffectFade } from 'swiper';

import { Cards } from "@/ts/data";

import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonButton,
  IonicSwiper
} from "@ionic/vue";

import Toolbar from "@/components/Toolbar.vue";

import "swiper/swiper-bundle.min.css";
import "@ionic/vue/css/ionic-swiper.css";

SwipperCore.use([IonicSwiper, EffectFade]);

export default defineComponent({
  name: "TechStack",
  components: {
    Toolbar,
    Swiper,
    SwiperSlide,
    IonContent,
    IonPage,
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
      Cards,
    };
  },
});
</script>