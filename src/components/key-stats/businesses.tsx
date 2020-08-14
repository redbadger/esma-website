import React from "react";
import { KeyStatsCategories, ArticleProps } from "./types";
import PieOverlay from "./pie-overlay";
import { NorthEast, London } from "./individuals-stats";

const BusinessArticle = ({ statClasses }: ArticleProps) => (
  <article className={statClasses(KeyStatsCategories.Businesses)}>
    <h3>Job growth in the UK since 2012</h3>
    <div className="key">
      <ul>
        <li>All jobs</li>
        <li>Professional jobs</li>
      </ul>
    </div>
    <PieOverlay stats={[NorthEast, London]} />
    <div className="summary">
      <h4>Inequality In The Uk</h4>
      <p>
        The UK is one of the most unequal countries in Europe, with levels of
        socio-economic inequality comparable to the USA. The richest half
        receive 80% of all incomes in the UK. Leaving the poorest half who
        receive the remaining 20%.
      </p>
      <p>
        Studies show that should British businesses attain even average levels
        of social mobility, the economy would be boosted by around £170 billion
        in total.
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

export default BusinessArticle;
