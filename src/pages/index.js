import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import tw from "twin.macro";

import Layout from "../components/layout";
import SEO from "../components/seo";

const h1Style = css`
  ${tw`text-gray-800`}
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 css={h1Style}>Hi esma-website!</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
