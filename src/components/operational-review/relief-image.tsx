import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const PureReliefImage = ({ data }) => {
  return (
    <Img
      fluid={{
        ...data.placeholderImage.childImageSharp.fluid,
        aspectRatio: 7 / 5,
      }}
      className="hero-image-wrapper"
    />
  );
};

const ReliefImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "operational-review-relief.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <PureReliefImage data={data} />;
};

export default ReliefImage;
