type detailsVersion = {
  version: string;
  details: string;
};

export const versionsNotes: detailsVersion[] = [
  {
    version: '2.6.0',
    details: `
    added:
      1. tcg pocket card info
      2. taylor swift quotes (neo-jquery easter egg)
    fixed:
      1. added missing import in some pages.
      2. add DOM.iterable in tsconfig.
    `
  },
  {
    version: '2.5.0',
    details: `
    added:
      1. new wallpaers:
        1.1. ancient mistery.
        1.2. tsuky no emily.
      2. quotes tool.
    changed:
      1. replace theme switcher for system ionic class
      2. all files using manual imports.
    fixed: 
      1. web scraping tool using text wrap.
    `
  },
  {
    version: '2.4.0',
    details: `
      1. added: poker game rule.
    `
  },
  {
    version: '2.3.0',
    details: `
      1. added: potter search
    `
  },
  {
  	version: '2.2.0',
  	details: `
  	added:
  		1. deezer search tool.
  		2. seyyahi2 wallpaper pack.
  	changed:
  		1. migrate to new ionic version.
  		2. some tools now using swiper element.
  	`
  },
  {
  	version: '2.1.0',
  	details: `
  	added:
  		1. css validator tool.
  	changed:
  		1. migrate swiper vue to swiper element.
  		2. remove some vite configs
  	`
  },
  {
  	version: '2.0.0',
  	details: `
  	added:
  		1. wallpapers tool
  			1.1. sol, moon
  			1.2. dimensions
  	`
  },
  {
    version: '1.9.0',
    details: `
      added:
      	1. new tool pokemonInfo.
      	2. mixtreria radio & home page.
      fixed:
      	1. add a error method in tech-stack.
      	2. update modules.
      	3. fixed search in crypto market info.
      changed:
      	1. movies & anime search using columns design.
      	2. all modals using new ion-modal mode.
    `
  },
  {
    version: '1.8.0',
    details: `
      added:
        1. bundlephobia tool.
      changed:
        1. now using auto-import similar to nuxt edition.
        2. update to ionic 7 (beta).
      fixed:
        1. now using dark mode with localstorage.
        2. webscraping tool using new api similar to cli webscraping tool.
    `,
  },
  {
    version: '1.7.0',
    details: `
      added:
        1. new tool password generator.
        2. static content prevent instagram fake accounts.
      changed:
        1. migrate all tools except about, hardware and password in sections:
          1.1. tech-stack, pagespeed, whois and webscraping in web section.
          1.2. the other tools in info tools.
        2. some components using defineprops ts.
        3. add composable function in web tools.
        4. twitch info now is multi search (soon in npm ver. 1.2.2).
      fixed:
        1. modular api in some tools.
        2. add AxiosError in catch exception
        3. add regexp in bitly info
    `,
  },
  {
    version: '1.6.0',
    details: `
      added:
        1. new tool webscraping 
          based neo-jquery frontend scraping.
      changed:
        1. migrate vue-cli to vite.
        2. general toast now only in hardware page.
      fixed:
        1. add currency format
        2. add list format
    `
  },
  {
    version: '1.5.0',
    details: `
      added:
        1. new tool twitch info
      changed:
        1. move recommends to page stand-alone
          1.1 delete nonolive recommends
          1.2 create page recommends
          1.3 move recommends from menu component to page
        2. migrate all components and views to script setup
        3. changed and delete colors
          3.1 delete light colors
          3.2 now using dark colors
          3.3 delete classname dark
          3.4 delete color nonolive
        4. delete backgound header menu change to gradient
      fixed:
        1. changed error word in crypto market page
    `
  },
  {
    version: '1.4.0',
    details: `
      added:
        1. news tools:
          1.1. bitly info.
          1.2. movies info.
        2. add tech logo in other domain.
        3. new module: swipperjs.
      changed:
        1. rewrite some pages in modular components
        2. migrate tabs to slide menu
      fixed:
        1. migrate ion-slides to swipper js slides
      `
  },
  {
    version: '1.3.0',
    details: `
      Added: 
        1. new tool crypto market
        2. some new recomendation in npm version 1.1.3
        3. add new capacitor plugin network
      changed:
        1. add new internet connection status
        2. changed light colors to dark colors
      fixed:
        1. change columns anime search tool
        2. reorder verions details in desc form
      `
  },
  {
    version: '1.2.0',
    details: `
      Added:
        1. the new tools hardware info
        2. add all recomendations in npm versions 1.1.0 - 1.1.1
      changed:
        1. remove @keyup.prevent to @submit.prevent using 
          dom keypress event
        2. modify tar bar and all pages except about page
        3. remove modules:
          3.1 vuex
          3.2 @capacitor/android
      fixed:
        1. upgrade all modules for compatibility capacitor 3
        2. add message required in github and anime pages
      `
  },
  {
    version: '1.1.0',
    details: `
      Added:
        1. the news tools anime search and github info
        2. add all recomendations in npm versions 1.0.8 - 1.0.9
      changed:
        1. changed @submit.prevent to @keyup.enter
        2. techstack replace list to grid cards
      fixed:
        1. remove dark mode
    `
  },
  {
    version: '1.0.0',
    details: `
      1. the first version is based in stack-analyze npm 1.0.7
      2. exclusive tool whois analyze
    `
  }

];
