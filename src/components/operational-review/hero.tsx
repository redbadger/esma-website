import React from "react";
import HeroBackgroundImage from "./hero-background-image";
import { filteredHeroStyles } from "../common/filtered-hero-styles";
import { css } from "@emotion/core";

const customCss = css`
  .header::after,
  .header::before {
    /* this aligns with the design which has the image flipped */
    background-position: center 55%;
  }
`;

const Hero = () => (
  <header css={[filteredHeroStyles, customCss]}>
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
