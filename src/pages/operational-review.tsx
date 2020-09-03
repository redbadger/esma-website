import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Hero from "../components/hero/hero";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";

const OperationalReview = () => {
  return (
    <Layout>
      <SEO title="Operational Review" />
      <Hero />
      <NewsletterSignUp />
      <p>A future footer.</p>
    </Layout>
  );
};

export default OperationalReview;
