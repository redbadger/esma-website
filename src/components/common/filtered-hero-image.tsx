import React from "react";
import BackgroundImage from "gatsby-background-image";
import { css } from "@emotion/core";
import { ImageNode } from "./types";

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

type FilteredHeroImageProps = {
  data: ImageNode;
  children: JSX.Element;
  className: string;
};

const FilteredHeroImage = ({
  data,
  children,
  className,
}: FilteredHeroImageProps) => {
  return (
    <BackgroundImage
      fluid={data.node.childImageSharp.fluid}
      className={className}
      css={backgroundCss}
    >
      <div className="background-image-filter"></div>
      {children}
    </BackgroundImage>
  );
};

export default FilteredHeroImage;
