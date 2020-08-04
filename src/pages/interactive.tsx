import React from "react";
import { css } from "@emotion/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

import InteractivePie from "../components/pie";
import CircularBar from "../components/circular-bar";
import SplitCircularBar, {
  SplitCircularBarStat,
} from "../components/split-circular-bar";

const stats: any[] = [
  {
    label: "2018",
    number: 51,
    colour: "#c2d4ff",
  },
  {
    label: "2019",
    number: 31,
    colour: "#c2d4ff",
  },
  {
    label: "2020",
    number: 61,
    colour: "#c2d4ff",
  },
];

const splitStats: SplitCircularBarStat[] = [
  {
    label: "2018",
    innerStats: [
      {
        label: "No University-educated parent at home",
        percent: 0.31,
        colour: "#c2d4ff",
      },
      {
        label: "University-educated parent at home",
        percent: 0.51,
        colour: "#ffeab4",
      },
    ],
  },
  {
    label: "2019",
    innerStats: [
      {
        label: "No University-educated parent at home",
        percent: 0.36,
        colour: "#c2d4ff",
      },
      {
        label: "University-educated parent at home",
        percent: 0.72,
        colour: "#ffeab4",
      },
    ],
  },
  {
    label: "2020",
    innerStats: [
      {
        label: "No University-educated parent at home",
        percent: 0.35,
        colour: "#c2d4ff",
      },
      {
        label: "University-educated parent at home",
        percent: 0.57,
        colour: "#ffeab4",
      },
    ],
  },
];

const hero = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .highlight {
    text-decoration: underline;
  }
  svg {
    flex-basis: 500px;
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
        <SplitCircularBar stats={splitStats} />
      </section>
    </Layout>
  );
};

export default InteractiveHeroPage;
