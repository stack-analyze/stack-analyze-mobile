<script setup lang="ts">
const iconTheme = ref(
  document.body.classList.contains('ion-palette-dark') ? moon : sunny
);

const changeTheme = () => {
  if(document.body.classList.contains('ion-palette-dark')) {
    localStorage.theme = 'light';
    iconTheme.value = sunny;
  } else {
    localStorage.theme = 'dark';
    iconTheme.value = moon;
  }

  document.body.classList.toggle('ion-palette-dark');
};
</script>

<template>
  <ion-header>
    <ion-toolbar color="secondary">
      <ion-title color="light">{{ $route.name }}</ion-title>
      <ion-buttons slot="start">
        <ion-menu-button color="light">
          <ion-icon :icon="settingsOutline" />
        </ion-menu-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button color="light" @click="changeTheme">
          <ion-icon :icon="iconTheme" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>
