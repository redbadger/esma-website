import React from "react";
import Button from "../common/button";
import { css } from "@emotion/core";
import tw from "twin.macro";

const heroSummaryStyles = css`
  ${tw`flex justify-center lg:flex-col lg:h-full w-full lg:w-168`}

  > div {
    ${tw`w-88 md:w-176 mt-8 md:mt-16 lg:mt-0 lg:ml-40 `}
  }

  .summaryText {
    ${tw`text-midnight text-xl md:text-double leading-7 md:leading-11 mb-8 md:mb-12`}
  }
`;

const HeroSummary = () => (
  <div css={heroSummaryStyles}>
    <div>
      <div className="summaryText">
        We are ESMA and we’re tackling social mobility by providing you with a
        centralised platform to house statistics, events, case studies and much
        more.
      </div>
      <Button
        variant="dark"
        label="What are the issues?"
        onClick={() => console.log("Hero button clicked")}
      />
    </div>
  </div>
);

export default HeroSummary;
