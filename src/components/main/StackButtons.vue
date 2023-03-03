<template>
  <ion-row>
    <ion-col size="6">
      <ion-button
        :disabled="initValidate"
        fill="outline"
        expand="block"
        color="secondary"
        @click="emits('initFunction')"
      >
        {{ initBtnName }}
      </ion-button>
    </ion-col>
    <ion-col size="6">
      <ion-button
        :disabled="clearValidate"
        fill="outline"
        expand="block"
        color="danger"
        @click="emits('clearFunction')"
      >
        {{ clearBtnName }}
      </ion-button>
    </ion-col>
  </ion-row>
</template>

<script setup lang="ts">
import { IonRow, IonCol, IonButton } from "@ionic/vue";

defineProps<{
  initValidate: boolean;
  clearValidate: boolean;
  initBtnName: string;
  clearBtnName: string;
}>();

const emits = defineEmits<{
  (e: "initFunction"): void;
  (e: "clearFunction"): void;
}>();
</script>
