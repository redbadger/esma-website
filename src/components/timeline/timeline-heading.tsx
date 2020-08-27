import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

const timelineHeadingStyles = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: var(--midnight);
    font-size: 2rem;
    line-height: 2.75rem;
    font-weight: 600;
  }

  p {
    color: var(--midnight);
    font-size: 1rem;
    line-height: 1.875rem;
    margin-right: 2.5rem;
    margin-left: 2.5rem;
  }

  ${mq(BreakPoint.lg)} {
    p {
      width: 56rem;
    }
  }

  a {
    text-decoration: underline;
    font-weight: 600;
  }
`;

const TimelineHeading = () => {
  return (
    <div css={timelineHeadingStyles}>
      <h1>A lifetime of social inequality</h1>
      <p>
        We’ve commissioned research from{" "}
        <a href="https://www.thebridgegroup.org.uk">The Bridge Group</a> to
        build the evidence base needed to make change happen. This research
        highlights some of the significant ways in which socio-economic
        background can intersect with other protected characteristics during
        someones lifetime to contribute to weak social mobility in the UK.
      </p>
    </div>
  );
};

export default TimelineHeading;
