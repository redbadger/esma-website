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
  ${tw`text-left font-light ml-3 md:ml-6 text-5xl mb-1`}
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
  ${tw`font-light underline`}
`;

const textStyles = css`
  ${tw`mx-3 md:mx-6 text-left`}
`;

const emphasisStyles = css`
  ${tw`font-semibold`}
`

const stats = [
  {
    heading: "51%",
    text: <span>Of disadvantaged pupils reached the expected standard in all of reading, writing and maths, compared to <span css={emphasisStyles}>71% of all other pupils</span> in 2019.</span>,
    resource: "State of the Nation",
  },
  {
    heading: "2%",
    text: <span>Of students in the North East from lower socio-economic backgrounds attended a selective university, in comparison with <span css={emphasisStyles}>11%</span> of students from the same social group from Inner London.</span>,
    resource: "Department for Education",
  },
  {
    heading: "27%",
    text: <span>Of graduates have completed an unpaid internship. A six-month unpaid internship will cost a person living in London a minimum of <span css={emphasisStyles}>£1,100</span> a month and <span css={emphasisStyles}>£885</span> in Manchester.</span>,
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
            <div css={textStyles}>{entry.text} <span css={resourceStyles}>- {entry.resource}</span></div>
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
