import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
    path: '/tech-stack',
    name: 'tech-stack',
    component: () => import('@/views/TechStack.vue'),
  },
  {
    path: '/pagespeed',
    name: 'pagespeed',
    component: () => import('@/views/Pagespeed.vue')
  },
  {
    path: '/whois',
    name: 'whois',
    component: () => import('@/views/Whois.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  { path: "/", redirect: "tech-stack" }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
