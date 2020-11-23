import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

const researchQuoteStyles = css`
  background-color: var(--taupe);
  justify-content: center;

  padding-left: 10%;
  padding-right: 10%;
  padding-top: 1.125rem;

  .opening-quote {
    position: relative;
    right: 1.5rem;
  }

  .opening-quote::before {
    content: open-quote;
    font-size: 2.5rem;
    font-weight: 700;
  }

  .closing-quote::after {
    content: close-quote;
    font-size: 2.5rem;
    font-weight: 700;
    margin-left: 0.25rem;
    vertical-align: -1.1rem;
  }

  .quote-content {
    margin-top: -3.1rem;
  }

  p {
    margin: 0;
    display: inline;
  }
`;

const containerStyles = css`
  ${mq(BreakPoint.lg)} {
    grid-column: 1 / -1;
  }
  color: var(--midnight);

  .quote-source {
    margin-top: 0.75rem;
    margin-bottom: 0;
    span,
    a {
      font-size: 1rem;
      line-height: 1.875rem;
    }
  }
`;

type ResearchQuoteProps = {
  children: React.ReactNode;
  source: React.ReactNode;
};

const ResearchQuote = ({ children, source }: ResearchQuoteProps) => {
  return (
    <div css={containerStyles}>
      <div css={researchQuoteStyles}>
        <span className="opening-quote quote-mark" />
        <div className="quote-content">
          {children}
          <span className="closing-quote quote-mark" />
        </div>
      </div>
      <p className="quote-source">{source}</p>
    </div>
  );
};

export default ResearchQuote;
