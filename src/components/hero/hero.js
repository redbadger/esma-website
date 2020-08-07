import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import StatsCard from "../hero/stats-card";
import HeroImage from "../hero/hero-image";
import HeroSummary from "./hero-summary";

const heroStyles = css`
  ${tw`bg-taupe relative h-128 md:h-192 lg:h-144`}
`;

const imageContainerStyles = css`
  ${tw`absolute bottom-0 lg:right-0 w-full lg:w-136 h-48 md:h-88 lg:h-full`}
`;

const heroImageStyles = css`
  .hero-image-wrapper {
    ${tw`h-full`}
  }
`;

const statsCardStyles = css`
  ${tw`absolute shadow-xl lg:shadow-none lg:border w-88 md:w-176 lg:w-136 -bottom-30 lg:bottom-0 right-1/2 lg:right-0 -mr-44  md:-mr-88 lg:mr-0`}
`;

const Hero = () => (
  <div css={[heroStyles, heroImageStyles]}>
    <HeroSummary />
    <div css={imageContainerStyles}>
      <HeroImage />
    </div>
    <StatsCard styles={statsCardStyles} />
  </div>
);

export default Hero;
