import React from "react";
import { css } from "@emotion/core";
import Pie, { Stat } from "../pie";
import UkOverlay from "./uk-overlay";
import { getPathDataForCircularBar } from "../maths-helpers";

const pieCss = css`
  position: relative;
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
  <div css={pieCss}>
    <picture>
      <UkOverlay>
        <g>
          <Pie stats={stats} position={{ x: 40, y: 50 }} />
        </g>
      </UkOverlay>
    </picture>
    <aside>
      <h4>{name}</h4>
      <ul>
        {stats.map(stat => (
          <li key={stat.label}>
            <span
              css={css`
                width: ${stat.number}%;
                height: 0.5em;
                background: ${stat.colour};
              `}
              title={stat.label}
            >
              &nbsp;
            </span>
            <span>{stat.number}%</span>
          </li>
        ))}
      </ul>
    </aside>
  </div>
);

export default PieOverlay;
