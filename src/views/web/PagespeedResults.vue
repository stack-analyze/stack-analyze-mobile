<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary"> enter a url </ion-label>
        <ion-input type="url" :clearInput="true" autocomplete="off" required v-model="website" />
      </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button @click="pagespeed" color="secondary" :disabled="validateWebsite" fill="outline" expand="block">
              start pagespeed
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button @click="resetPagespeed" :disabled="isEmptyResults" color="danger" fill="outline" expand="block">
              reset results
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <pagespeed-result pagespeedMode="Desktop" :pagespeedURL="desktopURL" :pagespeedScore="desktopScore" />
      <pagespeed-result pagespeedMode="Mobile" :pagespeedURL="mobileURL" :pagespeedScore="mobileScore" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { AxiosError } from "axios";

// ionic components
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/vue";

// vue components
import StackToolbar from "@/components/Toolbar.vue";
import PagespeedResult from "@/components/PagespeedResult.vue";
import pagespeedApi from "@/api/pagespeedApi";

// composable
import { useHttp } from "@/composables/webComposable";

// popups
import presentAlert from "@/scripts/alertMsg";
import { startWithHttp } from "@/scripts/data";
import openToast from "@/scripts/warning-message";

const { website, validateWebsite } = useHttp();

// states 
const [
  desktopScore,
  mobileScore,
  desktopURL,
  mobileURL
] = [ref(0), ref(0), ref(""), ref("")];

const isEmptyResults = computed(() => !desktopScore.value && !mobileScore.value && !desktopURL.value && !mobileURL.value)

const resetPagespeed = (): void => {
  desktopScore.value = 0;
  mobileScore.value = 0;
  desktopURL.value = "";
  mobileURL.value = "";
}

const pagespeed = async (): Promise<void> => {
  if (!website.value.match(startWithHttp)) return openToast("http or https:// is required", "warning");

  try {
    const [desktop, mobile] = [
      await pagespeedApi(website.value, "desktop"),
      await pagespeedApi(website.value, "mobile")
    ];

    desktopScore.value = Math.round(
      desktop.lighthouseResult.categories.performance.score * 100
    );
    
    mobileScore.value = Math.round(
      mobile.lighthouseResult.categories.performance.score * 100
    );

    desktopURL.value = desktop.id;
    mobileURL.value = mobile.id;
  } catch (err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: "Error pagespeed",
      subHeader: "problem to analyze"
    });
  }
  website.value = "";
};
</script>