type detailsVersion = {
  version: string;
  details: string;
};

export const versionsNotes: detailsVersion[] = [
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
        1. remove @keyup.prevent to @submit.prevent using dom keypress event
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
