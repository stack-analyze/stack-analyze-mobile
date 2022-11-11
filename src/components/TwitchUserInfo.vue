<template>
  <ion-col
    size-lg="3"
    size-md="4"
    size-sm="6"
    size="12"
  >
    <ion-card mode="ios">
      <ion-card-header mode="md">
        <ion-img
          :src="twitchUser.profile_image_url"
          :alt="twitchUser.login"
        />
        <ion-card-title>{{twitchUser.display_name}}</ion-card-title>
        <ion-card-subtitle :title="twitchUser.created_at">
          account age: {{ format(twitchUser.created_at) }}
        </ion-card-subtitle>
      </ion-card-header>
      
      <ion-card-content mode="md">
        <ion-grid>
          <ion-row>
            <ion-col size="7">
              <ion-item>
                <ion-label position="stacked">broadcaster:</ion-label>
                <ion-text>
                  {{ twitchUser.broadcaster_type || "user" }}
                </ion-text>
              </ion-item>
            </ion-col>
            <ion-col size="5">
              <ion-item>
                <ion-label position="stacked">views:</ion-label>
                <ion-text>{{ twitchUser.view_count }}</ion-text>
              </ion-item>
            </ion-col>
            <ion-col size="12">
              <ion-item>
                {{ twitchUser.description || "no description" }}
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
    </ion-card>
  </ion-col>
</template>

<script setup lang="ts">
import { format } from "timeago.js";

import { TwitchUser } from "@/interfaces/TwitchInterface";

import {
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonImg,
  IonLabel,
} from '@ionic/vue';

const { twitchUser } = defineProps<{
  twitchUser: TwitchUser;
}>();
</script>