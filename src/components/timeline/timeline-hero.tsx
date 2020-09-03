import React from "react";
import { filteredHeroStyles } from '../common/filtered-hero-styles';
import TimelineHeroImage from './timeline-hero-image';

const TimelineHero = () => (
  <header css={filteredHeroStyles}>
    <TimelineHeroImage className="header">
      <div className="container">
        <p>Home &gt; Issues Chronology</p>
        <h2>A lifetime of social inequality</h2>
      </div>
    </TimelineHeroImage>
  </header>
);

export default TimelineHero;

