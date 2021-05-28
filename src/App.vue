<template>
  <ion-app>
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
  toastController
} from '@ionic/vue';
import { 
  defineComponent,
  onMounted
} from 'vue';

import TabsNav from '@/components/Tabs.vue';
import Menu from '@/components/Menu.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonSplitPane,
    IonRouterOutlet,
    TabsNav,
    Menu
  },
  setup() {
    onMounted(async () => {
      const toast = await toastController
        .create({
          message: 'capacitor plugins apis is not compatible in some browser.',
          duration: 2000
        });
      toast.present();
    });
  }
})
</script>
