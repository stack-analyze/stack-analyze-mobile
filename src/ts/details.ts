type detailsVersion = {
    version: string;
    details: string;
};

export const versionsNotes:detailsVersion [] = [
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
