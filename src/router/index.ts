import { createRouter, createWebHistory } from '@ionic/vue-router';

import AboutPage from '@/views/About.vue';
import HardwareInformation from '@/views/Hardware.vue';
import RecommendsPage from '@/views/Recommends.vue';
import PasswordPage from '@/views/PasswordGenerator.vue';
import PreventIGFake from '@/views/PreventIGFake.vue';

import webRoute from './webRoute';
import infoRoute from './infoRoute';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/web/tech-stack'
    },
    webRoute,
    infoRoute,
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/hardware',
      name: 'hardware info',
      component: HardwareInformation,
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: RecommendsPage,
    },
    {
      path: '/password',
      name: 'password generator',
      component: PasswordPage,
    },
    {
      path: '/prevent-ig-fake',
      name: 'prevent ig fakes',
      component: PreventIGFake
    }
  ],
})

export default router
