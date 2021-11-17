/* eslint-disable no-useless-escape */

// import icons
import {
    logoGithub,
    logoInstagram,
    logoCodepen,
    logoTwitch,
    logoYoutube,
    logoTiktok,
    earthOutline
} from "ionicons/icons";

const regex = "[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?";
const whoisRegex = "(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?";

// card info
const Cards = [
    {
        id: "logo",
        img: "/assets/img/logo-mobile.png",
        name: "app logo",
        title: "stack-analyze",
        details: `version: 1.3.0`,
        social: [
            {
                logo: logoGithub,
                color: "github",
                link: "https://github.com/intermachine-developers/stack-analyze-mobile",
            }
        ]
    },
    {
        id: "member-1",
        img: "/assets/img/profile-omega.jpg",
        name: "developer",
        title: "omega5300",
        details: "main development",
        social: [
            {
                logo: logoGithub,
                color: "github",
                link: "https://github.com/omega5300",
            },
            {
                logo: logoInstagram,
                color: "instagram",
                link: "https://instagram.com/juliomixtreria",
            },
            {
                logo: logoCodepen,
                color: "codepen",
                link: "https://codepen.io/omega5300",
            },
            {
                logo: logoTiktok,
                color: "codepen",
                link: "https://www.tiktok.com/@juliomixtreria"
            }
        ]
    },
    {
        id: "member-2",
        img: "/assets/img/profile-MrRedu.jpeg",
        name: "ideas",
        title: "MrRedu",
        details: "ideas and watchers",
        social: [
            {
                logo: logoGithub,
                color: "github",
                link: "https://github.com/MrRedu",
            }
        ]
    },
    {
        id: "member-3",
        img: "",
        name: "bitly info idea",
        title: "vergiskarime",
        details: "ideas and watchers",
        social: [
            {
                logo: logoInstagram,
                color: "instagram",
                link: "https://github.com/MrRedu",
            }
        ]
    },
];

// omega5300 recomendations
const recomendations = [
    {
        name: "dorian designs",
        logo: logoYoutube,
        color: "youtube",
        link: "https://www.youtube.com/user/DorianDesigns"
    },
    {
        name: "bluuweb",
        logo: logoYoutube,
        color: "youtube",
        link: "https://www.youtube.com/user/Bluuweb"
    },
    {
        name: "fazt",
        logo: logoYoutube,
        color: "youtube",
        link: "https://www.youtube.com/channel/UCX9NJ471o7Wie1DQe94RVIg"
    },
    {
        name: "fernando herrera",
        logo: logoYoutube,
        color: "youtube",
        link: "https://www.youtube.com/channel/UCuaPTYj15JSkETGnEseaFFg"
    },
    {
        name: "leonidas esteban",
        logo: logoYoutube,
        color: "youtube",
        link: "https://www.youtube.com/user/LeonidasEsteban"
    },
    {
        name: "Doofy's Projects",
        logo: earthOutline,
        color: "primary",
        link: "https://dprojects.org"
    },
    {   
        name: "sailormoon_1995",
        logo: logoInstagram,
        color: "instagram",
        link: "https://www.instagram.com/sailormoon_1995"
    },
    {
        // next recomend npm version 1.0.9
        name: "lunanny",
        logo: logoTwitch,
        color: "twitch",
        link: "https://www.twitch.tv/lunanny"
    },
    {
        name: "dannyaegyo",
        logo: logoTwitch,
        color: "twitch",
        link: "https://www.twitch.tv/dannyaegyo"
    },
];

const nonolive = [
    {
        name: "⚔️GothspiceChann💰",
        link: "https://www.nonolive.com/14278329"
    },
    {
        name: "🌼PAPATYA❣SS🌼",
        link: "https://www.nonolive.com/"
    },
    {
        name: "Seyyahi Solist",
        link: "https://www.nonolive.com/28525468"
    },
    {
        name: "ᴹᴰ🐺☣ToniD'Ale",
        link: "https://www.nonolive.com/41145492"
    },
    {
        name: "🦎🌟Aidee💋🦜",
        link: "https://www.nonolive.com/31655138"
    },
    {
        name: "💋🧉Narki🐺Lili",
        link: "https://www.nonolive.com/28480328"
    }
];

// slide speed
const slideOpts = {
    speed: 200,
    slidesPerView: true, 
    loop: true,
};

export {
    regex,
    whoisRegex,
    Cards,
    recomendations,
    slideOpts,
    nonolive
};
