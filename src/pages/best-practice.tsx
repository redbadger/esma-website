import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import OperationalReviewHero from "../components/best-practice/hero";
import OperationalReviewMain from "../components/best-practice/main";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import EsmaPanel from "../components/best-practice/esma-panel";

import panel from "../components/best-practice/panel";

const OperationalReview = () => {
  return (
    <Layout>
      <SEO title="Best Practice" />
      <OperationalReviewHero />
      <OperationalReviewMain />
      <EsmaPanel panel={panel} />
      <NewsletterSignUp />
    </Layout>
  );
};

export default OperationalReview;
