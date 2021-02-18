<template>
    <ion-header>
        <ion-toolbar>
            <ion-title>changelog</ion-title>
            <ion-buttons slot="end">
                <ion-button @click="closeModal" color="danger">
                    <ion-icon :icon="closeCircleOutline" />
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card v-for="data of versionsNotes" :key="data.version">
                <ion-card-header>
                    <ion-card-title>Version: {{data.version}}</ion-card-title>
                </ion-card-header>
                <ion-card-content class="ion-text-warp format">{{data.details}}</ion-card-content>
            </ion-card>
        </ion-content>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

import {
    IonContent,
    IonHeader,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    modalController
} from '@ionic/vue';

import { closeCircleOutline } from 'ionicons/icons';

import { versionsNotes } from '@/ts/details';

export default defineComponent({
    name: 'Changelog',
    components: {
        IonContent,
        IonHeader,
        IonTitle,
        IonButtons,
        IonButton,
        IonIcon,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
    },
    setup() {
        function closeModal() {
            modalController.dismiss({ 'dismissed': true });
        }

        return {
            closeModal,
            closeCircleOutline,
            versionsNotes
        }
    }
})
</script>

<style scoped>
.format { 
  white-space: pre-line; 
 }
</style>