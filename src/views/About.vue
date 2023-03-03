<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <swiper
        :loop="true"
        :modules="modules"
      >
        <swiper-slide v-for="card of Cards" :key="card.id">
          <ion-card mode="ios" color="light">
            <ion-card-header mode="md">
              <ion-img :src="card.img" :alt="card.id"></ion-img>
              <ion-card-subtitle>{{ card.details }}</ion-card-subtitle>
              <ion-card-title>{{ card.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content mode="md">
              <ion-button
                v-for="social of card.social"
                :key="social.color"
                fill="clear"
                :href="social.link"
                target="_blank"
                :color="social.color"
              >
                <ion-icon slot="icon-only" :icon="social.logo"></ion-icon>
              </ion-button>
            </ion-card-content>
          </ion-card>
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const modules = [Pagination, IonicSlides];
</script>