import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';

import TechStack from '@/views/TechStack.vue';
import PagespeedInfo from '@/views/Pagespeed.vue';
import WhoisInfo from '@/views/Whois.vue';
import AboutPage from '@/views/About.vue';
import GithubInfo from '@/views/GithubInfo.vue';
import AnimeSearch from '@/views/AnimeSearch.vue';
import HardwareInformation from '@/views/Hardware.vue';
import CryptoMarket from '@/views/CryptoMarket.vue';
import BitlyInfo from '@/views/BitlyInfo.vue';
import MoviesInfo from '@/views/MoviesInfo.vue';
import TwitchInfo from '@/views/TwitchInfo.vue';
import Recommends from '@/views/Recommends.vue';
import WebScraping from '@/views/WebScraping.vue';

// const routes = ;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tech-stack',
      component: TechStack,
      meta: {
        title: 'tech-stack'
      }
    },
    {
      path: '/pagespeed',
      name: 'pagespeed',
      component: PagespeedInfo,
      meta: {
        title: 'pagespeed'
      }
    },
    {
      path: '/whois',
      name: 'whois',
      component: WhoisInfo,
      meta: {
        title: 'whois'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {
        title: 'about'
      }
    },
    {
      path: '/github',
      name: 'github info',
      component: GithubInfo,
      meta: {
        title: 'github info'
      }
    },
    {
      path: '/anime',
      name: 'anime search',
      component: AnimeSearch,
      meta: {
        title: 'anime search'
      }
    },
    {
      path: '/hardware',
      name: 'hardware info',
      component: HardwareInformation,
      meta: {
        title: 'hardware information'
      }
    },
    {
      path: '/crypto',
      name: 'crypto info',
      component: CryptoMarket,
      meta: {
        title: 'crypto info'
      }
    },
    {
      path: '/bitly',
      name: 'bitly info',
      component: BitlyInfo,
      meta: {
        title: 'bitly info'
      }
    },
    {
      path: '/movie-info',
      name: 'movie info',
      component: MoviesInfo,
      meta: {
        title: 'movie info'
      }
    },
    {
      path: '/twitch',
      name: 'twitch info',
      component: TwitchInfo,
      meta: {
        title: 'twitch info'
      }
    },
    {
      path: '/scraping',
      name: 'web scraping',
      component: WebScraping,
      meta: { title: 'web scraping' }
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommends,
      meta: {
        title: 'twitch info'
      }
    },
  ],
})

export default router
