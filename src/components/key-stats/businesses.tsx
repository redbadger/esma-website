import React from "react";
import { KeyStatsCategories, ArticleProps } from "./types";

const BusinessArticle = ({ statClasses, ukSvg }: ArticleProps) => (
  <article className={statClasses(KeyStatsCategories.Businesses)}>
    <h3>Job growth in the UK since 2012</h3>
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
