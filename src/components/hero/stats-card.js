import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PropTypes } from "prop-types";

const statsCardStyles = css`
  ${tw`h-56 bg-white`}

  div {
    ${tw`text-midnight`}
  }
`;

const headingStyles = css`
  ${tw`ml-3 md:ml-6 text-5xl mb-3 font-light float-left`}
`;

const carouselStyles = css`
  .carousel .control-dots .dot {
    ${tw`bg-light-grey`}
  }

  .carousel .control-dots .dot.selected {
    ${tw`bg-cobalt`}
  }
`;

const resourceStyles = css`
  ${tw`mt-3 mr-6 float-right font-light `}
`;

const textStyles = css`
  ${tw`ml-3 md:ml-6 text-left`}
`;

const emphasisStyles = css`
  ${tw`font-bold`}
`

const clearBoth = css`
  ${tw`clear-both`}
`;

const stats = [
  {
    heading: "51%",
    text: <div>Of disadvantaged pupils reached the expected standard in all of reading, writing and maths, compared to <span css={emphasisStyles}>71% of all other pupils</span> in 2019.</div>,
    resource: "State of the Nation",
  },
  {
    heading: "2%",
    text: <div>Of students in the North East from lower socio-economic backgrounds attended a selective university, in comparison with <span css={emphasisStyles}>11%</span> of students from the same social group from Inner London.</div>,
    resource: "Department for Education",
  },
  {
    heading: "27%",
    text: <div>Of graduates have completed an unpaid internship. A six-month unpaid internship will cost a person living in London a minimum of <span css={emphasisStyles}>£1,100</span> a month and <span css={emphasisStyles}>£885</span> in Manchester.</div>,
    resource: "Mobility Manifesto 2019",
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
            <div css={resourceStyles}>- {entry.resource}</div>
            <div css={clearBoth} />
            <div css={textStyles}>{entry.text}</div>
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
