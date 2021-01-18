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
            <ion-item-group>
                <ion-item-divider>
                    <ion-label>Options</ion-label>
                </ion-item-divider>
                <ion-item>
                    <ion-icon slot="start" color="secondary" :icon="moonOutline" />
                    <ion-label>Dark mode</ion-label>
                    <ion-toggle color="secondary" @ionChange="darkMode" v-model="theme" />
                </ion-item>
            </ion-item-group>
            <ion-item-group>
                <ion-item-divider>
                    <ion-label>Recomendations</ion-label>
                </ion-item-divider>
                <ion-menu-toggle v-for="(recomendation, i) of recomendations" :key="i">
                    <ion-item :href="recomendation.link" target="_blank">
                    <ion-icon
                        :color="recomendation.color"
                        slot="start"
                        :icon="recomendation.logo"
                    />
                    <ion-label :color="recomendation.color">{{recomendation.name}}</ion-label>
                    </ion-item>
                </ion-menu-toggle>
            </ion-item-group>
        </ion-content>
    </ion-menu>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

import { recomendations } from "@/ts/data";

import {
    IonMenu,
    IonMenuToggle,
    IonItemGroup,
    IonItemDivider,
    IonToolbar,
    IonHeader,
    IonContent,
    IonItem,
    IonLabel,
    IonAvatar,
    IonImg,
    IonToggle,
} from "@ionic/vue";

import { moonOutline } from "ionicons/icons";

export default defineComponent({
    name: "Menu",
    props: {
        menuId: String,
    },
    components: {
        IonMenu,
        IonMenuToggle,
        IonItemGroup,
        IonItemDivider,
        IonToolbar,
        IonHeader,
        IonContent,
        IonItem,
        IonLabel,
        IonAvatar,
        IonImg,
        IonToggle,
    },
    setup() {
        const store = useStore();
        const theme = computed(() => store.state.darkMode);
        const darkMode = () => store.commit("darkTheme");

        return {
            moonOutline,
            recomendations,
            theme,
            darkMode,
        };
    },
});
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
