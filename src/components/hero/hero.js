import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import StatsCard from "../hero/stats-card";
import HeroImage from "../hero/hero-image";
import HeroSummary from "./hero-summary";

const heroStyles = css`
  ${tw`bg-taupe relative h-128 md:h-192 lg:h-144`}

  .imageContainer {
    ${tw`absolute lg:w-144 bottom-0 lg:right-0 w-full h-48 md:h-88 lg:h-full`}
  }
`;

const heroImageStyles = css`
  .hero-image-wrapper {
    ${tw`h-full`}
  }
`;

const statsCardStyles = css`
  ${tw`shadow-xl absolute w-88 -bottom-30 right-1/2 -mr-44 md:w-176 md:-mr-88 lg:w-112 lg:bottom-16 lg:right-48 lg:mr-0`}
`;

const Hero = () => (
  <div css={[heroStyles, heroImageStyles]}>
    <HeroSummary />
    <div className="imageContainer">
      <HeroImage />
    </div>
    <StatsCard styles={statsCardStyles} />
  </div>
);

export default Hero;
