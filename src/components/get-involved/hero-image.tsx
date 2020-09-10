import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FilteredHeroImage from "../common/filtered-hero-image";
import { ImageNode } from "../common/types";

const HeroImage = ({ children, className }) => {
  const data: ImageNode = useStaticQuery(graphql`
    query {
      node: file(relativePath: { eq: "get-involved.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560, cropFocus: NORTH) {
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

export default HeroImage;
