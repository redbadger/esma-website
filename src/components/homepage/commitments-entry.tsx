import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import {
  CommitmentsEntryProps,
  CommitmentsGridProps,
} from "./commitments-data";

const commitmentsEntryStyles = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);

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
    grid-auto-flow: dense;

    .image {
      width: 100%;
      display: flex;
      align-items: center;

      &:nth-of-type(4n + 1) {
        grid-column: 3;
        justify-content: end;
      }
      &:nth-of-type(4n + 3) {
        grid-column: 1;
        justify-content: start;
      }
    }

    .content {
      grid-column-end: span 2;
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

const CommitmentsEntry = ({ image, content }: CommitmentsEntryProps) => {
  return (
    <>
      <div className="image">{image}</div>
      <div className="content">{content}</div>
    </>
  );
};

const CommitmentsGrid = ({ commitmentsData }: CommitmentsGridProps) => {
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
