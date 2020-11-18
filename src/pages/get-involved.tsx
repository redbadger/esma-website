import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import Hero from "../components/get-involved/hero";
import Main from "../components/get-involved/main";
import { graphql, useStaticQuery } from "gatsby";

const GetInvolvedPage = () => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp(
        filter: { fixed: { originalName: { eq: "get-involved.jpg" } } }
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
    alt: "Get involved",
  };

  return (
    <Layout>
      <SEO title="Get Involved" image={image} />
      <Hero />
      <Main />
      <NewsletterSignUp />
    </Layout>
  );
};

export default GetInvolvedPage;
