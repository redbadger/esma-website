import React from "react";
import { css } from "@emotion/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SplitCircularBar, {
  SplitCircularBarStat,
} from "../components/split-circular-bar";

const splitStats: SplitCircularBarStat[] = [
  {
    label: "2015",
    innerStats: [
      {
        label: "No University-educated parent at home",
        percent: 0.55,
        colour: "#c2d4ff",
      },
      {
        label: "University-educated parent at home",
        percent: 0.96,
        colour: "#ffeab4",
      },
    ],
  },
  {
    label: "2016",
    innerStats: [
      {
        label: "No University-educated parent at home",
        percent: 0.35,
        colour: "#c2d4ff",
      },
      {
        label: "University-educated parent at home",
        percent: 0.6,
        colour: "#ffeab4",
      },
    ],
  },
  {
    label: "2017",
    innerStats: [
      {
        label: "No University-educated parent at home",
        percent: 0.35,
        colour: "#c2d4ff",
      },
      {
        label: "University-educated parent at home",
        percent: 0.97,
        colour: "#ffeab4",
      },
    ],
  },
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
];

const hero = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .highlight {
    text-decoration: underline;
  }
  p,
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
