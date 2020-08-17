import { Stat } from "../../pie";
import { PieMapOverlayProps, LegendProps } from "../types";
import { UkRegions } from "./uk-regions";

enum Background {
  WorkingClass = "Working class background",
  Intermediate = "Intermediate background",
  Professional = "Professional background",
}

const colours = {};
colours[Background.WorkingClass] = "var(--colour-secondary-aqua)";
colours[Background.Intermediate] = "var(--colour-secondary-cobalt)";
colours[Background.Professional] = "var(--colour-secondary-yellow)";

export const Key: LegendProps = Object.keys(colours).map(key => ({
  colour: colours[key],
  label: key,
}));

const dictToStat = (dict: { [x: string]: number }): Stat[] =>
  Object.keys(dict).map(key => ({
    label: key,
    number: dict[key],
    colour: colours[key],
  }));

const northEast = {};
northEast[Background.WorkingClass] = 37;
northEast[Background.Intermediate] = 20;
northEast[Background.Professional] = 43;

const london = {};
london[Background.WorkingClass] = 67;
london[Background.Intermediate] = 13;
london[Background.Professional] = 89;

export const London: PieMapOverlayProps = {
  pieStats: dictToStat(london),
  name: "London",
  position: { x: 240, y: 450 },
};

console.log({ UkRegions });

export const NorthEast: PieMapOverlayProps = {
  pieStats: dictToStat(northEast),
  ...UkRegions["northEast"],
};

export const IndividualStats = [NorthEast, London];
