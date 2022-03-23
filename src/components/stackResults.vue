<template>
  <ion-grid>
    <ion-row>
      <ion-col
        v-for="app of stackData"
        :key="app.slug"
        size-xl="3"
        size-lg="3"
        size-md="4"
        size-sm="4"
        size="12"
      >
        <ion-card mode="ios">
          <ion-card-header>
            <ion-img
              :src="`https://stack-analyze.web.app/logos/${app.icon}`"
              :alt="app.name"
            >
            </ion-img>
          </ion-card-header>
          <ion-card-content mode="md">
            <ion-card-title>{{ app.name }}</ion-card-title>
            <ion-card-subtitle>
              Categories:
              {{ formatter.format(app.categories.map(({ name }) => name)) }}
            </ion-card-subtitle>
          </ion-card-content>  
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
const formatter = new Intl.ListFormat('en', { style: 'short', type: 'unit' });

const props = defineProps({
  stackData: Array,
});

props.stackData;
</script>

<style scoped>
ion-img {
  filter: drop-shadow(0 0 0.75rem #e3dfde);
  image-rendering: pixelated;
  image-resolution: 300dpi; 
}
</style>