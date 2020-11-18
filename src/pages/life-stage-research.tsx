import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Timeline from "../components/timeline/timeline";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import { useStaticQuery, graphql } from "gatsby";

const LifeStageResearchPage = () => {
  const { allImageSharp } = useStaticQuery(
    graphql`
      query {
        allImageSharp(
          filter: {
            fixed: { originalName: { eq: "life-stage-research-hero.jpg" } }
          }
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
      <SEO title="Life Stages Research" image={image} />
      <Timeline />
      <NewsletterSignUp />
    </Layout>
  );
};

export default LifeStageResearchPage;
