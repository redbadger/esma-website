import React from "react";
import { KeyStatArticleProps } from "./types";
import PieOverlay from "./pie-overlay";
import Legend from "./legend";
import { css } from "@emotion/core";

const keyStatArticleCss = css`
  display: flex;
  width: 100vw;
  justify-content: center;
  background: white;
  height: 100%;

  article {
    display: grid;
    grid-template-columns: auto;
    width: 64rem;
  }

  @media screen and (min-width: 40rem) {
    article {
      grid-template-columns: auto auto;
    }
  }
`;

const KeyStatArticle = ({
  stats,
  h3,
  h4,
  summaryMain,
  legendKey,
  reference,
}: KeyStatArticleProps) => (
  <div css={keyStatArticleCss}>
    <article>
      <h3>{h3}</h3>
      <Legend legendDetails={legendKey} />
      <PieOverlay stats={stats} />
      <div className="summary">
        <h4>{h4}</h4>
        {summaryMain}
      </div>
      <p className="reference">
        Reference -{" "}
        <a href={reference.href} target="_blank" rel="noreferrer">
          {reference.name}
        </a>
        , {reference.figure}
      </p>
    </article>
  </div>
);

export default KeyStatArticle;
