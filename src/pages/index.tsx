import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Hero from "../components/homepage/hero";
import OurMission from "../components/homepage/our-mission";
import KeyStats from "../components/key-stats/key-stats";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <OurMission />
      <KeyStats />
      <NewsletterSignUp />
    </Layout>
  );
};

export default IndexPage;
