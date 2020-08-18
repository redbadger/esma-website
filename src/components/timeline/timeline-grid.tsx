import React from "react";
import TimelineEntry from "./timeline-entry";
import EarlyDevIcon from "../../svg/blocks.svg";
import SchoolYearsIcon from "../../svg/pencil.svg";
import FurtherEduIcon from "../../svg/book.svg";
import HigherEduIcon from "../../svg/cap.svg";
import WorkingLifeIcon from "../../svg/briefcase.svg";
import { css } from "@emotion/core";
import TimelineEntryAdditional from "./timeline-entry-additional";
import { mq, BreakPoint } from "../../util/mq";

const timelineGridStyles = css`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
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

  ${mq(BreakPoint.md)} {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  ${mq(BreakPoint.xl)} {
    padding-left: 10rem;
    padding-right: 10rem;
  }
`;

const entries = [
  {
    title: "Early development",
    imageName: "timeline-early-development.jpg",
    description:
      "The time between birth and primary school is a critical time for a child’s social, emotional, cognitive and communication development.",
    icon: EarlyDevIcon,
  },
  {
    title: "School years",
    imageName: "timeline-school-years.jpg",
    description:
      "The school system has been seen as a vital tool to support social mobility, enabling equality of opportunity amongst children and young people from lower socio-economic backgrounds.",
    icon: SchoolYearsIcon,
  },
  {
    title: "Further Education",
    imageName: "timeline-further-education.jpg",
    description:
      "There has been a significant decline in adult participation in further education over the last ten years.",
    icon: FurtherEduIcon,
  },
  {
    title: "Higher Education",
    imageName: "timeline-higher-education.jpg",
    description:
      "The higher education system has been perceived as an engine of social mobility, with graduates benefiting from higher salaries and career resilience.",
    icon: HigherEduIcon,
  },
  {
    title: "Working Life",
    imageName: "timeline-working-life.jpg",
    description: "Waiting on copy from The Bridge Group",
    icon: WorkingLifeIcon,
  },
];

const TimelineGrid = () => {
  return (
    <div css={timelineGridStyles}>
      {entries.map((entry, i) => (
        <TimelineEntry
          key={i}
          title={entry.title}
          imageName={entry.imageName}
          description={entry.description}
          icon={entry.icon}
        />
      ))}
      <TimelineEntryAdditional />
    </div>
  );
};

export default TimelineGrid;
