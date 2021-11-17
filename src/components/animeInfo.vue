<template>
    <ion-grid>
        <ion-row>
            <ion-col 
                v-for="(anime, i) of animeData" 
                :key="i"
                size-xl="3"
                size-lg="3"
                size-md="4"
                size-sm="4"
                size="12"
            >
                <ion-card>
                    <ion-card-header>
                        <ion-img
                            :src="anime.image_url"
                            :alt="anime.title"
                            class="poster"
                        >
                        </ion-img>
                    </ion-card-header>
                    <ion-card-content>
                        <ion-card-title class="ion-text-sm">
                            {{anime.title}}
                        </ion-card-title>
                        <ion-button @click="openModal(anime.mal_id)" expand="block">
                            show info
                        </ion-button>
                    </ion-card-content>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
    IonCol,
    IonGrid,
    IonRow,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonImg,
    modalController,
} from "@ionic/vue";

import Modal from "@/components/ModalAnime.vue";

export default defineComponent({
    components: {
        IonCol,
        IonGrid,
        IonRow,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardTitle,
        IonButton,
        IonImg
    },
    name: "animeResults",
    props: {
        animeData: { type: Array }
    },
    setup() {
        const openModal = async (id: number) => {
            const modal = await modalController.create({
                component: Modal,
                componentProps: {
                    animeId: id,
                },
                backdropDismiss: false,
                cssClass: "my-custom-class",
                mode: "ios",
            });

            return modal.present();
        }

        return {
            openModal
        }; 
    }
});
</script>

<style scoped>
.poster {
    --height: 334px;
    --width: 225px;
}

.my-custom-class {
    --width: 225px;
}
</style>