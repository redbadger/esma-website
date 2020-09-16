import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

import Header from "./header";
import Footer from "./footer";

const globalStyles = css`
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
`;

const globalStylesDoubleHeader = css`
  :root {
    --body-skip-height: 8.5rem;
  }
`;

const Layout = ({ children, includeResearchNavigation }) => {
  return (
    <>
      <Global
        styles={[
          globalStyles,
          includeResearchNavigation ? globalStylesDoubleHeader : "",
        ]}
      />
      <Header includeResearchNavigation={includeResearchNavigation} />
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
