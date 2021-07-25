<template>
  <ion-tabs 
    @IonTabsWillChange="beforeTabChange" 
    @IonTabsDidChange="afterTabChange"
  >
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="tech-stack" href="/tech-stack">
        <ion-icon :icon="extensionPuzzleOutline"></ion-icon>
        <ion-label>tech-stack</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="pagespeed" href="/pagespeed">
        <ion-icon :icon="hourglassOutline"></ion-icon>
        <ion-label>pagespeed</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="whois" href="/whois">
        <ion-icon :icon="globeOutline"></ion-icon>
        <ion-label>whois</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="github" href="/github">
        <ion-icon :icon="informationCircleOutline"></ion-icon>
        <ion-label>github</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="anime" href="/anime">
        <ion-icon :icon="searchCircleOutline"></ion-icon>
        <ion-label>anime</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="crypto" href="/crypto">
        <ion-icon :icon="walletOutline"></ion-icon>
        <ion-label>crypto</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="hardware" href="/hardware">
        <ion-icon :icon="terminalOutline"></ion-icon>
        <ion-label>hardware</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="about" href="/about">
        <ion-icon :icon="peopleOutline"></ion-icon>
        <ion-label>about</ion-label>
      </ion-tab-button>

    </ion-tab-bar>
  </ion-tabs>
</template>

<style scoped>
ion-tab-button {
  --color: var(--ion-color-medium);
  --color-selected: var(--ion-color-secondary);
}

ion-tab-button::before {
    background-color: transparent;
    display: block;
    content: "";
  }

ion-tab-button.tab-selected::before {
  background-color: var(--ion-color-secondary);
}

@media (max-width: 768px) {
  ion-tab-bar {
    overflow: auto;
  }

  ion-tab-button {
    --padding-start: 0.6vw;
    --padding-end: 0.6vw;
  }
}
</style>

<script lang="">
import {defineComponent} from 'vue'

import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/vue";

import {
  hourglassOutline,
  extensionPuzzleOutline,
  peopleOutline,
  globeOutline,
  informationCircleOutline,
  searchCircleOutline,
  terminalOutline,
  walletOutline
} from "ionicons/icons";

export default defineComponent({
  name: "TabsNav",
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  },
  setup() {
    return {
      hourglassOutline,
      extensionPuzzleOutline,
      peopleOutline,
      globeOutline,
      informationCircleOutline,
      searchCircleOutline,
      terminalOutline,
      walletOutline
    };
  },
});
</script>

