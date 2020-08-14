import React from "react";
import { KeyStatsCategories, ArticleProps } from "./types";
import { NorthEast, London } from "./individuals-stats";
import PieOverlay from "./pie-overlay";

const SocietyArticle = ({ statClasses, ukSvg }: ArticleProps) => (
  <article className={statClasses(KeyStatsCategories.Society)}>
    <h3>Performance levels of local authorities in each region</h3>
    <div className="key">
      <ul>
        <li>Bottom 20% of rankings</li>
        <li>20-40%</li>
        <li>40-60%</li>
        <li>60%-80%</li>
        <li>Top 20%</li>
      </ul>
    </div>
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
