import { 
    attachOutline, codeSlashOutline, codeWorkingOutline, 
    colorWandOutline, constructOutline, extensionPuzzleOutline, 
    globeOutline, homeOutline, hourglassOutline,
    imagesOutline, informationCircleOutline, informationOutline, 
    layersOutline, lockClosedOutline, logoTwitch, musicalNoteOutline, 
    newspaperOutline, peopleOutline, readerOutline, searchCircleOutline, 
    searchOutline, sparklesOutline, terminalOutline, thumbsUpOutline, videocamOutline, walletOutline 
} from 'ionicons/icons'

import { type Pages } from "@/interfaces/RouteInterface";

const webToolsPages: Pages[] = [
    {
        title: "tech stack",
        url: "/web/tech-stack",
        icon: extensionPuzzleOutline
    },
    {
        title: "pagespeed",
        url: "/web/pagespeed",
        icon: hourglassOutline
    },
    {
        title: "whois",
        url: "/web/whois",
        icon: attachOutline
    },
    {
        title: "web scraping",
        url: "/web/scraping",
        icon: codeSlashOutline,
    },
    {
        title: "css validator",
        url: "/web/validator",
        icon: codeWorkingOutline,
    },
];

const infoToolsPages: Pages[] = [
    {
        title: "github",
        url: "/info/github",
        icon: informationOutline
    },
    {
        title: "crypto",
        url: "/info/crypto",
        icon: walletOutline
    },
    {
        title: "bitly",
        url: "/info/bitly",
        icon: searchCircleOutline
    },
    {
        title: "bundlephobia",
        url: "/info/bundlephobia",
        icon: layersOutline
    },
    {
        title: 'tcgp',
        url: '/info/tcgp',
        src: '/assets/energy-icons/pokeball.svg'
    }
];

const queryToolsPages: Pages[] = [
    {
        title: "anime",
        url: "/query/anime",
        icon: searchCircleOutline
    },
    {
        title: "movie",
        url: "/query/movie",
        icon: videocamOutline
    },
    {
        title: "pokemon",
        url: "/query/pokemon",
        icon: sparklesOutline
    },
    {
        title: "twitch",
        url: "/query/twitch",
        icon: logoTwitch
    },
    {
        title: "deezer",
        url: "/query/deezer",
        icon: musicalNoteOutline
    },
    {
        title: "potter search",
        url: "/query/potter",
        icon: colorWandOutline
    },
];

const utilityToolsPages: Pages[] = [
    {
        title: "hardware",
        url: "/utility/hardware",
        icon: terminalOutline
    },
    {
        title: "password generator",
        url: "/utility/password",
        icon: lockClosedOutline
    },
    {
        title: "poker game",
        url: "/utility/poker",
        icon: searchCircleOutline
    }
];

const appPages: Pages[] = [
    {
        title: "home page",
        url: "/",
        icon: homeOutline,
    },
    {
        title: "web tools",
        url: "/web/",
        icon: globeOutline,
    },
    {
        title: "info tools",
        url: "/info/",
        icon: informationCircleOutline,
    },
    {
        title: "query tools",
        url: "/query/",
        icon: searchOutline
    },
    {
        title: "utility tools",
        url: "/utility/",
        icon: constructOutline,
    },
    {
        title: "wallpapers",
        url: "/wallpapers",
        icon: imagesOutline
    },
    {
        title: 'quotes',
        url: '/quotes',
        icon: readerOutline
    },
    {
        title: "about",
        url: "/about",
        icon: peopleOutline
    },
    {
        title: "recommend",
        url: "/recommend",
        icon: thumbsUpOutline
    },
    {
        title: "prevent ig fakes",
        url: "/prevent-ig-fake",
        icon: newspaperOutline
    },
];

export {
    appPages,
    webToolsPages,
    infoToolsPages,
    queryToolsPages,
    utilityToolsPages
};
