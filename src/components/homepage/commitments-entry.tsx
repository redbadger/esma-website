import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

const commitmentsEntryStyles = css`
  display: grid;
  grid-template-columns: 1fr;

  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 5.25rem;
  text-align: left;

  margin-bottom: 2.25rem;
  h3 {
    font-size: 1.125rem;
    line-height: 2.125rem;
  }

  svg {
    max-width: 100%;
  }

  ${mq(BreakPoint.md)} {
    grid-template-columns: 5fr 1fr 5fr;

    .image {
      width: 100%;
      &:nth-of-type(2n + 1) {
        justify-self: end;
      }
      &:nth-of-type(2n + 3) {
        justify-self: start;
      }
      ${[0, 1, 2, 3].map(
        n => `
        &:nth-of-type(${2 * n + 1}) {
          grid-row: ${n + 1};
        }`
      )}
    }

    .content {
      &:nth-of-type(4n) {
        grid-column: 2 / span 2;
      }
      &:nth-of-type(4n + 2) {
        grid-column: 1 / span 2;
      }
      ${[1, 2, 3, 4].map(
        n => `
        &:nth-of-type(${2 * n}) {
          grid-row: ${n};
        }`
      )}
    }
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .homepage-image-wrapper {
    width: 100%;
    max-width: 19rem;
    max-height: 17.75rem;
    ${mq(BreakPoint.lg)} {
      width: 100%;
      max-width: 25rem;
      max-height: 23.75rem;
    }
  }

  svg {
    max-height: 19.5rem;
    max-width: 19.5rem;
  }

  .coming-soon {
    font-weight: 600;
    margin-top: -1.5rem;
    display: block;
    margin-bottom: 2.25rem;
  }

  p {
    margin-bottom: 2.25rem;
  }

  h3 {
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
`;

type CommitmentsEntryProps = {
  image: React.ReactElement;
  content: React.ReactElement;
};

const CommitmentsEntry = ({ image, content }: CommitmentsEntryProps) => {
  return (
    <>
      <div className="image">{image}</div>
      <div className="content">{content}</div>
    </>
  );
};

const CommitmentsGrid = ({ commitmentsData }) => {
  return (
    <div css={commitmentsEntryStyles}>
      {commitmentsData.map((entry, index) => {
        return (
          <CommitmentsEntry
            key={index}
            content={entry.content}
            image={entry.image}
          />
        );
      })}
    </div>
  );
};

export default CommitmentsGrid;
