import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";

import Layout from "../components/layout";
import SEO from "../components/seo";

import InteractivePie, { Stat } from "../components/pie";

const stats: Stat[] = [
  {
    label: "2018",
    number: 51,
    colour: "Green",
  },
  {
    label: "2019",
    number: 60,
    colour: "CornflowerBlue",
  },
  {
    label: "2020",
    number: 60,
    colour: "Red",
  },
];

const hero = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .highlight {
    text-decoration: underline;
  }
`;

const InteractiveHeroPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section id="interactive-hero" css={hero}>
        <p>
          We are ESMA and we’re tackling{" "}
          <span className="highlight">social mobility</span> by providing you
          with a centralised platform to house statistics, events, case studies
          and much more.
        </p>
        <InteractivePie stats={stats} />
      </section>
    </Layout>
  );
};

export default InteractiveHeroPage;
