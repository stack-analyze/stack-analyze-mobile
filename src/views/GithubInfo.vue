<template>
  <ion-page>
    <Toolbar />

    <ion-content>
        <ion-item>
          <ion-label position="floating" color="secondary">
            enter a github user to search:
          </ion-label>
          <ion-input
            v-model="user"
            clearInput="true"
            autocomplete="off"
            @keyup.enter="githubInfo"
            required
          />
        </ion-item>
      <ion-button
                @click="reset"
                color="danger"
                expand="full"
                fill="outline"
              >
                reset github info
              </ion-button>

          <ion-grid fixed>
          <ion-row>
          <ion-col size-md="4" offset-md="4" size-sm="12">
          <ion-card mode="ios">
            <ion-card-header mode="md">
              <ion-img
                :src="userInfo.avatar_url === undefined || null ? '/assets/img/No-image-found.jpg' : userInfo.avatar_url"
                alt="profile-github"
              />
              <ion-card-title>
                {{ userInfo.login === undifined ? 'no login' : userInfo.login}}
              </ion-card-title>
              <ion-card-subtitle v-if="userInfo.name !== undefined">
                {{ userInfo.name === null ? "no name" : userInfo.name }}
              </ion-card-subtitle>
              <ion-card-subtitle v-else>null</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label v-if="userInfo.twitter_username !== undefined">
                  twitter:
                  {{
                    userInfo.twitter_username === null
                      ? "no twitter info"
                      : `@${userInfo.twitter_username}`
                  }}
                </ion-label>
                <ion-label v-else>no twitter</ion-label>
              </ion-item>
                    <ion-item>
                      <ion-label>created at:</ion-label>
                      <ion-note color="secondary">{{ format(userInfo.created_at) }}</ion-note>
                    </ion-item>
                    <ion-item>
                      <ion-label> updated at: </ion-label>
                      <ion-note color="secondary">{{ format(userInfo.updated_at) }}</ion-note>
                    </ion-item>
            </ion-card-content>
          </ion-card>
          </ion-col>
          </ion-row>
          </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import axios from "axios";

import { format } from 'timeago.js'

import Toolbar from "@/components/Toolbar.vue";

// script
import presentAlert from "@/ts/alertMsg";

import {
  IonPage,
  IonContent,
  IonItem,
  IonNote,
  IonLabel,
  IonInput,
  IonCard,
  IonImg,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
} from "@ionic/vue";

export default defineComponent({
  components: {
    Toolbar,
    IonPage,
    IonContent,
    IonItem,
    IonNote,
    IonLabel,
    IonInput,
    IonImg,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton,
  },
  name: "github",
  setup() {
    const user = ref("");
    const userInfo = ref({});

    const githubInfo = async () => {
      try {
        const res = await axios.get(
          `https://api.github.com/users/${user.value}`
        );
        userInfo.value = res.data;
      } catch (err) {
        presentAlert(err.message, "Error github user info", "problem to github info");
      }
      user.value = "";
    };

    const reset = () => (userInfo.value = {});

    return {
      user,
      userInfo,
      githubInfo,
      reset,
      format,
    };
  },
});
</script>

<style scoped>
ion-img {
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
</style>
