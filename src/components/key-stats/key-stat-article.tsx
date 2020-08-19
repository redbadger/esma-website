import React from "react";
import { KeyStatArticleProps } from "./types";
import PieOverlay from "./pie-overlay";
import Legend from "./legend";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

const keyStatArticleCss = css`
  display: flex;
  width: 100vw;
  justify-content: center;
  background: white;
  height: 100%;
  padding: 0 0.75rem;

  ${mq(BreakPoint.md)} {
    padding: 0 2.5rem;
  }

  article {
    display: grid;
    grid-template-columns: auto;
    width: 64rem;
    grid-row-gap: 1.5rem;
    grid-column-gap: 1.875rem;

    h3 {
      font-size: 1.25rem;
      text-align: left;
      font-weight: 600;
      line-height: 1.3;
    }
  }

  ${mq(BreakPoint.sm)} {
    article {
      grid-template-columns: auto auto;
    }
  }

  .key {
    grid-column: 1;
    text-align: left;
    width: 100%;
    p {
      text-transform: uppercase;
      font-weight: 600;
      margin: 0.25rem 0;
    }
    ul {
      text-align: left;
    }
    li {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.88;
      span {
        display: inline-block;
        height: 1.875rem;
        width: 0.75rem;
        margin-right: 0.5rem;
        background-color: currentColor;
      }
    }
  }

  .reference {
    text-align: left;
    color: var(--midnight);
  }
  .reference a {
    text-decoration: underline;
  }
  .summary {
    border: 1px solid var(--colour-secondary-gray);
    margin: auto 0;
    text-align: left;
    h4 {
      text-transform: uppercase;
      font-weight: 600;
    }
    h4,
    p {
      margin: 0.75rem;
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
