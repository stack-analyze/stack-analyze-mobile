import App from './App.vue'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/ionic.bundle.css'

/* swiper styles */
import '@ionic/vue/css/ionic-swiper.css';

/* Theme variables */
import './theme/variables.css';

/* general styles */
import './main.css'

/* detect dark mode */
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark')
  localStorage.theme = 'dark'
} else {
  localStorage.theme = 'light'
}

/* start vue init */
const app = createApp(App)
  .use(IonicVue, {rippleEffect: false, mode: 'md'})
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
