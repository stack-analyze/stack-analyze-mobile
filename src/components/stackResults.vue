<template>
    <ion-grid>
        <ion-row>
            <ion-col
                v-for="app of stackData"
                :key="app.slug"
                size-xl="3"
                size-lg="3"
                size-md="4"
                size-sm="4"
                size="12"
            >
                <ion-card mode="ios">
                    <ion-card-header>
                        <ion-img
                            :src="`https://stack-analyze.web.app/logos/${app.icon}`"
                            :alt="app.name"
                        >
                        </ion-img>
                    </ion-card-header>
                    <ion-card-content mode="md">
                        <ion-card-title>{{ app.name }}</ion-card-title>
                        <ion-card-subtitle>
                            Categories:
                            {{ 
                              app.categories.map(({ name }) => name).join(", ")
                            }}
                        </ion-card-subtitle>
                    </ion-card-content>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "stackResults",
    props: {
        stackData: { type: Array }
    }
});
</script>
