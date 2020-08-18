import { Stat as PieStat } from "../../pie";
import { PieMapOverlayProps, LegendProps } from "../types";
import { UkRegions } from "./uk-regions";
const Society: {
  colours: { [key in Quintile]: string };
  stats: SocietyStat;
} = require("./society.json");

type SocietyStat = {
  [key in Quintile]: number;
};

// Quintile: like Percentile or Decile, but for fifths
enum Quintile {
  First = "Bottom 20%",
  Second = "20-40%",
  Third = "40-60%",
  Fourth = "60-80%",
  Fifth = "Top 20% of rankings",
}

const colours = Society.colours;

export const Key: LegendProps = Object.keys(colours).map(key => ({
  colour: colours[key],
  label: key,
}));

const dictToStat = (dict: SocietyStat): PieStat[] =>
  Object.keys(dict).map(key => ({
    label: key,
    number: dict[key],
    colour: colours[key],
    metric: "authorities",
  }));

const output = Object.keys(Society.stats).map(key => {
  const location = UkRegions[key];
  const keyOutput: PieMapOverlayProps = {
    pieStats: dictToStat(Society.stats[key]),
    ...location,
  };
  return keyOutput;
});

export const SocietyStats: PieMapOverlayProps[] = output;
