export type PillData = {
  name: string;
  href: string;
};

export type PillsProps = {
  pills: Array<PillData>;
  colorActive: string;
  currentPillIndex: number;
};

export type ResearchPageMetaData = {
  order: number;
  parent: string;
  title: string;
  color: string;
  bgImageName: string;
  footnotes: FootNoteData[];
};

export type FootNoteData = {
  id: string;
  text: string;
  destination: string;
};

