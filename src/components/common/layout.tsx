/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { mq, BreakPoint } from "../../util/mq";

import Header from "./header";
import Footer from "./footer";

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
    --separator: #efefef;

    --aqua: #7dcfb6;
    --gray: #cfd3da;
    --copperfield: #df886c;

    --red-gradient-1: #c5532f;
    --red-gradient-2: #db7656;
    --red-gradient-3: #ff9308;
    --red-gradient-4: var(--yellow);
    --red-gradient-5: #ffda7c;
    --red-gradient-6: #ece1c4;

    --fixed-header-height: 4.25rem;
    --body-skip-height: 4.25rem;
  }
  body {
    font-family: Montserrat, Helvetica, Arial;
    font-size: 100%;
    padding-top: var(--body-skip-height);

    .early-years {
      --highlight-color: var(--aqua);
    }

    .school-years {
      --highlight-color: var(--yellow);
    }

    .further-education {
      --highlight-color: var(--midnight);

      .pill-list {
        a.current-page {
          color: var(--white);
        }

        li a:hover {
          ${mq(BreakPoint.md)} {
            color: var(--white);
          }
        }
      }
    }

    .higher-education {
      --highlight-color: var(--cobalt);

      .pill-list {
        a.current-page {
          color: var(--white);
        }

        li a:hover {
          ${mq(BreakPoint.md)} {
            color: var(--white);
          }
        }
      }
    }

    .working-life {
      --highlight-color: var(--copperfield);

      .pill-list {
        a.current-page {
          color: var(--white);
        }

        li a:hover {
          ${mq(BreakPoint.md)} {
            color: var(--white);
          }
        }
      }
    }
  }
`;

const globalStylesDoubleHeader = css`
  :root {
    --body-skip-height: 8.5rem;
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
      <main>{children}</main>
      <Footer />
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
