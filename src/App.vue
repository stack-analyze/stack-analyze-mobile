<template>
  <ion-app class="dark">
    <IonSplitPane content-id="main" disabled="true">
      <Menu menuId="main" />
      <ion-router-outlet id="main" />
      <TabsNav />
    </IonSplitPane>
  </ion-app>
</template>

<script lang="ts">
import {
  IonApp,
  IonSplitPane,
  IonRouterOutlet,
  toastController,
} from "@ionic/vue";
import { defineComponent, onMounted } from "vue";

import TabsNav from "@/components/Tabs.vue";
import Menu from "@/components/Menu.vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonSplitPane,
    IonRouterOutlet,
    TabsNav,
    Menu,
  },
  setup() {
    onMounted(async () => {
      const toast = await toastController.create({
        message:
          "Capacitor version 3 plugins in some browsers work partially or are not incompatible at all.",
        duration: 2000,
      });
      toast.present();
    });
  },
});
</script>
