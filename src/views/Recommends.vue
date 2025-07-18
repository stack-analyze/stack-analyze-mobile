<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';

import {
  IonPage, IonContent, IonAccordionGroup, IonAccordion,
  IonItem, IonLabel, IonList, IonIcon
} from '@ionic/vue';

import { recomendations } from '@/scripts/data';

const accordionGroup = useTemplateRef('accordionGroup');
const isOpen = ref(false)

const closeAccordion = () => {
  if (accordionGroup.value) {
    accordionGroup.value.$el.value = undefined;
  }
}

const youtubeList = recomendations.filter(
  (item) => item.color === 'youtube'
);

const webList = recomendations.filter(
	(item) => item.color === 'primary'
);

const igList = recomendations.filter(
	(item) => item.color === 'instagram'
);

const twitchList = recomendations.filter(
	(item) => item.color === 'twitch'
);
</script>

<template>
  <ion-page>
    <stack-toolbar />
    
    <ion-content>
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
          		/>
          
          		<ion-label :color="youtube.color">
          			{{youtube.name}}
          		</ion-label>
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
          		/>
          	
          		<ion-label :color="instagram.color">
          			{{instagram.name}}
          		</ion-label>
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
          		/>
          
          		<ion-label :color="twitch.color">
            		{{twitch.name}}
          		</ion-label>
        		</ion-item>
      		</ion-list>
    		</ion-accordion>
  		</ion-accordion-group>
    </ion-content>
  </ion-page>
</template>
