import React from "react";
import { filteredHeroStyles } from "../common/filtered-hero-styles";
import HeroImage from "./hero-image";
import { css } from "@emotion/core";

const customCss = css`
  .header::after,
  .header::before {
    /* this keeps the friendly woman's face visible at all screen sizes */
    background-position: center 26% !important;
  }
`;

const Hero = () => (
  <header css={[filteredHeroStyles, customCss]}>
    <HeroImage className="header">
      <div className="container">
        <p>Home &gt; Get Involved</p>
        <h2>Get Involved</h2>
      </div>
    </HeroImage>
  </header>
);

export default Hero;
