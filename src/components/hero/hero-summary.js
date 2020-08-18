import React from "react";
import Button from "../common/button";
import { css } from "@emotion/core";
import tw from "twin.macro";

const heroSummaryStyles = css`
  ${tw`flex justify-center lg:flex-col lg:h-full w-full lg:w-168`}

  > div {
    ${tw`w-88 md:w-176 lg:w-7 xl:w-144 mt-8 md:mt-16 lg:mt-0 lg:ml-20 xl:ml-40 `}
  }

  .summaryText {
    ${tw`text-midnight text-xl md:text-double leading-7 md:leading-11 mb-8 md:mb-12`}

    p:first-of-type {
      margin-bottom: 2.75rem;
    }
  }

  span.highlight {
    ${tw`bg-yellow font-semibold`}
  }
`;

const HeroSummary = () => (
  <div css={heroSummaryStyles}>
    <div>
      <div className="summaryText">
        <p>
          <span className="highlight">Social inequality</span> is persistent and
          systematic. Often where you start in life is where you’ll end up.
        </p>
        <p>Together we can change this.</p>
      </div>
      <Button
        variant="dark"
        label="Find out how"
        onClick={() => console.log("Hero button clicked")}
      />
    </div>
  </div>
);

export default HeroSummary;
