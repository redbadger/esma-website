import React from "react";
import BackgroundImage from "gatsby-background-image";
import { css } from "@emotion/core";

const backgroundCss = css`
  .background-image-filter {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`;

const FilteredHeroImage = ({ data, children, className }) => {
  return (
    <BackgroundImage
      fluid={data.placeholderImage.childImageSharp.fluid}
      className={className}
      css={backgroundCss}
    >
      <div className="background-image-filter"></div>
      {children}
    </BackgroundImage>
  );
};

export default FilteredHeroImage;
