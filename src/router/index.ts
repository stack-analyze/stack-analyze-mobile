import { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from '@ionic/vue-router';

import webRoute from './webRoute';
import infoRoute from './infoRoute';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/web/tech-stack'
  },
  webRoute,
  infoRoute,
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/hardware',
    name: 'hardware info',
    component: () => import('@/views/Hardware.vue')
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('@/views/Recommends.vue')
  },
  {
    path: '/password',
    name: 'password generator',
    component: () => import('@/views/PasswordGenerator.vue')
  },
  {
    path: '/prevent-ig-fake',
    name: 'prevent ig fakes',
    component: () => import('@/views/PreventIGFake.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
