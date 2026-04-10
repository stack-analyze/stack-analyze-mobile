import { type RouteRecordRaw } from 'vue-router';

const utilityRoute: RouteRecordRaw = {
  path: '/utility/',
  component: () => import('@/views/utility/UtilityTabs.vue'),
  children: [
    {
      path: "",
      redirect: "/utility/hardware"
    },
    {
      path: 'hardware',
      name: 'hardware info',
      component: () => import('@/views/utility/Hardware.vue')
    },
    {
      path: 'password',
      name: 'password generator',
      component: () => import('@/views/utility/PasswordGenerator.vue')
    },
    {
      path: 'poker',
      name: 'poker game rule',
      component: () => import('@/views/utility/PokerGame.vue')
    },
    {
      path: 'magic-ball',
      name: 'magic ball',
      component: () => import('@/views/utility/MagicBall.vue')
    }
  ]
};

export default utilityRoute;
