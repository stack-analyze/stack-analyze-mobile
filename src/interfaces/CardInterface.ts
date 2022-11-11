export type SocialMedia = {
  name?: string;
  logo: string;
  color: string;
  link: string;
};

export interface Card {
  id: string;
  img: string;
  title: string;
  name: string;
  details: string;
  social: SocialMedia[]
}