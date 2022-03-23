<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <ion-item button @click="openMuaInfo">
        <ion-icon slot="start" color="secondary" :icon="libraryOutline"></ion-icon>
        <ion-label>Mua discovery</ion-label>
      </ion-item>
      <ion-accordion-group value="lists" ref="accordionGroup">
    
    <ion-accordion value="Youtube">
      <ion-item slot="header">
        <ion-label>Youtube</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item
          v-for="(youtube, i) of youtubeList" 
          :key="i"
          slot="start"
          :href="youtube.link"
          @click="closeAccordion()"
          target="_blank"
        >
          <ion-icon 
            :color="youtube.color" 
            slot="start" 
            :icon="youtube.logo"
          ></ion-icon>
          <ion-label :color="youtube.color">{{youtube.name}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
    
    <ion-accordion value="web">
      <ion-item slot="header">
        <ion-label>web</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item
          v-for="(web, i) of webList" 
          :key="i"
          slot="start"
          :href="web.link"
          @click="closeAccordion()"
          target="_blank"
        >
          <ion-icon 
            :color="web.color" 
            slot="start" 
            :icon="web.logo"
          ></ion-icon>
          <ion-label :color="web.color">{{web.name}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
    
    <ion-accordion value="Instagram">
      <ion-item slot="header">
        <ion-label>Instagram</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item
          v-for="(instagram, i) of igList" 
          :key="i"
          slot="start"
          :href="instagram.link"
          @click="closeAccordion()"
          target="_blank"
        >
          <ion-icon 
            :color="instagram.color" 
            slot="start" 
            :icon="instagram.logo"
          ></ion-icon>
          <ion-label :color="instagram.color">{{instagram.name}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
    
    <ion-accordion value="Twitch">
      <ion-item slot="header">
        <ion-label>Twitch</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item
          v-for="(twitch, i) of twitchList" 
          :key="i"
          slot="start"
          :href="twitch.link"
          @click="closeAccordion()"
          target="_blank"
        >
          <ion-icon 
            :color="twitch.color" 
            slot="start" 
            :icon="twitch.logo"
          ></ion-icon>
          <ion-label :color="twitch.color">{{twitch.name}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
  </ion-accordion-group>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

import {
  IonPage,
  IonContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonAccordionGroup,
  IonAccordion,
  modalController
} from "@ionic/vue";

import { libraryOutline } from "ionicons/icons";

import Toolbar from "@/components/Toolbar.vue";
import MuaInfo from "@/components/MuaEaster.vue";

import { recomendations } from "@/ts/data";

const accordionGroup = ref();

const closeAccordion = () => {
  if (accordionGroup.value) {
    accordionGroup.value.$el.value = undefined;
  }
}

const openMuaInfo = async () => {
  const modal = await modalController.create({
    component: MuaInfo,
    backdropDismiss: false,
    mode: "ios",
    cssClass: "modal",
  });

  return modal.present();
};

const youtubeList = recomendations.filter((item) => item.color === 'youtube');
const webList = recomendations.filter((item) => item.color === 'primary');
const igList = recomendations.filter((item) => item.color === 'instagram');
const twitchList = recomendations.filter((item) => item.color === 'twitch');
</script>

<style scoped>
.modal {
  --height: 100%;
}
</style>
