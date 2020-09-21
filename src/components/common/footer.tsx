import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import { BreakPoint, mq } from "../../util/mq";
import Navigation from "./navigation";

const footerStyles = css`
  width: 100%;
  background-color: var(--midnight);
  font-size: 1.125rem;
  line-height: 2.125rem;
  padding: 0.75rem;
  display: grid;
  grid-template-areas:
    "logo"
    "navigation"
    "contact";
  align-items: start;

  color: var(--white);

  .logo {
    grid-area: logo;
    margin-bottom: 0.75rem;
  }

  ul.inner-navigation {
    grid-area: navigation;
    font-weight: 500;
    list-style: none;
    a {
      width: 100%;
    }
    a:focus,
    a:hover {
      text-decoration: underline;
    }
    margin-bottom: 1.5rem;
  }

  .contact-us {
    grid-area: contact;
    h3 {
      font-weight: 500;
    }
    ul {
      font-weight: 300;
      list-style: none;
    }
  }
  ${mq(BreakPoint.md)} {
    grid-template-areas:
      "logo logo"
      "navigation contact";
    grid-template-columns: 4fr 8fr;
  }
  ${mq(BreakPoint.lg)} {
    padding: 2.5rem 10rem;
  }

  .legals {
    margin-top: 1.25rem;
    ${mq(BreakPoint.md)} {
      margin-top: 1rem;
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
    }
  `);

  return (
    <footer css={footerStyles}>
      <div className="logo">
        <Link to="/">
          <picture>
            <img
              src={logos.short.publicURL}
              alt="Employer's Social Mobility Alliance"
            />
          </picture>
          <span className="screenreader">
            Employer's Social Mobility Alliance
          </span>
        </Link>
      </div>
      <Navigation />
      <section className="contact-us">
        <h3>Contact us</h3>
        <ul>
          <li>
            <a href="mailto:barry.matthews@smbp.org.uk">
            barry.matthews@smbp.org.uk
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
      <section className="legals">
        <ul>
          <li>
            <a target="blank" href="/privacy-policy.pdf">Privacy Policy</a>
          </li>
          <li>
            <a target="blank" href="/terms-of-use.pdf">Terms of Use</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

type FooterProps = {};

export default Footer;
