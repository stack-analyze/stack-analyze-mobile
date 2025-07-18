<script setup lang="ts">
import {
  IonPage, IonRouterOutlet, IonIcon, IonLabel,
  IonTabs, IonTabBar, IonTabButton,
} from '@ionic/vue';
import { webToolsPages } from '@/scripts/appPages';
</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button 
          v-for="page of webToolsPages"
          :key="page.title"
          :tab="page.title" 
          :href="page.url"
        >
          <ion-icon :icon="page.icon" />
          <ion-label>{{ page.title }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
