import React from "react";
import { css } from "@emotion/core";
import { MDXProvider } from "@mdx-js/react";
import { mq, BreakPoint } from "../../util/mq";

const furtherReadingStyles = css`
  border: 1px solid;
  border-radius: 0.625rem;
  padding: 1.5rem 0.75rem;
  grid-column: 1 / -1;
  display: grid;
  ${mq(BreakPoint.md)} {
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem 6rem;
  }
  column-gap: 13.75rem;
  a {
    text-decoration: underline;
  }
`;

const Flattened = ({ children }) => children;

const Bulleted = props => {
  const bulletStyles = css`
    display: flex;
    align-items: top;
    line-height: 1.875rem;
    margin-bottom: 1rem;
    .further-reading-bullet-point {
      min-width: 1rem;
      height: 0.375rem;
      display: inline-block;
      margin-right: 0.75rem;
      margin-top: 0.75rem;
      border-radius: 4px;
    }
  `;

  return (
    <div role="listitem" css={bulletStyles}>
      <span className="further-reading-bullet-point" />
      <span className="bullet-point-text" {...props} />
    </div>
  );
};

const components = {
  ul: Flattened,
  li: Bulleted,
};

const FurtherReading = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div
        className="further-reading-container"
        role="list"
        css={furtherReadingStyles}
      >
        {children}
      </div>
    </MDXProvider>
  );
};

export default FurtherReading;
