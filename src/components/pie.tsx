import React from "react";
import { css } from "@emotion/core";
import { getPathDataForCircularBar } from "./maths-helpers";

let cumulativePercent = 0;

export type Stat = {
  number: number;
  colour: string;
  label: string;
};

const innerRatio = 0.5;

const statToPiePart = (stat: Stat, total: number) => {
  const statPercent = stat.number / total;
  const startTheta = cumulativePercent;
  cumulativePercent += statPercent;
  const endTheta = cumulativePercent;

  const pathData = getPathDataForCircularBar(
    innerRatio,
    1,
    startTheta,
    endTheta,
    1
  );

  return (
    <a href={"#" + stat.label} key={stat.label}>
      <path key={stat.label} d={pathData} fill={stat.colour}></path>
    </a>
  );
};

const getPathsFromStats = (stats: Stat[]) => {
  const total = stats.reduce((a, x) => a + x.number, 0);

  return stats.map(stat => statToPiePart(stat, total));
};

const pathStyles = css`
  a:hover {
    cursor: pointer;
  }
  a:hover path {
    fill: #3772ff;
  }
`;

const Pie = ({
  stats,
  position,
}: {
  stats: Stat[];
  position: { x: number; y: number };
}) => {
  return (
    <g width="50" height="50" x={position.x} y={position.y}>
      <svg viewBox="-1 -1 2 2" css={pathStyles}>
        <g style={{ transform: "rotate(-0.25turn)", transformOrigin: "0 0" }}>
          {getPathsFromStats(stats)}
        </g>
        <rect width="3" height="3" x="1" y="1" />
      </svg>
    </g>
  );
};

export default Pie;
