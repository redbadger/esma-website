import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import CookieConsent from "react-cookie-consent";
import { Link } from "gatsby";
import ReactGA from "react-ga";
import { useStaticQuery, graphql } from "gatsby";

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
  const {
    site: {
      siteMetadata: { gaTrackingId },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            gaTrackingId
          }
        }
      }
    `
  );

  return (
    <>
      <Global
        styles={[
          globalStyles,
          includeResearchNavigation ? globalStylesDoubleHeader : "",
        ]}
      />
      <CookieConsent
        location="bottom"
        buttonText="Accept and Close"
        cookieName="gatsby-gdpr-google-analytics"
        // we need to do this, otherwise there won't be any tracking after user clicks 'accept'
        // until they refresh/visit the site second time. 
        // see https://github.com/andrezimpel/gatsby-plugin-gdpr-cookies/issues/4
        onAccept={() => {
          ReactGA.initialize(gaTrackingId);
        }}
      >
        <p>
          This website uses cookies to give you the best possible experience. By
          continuing to browse the site you are agreeing to our use of cookies.
          For more details about cookies and how to manage them see our{" "}
          <Link to="/privacy-policy">Cookie and Privacy Policy</Link>.
        </p>
      </CookieConsent>
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
