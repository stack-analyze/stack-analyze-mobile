<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a url:
        </ion-label>
        <ion-input
          type="url"
          v-model="website"
          clearInput="true"
          autocomplete="off"
          required
        >
        </ion-input>
      </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button
              @click="tech"
              :disabled="validate"
              color="secondary"
              fill="outline"
              expand="block"
            >
              start-analyze
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button
              @click="reset"
              :disabled="resetStatus"
              color="danger"
              fill="outline"
              expand="block"
            >
              reset tech-stack
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <stack-results :stackData="apps"></stack-results>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  toastController,
} from "@ionic/vue";

import axios from "axios";

import Toolbar from "@/components/Toolbar.vue";
import stackResults from "@/components/stackResults.vue";

// scripts
import presentAlert from "@/ts/alertMsg";
import { regex } from "@/ts/data";

const website = ref("");
const apps = ref([]);

const reset = () => {
  apps.value = [];
  website.value = "";
};

const validate = computed(() => (website.value.match(regex) ? false : true));
const resetStatus = computed(() =>
  apps.value[0] === undefined ? true : false
);

const tech = async (): Promise<void> => {
  try {
    const res = await axios.get("https://stack-analyze-api.onrender.com/stack", {
      params: {
        url: website.value,
      },
    });

    const toast = await toastController.create({
      message: "not found stack",
      duration: 2000,
    });

    apps.value = res.data;

    if (apps.value[0] === undefined) {
      toast.present();
    }
  } catch (err: any) {
    presentAlert(err, "Error tech-stack", "problem to tech-stack");
  }
  website.value = "";
};
</script>

<style>
.spacing {
  padding-left: 30%;
}
</style>
