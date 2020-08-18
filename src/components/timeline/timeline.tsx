import React from "react";
import TimelineHeading from "./timeline-heading";
import { css } from "@emotion/core";
import { Colors } from "../../util/colors";
import TimelineGrid from "./timeline-grid";
import { mq, BreakPoint } from "../../util/mq";

const timelineStyles = css`
  background-color: ${Colors.taupe};
  padding-top: 9rem;
  ${mq(BreakPoint.lg)} {
    padding-top: 4.5rem;
  }
`;

const Timeline = () => {
  return (
    <div css={timelineStyles}>
      <TimelineHeading />
      <TimelineGrid />
    </div>
  );
};

export default Timeline;
