<template>
  <ion-item>
    <ion-input
      cursor="stack-input"
      autocomplete="off"
      color="secondary"
      :label="labelTxt ?? 'enter a url'"
      label-placement="floating"
      :type="inputType"
      :value="modelValue"
      @ion-input="$emit('update:modelValue', $event.target.value)"
    />
  </ion-item>
</template>

<script setup lang="ts">
import { IonItem, IonInput } from "@ionic/vue";

defineProps<{
  labelTxt?: string;
  modelValue: string;
  inputType: "url" | "text";
}>();

defineEmits<{
  (e: "update:modelValue", id: string): void;
}>();
</script>
