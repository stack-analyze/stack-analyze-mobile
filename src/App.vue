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
import { IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/vue';
import { defineComponent, inject } from 'vue';

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
    const useTheme = inject('DarkThemeMode')
    
    return { useTheme }
  }
})
</script>
