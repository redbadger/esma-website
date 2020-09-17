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

  color: var(--white);

  ul {
    list-style: none;

    li {
      padding: 0.25rem 0;
    }
  }
  ul.inner-navigation {
    font-weight: 500;
    a {
      width: 100%;
    }
    a:focus,
    a:hover {
      text-decoration: underline;
    }
  }
  .contact-us {
    margin-top: 1.5rem;
    h3 {
      font-weight: 500;
    }
    ul {
      font-weight: 300;
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
      <section className="contact-us">
        <h3>Contact us</h3>
        <ul>
          <li>
            <a href="mailto:barrymatthews@esma.community">
              barrymatthews@esma.community
            </a>
          </li>
          <li>
            {" "}
            <a href="mailto:barrymurphy@esma.community">
              barrymurphy@esma.community
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

type FooterProps = {};

export default Footer;
