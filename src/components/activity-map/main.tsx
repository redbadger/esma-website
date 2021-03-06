import React from "react";
import { css } from "@emotion/core";
import { BreakPoint, mq } from "../../util/mq";
import { Link } from "gatsby";
import ActivityMapSvg from "../../svg/activity-map.svg";

const mainCss = css`
  padding: 1.5rem 0.75rem;
  color: var(--midnight);
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 2.125rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  ul {
    list-style: circle;
    list-style-position: inside;
  }
  li::before {
    display: inline-block;
    width: 1rem;
    content: "";
  }

  h3,
  p {
    padding: 1rem 0;
  }

  aside {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  picture > svg {
    max-width: 100%;
    height: auto;
  }

  ${mq(BreakPoint.md)} {
    padding: 2rem 2.5rem;
  }
  ${mq(BreakPoint.lg)} {
    display: flex;
    padding: 4.5rem 10rem 2rem;
    gap: 8rem;

    main {
      flex-basis: 50%;
      flex-shrink: 0;
    }
  }
`;

const Main = () => (
  <div css={mainCss}>
    <main>
      <h2>Activity Map</h2>
      <p>
        We are building an open access heat map that means anyone, at the touch
        of a button, can find out the social mobility issues, activities of most
        interest to them and connect to others who can help them make change
        happen
      </p>
      <p>
        Sign up to our newsletter to be the first to hear news on events,
        exciting new ideas and connect to others who want to make a difference.
      </p>
    </main>
    <aside>
      <picture>
        <ActivityMapSvg />
      </picture>
    </aside>
  </div>
);

export default Main;
