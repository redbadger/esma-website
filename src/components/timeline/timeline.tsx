import React from "react";
import TimelineHeading from "./timeline-heading";
import { css } from "@emotion/core";
import TimelineGrid from "./timeline-grid";
import { mq, BreakPoint } from "../../util/mq";
import TimelineLegend from "./timeline-legend";
import TimelineHero from "./timeline-hero";
import { timelineIcons } from "../common/icons";

const timelineStyles = css`
  padding-top: 9rem;

  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 2.625rem;

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
      "Children from low socio-economic status families perform 11 months behind their peers from middle-income families in terms of their readiness for school at age 5.",
    icon: timelineIcons.earlyYears,
    destination: "/life-stage-research/early-years/",
    color: "aqua",
  },
  {
    title: "School years",
    imageName: "timeline-school-years.jpg",
    description:
      "Educational inequality is persistent and widespread. Pupils’ attainment is closely associated with their parents’ class background and is a factor of where they happen to live.",
    icon: timelineIcons.schoolYears,
    destination: "/life-stage-research/school-years/",
    color: "yellow",
  },
  {
    title: "Further Education",
    imageName: "timeline-further-education.jpg",
    description:
      "Successive governments have invested heavily in graduates and have largely overlooked the importance of vocational routes for social equality.",
    icon: timelineIcons.furtherEducation,
    destination: "/life-stage-research/further-education/",
    color: "midnight",
  },
  {
    title: "Higher Education",
    imageName: "timeline-higher-education.jpg",
    description:
      "Far from narrowing the gaps, higher education can reinforce inequalities and entrench both class and White racial privilege.",
    icon: timelineIcons.higherEducation,
    destination: "/life-stage-research/higher-education/",
    color: "cobalt",
  },
  {
    title: "Working Life",
    imageName: "timeline-working-life.jpg",
    description: "There are inequalities across the labour market based on socio-economic background, ethnicity and gender (and complex intersections that can intensify the experience of deprivation).",
    icon: timelineIcons.workingLife,
    destination: "/life-stage-research/working-life/",
    color: "copperfield",
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
