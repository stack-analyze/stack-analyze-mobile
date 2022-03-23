<template>
  <ion-app>
    <IonSplitPane content-id="main" disabled="true">
      <Menu menuId="main" />
      <ion-router-outlet id="main"></ion-router-outlet>
    </IonSplitPane>
  </ion-app>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import {
  IonApp,
  IonSplitPane,
  IonRouterOutlet,
  toastController,
} from "@ionic/vue";

import Menu from "@/components/Menu.vue";

onMounted(async () => {
  const toast = await toastController.create({
    message: "Capacitor version 3 plugins in some browsers work partially or are not incompatible at all.",
    duration: 2000,
  });
  toast.present();
});
</script>
