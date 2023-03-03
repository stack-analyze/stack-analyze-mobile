<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <stack-input v-model="website" input-type="url" />
      <ion-grid>
        <stack-buttons
          init-btn-name="start pagespeed"
          :init-validate="validateWebsite"
          @init-function="getPagespeed"
          clear-btn-name="reset pagespeed"
          :clear-validate="isEmptyResults"
          @clear-function="resetPagespeed"
        />
      </ion-grid>
      <pagespeed-result
        pagespeedMode="Desktop"
        :pagespeedURL="desktopURL"
        :pagespeedScore="desktopScore"
      />
      <pagespeed-result
        pagespeedMode="Mobile"
        :pagespeedURL="mobileURL"
        :pagespeedScore="mobileScore"
      />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts"/>
// composable
const {website, validateWebsite} = useHttp();

// states
const [desktopScore, mobileScore, desktopURL, mobileURL] = [
  ref(0), ref(0), ref(''), ref(''),
];

// computers
const isEmptyResults = computed(
  () => !desktopScore.value && !mobileScore.value && !desktopURL.value && !mobileURL.value
);

// methods
const getPagespeed = async () => {
  if (!website.value.match(startWithHttp)) {
    return openToast('http or https:// is required', 'warning');
  }
  
  try {
    const [desktop, mobile] = [
      await pagespeedApi(website.value, 'desktop'),
      await pagespeedApi(website.value, 'mobile'),
    ];
    
    desktopScore.value = Math.round(
      desktop.lighthouseResult.categories.performance.score * 100
    );
    
    mobileScore.value = Math.round(
      mobile.lighthouseResult.categories.performance.score * 100
    );
    
    desktopURL.value = desktop.id;
    mobileURL.value = mobile.id;
  } catch(err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error pagespeed',
      subHeader: 'problem to analyze',
    });
  }
  
  website.value = '';
};

const resetPagespeed = () => {
  desktopScore.value = 0;
  mobileScore.value = 0;
  desktopURL.value = '';
  mobileURL.value = '';
};
</script>
