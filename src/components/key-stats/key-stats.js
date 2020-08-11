import React from "react";
import { css } from "@emotion/core";
import ukSvg from "./uk.svg";

const keyStatsCss = css`
  position: relative;
  /* necessary to clear the hero hanging
  - ideally, the hero should clear its own space
  */
  top: 7rem;
  padding: 0;
  text-align: center;

  h2 {
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 600;
    width: 100vw;
    text-align: center;
    margin-bottom: 0.75rem;
    margin-top: 2.25rem;
  }

  p {
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
    padding: 0.75rem;
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
  }
  article {
    display: block;
    outline: 2px solid green;
    transition: 0.5s all ease-in-out;
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
`;

const KeyStats = () => {
  let [statToView, setStatToView] = React.useState("individual");
  let [statToMove, setStatToMove] = React.useState("");
  function changeViewStat(event) {
    // Move the current one
    setStatToMove(statToView);
    console.log(event.target.value);
    setStatToView(event.target.value);
  }

  function statClasses(statName) {
    return [
      statToView === statName ? "active" : "inactive",
      statToMove === statName ? "move" : "",
    ].join(" ");
  }

  return (
    <section css={keyStatsCss}>
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
        <li className={statToView === "individual" ? "active" : "inactive"}>
          <input
            type="radio"
            name="statToView"
            id="individual"
            value="individual"
            checked={statToView === "individual"}
            onChange={changeViewStat}
          />
          <label htmlFor="individual">Individual</label>
        </li>
        <li className={statToView === "society" ? "active" : "inactive"}>
          <input
            type="radio"
            name="statToView"
            id="society"
            value="society"
            checked={statToView === "society"}
            onChange={changeViewStat}
          />
          <label htmlFor="society">Society</label>
        </li>
        <li className={statToView === "businesses" ? "active" : "inactive"}>
          <input
            type="radio"
            name="statToView"
            id="businesses"
            value="businesses"
            checked={statToView === "businesses"}
            onChange={changeViewStat}
          />
          <label htmlFor="businesses">Businesses</label>
        </li>
      </ul>
      <div className="articleContainer">
        <article className={statClasses("individual")}>
          <h3>
            Percentage of individuals from different socio-economic backgrounds
            in a professional occupation
          </h3>
          <div className="key">
            <ul>
              <li>Working class background</li>
              <li>Intermediate background</li>
              <li>Professional background</li>
            </ul>
          </div>
          <picture>
            <img src={ukSvg} alt="a blank map of the UK" />
          </picture>
          <div className="summary">
            <h4>Barriers to Success</h4>
            <p>
              Individuals who are <strong>"upwardly mobile"</strong> face
              considerable obstacles in getting in and getting on Britain’s
              professions, and high status professions remain dominated from
              higher socio-economic backgrounds.
            </p>
          </div>
          <p className="reference">
            Reference -
            <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/798404/SMC_State_of_the_Nation_Report_2018-19.pdf">
              State of the nation 2018/19
            </a>
          </p>
        </article>
        <article className={statClasses("society")}>
          <h3>Performance levels of local authorities in each region</h3>
          <div className="key">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <picture>
            <img src={ukSvg} alt="a blank map of the UK" />
          </picture>
          <div className="summary">
            <h4></h4>
            <p></p>
          </div>
          <p className="reference"></p>
        </article>
        <article
          className={statToView === "businesses" ? "active" : "inactive"}
        >
          <h3>Job growth in the UK since 2012</h3>
          <div className="key">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <picture>
            <svg></svg>
          </picture>
          <div className="summary">
            <h4></h4>
            <p></p>
          </div>
          <p className="reference"></p>
        </article>
      </div>
    </section>
  );
};

export default KeyStats;
