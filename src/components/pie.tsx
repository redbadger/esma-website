import React from "react";
import { css } from "@emotion/core";

let cumulativePercent = 0;

export type Stat = {
  number: number;
  colour: string;
  label: string;
};

const getCoordinatesForPercent = percent => {
  console.log(percent);
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);

  return [x, y];
};

const innerRatio = 0.5;

const statToPiePart = (stat: Stat, total: number) => {
  const statPercent = stat.number / total;
  const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
  const [innerStartX, innerStartY] = [startX * innerRatio, startY * innerRatio];
  cumulativePercent += statPercent;
  const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
  const [innerEndX, innerEndY] = [endX * innerRatio, endY * innerRatio];
  const largeArcFlag = statPercent > 0.5 ? 1 : 0;
  const pathData = [
    `M ${startX} ${startY}`, // Move
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc Clockwise
    `L ${innerEndX} ${innerEndY}`, // Line
    `A ${innerRatio} ${innerRatio} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY}`, // Inner Arc Anti-Clockwise
  ].join(" ");

  return (
    <a href={"#" + stat.label}>
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
    fill: grey;
  }
`;

const Pie = ({ stats }: { stats: Stat[] }) => {
  return (
    <>
      <svg
        viewBox="-1 -1 2 2"
        style={{ transform: "rotate(-0.25turn)" }}
        css={pathStyles}
      >
        {getPathsFromStats(stats)}
      </svg>
    </>
  );
};

export default Pie;
