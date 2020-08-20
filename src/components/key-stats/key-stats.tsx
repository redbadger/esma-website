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
  margin-bottom: 7rem;
  padding: 0;
  text-align: center;
  overflow: hidden;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    max-width: 57.5rem;
    text-align: center;
    margin-bottom: 0.75rem;
    margin-top: 2.25rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
  }

  p {
    font-size: 1.125rem;
    font-weight: 300;
    max-width: 57.5rem;
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

    &.active {
      background: var(--midnight);
      color: white;
    }

    > input {
      display: none;
    }
    > label {
      font-weight: 700;
      font-size: 1.125rem;
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
      margin-top: 2.25rem;
      li {
        flex-shrink: 1;
        flex-basis: 10rem;
      }
    }
  }

  picture > img,
  picture > svg {
    width: 100%;
    height: auto;
  }
`;

const screenNumberForCategory: { [key in KeyStatsCategories]: number } = {
  individual: 0,
  society: 1,
  businesses: 2,
};

const KeyStats = () => {
  let [statToView, setStatToView] = React.useState(
    KeyStatsCategories.Individual
  );

  let articleContainerCss = css`
    .articleContainer {
      position: relative;
      display: flex;
      width: 300vw;
      transform: translateX(${-100 * screenNumberForCategory[statToView]}vw);
      margin-top: 2.25rem;
      transition: transform 0.75s ease-in-out;
    }
  `;

  function changeViewStat(stat: KeyStatsCategories) {
    setStatToView(stat);
  }

  return (
    <section css={[keyStatsCss, colours, articleContainerCss]}>
      <header>
        <h2>The national picture</h2>
        <p>
          Social mobility is about ensuring that a person&apos;s occupation,
          income, and social status are not tied to where they started in life.
          It&apos;s about fairness and equal opportunities for all. When this
          doesn’t happen, it affects everyone in the UK.
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
        <IndividualArticle />
        <SocietyArticle />
        <BusinessArticle />
      </div>
    </section>
  );
};

export default KeyStats;
