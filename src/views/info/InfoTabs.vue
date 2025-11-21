<script setup lang="ts">
import {
  IonPage, IonTabs, IonTabBar, IonTabButton, 
  IonIcon, IonLabel, IonRouterOutlet
} from '@ionic/vue'
import { infoToolsPages } from '@/scripts/appPages'
import { ssrContextKey } from 'vue';

</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button 
          v-for="page of infoToolsPages"
          :key="page.title"
          :tab="page.title" 
          :href="page.url"
        >
          <ion-icon :icon="page.icon" :src="page.src" />
          <ion-label>{{ page.title }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
