// card info
const Cards: Card[] = [
  {
    id: "logo",
    img: "/assets/img/logo-mobile.png",
    name: "app logo",
    title: "stack-analyze",
    details: `version: 1.8.0`,
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
  }
];

// omega5300 recomendations
const recomendations: SocialMedia[] = [
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
    name: "chun_li1995",
    logo: logoInstagram,
    color: "instagram",
    link: "https://www.instagram.com/chun_li1995"
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
];

const startWithHttp = /https?:\/\//g;

export {
  Cards,
  recomendations,
  startWithHttp
};
