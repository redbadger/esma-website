import React from "react";
import CommitmentsEntry from "./commitments-entry";
import { css } from "@emotion/core";

import { mq, BreakPoint } from "../../util/mq";
import commitmentsData from "./commitments-data";

const commitmentsStyles = css`
  color: var(--midnight);
  background-color: var(--taupe);
  text-align: center;
  padding: 2.25rem 0.75rem;
  padding-bottom: 0;
  height: fit-content;

  ${mq(BreakPoint.md)} {
    padding: 4.5rem 2.4375rem;
  }

  ${mq(BreakPoint.lg)} {
    padding: 4.5rem 10.3125rem;
  }

  h2 {
    ${mq(BreakPoint.md)} {
      font-size: 2rem;
      margin-bottom: 4.5rem;
    }
    font-size: 1.25rem;
    line-height: 2.75rem;
    font-weight: 600;
    margin-bottom: 2.25rem;

  }

  a {
    display: block;

    ${mq(BreakPoint.md)} {
      display: inline;
    }

    border: 1px solid var(--midnight);
    padding: 12px 108px;
    line-height: 1.875rem;
    font-weight: 700;
    white-space: nowrap;
    margin-bottom: 2.25rem;
  }
`;

const Commitments = () => {
  return (
    <section css={commitmentsStyles}>
      <h2>Our Commitments</h2>
      {commitmentsData.map((entry, index) => {
        return (
          <CommitmentsEntry
            key={index}
            content={entry.content}
            image={entry.image}
            shiftRight={entry.shiftRight}
          />
        );
      })}
    </section>
  );
};

export default Commitments;
