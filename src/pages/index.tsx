import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Hero from "../components/homepage/hero";
import OurMission from "../components/homepage/our-mission";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import Commitments from "../components/homepage/commitments";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const { allImageSharp } = useStaticQuery(
    graphql`
      query {
        allImageSharp(
          filter: { fixed: { originalName: { eq: "life-stage-research.png" } } }
        ) {
          edges {
            node {
              fixed {
                src
              }
            }
          }
        }
      }
    `
  );

  const image = {
    src: allImageSharp.edges[0].node.fixed.src,
    alt: "Life stage research",
  };

  return (
    <Layout>
      <SEO title="Home" image={image} />
      <Hero />
      <OurMission />
      <Commitments />
      <NewsletterSignUp color="white" />
    </Layout>
  );
};

export default IndexPage;
