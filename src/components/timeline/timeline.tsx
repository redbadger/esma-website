import React from "react";
import TimelineHeading from "./timeline-heading";
import { css } from "@emotion/core";
import TimelineGrid from "./timeline-grid";
import { mq, BreakPoint } from "../../util/mq";
import TimelineLegend from "./timeline-legend";
import TimelineHero from "./timeline-hero";
import { timelineIcons } from '../common/icons';

const timelineStyles = css`
  padding-top: 9rem;

  padding-left: 1rem;
  padding-right: 1rem;

  ${mq(BreakPoint.md)} {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  ${mq(BreakPoint.lg)} {
    padding-top: 4.5rem;
  }

  ${mq(BreakPoint.xl)} {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`;

const lifeStages = [
  {
    title: "Early years",
    imageName: "timeline-early-development.jpg",
    description:
      "The time between birth and primary school is a critical time for a child’s social, emotional, cognitive and communication development.",
    icon: timelineIcons.earlyYears,
    destination: "/issues-chronology/early-years/overview",
    color: "aqua",
    anchor: "early-years",
  },
  {
    title: "School years",
    imageName: "timeline-school-years.jpg",
    description:
      "The school system has been seen as a vital tool to support social mobility, enabling equality of opportunity amongst children and young people from lower socio-economic backgrounds.",
    icon: timelineIcons.schoolYears,
    destination: "/issues-chronology/school-years/overview",
    color: "yellow",
    anchor: "school-years",
  },
  {
    title: "Further Education",
    imageName: "timeline-further-education.jpg",
    description:
      "There has been a significant decline in adult participation in further education over the last ten years.",
    icon: timelineIcons.furtherEducation,
    destination: "/issues-chronology/further-education/overview",
    color: "midnight",
    anchor: "further-life",
  },
  {
    title: "Higher Education",
    imageName: "timeline-higher-education.jpg",
    description:
      "The higher education system has been perceived as an engine of social mobility, with graduates benefiting from higher salaries and career resilience.",
    icon: timelineIcons.higherEducation,
    destination: "/issues-chronology/higher-education/overview",
    color: "cobalt",
    anchor: "higher-education",
  },
  {
    title: "Working Life",
    imageName: "timeline-working-life.jpg",
    description: "Waiting on copy from The Bridge Group",
    icon: timelineIcons.workingLife,
    destination: "/issues-chronology/working-life/overview",
    color: "copperfield",
    anchor: "working-life",
  },
];

const Timeline = () => {
  return (
    <>
      <TimelineHero />
      <div css={timelineStyles}>
        <TimelineLegend entries={lifeStages} />
        <TimelineHeading />
        <TimelineGrid entries={lifeStages} />
      </div>
    </>
  );
};

export default Timeline;
