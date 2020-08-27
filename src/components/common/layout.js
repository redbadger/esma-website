/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import tw from "twin.macro";

import Header from "./header";

const globalStyles = css`
  :root {
    --midnight: #2d3142;
    --white: #ffffff;
    --taupe: #f7f5f4;
    --cobalt: #3772ff;
    --light-grey: #d3d3d3;
    --yellow: #ffba08;
    --denim: #424b71;
    --error: #b5261d;

    --aqua: #7dcfb6;
    --gray: #cfd3da;
    --copperfield: #df886c;

    --fixed-header-height: 4.25rem;
    --body-skip-height: 4.25rem;
  }
  body {
    font-family: Montserrat, Helvetica, Arial;
    font-size: 100%;
    padding-top: var(--body-skip-height);
  }
`;

const globalStylesDoubleHeader = css`
  :root {
    --body-skip-height: 8.5rem;
  }
`;

const pageStyles = css`
  h1 {
    ${tw`text-2xl mb-8 mt-4`}
  }

  h2 {
    ${tw`text-xl`}
  }
`;

const Layout = ({ children, includeResearchNavigation }) => {
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
      <Global
        styles={[
          globalStyles,
          includeResearchNavigation ? globalStylesDoubleHeader : "",
        ]}
      />
      <Header
        siteTitle={data.site.siteMetadata.title}
        includeResearchNavigation={includeResearchNavigation}
      />
      <main css={pageStyles}>{children}</main>
      {
        //<footer css={footerStyles}>&nbsp;</footer>
      }
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  includeResearchNavigation: PropTypes.bool,
};

Layout.defaultProps = {
  includeResearchNavigation: false,
};

export default Layout;
