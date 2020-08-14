import { Stat } from "../pie";
import { PieMapOverlayProps } from "./types";

const northEastStats: Stat[] = [
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

const londonStats: Stat[] = [
  {
    label: "No University-educated parent at home",
    number: 67,
    colour: "var(--colour-secondary-aqua)",
  },
  {
    label: "Two",
    number: 13,
    colour: "var(--colour-secondary-cobalt)",
  },
  {
    label: "Three",
    number: 89,
    colour: "var(--colour-secondary-yellow)",
  },
];

export const London: PieMapOverlayProps = {
  pieStats: londonStats,
  name: "London",
  position: { x: 240, y: 450 },
};

export const NorthEast: PieMapOverlayProps = {
  pieStats: northEastStats,
  name: "North East",
  position: { x: 240, y: 300 },
};
