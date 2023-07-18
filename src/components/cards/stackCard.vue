<script setup lang="ts">
const formatter = new Intl.ListFormat('en', { style: 'short', type: 'unit' });

const { stackData } = defineProps<{
  stackData: TechStack;
}>();

const errorImg = (e) => {
  // e.target.style.display = "none";
  e.target.src = "assets/img/No-image-found.jpg"
}
</script>

<template>
  <ion-col
    size-lg="3"
    size-md="4"
    size-sm="6"
    size="12"
  >
    <ion-card mode="ios">
      <ion-card-header>
        <ion-img
          :src="`https://stack-analyze.web.app/logos/${stackData.icon}`"
          :alt="stackData.name"
          class="stack-img"
          ref="image"
          @ion-error="errorImg"
        />
      </ion-card-header>
      <ion-card-content mode="md">
        <ion-card-title>{{ stackData.name }}</ion-card-title>
        <ion-card-subtitle>
          Categories: {{ formatter.format(stackData.techCategories) }}
        </ion-card-subtitle>
      </ion-card-content>
      <ion-button 
        :href="stackData.website" 
        target="_blank" 
        color="success"
        fill="outline"
        expand="block"
      >
        {{ stackData.name }} website
      </ion-button>
    </ion-card>
  </ion-col>
</template>
