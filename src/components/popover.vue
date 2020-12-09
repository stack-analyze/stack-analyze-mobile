<template>
    <ion-content>
        <ion-item class="options">
            <ion-icon slot="start" :icon="moonOutline" />
            <ion-label>Dark mode</ion-label>
            <ion-toggle color="secondary" v-model="darkMode" @ionChange="changeDarkTheme" :checked="darkMode" />
        </ion-item>
    </ion-content>
</template>

<style>
.options {
    --color: var(--ion-color-secondary);
}
</style>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

import { IonToggle, IonItem, IonLabel, IonIcon, IonContent } from "@ionic/vue";
import { moonOutline } from "ionicons/icons";

export default defineComponent({
    name: "Popover",
    components: { IonToggle, IonItem, IonLabel, IonIcon, IonContent },
    setup() {
        const store = useStore();
        return {
            moonOutline,
            darkMode: computed(() => store.state.darkMode),
            darkModeChanged: computed(() => store.dispatch('darkModeChanged')),
            changeDarkTheme: computed(() => store.dispatch('changeDarkTheme')),
        }
    }
});
</script>