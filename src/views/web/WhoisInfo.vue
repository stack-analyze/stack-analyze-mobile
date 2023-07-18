<script setup lang="ts">
const { website, validateWebsite } = useHttp();

const whoisInfo = ref<Partial<Whois>>({});

const isEmptyWhoisInfo = computed(() => Object.keys(whoisInfo.value).length === 0);

const clearWhois = (): void => {
  whoisInfo.value = {};
};

const getWhois = async (): Promise<void> => {
  if (website.value.match(startWithHttp)) {
    return openToast("http or https:// is not neccesary", "warning");
  }

  try {
    const { data } = await webToolsApi.get<Whois>("/whois", {
      params: { url: website.value },
    });

    whoisInfo.value = data;
  } catch (err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: "Error whois info",
      subHeader: "problem to whois",
    });
  }

  website.value = "";
};
</script>

<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <stack-input v-model="website" input-type="url" />
      <ion-grid>
        <stack-buttons
          init-btn-name="start whois"
          :init-validate="validateWebsite"
          @init-function="getWhois"
          clear-btn-name="clear whois"
          :clear-validate="isEmptyWhoisInfo"
          @clear-function="clearWhois"
        />
      </ion-grid>
      <ion-card mode="md">
        <ion-card-header>
          <ion-card-title>
            {{ whoisInfo.url || "no web info" }}
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <pre class="stack-result">{{ whoisInfo.domain || "no domain info" }}</pre>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
