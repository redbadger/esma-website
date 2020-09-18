import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ImageNode } from "../common/types";

interface HomepageImageProps {
  imageName: string;
  objectPosition: string;
}

interface PureHomepageImageProps {
  data: ImageNode;
  objectPosition: string;
}

export const PureHomepageImage = ({
  data,
  objectPosition,
}: PureHomepageImageProps) => {
  return (
    <Img
      imgStyle={{ objectPosition }}
      fluid={data.node.childImageSharp.fluid}
      className="homepage-image-wrapper"
    />
  );
};

const HomepageImage = ({
  imageName,
  objectPosition,
}: HomepageImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {relativePath: {regex: "/homepage/.*/"}}) {
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
    <PureHomepageImage
      data={img}
      objectPosition={objectPosition}
    ></PureHomepageImage>
  );
};

HomepageImage.defaultProps = {
  objectPosition: "center",
};

export default HomepageImage;
