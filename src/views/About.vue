<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <swiper
        effect="fade"
        slides-per-view="4"
        :loop="true"
        :modules="modules"
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

<script setup lang="ts">
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
  IonicSlides
} from "@ionic/vue";

import { EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/vue";

import Toolbar from "@/components/Toolbar.vue";

import { Cards } from "@/ts/data";

import 'swiper/css';
import 'swiper/css/effect-fade';
import '@ionic/vue/css/ionic-swiper.css';

const modules = [EffectFade, IonicSlides];
</script>