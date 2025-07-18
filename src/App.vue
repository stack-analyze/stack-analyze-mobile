<script setup lang="ts">
import {
  IonApp,
  IonSplitPane,
  IonRouterOutlet
} from "@ionic/vue";

import MenuStack from "@/components/MenuApp.vue";
</script>

<template>
  <ion-app>
    <ion-split-pane content-id="main" :disabled="true">
      <menu-stack menu-id="main" />
      <ion-router-outlet id="main" />
    </ion-split-pane>
  </ion-app>
</template>
