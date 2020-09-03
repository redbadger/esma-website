import React from "react";
import { css } from "@emotion/core";
import HeroBackgroundImage from "./hero-background-image";
import { BreakPoint, mq } from "../../util/mq";

const headerCss = css`
  font-weight: 600;

  .header {
    height: 12.5rem;
  }

  p {
    color: var(--white);
  }

  .highlight {
    font-size: 1.25rem;
  }

  h2 {
    background-color: var(--yellow);
    color: var(--midnight);
    display: inline-block;
    padding: 0.125rem;
  }

  .container {
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    height: 100%;
  }

  ${mq(BreakPoint.md)} {
    .header {
      padding: 0 10rem;
      height: 18.75rem;
    }
    h2 {
      font-size: 2rem;
    }
    .highlight {
      font-size: 1.5rem;
    }
  }
`;

const Hero = () => (
  <header css={headerCss}>
    <HeroBackgroundImage className="header">
      <div className="container">
        <p>Home &gt; Operational Review</p>
        <h2>Operational Review</h2>
        <p className="highlight">Coming September 2021</p>
      </div>
    </HeroBackgroundImage>
  </header>
);

export default Hero;
