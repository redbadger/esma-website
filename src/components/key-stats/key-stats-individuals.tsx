import React from "react";

type KeyStatsIndividualsProps = {
  statClasses: any;
  ukSvg: string;
};

const KeyStatsIndividuals = ({
  statClasses,
  ukSvg,
}: KeyStatsIndividualsProps) => (
  <article className={statClasses("individual")}>
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
        Individuals who are <strong>"upwardly mobile"</strong> face considerable
        obstacles in getting in and getting on Britain’s professions, and high
        status professions remain dominated from higher socio-economic
        backgrounds.
      </p>
    </div>
    <p className="reference">
      Reference -{" "}
      <a
        href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/798404/SMC_State_of_the_Nation_Report_2018-19.pdf"
        target="_blank"
        rel="noreferrer"
      >
        State of the nation 2018/19
      </a>
    </p>
  </article>
);

export default KeyStatsIndividuals;
