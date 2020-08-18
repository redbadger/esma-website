import { Stat as PieStat } from "../pie";

export enum KeyStatsCategories {
  Individual = "individual",
  Society = "society",
  Businesses = "businesses",
}

export type ArticleProps = {
  statClasses: (x: KeyStatsCategories) => string;
};

export type KeyStatArticleProps = {
  statClasses: (x: KeyStatsCategories) => string;
  category: KeyStatsCategories;
  stats: PieMapOverlayProps[];
  h3: string;
  h4: string;
  summaryMain: JSX.Element;
  legendKey: LegendProps;
  reference: Reference;
};

type Reference = {
  href: string;
  name: string;
  figure: string;
};

/// PieProps
/// position: x, y,
/// denotes where on our 300 * 591 map of the UK to put the pie chart
export type PieMapOverlayProps = {
  position: { x: number; y: number };
  pieStats: PieStat[];
  name: string;
};

export type LegendProps = {
  label: string;
  colour: string;
}[];
