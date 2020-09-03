import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

export const PureHeroBackgroundImage = ({ data, children, className }) => {
  return (
    <BackgroundImage
      fluid={data.placeholderImage.childImageSharp.fluid}
      className={className}
    >
      <div className="background-image-filter"></div>
      {children}
    </BackgroundImage>
  );
};

const HeroBackgroundImage = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "operational-review-hero.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <PureHeroBackgroundImage data={data} className={className}>
      {children}
    </PureHeroBackgroundImage>
  );
};

export default HeroBackgroundImage;
