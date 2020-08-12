import { CircularBarStat } from "../circular-bar";
import { Stat } from "../pie";

export const NorthEast: Stat[] = [
  {
    label: "No University-educated parent at home",
    number: 37,
    colour: "var(--colour-secondary-aqua)",
  },
  {
    label: "Two",
    number: 20,
    colour: "var(--colour-secondary-cobalt)",
  },
  {
    label: "Three",
    number: 43,
    colour: "var(--colour-secondary-yellow)",
  },
];

export const London: CircularBarStat[] = [
  {
    label: "University-educated parent at home",
    percent: 0.96,
    colour: "#ffeab4",
  },
];
