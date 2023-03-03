<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content />
      </ion-refresher>
      <ion-searchbar
        :debounce="1000"
        @ionChange="handleChange($event)"
      />
      
      <ion-list class="scroller" inset>
        <ion-item v-for="coin of filterCoins" :key="coin.id">
          <ion-avatar slot="start">
            <ion-img
              :class="cryptoShadow(coin.price_change_percentage_24h)"
              :src="coin.image"
              :alt="coin.name"
            />
          </ion-avatar>
          <ion-label>
            {{ coin.name }} ({{ coin.symbol }}) <br />
            <ion-text> price: {{ currency.format(coin.current_price) }} USD </ion-text>
          </ion-label>
          <ion-note :color="cryptoStatus(coin.price_change_percentage_24h)" slot="end">
            {{ coin.price_change_percentage_24h }} %
          </ion-note>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
// state
const coinList = ref<Crypto[]>([]);
const filterCoins = ref<Crypto[]>([]);

// watchEffect
watchEffect(async () => {
  try {
    const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: { vs_currency: "usd" },
    });

    coinList.value = data;
    filterCoins.value = data;
  } catch (err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: "Error crypto market",
      subHeader: "problem to crypto market",
    });
  }
});

const currency = Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});

const cryptoShadow = (balance: number) => (balance >= 0 ? "shadow-good" : "shadow-bad");

const cryptoStatus = (balance: number) => (balance >= 0 ? "success" : "danger");

const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
  setTimeout(() => {
    event.detail.complete();
  }, 2000);
};

const handleChange = (event: any): void => {
  const query = event.target.value.toLowerCase();

  filterCoins.value = coinList.value.filter(
    d => d.name.toLowerCase().includes(query) || d.symbol.toLowerCase().includes(query)
  );
};

const showLoading = async () => {
  const loading = await loadingController.create({
    message: "Loading...",
    duration: 3000,
    spinner: "circles",
  });

  loading.present();
};

showLoading();
</script>

<style scoped>
.scroller {
  height: 83%;
  overflow: auto;
}
</style>
