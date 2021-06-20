/* eslint-disable no-useless-escape */

// import icons
import {
    logoGithub,
    logoInstagram,
    logoCodepen,
    logoTwitch,
    logoYoutube,
    earthOutline
} from "ionicons/icons";

export const regex = "[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?";
export const whoisRegex = "(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?";

// card info
export const Cards = [
    {
        id: "logo",
        img: "/assets/img/logo-mobile.png",
        name: "app logo",
        title: "stack-analyze",
        details: `version: 1.2.0`,
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
];

// omega5300 recomendations
export const recomendations = [
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
        name: "gothspicechannel",
        logo: logoInstagram,
        color: "instagram",
        link: "https://instagram.com/gothspicechannel"
    },
    {   
        name: "sailormoon_1995",
        logo: logoInstagram,
        color: "instagram",
        link: "https://www.instagram.com/sailormoon_1995"
    },
    {
        name: "seyyahi solist",
        logo: logoInstagram,
        color: "instagram",
        link: "https://www.instagram.com/seyyahisolist"
    },
    {
        name: "alpicorniorex",
        logo: logoInstagram,
        color: "instagram",
        link: "https://www.instagram.com/alpicorniorex"
    },
    {
        name: "toni_stream",
        logo: logoInstagram,
        color: "instagram",
        link: "https://www.instagram.com/toni_stream"
    },
    {
        name: "celirodriguez12",
        logo: logoInstagram,
        color: "instagram",
        link: "https://www.instagram.com/celirodriguez12"
    },
    {
        // next recomend npm version 1.1.2 || 1.1.3
        name: "aidee",
        logo: logoInstagram,
        color: "instagram",
        link: "https://instagram.com/beautybyaidee"
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
    }
]

// slide speed
export const slideOpts = {
    speed: 200,
};
