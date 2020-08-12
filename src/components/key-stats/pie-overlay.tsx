import React from "react";
import { css } from "@emotion/core";
import Pie, { Stat } from "../pie";

const PieOverlay = ({ stats }: { stats: Stat[] }) => (
  <>
    <picture
      css={css`
        position: absolute;
        top: 50%;
        left: 55%;
        width: 10%;
      `}
    >
      <Pie stats={stats} />
    </picture>
    <div
      css={css`
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
      `}
    >
      <h4>North East</h4>
      <ul>
        {stats.map(stat => (
          <li>
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
    </div>
  </>
);

export default PieOverlay;
