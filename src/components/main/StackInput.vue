<script setup lang="ts">
import { IonItem, IonInput } from "@ionic/vue";

const {
  labelTxt = 'enter a url',
  inputType
} = defineProps<{
  labelTxt?: string;
  inputType: "url" | "text";
}>();

const modelValue = defineModel<string>();
</script>

<template>
  <ion-item>
    <ion-input
      cursor="stack-input"
      autocomplete="off"
      color="secondary"
      :label="labelTxt"
      label-placement="floating"
      :type="inputType"
      v-model="modelValue"
    />
  </ion-item>
</template>
