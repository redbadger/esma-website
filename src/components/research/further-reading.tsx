import React from "react";
import { css } from "@emotion/core";
import { MDXProvider } from "@mdx-js/react";

const furtherReadingStyles = css`
  border: 1px solid;
  border-radius: 0.625rem;
  padding: 1.5rem 6rem;
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 13.75rem;
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
