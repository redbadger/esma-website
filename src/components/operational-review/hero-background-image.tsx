import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FilteredHeroImage from "../common/filtered-hero-image";

const HeroBackgroundImage = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query {
      node: file(relativePath: { eq: "operational-review-hero.jpg" }) {
        childImageSharp {
          fluid(cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <FilteredHeroImage data={data} className={className}>
      {children}
    </FilteredHeroImage>
  );
};

export default HeroBackgroundImage;
