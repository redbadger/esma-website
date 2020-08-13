import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Hero from "../components/hero/hero";
import Timeline from "../components/timeline/timeline";

const IndexPage = ({ data }) => {
  const content = data.contentfulHomepageCopy;
  console.log(content);
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Timeline />
    </Layout>
  );
};

export default IndexPage;
export const query = graphql`
  query HomePageQuery {
    contentfulHomepageCopy {
      title
    }
  }
`;
