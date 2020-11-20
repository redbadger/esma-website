import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import BestPracticeHero from "../components/best-practice/hero";
import BestPracticeMain from "../components/best-practice/main";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import EsmaPanel from "../components/best-practice/esma-panel";

import panel from "../components/best-practice/panel";
import { useStaticQuery, graphql } from "gatsby";

const BestPractice = () => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp(
        filter: { fixed: { originalName: { eq: "best-practice-hero.jpg" } } }
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
    alt: "Best practice",
  };

  const description =
    "We've commissioned a panel to review each organisation and programme focused on the different Life Stages.";

  return (
    <Layout>
      <SEO title="Best Practice" image={image} description={description} />
      <BestPracticeHero />
      <BestPracticeMain />
      <EsmaPanel panel={panel} />
      <NewsletterSignUp />
    </Layout>
  );
};

export default BestPractice;
