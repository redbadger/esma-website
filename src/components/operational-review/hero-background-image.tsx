import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { css } from "@emotion/core";

const backgroundCss = css`
  .background-image-filter {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  ::after {
    transform: scaleX(-1);
  }
`;

export const PureHeroBackgroundImage = ({ data, children, className }) => {
  return (
    <BackgroundImage
      fluid={data.placeholderImage.childImageSharp.fluid}
      className={className}
      css={backgroundCss}
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
          fluid(cropFocus: ATTENTION) {
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
