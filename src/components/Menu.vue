<template>
    <ion-menu :contentId="menuId" side="start" type="overlay">
        <ion-header>
            <ion-toolbar class="toolbar ion-text-center">
                <ion-avatar class="horizontal logo">
                    <ion-img src="/assets/icon/icon.png" alt="icon logo" />
                </ion-avatar>
                <ion-title>stack-analyze</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-menu-toggle v-for="(recomendation, i) of recomendations" :key="i">
                <ion-item :href="recomendation.link" target="_blank">
                    <ion-icon :color="recomendation.color" slot="start" :icon="recomendation.logo" />
                    <ion-label :color="recomendation.color">{{ recomendation.name }}</ion-label>
                </ion-item>
            </ion-menu-toggle>
        </ion-content>
    </ion-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { recomendations } from "@/ts/data";

import {
    IonMenu,
    IonMenuToggle,
    IonToolbar,
    IonHeader,
    IonContent,
    IonItem,
    IonLabel,
    IonAvatar,
    IonImg
} from '@ionic/vue'

import { moonOutline } from "ionicons/icons";

export default defineComponent({
    name: "Menu",
    props: {
        menuId: String,
    },
    components: {
        IonMenu,
        IonMenuToggle,
        IonToolbar,
        IonHeader,
        IonContent,
        IonItem,
        IonLabel,
        IonAvatar,
        IonImg
    },
    setup() {
        return {
            moonOutline,
            recomendations
        }
    }
})
</script>

<style>
.horizontal {
    margin: auto;
}

.toolbar {
    --padding-bottom: 20px;
    --background: #000 url("/assets/img/web-background.jpg") no-repeat center center / cover;
    --color: #fff;
    border: 3px solid var(--ion-color-secondary);
    border-radius: 70px 0;
}

.logo {
 margin-top: 6%;
}

</style>
