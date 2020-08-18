import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Hero from "../components/hero/hero";
import Timeline from "../components/timeline/timeline";
import KeyStats from "../components/key-stats/key-stats";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Timeline />
      <KeyStats />
    </Layout>
  );
};

export default IndexPage;
