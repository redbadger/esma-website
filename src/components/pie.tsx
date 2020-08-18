import React from "react";
import { css } from "@emotion/core";
import { getPathDataForCircularBar } from "./maths-helpers";

let cumulativePercent = 0;

export type Stat = {
  number: number;
  colour: string;
  label: string;
  metric: string;
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
    <g key={stat.label}>
      <title>
        {stat.label}, {stat.number}
      </title>
      <path key={stat.label} d={pathData} fill={stat.colour}></path>
    </g>
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
  &.active {
    filter: drop-shadow(0 0 0.5rem rgba(184, 108, 305, 0.8));
  }
  &.inactive {
    filter: opacity(0.5);
  }
`;

const Pie = ({
  stats,
  position,
  focus,
  blur,
  className,
}: {
  stats: Stat[];
  position: { x: number; y: number };
  focus: () => void;
  blur: () => void;
  className: string;
}) => {
  return (
    <svg
      viewBox="-1 -1 2 2"
      css={pathStyles}
      width="50"
      height="50"
      x={position.x}
      y={position.y}
      onClick={focus}
      // onBlur={blur}
      onMouseEnter={focus}
      // onMouseLeave={blur}
      className={className}
    >
      <g
        style={{
          transform: "rotate(-0.25turn)",
          transformOrigin: "0 0",
          cursor: "pointer",
        }}
      >
        {getPathsFromStats(stats)}
      </g>
    </svg>
  );
};

export default Pie;
