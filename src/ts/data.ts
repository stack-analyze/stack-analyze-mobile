// import icons
import { 
    logoGithub,
    logoInstagram,
    logoCodepen,
    logoTwitch,
    logoYoutube,
    earthOutline
} from "ionicons/icons";

// card info
export const Cards = [
    {
        id: "logo",
        img: "/assets/img/logo-mobile.png",
        name: "app logo",
        title: "stack-analyze",
        details: "version: 1.0.0",
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
        logo: logoTwitch,
        color: "twitch",
        link: "https://www.twitch.tv/doriandesings"
    },
    {
        name: "bluuweb",
        logo: logoYoutube,
        color: "youtube",
        link: "https://www.youtube.com/user/Bluuweb"
    },
    {
        name: "Doofy's Projects",
        logo: earthOutline,
        color: "primary",
        link: "https://windowsminios.org"
    },
    {
        // next recomend version 1.0.9
        name: "lunanny",
        logo: logoInstagram,
        color: "instagram",
        link: "https://www.instagram.com/lu.nanny/"
    }
]

// slide speed
export const slideOpts = {
    speed: 200,
};
