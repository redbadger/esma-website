import React from "react";
import { css } from "@emotion/core";

import IndividualArticle from "./individuals";
import SocietyArticle from "./society";
import BusinessArticle from "./businesses";
import { KeyStatsCategories } from "./types";

const colours = require("./colours.css");

const ukSvg = require("./uk.svg") as string;

const keyStatsCss = css`
  position: relative;
  /* necessary to clear the hero hanging
  - ideally, the hero should clear its own space
  */
  top: 7rem;
  padding: 0;
  text-align: center;

  h2,
  h3 {
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 600;
    margin-bottom: 0.75rem;
    margin-top: 2.25rem;
  }
  h2 {
    width: 100vw;
    text-align: center;
  }
  h3 {
    text-align: left;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  p,
  h4 {
    margin: 1rem 0.75rem;
  }

  .articleContainer {
    position: absolute;
    width: 300vw;
  }
  ul.switcher {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.75rem;
  }
  ul.switcher > li {
    padding: 0;
    border: 1px var(--midnight) solid;
    border-collapse: collapse;
    font-weight: 700;

    &.active {
      background: var(--midnight);
      color: white;
    }

    > input {
      display: none;
    }
    > label {
      display: block;
      width: 100%;
      padding: 0.75rem;
      cursor: pointer;
    }
  }
  article {
    display: block;
    outline: 2px solid green;
    transition: left 0.5s ease-in-out;
    width: 100vw;
    position: absolute;
    background: white;
    height: 100%;
  }
  article.inactive {
    left: 100vw;
  }
  article.active {
    left: 0vw;
  }
  article.move {
    left: -100vw;
  }
  .reference {
    text-align: left;
  }
  .reference a {
    text-decoration: underline;
  }
  .summary {
    border: 1px solid var(--colour-secondary-gray);
    margin: 0.75rem;
    text-align: left;
    h4 {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 0.875rem;
    }
  }

  .key li {
    ::before {
      content: "–";
      font-weight: bold;
      padding: 0 0.5rem;
      font-size: 2rem;
      line-height: 1rem;
      vertical-align: text-bottom;
    }
    &:first-of-type::before {
      color: var(--colour-secondary-aqua);
    }
  }
  picture > img,
  picture > svg {
    width: 100%;
    height: auto;
  }
`;

const KeyStats = () => {
  let [statToView, setStatToView] = React.useState(
    KeyStatsCategories.Individual
  );
  let [statToMove, setStatToMove] = React.useState(KeyStatsCategories[""]);

  function changeViewStat(stat: KeyStatsCategories) {
    // Move the current one
    setStatToMove(statToView);
    setStatToView(stat);
  }

  function statClasses(statName: KeyStatsCategories) {
    return [
      statToView === statName ? "active" : "inactive",
      statToMove === statName ? "move" : "",
    ].join(" ");
  }

  return (
    <section css={[keyStatsCss, colours]}>
      <header>
        <h2>The national picture</h2>
        <p>
          Social mobility is about ensuring that a person&apos;s occupation and
          income are not tied to where they started in life. It&apos;s about
          fairness and equal opportunities for all.
        </p>
        <p>When this doesn’t happen, it affects everyone in the UK.</p>
      </header>
      <ul className="switcher">
        {Object.keys(KeyStatsCategories).map(stat => (
          <li
            className={
              statToView === KeyStatsCategories[stat] ? "active" : "inactive"
            }
            key={stat}
          >
            <input
              type="radio"
              name="statToView"
              id={stat}
              checked={statToView === stat}
              onChange={() => changeViewStat(KeyStatsCategories[stat])}
            />
            <label htmlFor={stat}>{stat}</label>
          </li>
        ))}
      </ul>
      <div className="articleContainer">
        <IndividualArticle statClasses={statClasses} ukSvg={ukSvg} />
        <SocietyArticle statClasses={statClasses} ukSvg={ukSvg} />
        <BusinessArticle statClasses={statClasses} ukSvg={ukSvg} />
      </div>
    </section>
  );
};

export default KeyStats;
