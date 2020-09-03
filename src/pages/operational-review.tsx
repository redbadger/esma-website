import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import OperationalReviewHero from "../components/operational-review/hero";
import OperationalReviewMain from "../components/operational-review/main";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import EsmaPanel from "../components/operational-review/esma-panel";

const OperationalReview = () => {
  return (
    <Layout>
      <SEO title="Operational Review" />
      <OperationalReviewHero />
      <OperationalReviewMain />
      <EsmaPanel />
      <NewsletterSignUp />
      <p>A future footer.</p>
    </Layout>
  );
};

export default OperationalReview;
