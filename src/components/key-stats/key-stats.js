import React from "react";
import { css } from "@emotion/core";
import ukSvg from "./uk.svg";

const keyStatsCss = css``;

const KeyStats = () => (
  <section css={keyStatsCss}>
    <header>
      <h2>The national picture</h2>
      <p>
        Social mobility is about ensuring that a person’ occupation and income
        are not tied to where they started in life. It’s about fairness and
        equal opportunities for all.
      </p>
      <p>When this doesn’t happen, it affects everyone in the UK.</p>
    </header>
    <ul className="switcher">
      <li>
        <input type="radio" name="statToView" id="individual" checked />
        <label htmlFor="individual">Individual</label>
      </li>
      <li>
        <input type="radio" name="statToView" id="society" />
        <label htmlFor="society">Society</label>
      </li>
      <li>
        <input type="radio" name="statToView" id="businesses" />
        <label htmlFor="businesses">Businesses</label>
      </li>
    </ul>
    <article>
      <h3>
        Percentage of individuals from different socio-economic backgrounds in a
        professional occupation
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
          professions, and high status professions remain dominated from higher
          socio-economic backgrounds.
        </p>
      </div>
      <p className="reference">
        Reference -
        <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/798404/SMC_State_of_the_Nation_Report_2018-19.pdf">
          State of the nation 2018/19
        </a>
      </p>
    </article>
    <article>
      <h3></h3>
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
    <article>
      <h3></h3>
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
  </section>
);

export default KeyStats;
