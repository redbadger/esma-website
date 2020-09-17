import React from "react";
import { filteredHeroStyles } from '../common/filtered-hero-styles';
import TimelineHeroImage from './timeline-hero-image';
import { css } from "@emotion/core"; 

const customCss = css`
  .header::after,
  .header::before {
    /* this keeps the friendly woman's face visible at all screen sizes */
    background-position: center 30% !important;
  }

  .container p, .container h2{
    position: relative;
    bottom: 1.5rem;
  }

`;

const TimelineHero = () => (
  <header css={[filteredHeroStyles, customCss]}>
    <TimelineHeroImage className="header">
      <div className="container">
        <p>Home &gt; Life Stages Research</p>
        <h2>A lifetime of social inequality</h2>
      </div>
    </TimelineHeroImage>
  </header>
);

export default TimelineHero;

