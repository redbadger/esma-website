import React from "react";
import CommitmentsEntry from "./commitments-entry";
import HomepageImage from "./homepage-image";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const commitmentsStyles = css`
  color: var(--midnight);
  background-color: var(--taupe);
  padding-left: 10.3125rem;
  padding-right: 10.3125rem;
  text-align: center;
  padding-top: 4.5rem;

  h2 {
    font-size: 2rem;
    line-height: 2.75rem;
    font-weight: 600;
    margin-bottom: 4.5rem;
  }

  p {
    margin-bottom: 36px;
  }

  a {
    border: 1px solid var(--midnight);
    padding: 12px 108px;
    line-height: 1.875rem;
    font-weight: 700;
    white-space: nowrap;
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
