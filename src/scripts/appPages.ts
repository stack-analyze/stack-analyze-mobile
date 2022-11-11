// icons
import {
    hourglassOutline,
    extensionPuzzleOutline,
    peopleOutline,
    globeOutline,
    informationCircleOutline,
    informationOutline,
    searchCircleOutline,
    terminalOutline,
    walletOutline,
    videocamOutline,
    logoTwitch,
    thumbsUpOutline,
    codeSlashOutline,
    attachOutline,
    lockClosedOutline,
    newspaperOutline,
} from "ionicons/icons";

// interfaces
import { Pages } from "../interfaces/RouteInterface";

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
];

const infoToolsPages: Pages[] = [
    {
        title: "github",
        url: "/info/github",
        icon: informationOutline
    },
    {
        title: "anime",
        url: "/info/anime",
        icon: searchCircleOutline
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
        title: "movie",
        url: "/info/movie",
        icon: videocamOutline
    },
    {
        title: "twitch",
        url: "/info/twitch",
        icon: logoTwitch
    },
];

const appPages: Pages[] = [    
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
       title: "password generator",
       url: "/password",
       icon: lockClosedOutline
    },
    {
        title: "hardware",
        url: "/hardware",
        icon: terminalOutline
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
  infoToolsPages
};