<script setup lang="ts">
import { ref, computed, useTemplateRef } from 'vue';

import {
  IonPage, IonContent, IonButton, IonIcon,
  IonRange, IonText, IonItem, IonLabel,
  IonModal
} from '@ionic/vue'
import { 
  playOutline, stopOutline, volumeMuteOutline, volumeHighOutline,
  libraryOutline
} from 'ionicons/icons'

import StackToolbar from '@/components/main/StackToolbar.vue';
import Changelog from '@/components/modals/Changelog.vue';

const radio = useTemplateRef<HTMLAudioElement>('radio');

const radioVolume = ref(0.5);
const radioStatusPlaying = ref(false);
const radioCurrentTime = ref('00:00');
const isOpen = ref(false);

const radioStatusIcon = computed(
  () => radioStatusPlaying.value ? stopOutline : playOutline
);

const togglePlayer = () => {
  if(radio.value?.paused) {
  	radio.value?.play();
    radioStatusPlaying.value = true;
  } else {
    radio.value?.pause();
    radio.value?.load();
    radioStatusPlaying.value = false;
  }
};

const radioTime = (time: number): string => {
  const roundTime = Math.round(time);

  let min = Math.floor(roundTime / 60);

  let sec = roundTime % 60;

  const minMusic = min > 9 ? min : `0${min}`;
  const secMusic = sec > 9 ? sec : `0${sec}`;

  return `${minMusic}:${secMusic}`;
};

const setOpen = (modalOpen: boolean) => {
  isOpen.value = modalOpen;
};

const radioUpdateTime = () => {
  radioCurrentTime.value = radioTime(radio.value?.currentTime ?? 0);
};
</script>

<template>
  <ion-page>
    <stack-toolbar />
  
    <ion-content>
      <ion-item>
        <audio 
        src="http://stream.zeno.fm/27tm26cv8bhvv" 
        ref="radio" 
        :volume="radioVolume"
        @timeupdate="radioUpdateTime"
        ></audio>
        
        <ion-button 
          color="secondary" 
          slot="start" 
          fill="clear"
          @click="togglePlayer"
        >
          <ion-icon :icon="radioStatusIcon" />
        </ion-button>
      
        <ion-range 
          aria-label="radio" 
          color="secondary" 
          :max="1"
          :step="0.01"
          v-model="radioVolume"
        >
          <ion-icon slot="start" :icon="volumeMuteOutline" />
          
          <ion-icon slot="end" :icon="volumeHighOutline" />
        </ion-range>
      
        <ion-text color="secondary" slot="end">
          {{ radioCurrentTime }}
        </ion-text>
      </ion-item>
      
      <ion-item button @click="setOpen(true)" id="changelod">
      	<ion-icon 
      	  slot="start" 
      	  color="secondary" 
      	  :icon="libraryOutline" 
      	/>
      	<ion-label>Changelog</ion-label>
      </ion-item>
      
      <ion-modal
        mode="ios"
        :is-open="isOpen"
        :backdrop-dismiss="false"
      >
        <changelog @set-open="setOpen(false)" />
      </ion-modal>
    </ion-content>
  </ion-page>
</template>
