import React from "react";
import { KeyStatsCategories, ArticleProps } from "./types";
import { NorthEast, London, Key } from "./society-stats";
import PieOverlay from "./pie-overlay";
import Legend from "./legend";

const SocietyArticle = ({ statClasses, ukSvg }: ArticleProps) => (
  <article className={statClasses(KeyStatsCategories.Society)}>
    <h3>Performance levels of local authorities in each region</h3>
    <Legend legendDetails={Key} />
    <PieOverlay stats={[NorthEast, London]} />
    <div className="summary">
      <h4>Social Mobility Cold Spots</h4>
      <p>
        England&apos;s major cities are failing to be the places of opportunity
        that they should be. Many of the richest places in England are doing
        worse for their disadvantaged children than places that are much poorer.
      </p>
    </div>
    <p className="reference">
      Reference -{" "}
      <a
        href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/496103/Social_Mobility_Index.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Social Mobility Index
      </a>
    </p>
  </article>
);

export default SocietyArticle;
