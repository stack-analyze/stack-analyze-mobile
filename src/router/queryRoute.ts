const queryRoute: RouteRecordRaw = {
  path: "/query/",
  component: () => import('@/views/query/QueryTabs.vue'),
  children: [
    {
      path: "",
      redirect: "/query/anime"
    },
    {
      path: "anime",
      name: "anime search",
      component: () => import('@/views/query/AnimeSearch.vue')
    },
    {
      path: "movie",
      name: "movie info",
      component: () => import('@/views/query/MovieInfo.vue')
    },
    {
      path: "pokemon",
      name: "pokemon info",
      component: () => import('@/views/query/PokemonInfo.vue')
    },
    {
      path: "twitch",
      name: "twitch info",
      component: () => import('@/views/query/TwitchInfo.vue')
    }
  ]
};

export default queryRoute;
