<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <form @submit.prevent="domainInfo">
        <ion-item>
          <ion-label position="floating" color="secondary">enter a url:</ion-label>
          <ion-input
            type="text"
            v-model="website"
            clearInput="true"
            autocomplete="off"
            required
          />
        </ion-item>
        <ion-button type="submit" class="text-button" color="secondary" expand="full" :disabled="validateButton()">start whois</ion-button>
      </form>
      <ion-button @click="reset" color="danger" fill="outline" expand="full">reset whois</ion-button>
      <ion-card mode="ios">
        <ion-card-header mode="md">
          <ion-card-title>Website: {{url}}</ion-card-title>
          <ion-card-subtitle>whois info</ion-card-subtitle>
          <ion-card-content>
            <ion-item v-for="(domain, i) of info" :key="domain">{{i+1}} - {{domain}}</ion-item>
          </ion-card-content>
        </ion-card-header>
      </ion-card>
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
  IonItem,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  alertController
} from '@ionic/vue';

import axios from 'axios';

import Toolbar from '@/components/Toolbar.vue';

export default  {
  name: 'TechStack',
  components: {
    Toolbar,
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent
  },
  setup() {
    const website = ref('');
    const info = ref([]);
    const url = ref('');
    
    const validateButton = (): boolean => {
     const regex = RegExp('(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-@]*)?(\\#[-a-z\\d_@]*)?$', 'i');
     if (website.value.match(regex)) { return false; } else { return true; }
    }
    
    const reset = () => {
       info.value = [];
       url.value = ''
     }

    async function presentAlert(msg: any) {
      const alert = await alertController
        .create({
          header: 'Error whois',
          subHeader: 'problem to whois',
          backdropDismiss: false,
          message: msg,
          mode: 'ios',
          buttons: ['OK'],
        });
      return alert.present();
    }

    const domainInfo = async (): Promise<void> => {
      try {
        const res = await axios.get('https://stack-analyze.herokuapp.com/whois', {
          params: {
            url: website.value
          }
        });
        info.value = res.data;
        url.value = website.value
      } catch (err) { presentAlert(err.message) }
      website.value =''
    }
    
    return {
     info,
     website,
     reset,
     url,
     domainInfo,
     presentAlert,
     validateButton
    }

  }
}
</script>