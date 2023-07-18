<script setup lang="ts">
const emit = defineEmits<{
  setOpen: [status: boolean]
}>()
</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>changelog</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="emit('setOpen')" color="danger">
          <ion-icon :icon="closeCircleOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-card v-for="data of versionsNotes" :key="data.version">
      <ion-card-header>
        <ion-card-title>Version: {{ data.version }}</ion-card-title>
      </ion-card-header>
      <ion-card-content class="ion-text-warp format">
        {{ data.details }}
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<style scoped>
.format {
  white-space: pre;
}
</style>
