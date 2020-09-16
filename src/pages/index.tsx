import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Hero from "../components/homepage/hero";
import OurMission from "../components/homepage/our-mission";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import Commitments from '../components/homepage/commitments';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <OurMission />
      <Commitments />
      <NewsletterSignUp />
    </Layout>
  );
};

export default IndexPage;
