import { Stat as PieStat } from "../../pie";
import { PieMapOverlayProps, LegendProps } from "../types";
import { UkRegions } from "./uk-regions";
const Society: {
  [x: string]: SocietyStat;
} = require("./society.json");

type SocietyStat = {
  [key in Pentile]: number;
};

// Pentile: like Percentile or Decile, but for fifths
enum Pentile {
  First = "Bottom 20% of rankings",
  Second = "20-40%",
  Third = "40-60%",
  Fourth = "60-80%",
  Fifth = "Top 20%",
}

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

const dictToStat = (dict: SocietyStat): PieStat[] =>
  Object.keys(dict).map(key => ({
    label: key,
    number: dict[key],
    colour: colours[key],
  }));

const output = Object.keys(Society).map(key => {
  const location = UkRegions[key];
  const keyOutput: PieMapOverlayProps = {
    pieStats: dictToStat(Society[key]),
    ...location,
  };
  return keyOutput;
});

export const SocietyStats: PieMapOverlayProps[] = output;
