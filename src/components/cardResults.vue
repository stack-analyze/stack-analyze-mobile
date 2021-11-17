<template>
    <ion-card mode="ios">
        <ion-card-header mode="md">
            <ion-card-subtitle>
                {{pagespeedMode}}: {{pagespeedURL}}
            </ion-card-subtitle>
            <ion-card-title :color="pagespeedColor">
                {{pagespeedScore}}/100
            </ion-card-title>
        </ion-card-header>
    </ion-card>
</template>

<script lang="ts">
import  { defineComponent } from "vue";

import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from "@ionic/vue";

export default defineComponent({
    name: "PagespeedCard",
    components: {
        IonCard,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle
    },
    props: {
        pagespeedMode: String,
        pagespeedURL: String,
        pagespeedColor: String,
        pagespeedScore: Number,
    }
});
</script>
