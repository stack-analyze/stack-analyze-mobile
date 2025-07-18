<script setup lang="ts">
import {
  IonItem, IonLabel, IonNote, IonText,
} from "@ionic/vue";

const {
  pagespeedMode,
  pagespeedURL,
  pagespeedScore
} = defineProps<{
  pagespeedMode: "Desktop" | "Mobile";
  pagespeedURL: string;
  pagespeedScore: number;
}>();

const resultColor = (score: number) => {
  switch (true) {
    case score === 0: return "dark";
    case score === 1 || score <= 49: return "danger";
    case score === 50 || score <= 89: return "warning";
    case score >= 90 || score === 100: return "success";
  }
}
</script>

<template>
  <ion-item>
    <ion-note slot="end" :color="resultColor(pagespeedScore)">
      {{ pagespeedScore }} / 100
    </ion-note>
    <ion-label position="stacked">{{ pagespeedMode }}:</ion-label>
    <ion-text>{{ pagespeedURL || "no website" }}</ion-text>
  </ion-item>
</template>
