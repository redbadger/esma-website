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
`;

const containerStyles = css`
  ${tw`container mx-auto`}
`;

const pageStyles = css`
  ${tw`my-4`}
  h1 {
    ${tw`text-2xl mb-8 mt-4`}
  }

  h2 {
    ${tw`text-xl`}
  }
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
      <Global styles={globalStyles} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div css={containerStyles}>
        <main css={pageStyles}>{children}</main>
      </div>
      {
        //<footer css={footerStyles}>&nbsp;</footer>
      }
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
