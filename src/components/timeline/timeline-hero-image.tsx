import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FilteredHeroImage from '../common/filtered-hero-image';

const TimelineHeroImage = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "issues-chronology-hero.jpg" }
      ) {
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

export default TimelineHeroImage;
