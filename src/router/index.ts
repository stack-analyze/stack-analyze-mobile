const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/web/tech-stack'
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
