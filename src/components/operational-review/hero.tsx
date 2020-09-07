import React from "react";
import HeroBackgroundImage from "./hero-background-image";
import { filteredHeroStyles } from '../common/filtered-hero-styles';

const Hero = () => (
  <header css={filteredHeroStyles}>
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
