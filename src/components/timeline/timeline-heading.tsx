import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

const timelineHeadingStyles = css`
  text-align: center;
  line-height: 2.125rem;
  color: var(--midnight);
  p {
    margin-top: 2.125rem;
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
        ESMA has commissioned Nik Miller and Sarah Dauncey of The Bridge Group
        to draw together all the academic research on issues which inhibit an
        individual’s employability/career progression and plot against an
        individual’s lifecycle from cradle to retirement. The research provides
        give a holistic understanding of the all issues which impact on a
        person’s employability and progression prospects caused by low income.
      </p>
      <p>
        ESMA recognises that not every person follows the same path to and
        through the world of work hence the Issues Chronology can be navigated
        sequentially or by reference to a person’s stage in life.
      </p>
    </div>
  );
};

export default TimelineHeading;
