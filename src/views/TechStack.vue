0<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <form @submit.prevent="tech">
        <ion-item>
          <ion-label position="floating" color="secondary">enter a url:</ion-label>
          <ion-input
            type="url"
            v-model="website"
            clearInput="true"
            autocomplete="off"
            required
          />
        </ion-item>
        <ion-button type="submit" class="text-button" color="secondary" expand="full" :disabled="validateButton()">start tech-stack</ion-button>
      </form>
      <ion-button @click="reset" color="danger" fill="outline" expand="full">reset tech-stack</ion-button>
      <ion-list>
        <ion-list-header>
          <ion-label>website: {{url}}</ion-label>
        </ion-list-header>
        <ion-item-group v-for="app of apps" :key="app.slug">
          <ion-item>
            <ion-thumbnail>
              <ion-img :src="`/assets/img/logos/${app.icon}`" :alt="app.name" />
            </ion-thumbnail>
            <ion-label class="spacing">{{app.name}}</ion-label>
          </ion-item>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from "vue";

import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonLabel,
  IonList,
  IonItem,
  IonImg,
  IonThumbnail,
  IonItemGroup,
  alertController,
} from "@ionic/vue";

import axios from 'axios'

import Toolbar from "@/components/Toolbar.vue";

export default {
  name: "TechStack",
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonButton,
    IonLabel,
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonItemGroup,
    Toolbar
  },
  setup() {
    const website = ref('');
    const apps = ref([]);
    const url = ref('');
    
    const reset = () => {
      apps.value = [];
      url.value = '';
    }
    
    const validateButton = (): boolean => {
     const regex = RegExp('(http|https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-@]*)?(\\#[-a-z\\d_@]*)?$', 'i');
     if(website.value.match(regex)) { return false; } else { return true; }
    }

    async function presentAlert(msg: any) {
      const alert = await alertController
        .create({
          header: 'Error tech-stack',
          subHeader: 'problem to tech-stack',
          backdropDismiss: false,
          message: msg,
          mode: 'ios',
          buttons: ['OK'],
        });
      return alert.present();
    }

    const tech = async (): Promise<void> => {
      try {
        const res = await axios.get('https://stack-analyze.herokuapp.com/stack', {
          params: {
            url: website.value
          }
        })
        apps.value = res.data;
        url.value = website.value;
      } catch (err) { presentAlert(err.message) }
      website.value =''
    }
    
    return {
     apps,
     website,
     url,
     reset,
     tech,
     validateButton,
     presentAlert
    }
  }
};
</script>

<style>
.spacing { padding-left: 30%;}
</style>
