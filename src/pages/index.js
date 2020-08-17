import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Hero from "../components/hero/hero";
import KeyStats from "../components/key-stats/key-stats";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <KeyStats />
    </Layout>
  );
};

export default IndexPage;
