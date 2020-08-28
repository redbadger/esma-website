import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface Props {
  imageName: string;
  objectPosition: string;
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

interface TimelineImage {
  node: Node;
}

export const PureTimelineImage = ({ data, objectPosition }) => {
  return (
    <Img
      imgStyle={{ objectPosition }}
      fluid={data.node.childImageSharp.fluid}
      className="timeline-image-wrapper"
    />
  );
};

const TimelineImage = ({ imageName, objectPosition }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {relativePath: {regex: "/timeline/.*\\.jpg/"}}) {
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

  const img = data.images.edges.find(
    (image: TimelineImage) =>
      image.node.childImageSharp.fluid.originalName === imageName
  );

  return (
    <PureTimelineImage  data={img} objectPosition={objectPosition}></PureTimelineImage>
  );
};

TimelineImage.defaultProps = {
  objectPosition: "center",
};

export default TimelineImage;
