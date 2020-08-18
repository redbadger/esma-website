import React from "react";
import { css } from "@emotion/core";

import IndividualArticle from "./individuals";
import SocietyArticle from "./society";
import BusinessArticle from "./businesses";
import { KeyStatsCategories } from "./types";

const colours = require("./colours.css");

const keyStatsCss = css`
  position: relative;
  /* necessary to clear the hero hanging
  - ideally, the hero should clear its own space
  */
  top: 7rem;
  padding: 0;
  text-align: center;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2,
  h3 {
    line-height: 1.3;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  h2 {
    font-size: 2rem;
    max-width: 57.5rem;
    text-align: center;
    margin-top: 2.25rem;
  }
  h3 {
    font-size: 1.25rem;
    text-align: left;
    margin-right: 1rem;
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 300;
    max-width: 57.5rem;
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
  @media screen and (min-width: 40rem) {
    ul.switcher {
      flex-direction: row;
      justify-content: center;
      li {
        flex-shrink: 1;
        flex-basis: 16%;
      }
    }
  }

  .reference {
    text-align: left;
  }
  .reference a {
    text-decoration: underline;
  }
  .summary {
    border: 1px solid var(--colour-secondary-gray);
    margin: 0.75rem 0;
    text-align: left;
    h4 {
      text-transform: uppercase;
      font-weight: 600;
    }
    h4,
    p {
      margin: 1rem 0.75rem;
    }
  }

  .key {
    grid-column: 1;
    text-align: left;
    width: 100%;
    p {
      text-transform: uppercase;
      font-weight: 600;
      margin: 0.25rem 0;
    }
    ul {
      text-align: left;
    }
    li {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.88;
      span {
        display: inline-block;
        height: 1.875rem;
        width: 0.75rem;
        margin-right: 0.5rem;
        background-color: currentColor;
      }
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
    if (statToView !== stat) {
      setStatToMove(statToView);
    }
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
          fairness and equal opportunities for all. When this doesn’t happen, it
          affects everyone in the UK.
        </p>
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
        <IndividualArticle statClasses={statClasses} />
        <SocietyArticle statClasses={statClasses} />
        <BusinessArticle statClasses={statClasses} />
      </div>
    </section>
  );
};

export default KeyStats;
