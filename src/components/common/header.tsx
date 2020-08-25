import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import Navigation, { NavToggle } from "./navigation";
import { BreakPoint, mq } from "../../util/mq";

const headerStyles = css`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;

  background-color: var(--midnight);

  h1 {
    color: var(--white);
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 600;

    > a {
      text-decoration: none;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.75rem;

    ${mq(BreakPoint.md)} {
      padding: 0 5rem;
      flex-direction: row;
      ul {
        padding: 0;
        justify-content: flex-end;
        justify-items: center;
        li {
          padding: 0;
          flex-grow: 0;
          flex-shrink: 1;
          width: unset;
        }
      }
    }
    li {
      min-height: var(--fixed-header-height);
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Header = ({ siteTitle }: HeaderProps): JSX.Element => {
  const [navOpen, setNavOpen] = React.useState(false);

  const toggleNavBar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header css={headerStyles}>
      <ul>
        <li>
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
          <NavToggle toggle={toggleNavBar} />
        </li>
        <li
          className={navOpen ? "active" : "inactive"}
          css={css`
            &.active {
              display: block;
            }
            &.inactive {
              display: none;
              ${mq(BreakPoint.md)} {
                display: block;
              }
            }
          `}
        >
          <Navigation />
        </li>
      </ul>
    </header>
  );
};

type HeaderProps = {
  siteTitle: string;
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
