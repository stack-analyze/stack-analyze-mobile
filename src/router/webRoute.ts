const webRoute: RouteRecordRaw = {
  path: "/web/",
  component: () => import('@/views/web/WebTabs.vue'),
  children: [
    {
      path: "",
      redirect: "/web/tech-stack"
    },
    {
      path: "tech-stack",
      name: "tech stack",
      component: () => import('@/views/web/TechStack.vue')
    },
    {
      path: "pagespeed",
      name: "pagespeed",
      component: () => import('@/views/web/PagespeedResults.vue')
    },
    {
      path: "whois",
      name: "whois",
      component: () => import('@/views/web/WhoisInfo.vue')
    },
    {
      path: "scraping",
      name: "web scraping",
      component: () => import('@/views/web/WebScraping.vue')
    }
  ]
};

export default webRoute;
