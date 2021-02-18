0<template>
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
          @keyup.enter="tech"
          :pattern="regex"
          required
        />
      </ion-item>
      <ion-button @click="reset" color="danger" fill="outline" expand="full">
        reset tech-stack
      </ion-button>
      <ion-grid fixed>
        <ion-row>
          <ion-col
            v-for="app of apps"
            :key="app.slug"
            size-lg="3"
            size-md="4"
            size-sm="6"
            size-xs="12"
          >
            <ion-card>
              <ion-card-header>
                <ion-img
                  :src="`/assets/img/logos/${app.icon}`"
                  :alt="app.name"
                />
              </ion-card-header>
              <ion-card-content>
                <ion-card-title>{{ app.name }}</ion-card-title>
                <ion-card-subtitle>
                  Categories:
                  {{
                    Object.values(app.categories)
                      .map((categorie) => categorie.name)
                      .join(", ")
                  }}
                </ion-card-subtitle>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  IonImg,
} from "@ionic/vue";

import axios from "axios";

import Toolbar from "@/components/Toolbar.vue";

// scripts
import presentAlert from "@/ts/alertMsg";
import { regex } from '@/ts/data';

export default {
  name: "TechStack",
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonImg,
    Toolbar,
  },
  setup() {
    const website = ref("");
    const apps = ref([]);
    const url = ref("");

    const reset = () => {
      apps.value = [];
      url.value = "";
    };

    const tech = async (): Promise<void> => {
      try {
        const res = await axios.get(
          "https://stack-analyze.herokuapp.com/stack",
          {
            params: {
              url: website.value,
            },
          }
        );
        apps.value = res.data;
        url.value = website.value;
      } catch (err) {
        presentAlert(err.message, "Error tech-stack", "problem to tech-stack");
      }
      website.value = "";
    };

    return {
      apps,
      website,
      url,
      reset,
      tech,
      regex
    };
  },
};
</script>

<style>
.spacing {
  padding-left: 30%;
}
</style>
