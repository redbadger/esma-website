import React from "react";
import { css } from "@emotion/core";
import HeroBackgroundImage from "./hero-background-image";

const headerCss = css`
  font-weight: 600;

  .header {
    height: 12.5rem;
  }

  .background-image-filter {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
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
`;

const Hero = () => (
  <div css={headerCss}>
    <HeroBackgroundImage className="header">
      <div className="container">
        <p>Home &gt; Operational Review</p>
        <h2>Operational Review</h2>
        <p className="highlight">Coming September 2021</p>
      </div>
    </HeroBackgroundImage>
  </div>
);

export default Hero;
