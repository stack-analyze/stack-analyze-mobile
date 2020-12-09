<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <form @submit.prevent="results">
        <ion-item>
          <ion-label position="floating" color="secondary">enter a url </ion-label>
          <ion-input
            type="url"
            v-model="website"
            clearInput="true"
            autocomplete="off"
            required
          />
        </ion-item>
        <ion-button type="submit" color="secondary" expand="full" :disabled="validateButton()">start pagespeed</ion-button>
      </form>
      <ion-button @click="reset" color="danger" fill="outline" expand="full">reset pagespeed</ion-button>
      <ion-card mode="ios">
        <ion-card-header mode="md">
          <ion-card-subtitle>Desktop: {{url}}</ion-card-subtitle>
          <ion-card-title :color="resColorDesktop">{{ desktop }}/100</ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-card mode="ios">
        <ion-card-header mode="md">
          <ion-card-subtitle>Mobile: {{url}}</ion-card-subtitle>
          <ion-card-title :color="resColorMobile">{{ mobile }}/100</ion-card-title>
        </ion-card-header>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from "vue";
import axios from "axios";

import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  alertController
} from "@ionic/vue";
import Toolbar from "@/components/Toolbar.vue";

export default {
  name: "Pagespeed",
  components: {
    Toolbar,
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
  setup() {
    const website = ref("");
    const url = ref("");
    const desktop = ref(0);
    const mobile = ref(0);
    const resColorDesktop = ref('dark');
    const resColorMobile = ref('dark');

    async function presentAlert(msg: any) {
      const alert = await alertController
        .create({
          header: 'Error pagespeed',
          subHeader: 'problem to pagespeed',
          message: msg,
          backdropDismiss: false,
          mode: 'ios',
          buttons: ['OK'],
        });
      return alert.present();
    }
    
    function reset () {
       desktop.value = 0;
       mobile.value = 0;
       url.value = ''
       resColorDesktop.value = 'dark';
       resColorMobile.value = 'dark';
    }

    const validateButton = (): boolean => {
     const regex = RegExp('(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-@]*)?(\\#[-a-z\\d_@]*)?$', 'i');
     if (website.value.match(regex)) { return false; } else { return true; }
    }

    const results = async (): Promise<void> => {
      try {
        const resDesktop = await axios.get('https://www.googleapis.com/pagespeedonline/v5/runPagespeed', {
          params: {
            url: website.value,
            key: 'AIzaSyBEDaW4FxSZ2s1vz5CdD5Ai6PGZGdAzij0',
            strategy: 'desktop'
          }
        });
        const resMobile = await axios.get('https://www.googleapis.com/pagespeedonline/v5/runPagespeed', {
          params: {
            url: website.value,
            key: 'AIzaSyBEDaW4FxSZ2s1vz5CdD5Ai6PGZGdAzij0',
            strategy: 'mobile'
          }
        });

        desktop.value = Math.round(
          resDesktop.data.lighthouseResult.categories.performance.score * 100
        );
        mobile.value = Math.round(
          resMobile.data.lighthouseResult.categories.performance.score * 100
        );
        
        switch (true) {
      case (desktop.value === 1 || desktop.value <= 49):
        resColorDesktop.value = 'danger';
        break;
      case (desktop.value === 50 || desktop.value <= 89):
        resColorDesktop.value = 'warning';
        break;
      case (desktop.value >= 90 || desktop.value === 100):
        resColorDesktop.value = 'success';
        break;
      default:
        resColorDesktop.value = 'dark';
        break;
}
switch (true) {
      case (mobile.value === 1 || mobile.value <= 49):
        resColorMobile.value = 'danger';
        break;
      case (mobile.value === 50 || mobile.value <= 89):
        resColorMobile.value = 'warning';
        break;
      case (mobile.value >= 90 || mobile.value === 100):
        resColorMobile.value = 'success';
        break;
      default:
        resColorMobile.value = 'dark';
        break;
}
url.value = website.value;
      } catch (err) {
        presentAlert(err.message);
      }
      website.value = '';
    };

    return {
      website,
      desktop,
      url,
      reset,
      mobile,
      results,
      validateButton,
      presentAlert,
      resColorDesktop,
      resColorMobile
    };
  },
};
</script>

