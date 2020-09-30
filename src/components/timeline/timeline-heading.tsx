import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

const timelineHeadingStyles = css`
  text-align: center;
  line-height: 2.125rem;
  color: var(--midnight);

  a {
    text-decoration: underline;
    font-weight: 600;
  }

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
        <a href="https://www.thebridgegroup.org.uk/">The Bridge Group</a>{" "}
        has developed an up-to-date summary of social inequality across the life course which is easy to explore via the links below.
        This will help you to understand the barriers to social mobility and the nature of the problem we are trying to solve.
        The <Link to="exec-summary">Exec Summary</Link> also gives a high level overview and tips for using this site.
      </p>
    </div>
  );
};

export default TimelineHeading;
