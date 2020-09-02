export type PillData = {
  name: string;
  href: string;
};

export type PillsProps = {
  pills: Array<PillData>;
  colorActive: string;
  currentPillIndex: number;
};
