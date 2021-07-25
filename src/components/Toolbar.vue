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

<script lang="ts">
import { defineComponent } from "vue";

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuButton,
  IonButtons,
  IonIcon,
} from "@ionic/vue";

import { settingsOutline } from "ionicons/icons";

export default defineComponent({
  name: "Toolbar",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenuButton,
    IonButtons,
    IonIcon,
  },
  setup() {
    return {
      settingsOutline,
    };
  },
});
</script>