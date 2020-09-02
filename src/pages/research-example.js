import React from "react";
import Layout from "../components/common/layout";
import KeyStats from "../components/key-stats/key-stats";
import Hero from "../components/hero/hero";
import Pills from "../components/research/pills";

const samplePills = [
  { name: "Life stage overview", href: "/", isActive: true },
  { name: "Early Years Foundation Stage", href: "/" },
  { name: "Family Circumstances", href: "/" },
  { name: "Social class and underachievement", href: "/" },
  { name: "School cultures", href: "/" },
  { name: "Geographical educational inequality", href: "/" },
  { name: "Type and quality of schooling", href: "/" },
  { name: "Low aspirations", href: "/" },
  { name: "Access to career advice", href: "/" },
  { name: "Gaps in attainment", href: "/" },
  { name: "Impact of Covid-19", href: "/" },
];

const colorActive = "orange";

// TODO: remove this page when we have the real one
const IndexPage = () => {
  return (
    <Layout includeResearchNavigation={true}>
      <Pills pills={samplePills} colorActive={colorActive} />
      <Hero />
      <KeyStats />
      <p>More content.</p>
      <KeyStats />
    </Layout>
  );
};

export default IndexPage;
