import React from "react";
import { filteredHeroStyles } from '../common/filtered-hero-styles';
import HeroImage from './hero-image';

const Hero = () => (
  <header css={filteredHeroStyles}>
    <HeroImage className="header">
      <div className="container">
        <p>Home &gt; Get Involved</p>
        <h2>Get Involved</h2>
      </div>
    </HeroImage>
  </header>
);

export default Hero;

