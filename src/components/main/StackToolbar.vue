<template>
  <ion-header>
    <ion-toolbar color="secondary">
      <ion-title color="light">{{ $route.name }}</ion-title>
      <ion-buttons slot="start">
        <ion-menu-button color="light">
          <ion-icon :icon="settingsOutline" />
        </ion-menu-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button color="light" @click="changeTheme">
          <ion-icon :icon="iconTheme" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuButton,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/vue";

import { settingsOutline, sunny, moon } from "ionicons/icons";

const iconTheme = ref(
  document.body.classList.contains('dark')  ? moon : sunny
);

const changeTheme = () => {
  /* localStorage.theme = document.body.classList.contains('dark') 
  ? 'light' 
  : 'dark' */
  
  if(document.body.classList.contains('dark')) {
    localStorage.theme = 'light';
    iconTheme.value = sunny;
  } else {
    localStorage.theme = 'dark';
    iconTheme.value = moon;
  }

  document.body.classList.toggle('dark');
};
</script>