<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a url:
        </ion-label>
        <ion-input 
          type="text"
          v-model="website"
          :clearInput="true"
          autocomplete="off"
        />
      </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button
              @click="domainInfo"
              :disabled="validateWebsite"
              color="secondary"
              fill="outline"
              expand="block"
            >
              start whois analyze
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button
              @click="resetWhoisInfo"
              :disabled="isEmptyWhoisInfo"
              color="danger"
              fill="outline"
              expand="block"
            >
              reset whois info
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-card mode="md">
        <ion-card-header>
          <ion-card-title>
            {{ whoisInfo.url || "no web info" }}
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <pre class="stack-result">{{ whoisInfo.domain || "no domain info" }}</pre>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import { AxiosError } from "axios";

// ionic components
import {
  IonPage,
  IonTabBar,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
} from "@ionic/vue";

// stack toolbar component
import StackToolbar from "@/components/Toolbar.vue";

import { Whois } from "@/interfaces/WhoisInterface";

import { useHttp } from "@/composables/webComposable";
import presentAlert from "@/scripts/alertMsg";
import { startWithHttp } from "@/scripts/data";
import openToast from "@/scripts/warning-message";

import webToolsApi from "@/api/apiExtras"

const { website, validateWebsite } = useHttp();

const whoisInfo = ref<Whois>({});

const isEmptyWhoisInfo = computed(() => Object.keys(whoisInfo.value).length === 0);

const resetWhoisInfo = (): void => {
  whoisInfo.value = {};
};

const domainInfo = async (): Promise<void> => {
  if(website.value.match(startWithHttp)) return openToast("http or https:// is not neccesary", "warning");
  
  try {
    const { data } = await webToolsApi.get<Whois>("/whois", {
      params: { url: website.value }
    });
    
    whoisInfo.value = data;
  } catch(err) {
    presentAlert({
      msg: (err as AxiosError).message, 
      header: "Error whois info", 
      subHeader: "problem to whois"
    });
  }
  
  website.value = "";
};
</script>