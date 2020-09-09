import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FilteredHeroImage from "../common/filtered-hero-image";

const HeroBackgroundImage = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query {
      node: file(relativePath: { eq: "activity-map-hero.jpg" }) {
        childImageSharp {
          fluid {
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
