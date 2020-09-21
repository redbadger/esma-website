import React from "react";
import { Link } from "gatsby";
import ActivityMapSVG from "../../svg/activity-map.svg";
import HomepageImage from "./homepage-image";

const commitmentsData = [
  {
    content: (
      <div>
        <h3>Life stages research</h3>
        <p>
          Create a consolidated and easily accessible appraisal of the existing
          academic research relating to the issues affecting an individual’s
          social mobility from cradle to retirement.
        </p>
        <Link to="/life-stage-research">Read research</Link>
      </div>
    ),
    image: <HomepageImage imageName="life-stage-research.png" />,
    shiftRight: false,
  },
  {
    content: (
      <div>
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
      </div>
    ),
    image: <ActivityMapSVG />,
    shiftRight: true,
  },
  {
    content: (
      <div>
        <h3>Best Practice</h3>
        <p>
          Conduct an operational appraisal of the organisations and initiatives
          mapped in the Activity Heat Map and suggest how they could increase
          operational efficiency through collaboration locally and nationally.
        </p>
        <span className="coming-soon">Coming September 2021</span>
        <Link to="/operational-review">Find out more</Link>
      </div>
    ),
    image: <HomepageImage imageName="best-practice.jpg" />,
    shiftRight: false,
  },
  {
    content: (
      <div>
        <h3>Incubator Fund</h3>
        <p>
          We are creating a Social Mobility Incubator fund, to allow radical and impactful ideas to scale quickly across the UK. This can happen through licensing of best practice materials or enabling exemplar initiatives to grow their impact.
        </p>
        <span className="coming-soon">Coming soon</span>
      </div>
    ),
    image: <HomepageImage imageName="incubator-fund.jpg" />,
    shiftRight: true,
  },
];

export default commitmentsData;
