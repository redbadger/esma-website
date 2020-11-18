import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import ActivityMapHero from "../components/activity-map/hero";
import ActivityMapMain from "../components/activity-map/main";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import { graphql, useStaticQuery } from "gatsby";

const ActivityMap = () => {
  const { allImageSharp } = useStaticQuery(
    graphql`
      query {
        allImageSharp(
          filter: { fixed: { originalName: { eq: "activity-map-hero.jpg" } } }
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
      <SEO title="Best Practice" image={image} />
      <ActivityMapHero />
      <ActivityMapMain />
      <NewsletterSignUp />
    </Layout>
  );
};

export default ActivityMap;
