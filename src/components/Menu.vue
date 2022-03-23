<template>
  <ion-menu :contentId="menuId" side="start" type="overlay">
    <ion-header>
      <ion-toolbar class="toolbar ion-text-center">
        <ion-avatar class="horizontal logo">
          <ion-img src="/assets/img/logo-mobile.png" alt="icon logo"></ion-img>
        </ion-avatar>
        <ion-title>stack-analyze</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item-group>
        <ion-item-divider>
          <ion-label>tools</ion-label>
        </ion-item-divider>

        <ion-menu-toggle auto-hide="false">
          <ion-item button @click="openChangelog">
            <ion-icon slot="start" color="secondary" :icon="libraryOutline">
            </ion-icon>
            <ion-label>Changelog</ion-label>
          </ion-item>
        </ion-menu-toggle>

        <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
          <ion-item button router-direction="root" :router-link="p.url">
            <ion-icon slot="start" :icon="p.icon" color="secondary"></ion-icon>
            <ion-label>{{ p.title }}</ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-item-group>
    </ion-content>
  </ion-menu>
</template>
<script setup lang="ts">
import appPages from "@/ts/appPages";

import {
  IonMenu,
  IonMenuToggle,
  IonItemGroup,
  IonItemDivider,
  IonToolbar,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
  modalController,
} from "@ionic/vue";

import { libraryOutline } from "ionicons/icons";

import ChangelogVue from "./Changelog.vue";

interface props {
  menuId: string
}

defineProps<props>();

const openChangelog = async () => {
  const modal = await modalController.create({
    component: ChangelogVue,
    backdropDismiss: false,
    mode: "ios",
    cssClass: "modal",
  });

  return modal.present();
};
</script>

<style>
.horizontal {
  margin: auto;
}

.toolbar {
  --padding-bottom: 20px;
  --background: linear-gradient(to right, #0575e6, #021b79);
  --color: #fff;
  border: 3px solid var(--ion-color-secondary);
  border-radius: 70px 0;
}

.logo {
  margin-top: 6%;
}

.modal {
  --height: 100%;
}
</style>
