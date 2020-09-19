import React from "react";
import { Link } from "gatsby";
import ActivityMapSVG from "../../svg/activity-map.svg";
import HomepageImage from "./homepage-image";

const commitmentsData: CommitmentsGridProps = [
  {
    content: (
      <>
        <h3>Life stages research</h3>
        <p>
          Create a consolidated and easily accessible appraisal of the existing
          academic research relating to the issues affecting an individual’s
          social mobility from cradle to retirement.
        </p>
        <Link to="/life-stage-research">Read research</Link>
      </>
    ),
    image: <HomepageImage imageName="life-stage-research.png" />,
  },
  {
    content: (
      <>
        <h3>Activity Heat Map</h3>
        <p>
          Conduct a review of Business, State and Third Sector efforts across
          the UK to combat the issues identified in Life Stages Research and
          produce an open source digital heat map to enable users of the ESMA
          site to identify how they can collaborate with existing provision to
          maximise impact.
        </p>
        <span className="coming-soon">Coming September 2021</span>
        <Link to="/activity-map">Find out more</Link>
      </>
    ),
    image: <ActivityMapSVG />,
  },
  {
    content: (
      <>
        <h3>Best Practice</h3>
        <p>
          Conduct an operational appraisal of the organisations and initiatives
          mapped in the Activity Heat Map and suggest how they could increase
          operational efficiency through collaboration locally and nationally.
        </p>
        <span className="coming-soon">Coming September 2021</span>
        <Link to="/operational-review">Find out more</Link>
      </>
    ),
    image: <HomepageImage imageName="best-practice.jpg" />,
  },
  {
    content: (
      <>
        <h3>Incubator Fund</h3>
        <p>
          Subject to funding, create a Social Mobility Incubator Fund, 100% of
          which will be used to licence (on a commercial basis) best practice
          materials from organisations identified by the Social Mobility
          Operational Appraisal.
        </p>
        <p>
          These materials will be provided to other Social Mobility focussed
          organisations on a Creative Commons basis, in turn, cross fertilising
          best practice across the UK and enabling exemplar
          initiatives/organisations to grow and increase impact.
        </p>
        <span className="coming-soon">Coming soon</span>
      </>
    ),
    image: <HomepageImage imageName="incubator-fund.jpg" />,
  },
];

export type CommitmentsEntryProps = {
  image: React.ReactElement;
  content: React.ReactElement;
};

export type CommitmentsGridProps = {
  commitmentsData: CommitmentsEntryProps[];
};

export default commitmentsData;
