import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const PureHeroImage = ({ data }) => {
  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      className="hero-image-wrapper"
    />
  );
};

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <PureHeroImage data={data} />;
};

export default HeroImage;
