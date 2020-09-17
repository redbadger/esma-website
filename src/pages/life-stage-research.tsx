import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Timeline from "../components/timeline/timeline";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";

const LifeStageResearchPage = () => {
  return (
    <Layout>
      <SEO title="Life Stages Research" />
      <Timeline />
      <NewsletterSignUp />
    </Layout>
  );
};

export default LifeStageResearchPage;

