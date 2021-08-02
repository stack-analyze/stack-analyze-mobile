import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
    path: '/tech-stack',
    name: 'tech-stack',
    component: () => import('@/views/TechStack.vue'),
    meta: {
      title: 'tech-stack'
    }
  },
  {
    path: '/pagespeed',
    name: 'pagespeed',
    component: () => import('@/views/Pagespeed.vue'),
    meta: {
      title: 'pagespeed'
    }
  },
  {
    path: '/whois',
    name: 'whois',
    component: () => import('@/views/Whois.vue'),
    meta: {
      title: 'whois'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'about'
    }
  },
  {
    path: '/github',
    name: 'github info',
    component: () => import('@/views/GithubInfo.vue'),
    meta: {
      title: 'github info'
    }
  },
  {
    path: '/anime',
    name: 'anime search',
    component: () => import('@/views/AnimeSearch.vue'),
    meta: {
      title: 'anime search'
    }
  },
  {
    path: '/hardware',
    name: 'hardware info',
    component: () => import('@/views/Hardware.vue'),
    meta: {
      title: 'hardware information'
    }
  },
  {
    path: '/crypto',
    name: 'crypto info',
    component: () => import('@/views/CryptoMarket.vue'),
    meta: {
      title: 'crypto info'
    }
  },
  { path: "/", redirect: "tech-stack" }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
