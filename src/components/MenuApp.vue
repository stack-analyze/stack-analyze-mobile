<script setup lang="ts">
import Changelog from './modals/Changelog.vue';

const { menuId } = defineProps<{
  menuId: string;
}>();
</script>

<template>
  <ion-menu :contentId="menuId" side="start" type="overlay">
    <ion-header>
      <ion-toolbar class="toolbar ion-text-center">
        <ion-avatar class="horizontal logo">
          <ion-img src="/assets/img/logo-mobile.png" alt="icon logo"></ion-img>
        </ion-avatar>
        <ion-title>stack-analyze</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item-group>
        <ion-item-divider>
          <ion-label>tools</ion-label>
        </ion-item-divider>

        <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
          <ion-item button router-direction="root" :router-link="p.url">
            <ion-icon slot="start" :icon="p.icon" color="secondary" />
            <ion-label>{{ p.title }}</ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-item-group>
    </ion-content>
  </ion-menu>
</template>

<style>
.horizontal {
  margin: auto;
}

.toolbar {
  --padding-bottom: 20px;
  --background: linear-gradient(to right, #0575e6, #021b79);
  --color: #fff;
  border: 3px solid var(--ion-color-secondary);
  border-radius: 70px 0;
}

.logo {
  margin-top: 6%;
}

.modal {
  --height: 100%;
}
</style>
