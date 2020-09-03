import React from "react";
import TimelineEntry from "./timeline-entry";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import { TimelineEntryData } from "./types";

const timelineGridStyles = css`
  width: 100%;
  margin-top: 4.5rem;
  display: grid;
  column-gap: 1.875rem;

  img {
    max-width: 100%;
  }

  ${mq(BreakPoint.md)} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq(BreakPoint.lg)} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mq(BreakPoint.xl)} {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

type TimelineGridProps = {
  entries: TimelineEntryData[];
};

const TimelineGrid = ({ entries }: TimelineGridProps) => {
  return (
    <div css={timelineGridStyles}>
      {entries.map((entry, i) => (
        <TimelineEntry
          key={i}
          title={entry.title}
          imageName={entry.imageName}
          description={entry.description}
          icon={entry.icon}
          destination={entry.destination}
          anchor={entry.anchor}
        />
      ))}
    </div>
  );
};

export default TimelineGrid;
