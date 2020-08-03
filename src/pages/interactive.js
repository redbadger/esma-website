import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import InteractivePie from "../components/pie";

const hero = css`
  ${tw`flex`}
`;

const InteractiveHeroPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section id="interactive-hero" css={hero}>
        <InteractivePie />
      </section>
    </Layout>
  );
};

export default InteractiveHeroPage;
