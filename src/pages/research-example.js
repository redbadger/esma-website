import React from "react";
import Layout from "../components/common/layout";
import KeyStats from "../components/key-stats/key-stats";

const IndexPage = () => {
  return (
    <Layout includeResearchNavigation={true}>
      <KeyStats />
      <p>More content.</p>
      <KeyStats />
    </Layout>
  );
};

export default IndexPage;
