<template>
  <ion-header>
    <ion-toolbar color="secondary">
      <ion-title color="light">{{ $route.name }}</ion-title>
      <ion-buttons slot="start">
        <ion-menu-button color="light">
          <ion-icon :icon="settingsOutline"></ion-icon>
        </ion-menu-button>
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
  IonIcon,
} from "@ionic/vue";

import { settingsOutline } from "ionicons/icons";
</script>