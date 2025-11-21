type SetType = {
  id: string;
  name: string;
  logo?: string;
  symbol?: string;
  cardCount: {
    total: number;
    official: number;
  };
}[];

type BoosterList = {
  id: string;
  name: string;
  logo?: string;
  artwork_front?: string;
  artwork_back?: string;
}[];

interface Variants {
  normal?: boolean;
  reverse?: boolean;
  holo?: boolean;
  firstEdition?: boolean;
}

export interface TcgpCard {
  id: string;
  localId: string;

  name: string;
  image?: string;

  illustrator?: string;

  rarity: string;

  category: string;

  variants?: Variants;

  set: SetType;

  dexId?: number[];

  hp?: number;

  types?: string[];

  evolveFrom?: string;

  weight?: string;

  description?: string;

  level?: number | string;

  stage?: string;

  suffix?: string;

  item?: {
    name: string;
    effect: string;
  };

  abilities?: {
    type: string;
    name: string;
    effect: string;
  }[];

  attacks?: {
    cost?: Array<string>;
    name: string;
    effect?: string;
    damage?: string | number;
  }[];

  weaknesses?: {
    type: string;
    value?: string;
  }[];

  resistances?: {
    type: string;
    value?: string;
  }[];

  retreat?: number;

  effect?: string;

  trainerType?: string;

  energyType?: string;

  regulationMark?: string;

  legal: {
    standard: boolean;
    expanded: boolean;
  };

  boosters?: BoosterList;
}
