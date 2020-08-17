import React from "react";
import { ArticleProps, KeyStatsCategories } from "./types";
import { NorthEast, London, Key } from "./individuals-stats";
import PieOverlay from "./pie-overlay";
import Legend from "./legend";

const IndividualsArticle = ({ statClasses }: ArticleProps) => (
  <article className={statClasses(KeyStatsCategories.Individual)}>
    <h3>
      Percentage of individuals from different socio-economic backgrounds in a
      professional occupation
    </h3>
    <Legend legendDetails={Key} />
    <PieOverlay stats={[NorthEast, London]} />
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

export default IndividualsArticle;
