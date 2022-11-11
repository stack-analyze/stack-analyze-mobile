<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a twitch user for search example a,b,c:
        </ion-label>
        <ion-input 
          type="text" 
          v-model="users" 
          :clear-input="true" 
          autocomplete="off" 
        />
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
              @click="resetTwitch"
              color="danger"
              :disabled="resetStatus"
              fill="outline"
              expand="block"
            >
              reset search
            </ion-button>
          </ion-col>
        </ion-row>

        <ion-row>
          <twitch-user-info
            v-for="user of twitchUsers"
            :key="user.id"
            :twitch-user="user"
          />
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import axios, { AxiosError } from "axios";

import { TwitchUser } from "@/interfaces/TwitchInterface";

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

// stack toolbar component
import StackToolbar from "@/components/Toolbar.vue";

// twitch user component
import TwitchUserInfo from "@/components/TwitchUserInfo.vue";

import openToast from "@/scripts/warning-message";
import presentAlert from "@/scripts/alertMsg";

const users = ref("");

const twitchUsers = ref<TwitchUser[]>([]);

const resetStatus = computed(() => twitchUsers.value.length === 0);

const twitchInfo = async (): Promise<void> => {
  if (!users.value) {
    return openToast("this field is required", "warning");
  }

  // params
  const params = new URLSearchParams();

  // split
  const userList = users.value.split(",");

  if (userList.length === 100) return openToast("users must be 100", "danger");

  userList.forEach((user) => {
    params.append("login", user);
  });

  try {
    const { data: twitchData } = await axios.get("https://api.twitch.tv/helix/users", {
      params,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_TWITCH_TOKEN}`,
        "Client-Id": import.meta.env.VITE_APP_TWITCH_CLIENT,
      },
    });

    twitchUsers.value = twitchData.data;
  } catch (err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: "Error github user info",
      subHeader: "problem to req api",
    });
  }

  users.value = "";
};

const resetTwitch = () => {
  twitchUsers.value = [];
};
</script>
