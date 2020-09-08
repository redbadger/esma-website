import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import Hero from "../components/get-involved/hero";
import Main from "../components/get-involved/main";

const GetInvolvedPage = () => {
  return (
    <Layout>
      <SEO title="Get Involved" />
      <Hero />
      <Main />
      <NewsletterSignUp />
    </Layout>
  );
};

export default GetInvolvedPage;
