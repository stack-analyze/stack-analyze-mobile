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
  IonRouterOutlet
} from "@ionic/vue";

import Menu from "@/components/Menu.vue";
</script>
