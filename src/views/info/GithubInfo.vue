<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a git user
        </ion-label>
        <ion-input 
          v-model="user"
          :clearInput="true"
          autocomplete="off"
          required
        />
      </ion-item>
      
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button
              @click="githubInfo"
              color="secondary"
              fill="outline"
              expand="block"
            >
              start search
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button
              @click="reset"
              :disabled="resetStatus"
              color="danger"
              fill="outline"
              expand="block"
            >
              reset github info
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      
      <ion-card class="stack-card" mode="ios">
        <ion-card-header mode="md">
          <ion-img 
            :src="githubUser.avatar_url || '/assets/img/No-image-found.jpg'"
            :alt="githubUser.login || 'profile github'" 
            class="github-img"
          />
          <ion-card-title>
            {{ githubUser.login || "no username" }}
          </ion-card-title>
          <ion-card-subtitle>
            {{ githubUser.name ?? "no name" }}
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content mode="md">
          <ion-grid>
            <ion-row>
              <ion-col size="12">
              <ion-item>{{ githubUser.bio ?? "no bio" }}</ion-item>
              </ion-col>
              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Followers:</ion-label>
                  <ion-text>{{ githubUser.followers }}</ion-text>
                </ion-item>
              </ion-col>
              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Following:</ion-label>
                  <ion-text>{{ githubUser.following }}</ion-text>
                </ion-item>
              </ion-col>
              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Account age:</ion-label>
                  <ion-text>{{ format(githubUser.created_at) }}</ion-text>
                </ion-item>
              </ion-col>
              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Twitter username:</ion-label>
                  <ion-text>
                    {{ githubUser.twitter_username ?? "no twitter info" }}
                  </ion-text>
                </ion-item>
              </ion-col>
              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Repos:</ion-label>
                  <ion-text>{{ githubUser.public_repos }}</ion-text>
                </ion-item>
              </ion-col>
              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">Gists:</ion-label>
                  <ion-text>{{ githubUser.public_repos }}</ion-text>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import axios, { AxiosError } from "axios";

import { format } from "timeago.js"

// ionic components
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonText,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle
} from "@ionic/vue";

// stack toolbar component
import StackToolbar from "@/components/Toolbar.vue";

import { GithubSchema } from "@/interfaces/GithubInterface"

import presentAlert from "@/scripts/alertMsg";
import openToast from "@/scripts/warning-message";

const user = ref("");
const githubUser = ref<GithubSchema>(({} as GithubSchema));

const resetStatus = computed(
  () => Object.values(githubUser.value).length === 0
);

const githubInfo = async (): Promise<void> => {
  if(!user.value) return openToast("this field is required", "warning");

  try {
    const { data } = await axios.get(`https://api.github.com/users/${user.value}`)

    githubUser.value = data;
  } catch(err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error github user info',
      subHeader: 'problem to req api'
    });
  }
  
  user.value = "";
};

const reset = () => {
  githubUser.value = ({} as GithubSchema)
};

</script>
