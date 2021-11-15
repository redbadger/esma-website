import React from "react";
import { css } from "@emotion/core";
import linkedInImage from "../../images/linkedin/blue-sq.png";

const linkedInCard = css`
  font-weight: 500;
  font-size: 0.8em;
  picture {
    display: inline-block;
    margin: 0 1rem;
    width: 1.125rem;
  }
`;

export const MatthewsLinkedIn = () => {
  return (
    <p className="contact-name" css={linkedInCard}>
      <a
        href="https://www.linkedin.com/in/barry-matthews-0970704/"
        title="Barry Matthews on LinkedIn"
      >
        Barry Matthews
        <picture>
          <img alt="linked-in" src={linkedInImage} />
        </picture>
      </a>
    </p>
  );
};

export const MurphyLinkedIn = () => {
  return (
    <p className="contact-name" css={linkedInCard}>
      <a
        href="https://www.linkedin.com/in/barry-murphy-2240a115"
        title="Barry Murphy on LinkedIn"
      >
        Barry Murphy
        <picture>
          <img alt="linked-in" src={linkedInImage} />
        </picture>
      </a>
    </p>
  );
};
