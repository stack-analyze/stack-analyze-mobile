<script setup lang="ts">
// static
const scrapingOptList: string[] = [
  'title', 'images', 'metadata', 'headings',
  'tableHead', 'tableData', 'links', 'cites'
];

const popoverOptions = {
  mode: 'ios',
  showBackdrop: true,
  backdropDismiss: false
};

// composable
const { validateWebsite, website } = useHttp();

// states
const resultScraping = ref<string | WebScraping[]>('');
const scrapingOpt = ref('');

// computers
const validateScraping = computed(() => !scrapingOpt.value);
const isEmptyScraping = computed(() => !resultScraping.value);
const shellClass = computed(
  () => resultScraping.value !== "" ? "shell-results" : "shell-msg"
);

// methods
const startScraping = async () => {
  if(!website.value.match(startWithHttp)) {
    return openToast('http:// or https:// is required', 'warning');
  }

  try {
    const { data } = await axios.get('https://stack-scraping.vercel.app/api/stack-scraping', {
      params: {
        website: website.value,
        opt: scrapingOpt.value,
      }
    });

    resultScraping.value = data;
  } catch(err) {
    resultScraping.value = (err as AxiosError).message;
  }

  scrapingOpt.value = '';
  website.value = '';
};

const resetScraping = () => {
  resultScraping.value = '';
};
</script>

<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <stack-input v-model="website" input-type="url" />
      <ion-item>
        <ion-select
          class="scraping-select"
          placeholder="enter a selector"
          v-model="scrapingOpt"
          label="scraping elements"
          interface="action-sheet"
          :interface-options="popoverOptions"
          :disabled="validateWebsite"
        >
          <ion-select-option
            v-for="option in scrapingOptList"
            :value="option"
            :key="option"
          >
            {{ option }}
          </ion-select-option>
        </ion-select>
      </ion-item>
      <ion-grid>
        <stack-buttons
          init-btn-name="start scraping"
          :init-validate="validateScraping"
          @init-function="startScraping"
          clear-btn-name="clear scraping"
          :clear-validate="isEmptyScraping"
          @clear-function="resetScraping"
        />
      </ion-grid>
      <ion-item>
        <pre :class="['stack-result', 'shell', shellClass]">{{
          resultScraping || "wait scraping results"
        }}</pre>
      </ion-item>
    </ion-content>
  </ion-page>
</template>
