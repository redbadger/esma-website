import React from "react";
import { css } from "@emotion/core";
import {
  getPathDataForCircularBar,
  getArc,
  getCartesianCoordinate,
} from "./maths-helpers";
import { CircularBarStat } from "./circular-bar";

export type SplitCircularBarStat = {
  innerStats: CircularBarStat[];
  label: string;
};

const innerRatio = 0.32;

const statToCircularBarPart = (
  stat: CircularBarStat,
  index: number,
  count: number
) => {
  const start = index / count;
  const end = (index + 1) / count;

  const pathData = getPathDataForCircularBar(
    innerRatio,
    1,
    start,
    end,
    stat.percent
  );

  return (
    <a href={"#" + stat.label}>
      <path key={stat.label} d={pathData} fill={stat.colour}></path>
    </a>
  );
};

const getPathsFromStats = (stats: SplitCircularBarStat[]) =>
  stats.map((splitStat, index, array) => {
    const label = getCartesianCoordinate((index + 0.5) / array.length, 1);
    return (
      <g id={splitStat.label}>
        <text
          y={-label.x}
          x={label.y - 0.08}
          css={css`
            transform: rotate(0.25turn);
          `}
        >
          {splitStat.label}
        </text>
        {splitStat.innerStats
          .sort((a, b) => b.percent - a.percent)
          .map(stat => {
            stat.label = splitStat.label + stat.label;
            return statToCircularBarPart(stat, index, array.length);
          })}
      </g>
    );
  });

const pathStyles = css`
  transform: rotate(-0.25turn);
  flex-basis: 500px;

  a:hover {
    cursor: pointer;
  }
  a:hover path {
    fill: #3772ff;
  }
  text {
    font-family: Montserrat, sans-serif;
    font-size: 0.08px;
    font-weight: 900;
    color: #2d3142;
  }
`;

const makeAxisAtTurn = (numerator: number, denominator: number) => {
  return (
    <path
      d={`M 0 -${Math.max(innerRatio - 0.1, 0)} L 0 -1`}
      stroke="#d3d3d3"
      strokeWidth="0.01"
      style={{ transform: "rotate(" + numerator / denominator + "turn)" }}
    ></path>
  );
};

const SplitCircularBar = ({ stats }) => {
  return (
    <>
      <svg viewBox="-1 -1 2 2" css={pathStyles}>
        {getPathsFromStats(stats)}
        <g id="axes" style={{ transform: "rotate(0.25turn)" }}>
          {stats.map((_: any, index: number, array: any[]) =>
            makeAxisAtTurn(index, array.length)
          )}
          <text y={-(innerRatio + 0.01)} x="0.025">
            0%
          </text>
          <text y={-(0.98 + innerRatio) / 2} x="0.025">
            50%
          </text>
          <text y={-0.91} x="0.025">
            100%
          </text>
        </g>
      </svg>
    </>
  );
};

export default SplitCircularBar;
