import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import { BreakPoint, mq } from "../../util/mq";

export const PureReliefImage = ({ data }) => {
  return (
    <Img
      fluid={[
        data.placeholderImage.default.fluid,
        {
          ...data.placeholderImage.tablet.fluid,
          media: mq(BreakPoint.md),
        },
        {
          ...data.placeholderImage.desktop.fluid,
          media: mq(BreakPoint.lg),
        },
      ]}
      className="hero-image-wrapper"
      /* This is here so our custom styling applies.
        otherwise, gatsby-image unhelpfully sets a default
        of 50% 50% on the element itself.
      */
      objectPosition=""
    />
  );
};

const ReliefImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "operational-review-relief.jpg" }
      ) {
        default: childImageSharp {
          fluid(cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
        tablet: childImageSharp {
          fluid(cropFocus: NORTH) {
            ...GatsbyImageSharpFluid
          }
        }
        desktop: childImageSharp {
          fluid(cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <PureReliefImage data={data} />;
};

export default ReliefImage;
