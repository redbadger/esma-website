import React from "react";
import HeroBackgroundImage from "./hero-background-image";
import { filteredHeroStyles } from "../common/filtered-hero-styles";
import { css } from "@emotion/core";

const customCss = css`
  .header::after,
  .header::before {
    /* moving background position requires !important
    because Gatsby sets a default at a high specificity */
    background-position: center 55% !important;
  }
`;

const Hero = () => (
  <header css={[filteredHeroStyles, customCss]}>
    <HeroBackgroundImage className="header">
      <div className="container">
        <p>Home &gt; Best Practice</p>
        <h2>Best Practice</h2>
        <p className="highlight">Coming September 2021</p>
      </div>
    </HeroBackgroundImage>
  </header>
);

export default Hero;
