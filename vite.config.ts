import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

import { VitePWA } from 'vite-plugin-pwa';

import AutoImport from 'unplugin-auto-import/vite';
import { ComponentResolver } from 'unplugin-vue-components/types';
import Components from 'unplugin-vue-components/vite';

import { IonicResolver } from 'unplugin-vue-components/resolvers';

const SwiperResolver = (): ComponentResolver => ({
  type: 'component',
  resolve(name: string) {
    if (name.startsWith('Swiper')) {
      return { name, from: 'swiper/vue' };
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        propsDestructure: true,
        defineModel: true
      }
    }), 
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "stack-analyze pwa",
        short_name: "stack-analyze",
        theme_color: "#50c8ff",
        icons: [
          {
            src: "./img/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            "src": "./img/icons/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "./img/icons/android-chrome-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "./img/icons/android-chrome-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "./img/icons/apple-touch-icon-60x60.png",
            "sizes": "60x60",
            "type": "image/png"
          },
          {
            "src": "./img/icons/apple-touch-icon-76x76.png",
            "sizes": "76x76",
            "type": "image/png"
          },
          {
            "src": "./img/icons/apple-touch-icon-120x120.png",
            "sizes": "120x120",
            "type": "image/png"
          },
          {
            "src": "./img/icons/apple-touch-icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "./img/icons/apple-touch-icon-180x180.png",
            "sizes": "180x180",
            "type": "image/png"
          },
          {
            "src": "./img/icons/apple-touch-icon.png",
            "sizes": "180x180",
            "type": "image/png"
          },
          {
            "src": "./img/icons/favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
          },
          {
            "src": "./img/icons/favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "./img/icons/msapplication-icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "./img/icons/mstile-150x150.png",
            "sizes": "150x150",
            "type": "image/png"
          }
        ],
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff"
      }
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/,],
      imports: [
        'vue',
        'vue-router',
        {
          'vue-router': ['RouteRecordRaw'],
          '@ionic/vue-router': ['createRouter', 'createWebHistory'],
          '@ionic/vue': [
            'IonicVue', 'alertController','toastController', 'loadingController', 
            'RefresherEventDetail', 'SearchbarChangeEventDetail', 'onIonViewWillEnter', 
            'onIonViewWillLeave', 'menuController', 'IonicSlides'
          ],
          'ionicons/icons': [
            'diceOutline', 'refreshOutline', 'copyOutline', 'warningOutline',
            'libraryOutline', 'home', 'logoInstagram', 'logoGithub',
            'logoCodepen', 'logoTwitch', 'logoYoutube', 'logoTiktok',
            'earthOutline', 'hourglassOutline', 'extensionPuzzleOutline', 'peopleOutline',
            'globeOutline', 'informationCircleOutline', 'informationOutline', 'searchCircleOutline',
            'terminalOutline', 'walletOutline', 'videocamOutline', 'logoTwitch',
            'thumbsUpOutline', 'codeSlashOutline', 'attachOutline', 'lockClosedOutline',
            'newspaperOutline', 'layersOutline', 'searchOutline', 'constructOutline',
            'closeCircleOutline', 'sunny', 'moon', 'settingsOutline', 'volumeMuteOutline', 
            'volumeHighOutline', 'playOutline', 'stopOutline', 'sparklesOutline',
            "imagesOutline"
          ],
          'axios': [ 'AxiosError', ['default', 'axios'] ],
          'swiper/modules': ['Pagination'],
          'timeago.js': ['format'],
          '@capacitor/device': ['Device', 'DeviceInfo'],
          '@capacitor/network': ['Network', 'ConnectionStatus'],
        }
      ],
      dirs: [
        'src/router', 'src/api', 'src/composables', 'src/interface',
        'src/scripts'
      ],
      vueTemplate: true,
      dts: true,
    }),
    Components({
      dirs: ['src/components', 'src/components/**'],
      extensions: ['vue'],
      resolvers: [IonicResolver(), SwiperResolver()],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
