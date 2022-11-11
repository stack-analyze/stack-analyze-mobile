// import paths
import WebPage from "@/views/web/WebTabs.vue";
import TechStack from "@/views/web/TechStack.vue";
import PagespeedTool from "@/views/web/PagespeedResults.vue";
import WhoisInfo from "@/views/web/WhoisInfo.vue";
import WebScraping from "@/views/web/WebScraping.vue";

const webRoute = {
  path: "/web/",
  component: WebPage,
  children: [
    {
      path: "",
      redirect: "/web/tech-stack"
    },
    {
      path: "tech-stack",
      name: "tech stack",
      component: TechStack
    },
    {
      path: "pagespeed",
      name: "pagespeed",
      component: PagespeedTool
    },
    {
      path: "whois",
      name: "whois",
      component: WhoisInfo
    },
    {
      path: "scraping",
      name: "web scraping",
      component: WebScraping
    }
  ]
};

export default webRoute;
