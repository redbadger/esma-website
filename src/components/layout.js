/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/core";
import tw from "twin.macro";

import Header from "./header";

const globalStyles = css`
  html {
    font-family: Helvetica, Arial;
  }

  a {
    ${tw`underline`}
  }
`;

const containerStyles = css`
  ${tw`container mx-auto`}
`;

const pageStyles = css`
  ${tw`my-4`}
  background: #ddd;
`;

const footerStyles = css`
  ${tw`container mx-auto`}
  background: #eee;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Global styles={globalStyles} />
      <div css={containerStyles}>
        <main css={pageStyles}>{children}</main>
      </div>
      <footer css={footerStyles}>Bye now.</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
