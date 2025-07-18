<script setup lang="ts">
import {
  IonCol, IonItem, IonImg,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonCardContent,
} from '@ionic/vue'

import { format } from 'timeago.js'

import { type TwitchUser } from '@/interfaces/TwitchInterface';

const { twitchUser } = defineProps<{
  twitchUser: TwitchUser;
}>();
</script>

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
        <ion-card-title>
          {{twitchUser.display_name}} ({{ twitchUser.broadcaster_type || "user" }})
        </ion-card-title>
        <ion-card-subtitle :title="twitchUser.created_at">
          account age: {{ format(twitchUser.created_at) }}
        </ion-card-subtitle>
      </ion-card-header>
      
      <ion-card-content mode="md">
        <ion-item>
          views: {{ twitchUser.view_count }}
        </ion-item>
        <ion-item>
          {{ twitchUser.description || "no description" }}
        </ion-item>
      </ion-card-content>
    </ion-card>
  </ion-col>
</template>
