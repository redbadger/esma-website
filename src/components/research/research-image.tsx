import React from "react";
import Img from "gatsby-image";
import { Fluid, ImageNode } from "../common/types";

interface ResearchImageProps {
  fluid: Fluid;
  objectPosition: string;
  classNames: Array<string>;
}

interface PureResearchImageProps {
  fluid: Fluid;
  objectPosition: string;
  classNames: string[];
}

export const PureResearchImage = ({
  fluid,
  objectPosition,
  classNames,
}: PureResearchImageProps) => {
  return (
    <Img
      imgStyle={{ objectPosition }}
      fluid={fluid}
      className={`research-image-wrapper ${classNames.join(" ")}`}
    />
  );
};

const ResearchImage = ({
  fluid,
  objectPosition,
  classNames,
}: ResearchImageProps) => {
  return (
    <PureResearchImage
      fluid={fluid}
      objectPosition={objectPosition}
      classNames={classNames}
    ></PureResearchImage>
  );
};

ResearchImage.defaultProps = {
  objectPosition: "center",
  classNames: [],
};

export default ResearchImage;
