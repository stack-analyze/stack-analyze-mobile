import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import router from './router';

import App from './App.vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/ionic.bundle.css';
import '@ionic/vue/css/palettes/dark.system.css';

/* swiper styles */
import '@ionic/vue/css/ionic-swiper.css';

/* Theme variables */
import './theme/variables.css';

/* general styles */
import './main.css';

/* start vue init */
const app = createApp(App)
  .use(IonicVue, {rippleEffect: false, mode: 'md'})
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
