<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a twitch user for search:
        </ion-label>
        <ion-input
          type="url"
          v-model="user"
          clearInput="true"
          autocomplete="off"
          required
        >
        </ion-input>
      </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button
              @click="twitchInfo"
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
              color="danger"
              :disabled="resetStatus"
              fill="outline"
              expand="block"
            >
              reset search
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
            v-if="twitchInfoCount !== 0"
          >
            <ion-card mode="ios">
              <ion-card-header mode="md">
                <ion-img
                  :src="twitchUserInfo.profile_image_url"
                  :alt="twitchUserInfo.login"
                >
                </ion-img>
                <ion-card-title>
                  username: {{ twitchUserInfo.display_name }}
                </ion-card-title>
                <ion-card-subtitle>
                  created at: {{ format(twitchUserInfo.created_at) }}
                </ion-card-subtitle>
              </ion-card-header>
              <ion-card-content mode="md">
                <ion-grid fixed>
                  <ion-row>
                    <ion-col size="6">
                      <ion-item>
                        <ion-label position="stacked"
                          >broadcaster:</ion-label
                        >
                        <ion-text>{{
                          twitchUserInfo.broadcaster_type === ""
                            ? "nothing"
                            : twitchUserInfo.broadcaster_type
                        }}</ion-text>
                      </ion-item>
                    </ion-col>
                    <ion-col size="6">
                      <ion-item>
                        <ion-label position="stacked">views:</ion-label>
                        <ion-text>{{ twitchUserInfo.view_count }}</ion-text>
                      </ion-item>
                    </ion-col>
                    <ion-col>
                      <ion-item>
                        {{ twitchUserInfo.description }}
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
                  src="/assets/img/No-image-found.jpg"
                  alt="profile-github"
                >
                </ion-img>
              </ion-card-header>
              <ion-card-content mode="md">
                <ion-card-title>no twitch info</ion-card-title>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import {
  IonPage,
  IonContent,
  IonItem,
  IonText,
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

import { format } from "timeago.js";
import axios from "axios";

import openToast from "@/ts/warning-message";
import presentAlert from "@/ts/alertMsg";

import Toolbar from "@/components/Toolbar.vue";

const user = ref("");
const twitchUserInfo = ref({});

const resetStatus = computed(() =>
  Object.entries(twitchUserInfo.value).length === 0 ? true : false
);

const twitchInfoCount = computed(
  () => Object.entries(twitchUserInfo.value).length
);

const twitchInfo = async () => {
  if (user.value !== "") {
    try {
      const { data } = await axios.get("https://api.twitch.tv/helix/users", {
        params: { login: user.value },
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_TWITCH_TOKEN}`,
          "Client-Id": process.env.VUE_APP_TWITCH_CLIENT,
        },
      });

      twitchUserInfo.value = data.data[0];
    } catch (err: any) {
      presentAlert(err, "Error twitch user info", "problem to twitch info");
      console.error(err);
    }
    user.value = "";
  } else {
    openToast();
  }
};

const reset = () => (twitchUserInfo.value = {});
console.info(process.env.VUE_APP_TWITCH_TOKEN)
</script>