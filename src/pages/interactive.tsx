import React from "react";
import { css } from "@emotion/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

import InteractivePie, { Stat } from "../components/pie";
import CircularBar, { CircularBarStat } from "../components/circular-bar";

const stats: any[] = [
  {
    label: "2018",
    number: 51,
    colour: "Green",
  },
  {
    label: "2019",
    number: 31,
    colour: "CornflowerBlue",
  },
  {
    label: "2020",
    number: 61,
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
        <CircularBar
          stats={stats.map(({ label, number, colour }) => {
            return { label, percent: number / 100, colour };
          })}
        />
      </section>
    </Layout>
  );
};

export default InteractiveHeroPage;
