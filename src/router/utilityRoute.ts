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
  ]
};

export default utilityRoute;
