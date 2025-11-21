import { type RouteRecordRaw } from 'vue-router';

const infoRoute: RouteRecordRaw = {
  path: "/info/",
  component: () => import('@/views/info/InfoTabs.vue'),
  children: [
    {
      path: "",
      redirect: "/info/github"
    },
    {
      path: "bitly",
      name: "bitly info",
      component: () => import('@/views/info/BitlyInfo.vue')
    },
    {
      path: "github",
      name: "github info",
      component: () => import('@/views/info/GithubInfo.vue')
    },
    {
      path: "crypto",
      name: "crypto market",
      component: () => import('@/views/info/CryptoMarket.vue')
    },
    {
      path: "bundlephobia",
      name: "bundlephobia info",
      component: () => import('@/views/info/Bundlephobia.vue')
    },
    {
      path: "tcgp",
      name: "tcgp card info",
      component: () => import('@/views/info/Tgcp.vue')
    }
  ]
};

export default infoRoute;
