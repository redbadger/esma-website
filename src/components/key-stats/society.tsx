import React from "react";
import { KeyStatsCategories, ArticleProps } from "./types";

const SocietyArticle = ({ statClasses, ukSvg }: ArticleProps) => (
  <article className={statClasses(KeyStatsCategories.Society)}>
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
);

export default SocietyArticle;
