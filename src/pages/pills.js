import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Pills from "../components/research/pills";

const PillsPage = () => {
  const samplePills = [
    { name: "Executive Summary", href: "/" },
    { name: "Early Years Foundation Stage", href: "/" },
    { name: "Family Circumstances", href: "/" },
    { name: "Social class and underachievement", href: "/" },
    { name: "School cultures", href: "/" },
    { name: "Geographical educational inequality", href: "/" },
    { name: "Type and quality of schooling", href: "/" },
    { name: "Low aspirations", href: "/" },
    { name: "Access to career advice", href: "/" },
    { name: "Gaps in attainnment", href: "/" },
    { name: "Impact of COVID-19", href: "/" }
  ];

  const colorActive = "orange";

  return (
    <Layout>
      <SEO title="Home" />
      <Pills pills={samplePills} colorActive={colorActive}></Pills>
      <p>A future footer.</p>
    </Layout>
  );
};

export default PillsPage;
