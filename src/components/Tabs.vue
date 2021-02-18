<template>
  <ion-tabs @IonTabsWillChange="beforeTabChange" @IonTabsDidChange="afterTabChange">
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="techstack" href="/tech-stack">
        <ion-icon :icon="extensionPuzzleOutline" />
        <ion-label>tech-stack</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="pagespeed" href="/pagespeed">
        <ion-icon :icon="hourglassOutline" />
        <ion-label>pagespeed</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="whois" href="/whois">
        <ion-icon :icon="globeOutline" />
        <ion-label>whois</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="github" href="/github">
        <ion-icon :icon="informationCircleOutline" />
        <ion-label>github</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="anime" href="/anime">
        <ion-icon :icon="searchCircleOutline" />
        <ion-label>anime</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="about" href="/about">
        <ion-icon :icon="peopleOutline"  />
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
</style>

<script>
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
  searchCircleOutline
} from "ionicons/icons";

export default {
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
      searchCircleOutline
    };
  },
};
</script>
