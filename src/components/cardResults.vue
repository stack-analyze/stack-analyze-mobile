<template>
  <ion-card mode="ios">
    <ion-card-header mode="md">
      <ion-card-subtitle>
        {{ pagespeedMode }}: {{ pagespeedURL }}
      </ion-card-subtitle>
      <ion-card-title :color="pagespeedColor">
        {{ pagespeedScore }}/100
      </ion-card-title>
    </ion-card-header>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

const props = defineProps({
  pagespeedMode: String,
  pagespeedURL: String,
  pagespeedColor: String,
  pagespeedScore: Number,
});

props.pagespeedMode;
props.pagespeedURL;
props.pagespeedColor;
props.pagespeedScore;
</script>
