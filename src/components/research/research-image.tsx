import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ImageNode } from "../common/types";

interface ResearchImageProps {
  imageName: string;
  objectPosition: string;
  classNames: Array<string>;
}

interface PureResearchImageProps {
  data: ImageNode;
  objectPosition: string;
  classNames: string[];
}

export const PureResearchImage = ({
  data,
  objectPosition,
  classNames,
}: PureResearchImageProps) => {
  return (
    <Img
      imgStyle={{ objectPosition }}
      fluid={data.node.childImageSharp.fluid}
      className={`research-image-wrapper ${classNames.join(" ")}`}
    />
  );
};

const ResearchImage = ({
  imageName,
  objectPosition,
  classNames,
}: ResearchImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {relativePath: {regex: "/research/.*\\.jpg/"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2560) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
    
  `);

  const img: ImageNode = data.images.edges.find((image: ImageNode) => {
    if (image.node.childImageSharp.fluid) {
      return image.node.childImageSharp.fluid.originalName === imageName;
    }
    return false;
  });

  return (
    <PureResearchImage
      data={img}
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
