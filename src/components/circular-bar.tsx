import React from "react";
import { css } from "@emotion/core";

export type CircularBarStat = {
  percent: number;
  colour: string;
  label: string;
};
type Coordinate = {
  x: number;
  y: number;
};

type Arc = {
  start: Coordinate;
  end: Coordinate;
  radius: number;
};

type CircularBar = {
  inner: Arc;
  outer: Arc;
};

const getCircularBar = (
  min: number,
  max: number,
  start: number,
  end: number,
  percentRatio: number
): CircularBar => {
  // inner arc points are determined by min, start and min, end
  const inner = getArc(start, end, min);
  // with the remaining available space
  const space = max - min;
  // we fit the percentage of the bar
  const fit = space * percentRatio;
  // and the outer arc is determined by the fit plus the min
  const outerRadius = min + fit;
  const outer = getArc(start, end, outerRadius);
  return {
    inner,
    outer,
  };
};

const getArc = (start: number, end: number, radius: number): Arc => {
  return {
    start: getCoordinate(start, radius),
    end: getCoordinate(end, radius),
    radius,
  };
};

const getCoordinate = (percent: number, radius?: number): Coordinate => {
  radius = radius || 1;
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);

  return { x: x * radius, y: y * radius };
};

const innerRatio = 0.4;

const statToCircularBarPart = (
  stat: CircularBarStat,
  index: number,
  count: number
) => {
  const start = index / count;
  const end = (index + 1) / count;
  const bar = getCircularBar(innerRatio, 1, start, end, stat.percent);

  const largeArcFlag = 1 / count > 0.5 ? 1 : 0;

  const pathData = [
    `M ${bar.outer.start.x} ${bar.outer.start.y}`, // Move
    `A ${bar.outer.radius} ${bar.outer.radius} 0 ${largeArcFlag} 1 ${bar.outer.end.x} ${bar.outer.end.y}`, // Arc Clockwise
    `L ${bar.inner.end.x} ${bar.inner.end.y}`, // Line
    `A ${bar.inner.radius} ${bar.inner.radius} 0 ${largeArcFlag} 0 ${bar.inner.start.x} ${bar.inner.start.y}`, // Inner Arc Anti-Clockwise
  ].join(" ");

  return (
    <a href={"#" + stat.label}>
      <path key={stat.label} d={pathData} fill={stat.colour}></path>
    </a>
  );
};

const getPathsFromStats = (stats: CircularBarStat[]) =>
  stats.map((stat, index, array) =>
    statToCircularBarPart(stat, index, array.length)
  );

const pathStyles = css`
  a:hover {
    cursor: pointer;
  }
  a:hover path {
    fill: grey;
  }
`;

const CircularBar = ({ stats }) => {
  return (
    <>
      <svg
        viewBox="-1 -1 2 2"
        style={{ transform: "rotate(-0.25turn)" }}
        css={pathStyles}
      >
        <g id="axes">
          <path
            d={`M ${innerRatio} 0 L 1 0`}
            stroke="black"
            strokeWidth="0.01"
          ></path>
        </g>
        {getPathsFromStats(stats)}
      </svg>
    </>
  );
};

export default CircularBar;
