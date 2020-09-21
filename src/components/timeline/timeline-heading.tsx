import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

const timelineHeadingStyles = css`
  text-align: center;
  line-height: 2.125rem;
  color: var(--midnight);
  p {
    margin-top: 2.125rem;
    font-size: 1.125rem;
    font-weight: 300;
  }

  margin-top: -2.8rem;

  ${mq(BreakPoint.md)} {
    /* move into the space vacated by the TimelineLegend */
    margin-top: -6.5rem;
  }

  ${mq(BreakPoint.lg)} {
    margin-top: -8rem;
  }

  ${mq(BreakPoint.xl)} {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const TimelineHeading = () => {
  return (
    <div css={timelineHeadingStyles}>
      <p>
        We develop a quick to navigate, up to date, research base of the social
        mobility issues across a persons lifetime. Everyone can use this to
        guide impactful action based on common understandings of the problem we
        are trying to solve.
      </p>
    </div>
  );
};

export default TimelineHeading;
