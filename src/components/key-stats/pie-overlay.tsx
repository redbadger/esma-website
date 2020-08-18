import React from "react";
import { css } from "@emotion/core";
import Pie from "../pie";
import UkOverlay from "./uk-overlay";
import { PieMapOverlayProps } from "./types";

const pieCss = css`
  position: relative;
  order: 2;

  aside.active {
    display: block;
  }
  aside.inactive {
    display: none;
  }
  aside {
    position: absolute;
    top: 0;
    right: 0;
    text-align: left;
    background: white;
    border: 1px solid var(--colour-secondary-gray);
    width: 20rem;
    padding: 0.75rem;
    h4 {
      text-align: left;
      margin: 0;
      font-weight: 600;
    }
    li {
      display: flex;
      align-items: center;

      span:first-of-type {
        height: 0.625rem;
        margin-right: 0.5rem;
      }

      span {
        display: inline-block;
        padding: 0.1rem;
      }
    }
  }
`;

const PieLegend = ({
  s,
  statClass,
}: {
  s: PieMapOverlayProps;
  statClass: (statName: string) => string;
}) => {
  const max = Math.max(...s.pieStats.map(x => x.number));
  return (
    <aside key={s.name} className={statClass(s.name)}>
      <h4>{s.name}</h4>
      <ul>
        {s.pieStats.map(stat => (
          <li key={stat.label}>
            <span
              css={css`
                width: ${(stat.number / max) * 15}rem;
                background: ${stat.colour};
              `}
              title={stat.label}
            >
              &nbsp;
            </span>
            <span>
              {stat.number}&nbsp;{stat.metric}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const PieOverlay = ({ stats }: { stats: PieMapOverlayProps[] }) => {
  const [currentStat, setCurrentStat] = React.useState("");

  const statClass = (statName: string): string =>
    currentStat === statName ? "active" : "inactive";

  return (
    <div css={pieCss}>
      <picture>
        <UkOverlay>
          <g>
            {stats.map(stat => (
              <Pie
                stats={stat.pieStats}
                position={stat.position}
                key={stat.name}
                className={statClass(stat.name)}
                focus={() => setCurrentStat(stat.name)}
                blur={() => setCurrentStat("")}
              />
            ))}
          </g>
        </UkOverlay>
      </picture>
      {stats.map(s => PieLegend({ s, statClass }))}
    </div>
  );
};

export default PieOverlay;
