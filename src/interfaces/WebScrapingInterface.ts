export interface HashFunctions {
  [key: string]: () => void
};

export interface WebScraping {
  metaType?: string;
  metaValue?: string;
  imageURL?: string;
  imageTitle?: string;
  headingTag?: string;
  headingText?: string;
  citeTag?: string;
  citeLink?: any;
  citeText?: string | null;
  thCol?: number;
  thData?: string | null;
  rowID?: any;
  colID?: number;
  colData?: any;
  linkPath?: string;
  linkText?: string | null;
}
