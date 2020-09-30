import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

const footnoteStyles = css`
  ${mq(BreakPoint.lg)} {
    grid-column: 1 / span 2;
  }

  font-size: 1rem;

  h3 {
    margin-top: 4.5rem;
    font-size: 1.25rem;
  }

  a {
    text-decoration: underline;
    line-height: 1.875rem;
    margin-bottom: 0.75rem;
  }

  ol {
    counter-reset: custom-counter;
    list-style: none;
  }

  ol li {
    counter-increment: custom-counter;
  }

  ol li:before {
    content: counter(custom-counter);
    margin-right: 1.5rem;
  }
`;

interface Props {}

const Footnotes = ({ children }) => {
  return (
    <div css={footnoteStyles} id="footnotes">
      <h3>Footnotes</h3>
      {children}
    </div>
  );
};

export default Footnotes;
