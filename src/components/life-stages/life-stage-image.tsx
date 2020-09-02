import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface Props {
  imageName: string;
  objectPosition: string;
  classNames: Array<string>;
}

interface Fluid {
  originalName: string;
  base64: string;
  sizes: string;
  src: string;
  srcSet: string;
  aspectRatio: number;
}

interface ChildImageSharp {
  fluid: Fluid;
}

interface Node {
  childImageSharp: ChildImageSharp;
}

interface LifeStageImage {
  node: Node;
}

interface PureLifeStageImage {
  data: LifeStageImage;
  objectPosition: string;
  classNames: string[];
}

export const PureLifeStageImage = ({
  data,
  objectPosition,
  classNames,
}: PureLifeStageImage) => {
  return (
    <Img
      imgStyle={{ objectPosition }}
      fluid={data.node.childImageSharp.fluid}
      className={`life-stage-image-wrapper ${classNames.join(" ")}`}
    />
  );
};

const LifeStageImage = ({ imageName, objectPosition, classNames }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {relativePath: {regex: "/life-stages/.*\\.jpg/"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
    
  `);

  const img: LifeStageImage = data.images.edges.find(
    (image: LifeStageImage) => {
      if (image.node.childImageSharp.fluid) {
        return image.node.childImageSharp.fluid.originalName === imageName;
      }
      return false;
    }
  );

  return (
    <PureLifeStageImage
      data={img}
      objectPosition={objectPosition}
      classNames={classNames}
    ></PureLifeStageImage>
  );
};

LifeStageImage.defaultProps = {
  objectPosition: "center",
  classNames: [],
};

export default LifeStageImage;
