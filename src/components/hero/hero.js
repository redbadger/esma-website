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
  ${tw`absolute lg:w-112 bottom-0 lg:right-0 w-full h-48 md:h-88 lg:h-full`}
`;

const heroImageStyles = css`
  .hero-image-wrapper {
    ${tw`h-full`}
  }
`;

const statsCardStyles = css`
  ${tw`shadow-xl lg:border lg:shadow-none absolute w-88 -bottom-30 right-1/2 -mr-44 md:w-176 md:-mr-88 lg:w-112 lg:bottom-0 lg:right-0 lg:mr-0`}
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
