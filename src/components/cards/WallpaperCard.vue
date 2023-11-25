<script setup lang="ts">
defineProps<{
  path: string;
  name: string;
}>();
</script>

<template>
	<ion-col>
		<ion-card class="ion-padding">
			<ion-img :src="path" :alt="name" />
			
			<ion-button
				color="secondary"
				expand="block"
				fill="outline"
				:href="path"
				download
			>
				download: {{ name }}
			</ion-button>
		</ion-card>
	</ion-col>
</template>
