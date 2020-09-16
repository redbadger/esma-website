import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import Navigation, { NavToggle } from "./navigation";
import { BreakPoint, mq, maxWidth, minWidth } from "../../util/mq";
import ResearchNavigation from "./research-navigation";

const footerStyles = css`
  width: 100%;
  background-color: var(--midnight);
  font-size: 1.125rem;
`;

const Footer = ({}: FooterProps): JSX.Element => {
  const [navOpen, setNavOpen] = React.useState(false);

  const toggleNavBar = () => {
    setNavOpen(!navOpen);
  };

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
      <p>
        <Link to="/">
          <picture>
            <source
              srcSet={logos.short.publicURL}
              media={maxWidth(BreakPoint.xl)}
            />
            <source
              srcSet={logos.long.publicURL}
              media={minWidth(BreakPoint.xl)}
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
      </p>
    </footer>
  );
};

type FooterProps = {};

export default Footer;
