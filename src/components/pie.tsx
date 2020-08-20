import React from "react";
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

const Pie = ({
  stats,
  position,
  focus,
  blur,
  isActive,
}: {
  stats: Stat[];
  position: { x: number; y: number };
  focus: () => void;
  blur: () => void;
  isActive: boolean;
}) => {
  return (
    <svg
      viewBox="-2 -2 4 4"
      width="100"
      height="100"
      x={position.x - 25}
      y={position.y - 25}
      onClick={focus}
      onMouseEnter={focus}
      // onBlur={blur}
      // onMouseLeave={blur}
      style={{
        transform: isActive ? "translateY(-0.0625rem)" : null,
      }}
    >
      <filter id="shadow">
        <feDropShadow
          dx="-0.1"
          dy="0"
          stdDeviation="0.1"
          radius="0.5rem"
          color="rgba(184, 108, 305, 0.8)"
        />
      </filter>
      <g
        style={{
          transform: "rotate(-0.25turn)",
          transformOrigin: "0 0",
          cursor: "pointer",
          filter: isActive ? "url(#shadow)" : "none",
        }}
        opacity={isActive ? "1" : "0.7"}
      >
        {getPathsFromStats(stats)}
      </g>
    </svg>
  );
};

export default Pie;
