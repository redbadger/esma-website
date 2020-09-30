export type PillData = {
  name: string;
  href: string;
};

export type PillsProps = {
  pills: Array<PillData>;
  currentPillIndex: number;
};

export type ResearchPageMetaData = {
  order: number;
  parent: string;
  title: string;
  bgImageName: string;
};


