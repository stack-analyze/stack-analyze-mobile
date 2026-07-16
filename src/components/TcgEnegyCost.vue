<script setup lang="ts">
import { IonIcon } from '@ionic/vue';

type tcgObject = { [s: string]: string; }

const { energyType } = defineProps<{
  energyType: string;
}>()

const tcgEnegyIcon: tcgObject = {
  Grass: '/assets/energy-icons/grass.svg',
  Fire: '/assets/energy-icons/fire.svg',
  Water: '/assets/energy-icons/water.svg',
  Lightning: '/assets/energy-icons/lightning.svg',
  Psychic: '/assets/energy-icons/psychic.svg',
  Fighting: '/assets/energy-icons/fighting.svg',
  Darkness: '/assets/energy-icons/darkness.svg',
  Metal: '/assets/energy-icons/metal.svg',
  Dragon: '/assets/energy-icons/dragon.svg',
  colorless: '/assets/energy-icons/colorless.svg',
}

const tcgEnegyColor: tcgObject = {
  Grass: 'success',
  Fire: 'danger',
  Water: 'primary',
  Lightning: 'warning',
  Psychic: 'tertiary',
  Fighting: 'tcgFighting',
  Darkness: 'tcgDark',
  Metal: 'medium',
  Dragon: 'tcgDragon',
  dark: 'dark',
}
</script>

<template>
  <ion-icon size="large" :src="tcgEnegyIcon[energyType]" :color="tcgEnegyColor[energyType]" />
</template>