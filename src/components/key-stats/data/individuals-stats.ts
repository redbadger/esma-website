import { Stat } from "../../pie";
import { PieMapOverlayProps, LegendProps } from "../types";
import { UkRegions } from "./uk-regions";
const Individual: {
  colours: { [key in Background]: string };
  stats: { [x: string]: IndividualStat };
} = require("./individuals.json");

enum Background {
  WorkingClass = "Working class background",
  Intermediate = "Intermediate background",
  Professional = "Professional background",
}

type IndividualStat = {
  [key in Background]: number;
};

const colours = Individual.colours;

export const Key: LegendProps = Object.keys(colours).map(key => ({
  colour: colours[key],
  label: key,
}));

const dictToStat = (dict: IndividualStat): Stat[] =>
  Object.keys(dict).map((key: Background) => ({
    label: key,
    number: dict[key],
    colour: colours[key],
    metric: "%",
  }));

const output = Object.keys(Individual.stats).map(key => {
  const location = UkRegions[key];
  const keyOutput: PieMapOverlayProps = {
    pieStats: dictToStat(Individual.stats[key]),
    ...location,
  };
  return keyOutput;
});

export const IndividualStats = output;
