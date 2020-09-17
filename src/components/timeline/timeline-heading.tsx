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
        Here you can find out what the critical issues are across a persons
        lifetime; how disadvantage can build from early years if we don't do
        something different. The Bridge Group have sifted through a huge volume
        of research on social mobility to bring you an easy to read summary for
        each life stage. The first step to solving a problem is understanding
        it. Dive in, explore and join our newsletter.
      </p>
    </div>
  );
};

export default TimelineHeading;
