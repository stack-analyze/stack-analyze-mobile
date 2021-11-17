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
          required
        >
        </ion-input>
      </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button
              @click="githubInfo"
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
            size-md="4"
            offset-md="4"
            size="12"
            v-if="githubInfoCount !== 0"
          >
            <ion-card mode="ios">
              <ion-card-header mode="md">
                <ion-img :src="userInfo.avatar_url" alt="profile-github" ></ion-img>
                <ion-card-title>
                  {{ userInfo.login }}
                </ion-card-title>
                <ion-card-subtitle>
                  {{ userInfo.name === null ? "no name" : userInfo.name }}
                </ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <ion-grid fixed>
                  <ion-row>
                    <ion-col size="6">
                      <ion-item>
                        <ion-label position="stacked">twitter:</ion-label>
                        <ion-note color="dark">
                          {{
                            userInfo.twitter_username === null
                              ? "no twitter info"
                              : `@${userInfo.twitter_username}`
                          }}
                        </ion-note>
                      </ion-item>
                    </ion-col>
                    <ion-col size="6">
                      <ion-item>
                        <ion-label position="stacked">created at:</ion-label>
                        <ion-note color="secondary">
                          {{ format(userInfo.created_at) }}
                        </ion-note>
                      </ion-item>
                    </ion-col>
                    <ion-col size="6">
                      <ion-item>
                        <ion-label position="stacked">repos</ion-label>
                        <ion-note color="dark">
                          {{userInfo.public_repos}}
                        </ion-note>
                      </ion-item>
                    </ion-col>
                    <ion-col size="6">
                      <ion-item>
                        <ion-label position="stacked">gits</ion-label>
                        <ion-note color="dark">
                          {{userInfo.public_gists}}
                        </ion-note>
                      </ion-item>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size-md="4" offset-md="4" size="12" v-else>
            <ion-card mode="ios">
              <ion-card-header mode="md">
                <ion-img
                  src="assets/img/No-image-found.jpg"
                  alt="profile-github"
                >
                </ion-img>
              </ion-card-header>
              <ion-card-content mode="md">
                <ion-card-title>no github info</ion-card-title>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import axios from "axios";

import { format } from "timeago.js";

import Toolbar from "@/components/Toolbar.vue";

// script
import presentAlert from "@/ts/alertMsg";
import openToast from "@/ts/warning-message";

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
  IonGrid,
  IonRow,
  IonCol,
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
    IonGrid,
    IonRow,
    IonCol,
  },
  name: "github",
  setup() {
    const user = ref("");
    const userInfo = ref({});

    const resetStatus = computed(() =>
      Object.entries(userInfo.value).length === 0 ? true : false
    );

    const githubInfoCount = computed(
      () => Object.entries(userInfo.value).length
    );

    const githubInfo = async () => {
      if (user.value === "") {
        openToast();
      } else {
        try {
          const res = await axios.get(
            `https://api.github.com/users/${user.value}`
          );
          userInfo.value = res.data;
        } catch (err: any) {
          presentAlert(
            err,
            "Error github user info",
            "problem to github info"
          );
        }
        user.value = "";
      }
    };

    const reset = () => (userInfo.value = {});

    return {
      user,
      userInfo,
      githubInfo,
      reset,
      format,
      resetStatus,
      githubInfoCount,
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
