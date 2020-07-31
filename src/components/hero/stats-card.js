import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PropTypes } from "prop-types";

const statsCardStyles = css`
  ${tw`h-56 bg-white border-t-8 border-cobalt`}

  div {
    ${tw`ml-3 md:ml-6 text-left`}
  }
`;

const headingStyles = css`
  ${tw`text-5xl mt-3 md:mt-6 mb-3 font-light`}
`;

const carouselStyles = css`
  .carousel .control-dots .dot {
    ${tw`bg-light-grey`}
  }

  .carousel .control-dots .dot.selected {
    ${tw`bg-cobalt`}
  }
`;

const stats = [
  {
    heading: "24%",
    text:
      "People from a working class background earn 24% less a year than someone with a professional background",
  },
  {
    heading: "42%",
    text:
      "People from a working class background earn 42% less a year than someone with a professional background",
  },
  {
    heading: "64%",
    text:
      "People from a working class background earn 64% less a year than someone with a professional background",
  },
];

const noop = () => {};

const StatsCard = ({ styles }) => {
  return (
    <>
      <Carousel
        css={[styles, carouselStyles]}
        autoPlay
        infiniteLoop
        renderArrowPrev={noop}
        renderArrowNext={noop}
        renderThumbs={noop}
        statusFormatter={noop}
      >
        {stats.map((entry, i) => (
          <div key={i} css={statsCardStyles}>
            <div css={headingStyles}>{entry.heading}</div>
            <div>{entry.text}</div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

StatsCard.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default StatsCard;
