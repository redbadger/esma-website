import React from "react";
import { css } from "@emotion/core";
import Pie from "../pie";
import UkOverlay from "./uk-overlay";
import { PieMapOverlayProps } from "./types";

const pieCss = css`
  position: relative;

  @media screen and (min-width: 40rem) {
    grid-row-start: 1;
    grid-column: 2;
    grid-row-end: 5;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  aside.active {
    display: block;
    grid-row-start: 1;
    grid-row-end: 1;
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
    border: 1px solid var(--gray);
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

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const PieLegend = ({
  s,
  isActive,
}: {
  s: PieMapOverlayProps;
  isActive: boolean;
}) => {
  const max = Math.max(...s.pieStats.map(x => x.number));
  return (
    <aside key={s.name} className={isActive ? "active" : "inactive"}>
      <h4>{s.name}</h4>
      <ul>
        {s.pieStats
          .filter(x => x.number > 0)
          .map(stat => (
            <li key={stat.label}>
              <span
                css={css`
                  width: ${(stat.number / max) * 10}rem;
                  background: ${stat.colour};
                `}
                title={stat.label}
              >
                &nbsp;
              </span>
              <span>
                {numberWithCommas(stat.number)}&nbsp;{stat.metric}
              </span>
            </li>
          ))}
      </ul>
    </aside>
  );
};

const PieOverlay = ({ stats }: { stats: PieMapOverlayProps[] }) => {
  const [currentStat, setCurrentStat] = React.useState(stats[0].name);

  const isCurrentStat = (statName: string): boolean => currentStat === statName;

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
                isActive={isCurrentStat(stat.name)}
                focus={() => setCurrentStat(stat.name)}
                blur={() => setCurrentStat("")}
              />
            ))}
          </g>
        </UkOverlay>
      </picture>
      {stats.map(s => PieLegend({ s, isActive: isCurrentStat(s.name) }))}
    </div>
  );
};

export default PieOverlay;
