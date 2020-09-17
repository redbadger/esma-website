import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import BestPracticeHero from "../components/best-practice/hero";
import BestPracticeMain from "../components/best-practice/main";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import EsmaPanel from "../components/best-practice/esma-panel";

import panel from "../components/best-practice/panel";

const BestPractice = () => {
  return (
    <Layout>
      <SEO title="Best Practice" />
      <BestPracticeHero />
      <BestPracticeMain />
      <EsmaPanel panel={panel} />
      <NewsletterSignUp />
    </Layout>
  );
};

export default BestPractice;
