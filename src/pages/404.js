import React from "react";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const notFoundPageStyles = css`
  text-align: center;
  color: var(--midnight);
  font-size: 1.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;

  h2 {
    font-size: 3rem;
    line-height: 3.875rem;
    margin-top: 6.25rem;
    margin-bottom: 0.75rem;
  }

  p {
    line-height: 1.875rem;
    margin-bottom: 2.25rem;
    max-width: 45rem;
  }

  a {
    line-height: 3rem;
    display: block;
    height: 3rem;
    width: 21.875rem;
    background-color: var(--midnight);
    color: var(--white);
    font-weight: 700;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section css={notFoundPageStyles}>
      <h2>404</h2>
      <p>
        Sorry, we couldn’t find the page you were looking for. The link you
        followed may be broken, or the page may have been removed.
      </p>
      <Link to="/">Go to homepage</Link>
    </section>
  </Layout>
);

export default NotFoundPage;
