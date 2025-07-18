<script setup lang="ts">
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonMenuButton, IonIcon } from '@ionic/vue'
import {settingsOutline} from 'ionicons/icons'
</script>

<template>
  <ion-header>
    <ion-toolbar color="secondary">
      <ion-title color="light">{{ $route.name }}</ion-title>
      <ion-buttons slot="start">
        <ion-menu-button color="light">
          <ion-icon :icon="settingsOutline" />
        </ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>
