// card info
const Cards: Card[] = [
  {
    id: "logo",
    img: "/assets/img/logo-mobile.png",
    name: "app logo",
    title: "stack-analyze",
    details: `version: 2.1.0`,
    social: [
      {
        logo: logoGithub,
        color: "github",
        link: "https://github.com/stack-analyze/stack-analyze-mobile",
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
  }
];

// omega5300 recomendations
const recomendations: SocialMedia[] = [
  {
    name: "dorian designs (recommended)",
    logo: logoYoutube,
    color: "youtube",
    link: "https://www.youtube.com/@DorianDesings"
  },
  {
    name: "bluuweb (recommended)",
    logo: logoYoutube,
    color: "youtube",
    link: "https://www.youtube.com/@Bluuweb"
  },
  {
    name: "fazt (recommended)",
    logo: logoYoutube,
    color: "youtube",
    link: "https://www.youtube.com/@FaztTech"
  },
  {
    name: "fernando herrera (recommended)",
    logo: logoYoutube,
    color: "youtube",
    link: "https://www.youtube.com/@DevTalles"
  },
  {
    name: "leonidas esteban (neutral)",
    logo: logoYoutube,
    color: "youtube",
    link: "https://www.youtube.com/@LeonidasEsteban"
  },
  {
    name: "melodikaktus",
    logo: logoInstagram,
    color: "instagram",
    link: "https://www.instagram.com/melodikaktus"
  },
  {
    name: "seyyahikaktus",
    logo: logoInstagram,
    color: "instagram",
    link: "https://www.instagram.com/seyyahikaktus"
  },
  {
    // next recomend npm version 1.0.9
    name: "lunanny",
    logo: logoTwitch,
    color: "twitch",
    link: "https://www.twitch.tv/lunanny"
  },
  {
    name: "dannyagii",
    logo: logoTwitch,
    color: "twitch",
    link: "https://www.twitch.tv/dannyagii"
  },
  {
    name: "miss stepfi polestar",
    logo: logoTwitch,
    color: "twitch",
    link: "https://www.twitch.tv/stepfi_polestar"
  },
];

const startWithHttp = /https?:\/\//g;

export {
  Cards,
  recomendations,
  startWithHttp
};
