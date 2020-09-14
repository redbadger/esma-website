import React from "react";
import { filteredHeroStyles } from "../common/filtered-hero-styles";
import HeroVideo from "./hero-video";
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
    <HeroVideo />
  </header>
);

export default Hero;
