<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <ion-list>
        <ion-item v-for="coin of coinList" :key="coin.id">
          <ion-avatar slot="start">
            <ion-img :src="coin.image" :alt="coin.name"></ion-img>
          </ion-avatar>
          <ion-label>
            {{ coin.name }} ({{ coin.symbol }}) <br />
            <ion-text>price: {{ coin.current_price }} USD</ion-text>
          </ion-label>
          <ion-note
            :color="
              coin.price_change_percentage_24h >= 0 ? 'success' : 'danger'
            "
            slot="end"
          >
            {{ coin.price_change_percentage_24h }}
          </ion-note>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";

import axios from "axios";

import Toolbar from "@/components/Toolbar.vue";

// script
import presentAlert from "@/ts/alertMsg";

import {
  IonPage,
  IonContent,
  IonImg,
  IonAvatar,
  IonLabel,
  IonText,
  IonNote,
  IonItem,
  IonList,
} from "@ionic/vue";

export default defineComponent({
  components: {
    Toolbar,
    IonPage,
    IonContent,
    IonAvatar,
    IonLabel,
    IonText,
    IonNote,
    IonImg,
    IonItem,
    IonList,
  },
  name: "anime",
  setup() {
    const coinList = ref([]);
    const coinSearch = ref("");

    watchEffect(async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
            },
          }
        );
        coinList.value = res.data;
      } catch (err) {
        presentAlert(
          err.message,
          "Error anime Search",
          "problem to anime Search"
        );
      }
    });
    
    

    return {
      coinList,
      coinSearch
    };
  },
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
