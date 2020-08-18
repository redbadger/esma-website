import { Stat as PieStat } from "../../pie";
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

enum JobTypeRaw {
  Pro = "pro",
  All = "all",
}

type BusinessStat = {
  [key in JobTypeRaw]: number;
};

export const Key: LegendProps = Object.keys(JobType).map(key => ({
  colour: Business.colours[JobType[key]],
  label: JobType[key],
}));

console.log({ Key });

const getPieStat = (businessStat: BusinessStat): PieStat[] => {
  return [
    {
      label: JobType.Professional,
      number: businessStat[JobTypeRaw.Pro],
      colour: Business.colours[JobType.Professional],
      metric: "jobs",
    },
    {
      label: JobType.Other,
      number: businessStat[JobTypeRaw.All] - businessStat[JobTypeRaw.Pro],
      colour: Business.colours[JobType.Other],
      metric: "jobs",
    },
  ];
};

const output = Object.keys(Business.stats).map(region => {
  const location = UkRegions[region];
  const keyOutput: PieMapOverlayProps = {
    pieStats: getPieStat(Business.stats[region]),
    ...location,
  };
  return keyOutput;
});

export const BusinessStats = output;
