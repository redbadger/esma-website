import { Stat } from "../../pie";
import { PieMapOverlayProps, LegendProps } from "../types";
import { UkRegions } from "./uk-regions";
const Business: {
  colours: { [key in JobType]: string };
  stats: { [x: string]: BusinessStat };
} = require("./business.json");

enum JobType {
  Professional = "Professional jobs",
  Other = "Other jobs",
}

type BusinessStat = {
  [key in JobType]: number;
};

const colours = Business.colours;

export const Key: LegendProps = Object.keys(colours).map(key => ({
  colour: colours[key],
  label: key,
}));

const dictToStat = (dict: BusinessStat): Stat[] =>
  Object.keys(dict).map((key: JobType) => ({
    label: key,
    number: dict[key],
    colour: colours[key],
  }));

const output = Object.keys(Business.stats).map(key => {
  const location = UkRegions[key];
  const keyOutput: PieMapOverlayProps = {
    pieStats: dictToStat(Business.stats[key]),
    ...location,
  };
  return keyOutput;
});

export const BusinessStats = output;
