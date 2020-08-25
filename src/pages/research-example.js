import React from "react";
import Layout from "../components/common/layout";
import KeyStats from "../components/key-stats/key-stats";
import Hero from "../components/hero/hero";

const IndexPage = () => {
  return (
    <Layout includeResearchNavigation={true}>
      <Hero />
      <KeyStats />
      <p>More content.</p>
      <KeyStats />
    </Layout>
  );
};

export default IndexPage;
