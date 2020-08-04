import React from "react";
import { css } from "@emotion/core";
import { getPathDataForCircularBar } from "./maths-helpers";

export type CircularBarStat = {
  percent: number;
  colour: string;
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
      <path key={stat.label} d={pathData} fill="rgba(55, 114, 255, 0.3)"></path>
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
    fill: #3772ff;
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
