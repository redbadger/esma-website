import { Stat as PieStat } from "../pie";

export enum KeyStatsCategories {
  Individual = "individual",
  Society = "society",
  Businesses = "businesses",
}

export type ArticleProps = {
  statClasses: (x: string) => string;
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
