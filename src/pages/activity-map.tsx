import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import ActivityMapHero from "../components/activity-map/hero";
import ActivityMapMain from "../components/activity-map/main";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";

const ActivityMap = () => {
  return (
    <Layout>
      <SEO title="Best Practice" />
      <ActivityMapHero />
      <ActivityMapMain />
      <NewsletterSignUp />
    </Layout>
  );
};

export default ActivityMap;
