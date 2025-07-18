import { createRouter, createWebHistory, } from '@ionic/vue-router'
import { type RouteRecordRaw } from 'vue-router'

// routes
import infoRoute from './infoRoute'
import queryRoute from './queryRoute'
import utilityRoute from './utilityRoute'
import webRoute from './webRoute'

// config
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'stack-analyze',
    component: () => import('@/views/Home.vue')
  },
  webRoute,
  infoRoute,
  queryRoute,
  utilityRoute,
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('@/views/Recommends.vue')
  },
  {
    path: '/prevent-ig-fake',
    name: 'prevent ig fakes',
    component: () => import('@/views/PreventIGFake.vue')
  },
  {
  	path: '/wallpapers',
  	name: 'wallpapers',
  	component: () => import('@/views/Wallpapers.vue')
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: () => import('@/views/Quotes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
