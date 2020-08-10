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

const stats = [
  {
    heading: "51%",
    innerHtml: <>Of disadvantaged pupils reached the expected standard in all of reading, writing and maths, compared to <strong>71% of all other pupils</strong> in 2019.</>,
    resource: "State of the Nation",
  },
  {
    heading: "2%",
    innerHtml: <>Of students in the North East from lower socio-economic backgrounds attended a selective university, in comparison with <strong>11%</strong> of students from the same social group from Inner London.</>,
    resource: "Department for Education",
  },
  {
    heading: "27%",
    innerHtml: <>Of graduates have completed an unpaid internship. A six-month unpaid internship will cost a person living in London a minimum of <strong>£1,100</strong> a month and <span css={emphasisStyles}>£885</span> in Manchester.</>,
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
            <div css={textStyles}>{entry.innerHtml} <span css={resourceStyles}>- {entry.resource}</span></div>
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
