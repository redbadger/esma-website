import React from "react";
import CommitmentsEntry from "./commitments-entry";
import HomepageImage from "./homepage-image";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import ActivityMapSVG from "../../svg/activity-map.svg";
import { mq, BreakPoint } from "../../util/mq";

const commitmentsStyles = css`
  color: var(--midnight);
  background-color: var(--taupe);
  text-align: center;
  padding: 2.25rem 0.75rem;

  ${mq(BreakPoint.md)} {
    padding: 4.5rem 2.4375rem;
  }

  ${mq(BreakPoint.lg)} {
    padding: 4.5rem 10.3125rem;
  }

  h2 {
    ${mq(BreakPoint.md)} {
      font-size: 2rem;
      margin-bottom: 4.5rem;
    }
    font-size: 1.25rem;
    line-height: 2.75rem;
    font-weight: 600;
    margin-bottom: 2.25rem;

  }

  a {
    display: block;

    ${mq(BreakPoint.md)} {
      display: inline;
    }

    border: 1px solid var(--midnight);
    padding: 12px 108px;
    line-height: 1.875rem;
    font-weight: 700;
    white-space: nowrap;
    margin-bottom: 2.25rem;
  }
`;

const commitmentsData = [
  {
    content: (
      <div>
        <h3>Life stages research</h3>
        <p>
          Create a consolidated appraisal of the existing academic research
          relating to the issues affecting an individual’s employability (from
          cradle to retirement) and host it on an open source digital chronology
          to enable a quick easy to navigate understanding of the issues.
        </p>
        <Link to="/issues-chronology">Read research</Link>
      </div>
    ),
    image: <HomepageImage imageName="life-stage-research.png" />,
    shiftRight: false,
  },
  {
    content: (
      <div>
        <h3>Incubator Fund</h3>
        <p>
          Subject to funding, create a Social Mobility Incubator Fund 100% of
          which will be used to licence (on a commercial basis) best practice
          materials from organisations identified by the SM Operational
          Appraisal.
        </p>
        <p>
          These materials will be provided to other Social Mobility focussed
          organisations on a Creative Commons basis, in turn, cross fertilising
          best practice across the UK and enabling exemplar
          initiatives/organisations to grow and increase impact.
        </p>
        <span className="coming-soon">Coming soon</span>
      </div>
    ),
    image: <HomepageImage imageName="incubator-fund.jpg" />,
    shiftRight: true,
  },
  {
    content: (
      <div>
        <h3>Activity Heat Map</h3>
        <p>
          Conduct a review of Business, State and Third Sector efforts across
          the UK to combat the issues identified in SM Issues Chronology and
          produce an open source digital heat map to enable users of the ESMA
          site to identify how they can collaborate with existing provision to
          maximise impact.
        </p>
        <span className="coming-soon">Coming September 2021</span>
        <Link to="/activity-map">Find out more</Link>
      </div>
    ),
    image: <ActivityMapSVG />,
    shiftRight: false,
  },
  {
    content: (
      <div>
        <h3>Best Practice</h3>
        <p>
          Conduct an operational appraisal of the organisations and initiatives
          mapped in the SM Activity Heat Map and suggest how they could increase
          operational efficiency through collaboration locally and nationally
        </p>
        <span className="coming-soon">Coming September 2021</span>
        <Link to="/operational-review">Find out more</Link>
      </div>
    ),
    image: <HomepageImage imageName="best-practice.jpg" />,
    shiftRight: true,
  },
];

const Commitments = () => {
  return (
    <section css={commitmentsStyles}>
      <h2>Our Commitments</h2>
      {commitmentsData.map((entry, index) => {
        return (
          <CommitmentsEntry
            key={index}
            content={entry.content}
            image={entry.image}
            shiftRight={entry.shiftRight}
          />
        );
      })}
    </section>
  );
};

export default Commitments;
