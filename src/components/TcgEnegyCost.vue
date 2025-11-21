<script setup lang="ts">
import { IonIcon } from '@ionic/vue';

const { energyType } = defineProps<{
  energyType: string;
}>()

const tcgEnegyIcon = () => {
  switch (energyType) {
    case 'Grass': return '/assets/energy-icons/grass.svg';
    case 'Fire': return '/assets/energy-icons/fire.svg';
    case 'Water': return '/assets/energy-icons/water.svg';
    case 'Lightning': return '/assets/energy-icons/lightning.svg';
    case 'Psychic': return '/assets/energy-icons/psychic.svg';
    case 'Fighting': return '/assets/energy-icons/fighting.svg';
    case 'Darkness': return '/assets/energy-icons/darkness.svg';
    case 'Metal': return '/assets/energy-icons/metal.svg';
    case 'Dragon': return '/assets/energy-icons/dragon.svg';
    default: return '/assets/energy-icons/colorless.svg';
  }
}

const tcgEnegyColor = () => {
  switch (energyType) {
    case 'Grass': return 'success';
    case 'Fire': return 'danger';
    case 'Water': return 'primary';
    case 'Lightning': return 'warning';
    case 'Psychic': return 'tertiary';
    case 'Fighting': return 'tcgFighting';
    case 'Darkness': return 'tcgDark';
    case 'Metal': return 'medium';
    case 'Dragon': return 'tcgDragon';
    default: return 'dark';
  }
}
</script>

<template>
  <ion-icon size="large" :src="tcgEnegyIcon()" :color="tcgEnegyColor()"  />
</template>