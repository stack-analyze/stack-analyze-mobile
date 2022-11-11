// import paths
import InfoPage from "@/views/info/InfoTabs.vue";
import AnimeSearch from "@/views/info/AnimeSearch.vue";
import BitlyInfo from "@/views/info/BitlyInfo.vue";
import CryptoMarket from "@/views/info/CryptoMarket.vue";
import GithubInfo from "@/views/info/GithubInfo.vue";
import MovieInfo from "@/views/info/MovieInfo.vue";
import TwitchInfo from "@/views/info/TwitchInfo.vue";

const infoRoute = {
  path: "/info/",
  component: InfoPage,
  children: [
    {
      path: "",
      redirect: "/info/github"
    },
    {
      path: "anime",
      name: "anime search",
      component: AnimeSearch
    },
    {
      path: "bitly",
      name: "bitly info",
      component: BitlyInfo
    },
    {
      path: "github",
      name: "github info",
      component: GithubInfo
    },
    {
      path: "crypto",
      name: "crypto market",
      component: CryptoMarket
    },
    {
      path: "movie",
      name: "movie info",
      component: MovieInfo
    },
    {
      path: "twitch",
      name: "twitch info",
      component: TwitchInfo
    }
  ]
};

export default infoRoute;
