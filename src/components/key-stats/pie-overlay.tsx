import React from "react";
import { css } from "@emotion/core";
import Pie, { Stat } from "../pie";
import UkOverlay from "./uk-overlay";
import { getPathDataForCircularBar } from "../maths-helpers";

const pieCss = css`
  width: 60%;
  picture {
    position: absolute;
    top: 0;
    left: 0;
    height: 10%;
    width: 10%;
  }

  aside {
    position: absolute;
    top: 32%;
    left: 32%;
    text-align: left;
    background: white;
    border: 1px solid var(--colour-secondary-gray);
    width: 40%;
    h4 {
      text-align: left;
      margin: 0;
      font-weight: 600;
    }
    li {
      display: flex;
      align-items: center;

      span {
        display: inline-block;
        padding: 0.1rem;
      }
    }
  }
`;

const PieOverlay = ({ stats, name }: { stats: Stat[]; name: string }) => (
  <picture css={pieCss}>
    <UkOverlay>
      <g>
        <Pie stats={stats} position={{ x: 40, y: 50 }} />
      </g>
    </UkOverlay>
  </picture>
  // <aside style={{ display: "none" }}>
  //   <h4>{name}</h4>
  //   <ul>
  //     {stats.map(stat => (
  //       <li key={stat.label}>
  //         <span
  //           css={css`
  //             width: ${stat.number}%;
  //             height: 0.5em;
  //             background: ${stat.colour};
  //           `}
  //           title={stat.label}
  //         >
  //           &nbsp;
  //         </span>
  //         <span>{stat.number}%</span>
  //       </li>
  //     ))}
  //   </ul>
  // </aside>
);

export default PieOverlay;
