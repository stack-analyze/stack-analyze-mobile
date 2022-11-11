<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">enter a url:</ion-label>
        <ion-input
          type="url"
          :clearInput="true"
          autocomplete="off"
          required
          v-model="website"
        />
      </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button
              @click="techStack"
              :disabled="validateWebsite"
              color="secondary"
              fill="outline"
              expand="block"
            >
              start analyze
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button
              @click="resetStack"
              :disabled="isEmptyTechnologies"
              color="danger"
              fill="outline"
              expand="block"
            >
              clear tech-stack
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <stack-card
            v-for="app of technologies"
            :key="app.id"
            :stackData="app"
          />
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// axios
import axios, { AxiosError } from "axios";

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
  IonCol,
} from "@ionic/vue";

// vue components
import StackToolbar from "@/components/Toolbar.vue";
import StackCard from "@/components/stackCard.vue";

import { TechStack } from "@/interfaces/TechStackInterface";

import { useHttp } from "@/composables/webComposable";
import presentAlert from "@/scripts/alertMsg";
import { startWithHttp } from "@/scripts/data";
import openToast from "@/scripts/warning-message";

// using composables
    const { website, validateWebsite } = useHttp();

    // state
    const technologies = ref<TechStack[]>([]);

    // computed
    const isEmptyTechnologies = computed(() => technologies.value.length === 0);

    // methods
    const resetStack = (): void => {
      technologies.value = []
    };

    const techStack = async (): Promise<void> => {
      if (!website.value.match(startWithHttp)) return openToast("http or https:// is required", "warning");

      try {
        const { data } = await axios.get("https://stack-analyze-api.onrender.com/stack", {
          params: { url: website.value },
        });

        technologies.value = data;
      } catch (err) {
        presentAlert({
          msg: (err as AxiosError).message,
          header: "Error tech-stack",
          subHeader: "problem to tech-stack"
        });
      }
      website.value = "";
    };
</script>