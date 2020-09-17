import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import { BreakPoint, maxWidth, minWidth } from "../../util/mq";
import Navigation from "./navigation";

const footerStyles = css`
  width: 100%;
  background-color: var(--midnight);
  font-size: 1.125rem;
  line-height: 2.125rem;
  padding: 0.75rem;
  font-weight: 500;

  ul {
    list-style: none;

    li {
      padding: 0.25rem 0;
    }
  }
  ul.inner-navigation {
    a {
      width: 100%;
      color: var(--white);
    }
    a:focus,
    a:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = ({}: FooterProps): JSX.Element => {
  const logos = useStaticQuery(graphql`
    {
      short: file(relativePath: { eq: "logo/short.svg" }) {
        absolutePath
        publicURL
      }
      long: file(relativePath: { eq: "logo/long.svg" }) {
        absolutePath
        publicURL
      }
    }
  `);

  return (
    <footer css={footerStyles}>
      <ul>
        <li>
          <Link to="/">
            <picture>
              <source
                srcSet={logos.short.publicURL}
                media={maxWidth(BreakPoint.xs)}
              />
              <source
                srcSet={logos.long.publicURL}
                media={minWidth(BreakPoint.xs)}
              />
              <img
                src={logos.short.publicURL}
                alt="Employer's Social Mobility Alliance"
              />
            </picture>
            <span className="screenreader">
              Employer's Social Mobility Alliance
            </span>
          </Link>
        </li>
        <li>
          <Navigation />
        </li>
      </ul>
    </footer>
  );
};

type FooterProps = {};

export default Footer;
