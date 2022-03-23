<template>
  <ion-header>
    <ion-toolbar color="tertiary">
      <ion-buttons slot="end">
        <ion-button @click="closeModal">
          <ion-icon :icon="closeCircleOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>mua info</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-card mode="ios">
      <ion-card-header mode="md">
        <ion-img
          src="assets/img/mua-discovery.jpg"
          alt="mua profile"
          class="profile-info"
        >
        </ion-img>
        <ion-card-title>la mua</ion-card-title>
        <ion-card-subtitle
          >make up artist and section mua discovery</ion-card-subtitle
        >
      </ion-card-header>
      <ion-card-content mode="md">
        <ion-button
          v-for="social of muaSocial"
          fill="clear"
          :key="social.color"
          :href="social.link"
          target="_blank"
          :color="social.color"
        >
          <ion-icon slot="icon-only" :icon="social.logo"></ion-icon>
        </ion-button>
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script setup lang="ts">
// ionic components
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonButton,
  modalController,
} from "@ionic/vue";

// icons
import { logoInstagram, logoTiktok, closeCircleOutline } from "ionicons/icons";

const muaSocial = [
  {
    logo: logoInstagram,
    color: "instagram",
    link: "https://www.instagram.com/lamuaofficial",
  },
  {
    logo: logoTiktok,
    color: "codepen",
    link: "https://www.tiktok.com/lamua_",
  },
];

function closeModal() {
  modalController.dismiss({ dismissed: true });
}
</script>
