import { Stat as PieStat } from "../pie";
import { PieMapOverlayProps, LegendProps } from "./types";

// Pentile: like Percentile or Decile, but for fifths
enum Pentile {
  First = "Bottom 20% of rankings",
  Second = "20-40%",
  Third = "40-60%",
  Fourth = "60-80%",
  Fifth = "Top 20%",
}

// type ColourLegend = {
//   [key in Pentile]: string;
// };
type Stat = {
  [key in Pentile]: number;
};

let colours = {};
colours[Pentile.First] = "#00007f";
colours[Pentile.Second] = "#6565ff";
colours[Pentile.Third] = "#fdeada";
colours[Pentile.Fourth] = "#d99694";
colours[Pentile.Fifth] = "#953734";

export const Key: LegendProps = Object.keys(colours).map(key => ({
  colour: colours[key],
  label: key,
}));

const dictToStat = (dict: { [x: string]: number }): PieStat[] =>
  Object.keys(dict).map(key => ({
    label: key,
    number: dict[key],
    colour: colours[key],
  }));

const northEast = {};
northEast[Pentile.First] = 40;
northEast[Pentile.Second] = 13;
northEast[Pentile.Third] = 2;
northEast[Pentile.Fourth] = 5;
northEast[Pentile.Fifth] = 6;

const london = {};
london[Pentile.First] = 0;
london[Pentile.Second] = 0;
london[Pentile.Third] = 0;
london[Pentile.Fourth] = 2;
london[Pentile.Fifth] = 30;

export const London: PieMapOverlayProps = {
  pieStats: dictToStat(london),
  name: "London",
  position: { x: 260, y: 470 },
};

export const NorthEast: PieMapOverlayProps = {
  pieStats: dictToStat(northEast),
  name: "North East",
  position: { x: 240, y: 300 },
};
