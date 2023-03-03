<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button 
          v-for="page of utilityToolsPages"
          :key="page.title"
          :tab="page.title" 
          :href="page.url"
        >
          <ion-icon :icon="page.icon" />
          <ion-label>{{ page.title }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
