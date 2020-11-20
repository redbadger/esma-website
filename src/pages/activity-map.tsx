import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import ActivityMapHero from "../components/activity-map/hero";
import ActivityMapMain from "../components/activity-map/main";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import { graphql, useStaticQuery } from "gatsby";

const ActivityMap = () => {
  const { allImageSharp } = useStaticQuery(graphql`
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
  `);

  const image = {
    src: allImageSharp.edges[0].node.fixed.src,
    alt: "Activity map",
  };

  const description =
    "We are building an open access heat map that means anyone, at the touch of a button, can find out the social mobility issues in their area.";

  return (
    <Layout>
      <SEO title="Best Practice" image={image} description={description} />
      <ActivityMapHero />
      <ActivityMapMain />
      <NewsletterSignUp />
    </Layout>
  );
};

export default ActivityMap;
