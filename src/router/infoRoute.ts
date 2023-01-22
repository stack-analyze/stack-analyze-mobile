import { RouteRecordRaw } from 'vue-router';

const infoRoute: RouteRecordRaw = {
  path: "/info/",
  component: () => import('@/views/info/InfoTabs.vue'),
  children: [
    {
      path: "",
      redirect: "/info/github"
    },
    {
      path: "anime",
      name: "anime search",
      component: () => import('@/views/info/AnimeSearch.vue')
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
      path: "movie",
      name: "movie info",
      component: () => import('@/views/info/MovieInfo.vue')
    },
    {
      path: "twitch",
      name: "twitch info",
      component: () => import('@/views/info/TwitchInfo.vue')
    }
  ]
};

export default infoRoute;
