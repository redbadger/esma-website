import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Timeline from "../components/timeline/timeline";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";

const IssuesChronologyPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Timeline />
      <NewsletterSignUp />
    </Layout>
  );
};

export default IssuesChronologyPage;

