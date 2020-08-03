import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    label: "2018",
    number: 51,
    colour: "Green",
  },
  {
    label: "2019",
    number: 60,
    colour: "CornflowerBlue",
  },
  {
    label: "2020",
    number: 60,
    colour: "Red",
  },
];

const total = stats.reduce((a, x) => a + x.number, 0);
console.log(total);

let cumulativePercent = 0;

const getCoordinatesForPercent = percent => {
  console.log(percent);
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);

  return [x, y];
};

const paths = stats.map(stat => {
  const statPercent = stat.number / total;
  const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
  cumulativePercent += statPercent;
  const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
  const largeArcFlag = statPercent > 0.5 ? 1 : 0;
  const pathData = [
    `M ${startX} ${startY}`, // Move
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
    `L 0 0`, // Line
  ].join(" ");

  return (
    <a href={stat.label}>
      <path key={stat.label} d={pathData} fill={stat.colour}></path>
    </a>
  );
});

const pathStyles = css`
  path:hover {
    fill: black;
    cursor: pointer;
  }
`;

const Pie = () => {
  return (
    <>
      <svg
        viewBox="-1 -1 2 2"
        style={{ transform: "rotate(-0.25turn)" }}
        css={pathStyles}
      >
        {paths}
      </svg>
    </>
  );
};

export default Pie;
