<template>
    <ion-menu :contentId="menuId" side="start" type="overlay">
        <ion-header>
            <ion-toolbar class="toolbar ion-text-center">
                <ion-avatar class="horizontal logo">
                    <ion-img src="/assets/img/logo-mobile.png" alt="icon logo" />
                </ion-avatar>
                <ion-title>stack-analyze</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-item-group>
                <ion-item-divider>
                    <ion-label>Options</ion-label>
                </ion-item-divider>
                <ion-menu-toogle>
                    <ion-item button="true" @click="openChangelog">
                        <ion-icon slot="start" color="secondary" :icon="libraryOutline"></ion-icon>
                        <ion-label>Changelog</ion-label>
                    </ion-item>
                </ion-menu-toogle>
                <ion-menu-toogle>
                    <ion-item button="true" @click="openMuaInfo">
                        <ion-icon slot="start" color="secondary" :icon="brushOutline"></ion-icon>
                        <ion-label>Mua discovery</ion-label>
                    </ion-item>
                </ion-menu-toogle>
            </ion-item-group>
            <ion-item-group>
                <details :open="openDetails" class="menu-recomends">
                    <summary class="title-recomends" @click="openDetails = true">
                        <ion-item-divider>
                            <ion-label>Recomendations</ion-label>
                        </ion-item-divider>
                    </summary>
                    <ion-menu-toggle v-for="(recomendation, i) of recomendations" :key="i">
                        <ion-item :href="recomendation.link" target="_blank" @click="openDetails = false">
                        <ion-icon
                            :color="recomendation.color"
                            slot="start"
                            :icon="recomendation.logo"
                        >
                        </ion-icon>
                        <ion-label :color="recomendation.color">{{recomendation.name}}</ion-label>
                        </ion-item>
                    </ion-menu-toggle>
                </details>
            </ion-item-group>
        </ion-content>
    </ion-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

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
    modalController
} from "@ionic/vue";

import {
    moonOutline,
    libraryOutline,
    brushOutline
} from "ionicons/icons";

import ChangelogVue from "./Changelog.vue";
import MuaInfo from "./MuaEaster.vue";

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
    },
    setup() {
        const openDetails = ref(false);

        const openChangelog = async () => {
            const modal = await modalController.create({
                component: ChangelogVue,
                backdropDismiss: false,
                mode: "ios",
                cssClass: "modal"
            });
                
            return modal.present();
        };
        
        const openMuaInfo = async () => {
            const modal = await modalController.create({
                component: MuaInfo,
                backdropDismiss: false,
                mode: "ios",
                cssClass: "modal"
            });
                
            return modal.present();
        };

        return {
            moonOutline,
            libraryOutline,
            recomendations,
            openChangelog,
            openDetails,
            brushOutline,
            openMuaInfo
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

.title-recomends {
    list-style-type: none;
}

.title-recomends::marker {
    display: none;
}

.title-recomends::-webkit-details-marker {
    display: none;
}

.title-recomends ion-item-divider:after {
    content: "+";
    float: left;
    font-size: 1.5em;
    font-weight: bold;
    margin: -5px 10px 0 0;
    padding: 0;
    text-align: center;
    width: 20px;
}

.menu-recomends[open] .title-recomends ion-item-divider:after {
    content: "-";
}

.modal {
    --height: 100%;
}
</style>
