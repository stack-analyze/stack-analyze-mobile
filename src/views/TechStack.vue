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
      <ion-grid>
        <ion-row>
          <ion-col
            v-for="app of apps"
            :key="app.slug"
            size-xl="2"
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
                >
                </ion-img>
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
import { computed, ref } from "vue";

import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  toastController,
} from "@ionic/vue";

import axios from "axios";

import Toolbar from "@/components/Toolbar.vue";

// scripts
import presentAlert from "@/ts/alertMsg";
import { regex } from "@/ts/data";

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
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonGrid,
    IonRow,
    IonCol,
    Toolbar,
  },
  setup() {
    const website = ref("");
    const apps = ref([]);

    const reset = () => {
      apps.value = [];
      website.value = "";
    };

    const validate = computed(() => (website.value.match(regex) ? false : true));
    const resetStatus = computed(() => (apps.value[0] === undefined ? true : false));

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

        const toast = await toastController.create({
          message: "not found stack",
          duration: 2000,
        });

        apps.value = res.data;
        
        if(apps.value[0] === undefined) { toast.present(); }
      } catch (err) {
        presentAlert(err.message, "Error tech-stack", "problem to tech-stack");
      }
      website.value = "";
    };

    return {
      apps,
      website,
      reset,
      tech,
      validate,
      resetStatus,
    };
  },
};
</script>

<style>
.spacing {
  padding-left: 30%;
}
</style>
