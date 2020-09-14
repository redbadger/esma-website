import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import Navigation, { NavToggle } from "./navigation";
import { BreakPoint, mq } from "../../util/mq";
import ResearchNavigation from "./research-navigation";

const headerStyles = css`
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  background-color: var(--midnight);
  font-size: 1.125rem;

  h1 {
    color: var(--white);
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 0.75rem;

    li {
      min-height: var(--fixed-header-height);
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      &.active {
        display: block;
      }
      &.inactive {
        display: none;
      }
    }
  }
  ul.inner-navigation {
    li {
      align-items: stretch;
    }
    a {
      display: flex;
      width: 100%;
      padding: 0 0.75rem;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      font-weight: 600;
      color: var(--white);
      span {
        line-height: 3rem;
        width: 100%;
      }
    }
    a.active,
    a:hover {
      background-color: var(--cobalt);
    }
  }

  ${mq(BreakPoint.lg)} {
    ul {
      padding: 0 5rem;
      flex-direction: row;
      li.inactive {
        display: block;
      }
    }
    ul.inner-navigation {
      padding: 0;
      justify-content: flex-end;
      justify-items: center;
      li {
        padding: 0 0.75rem;
        flex-grow: 0;
        flex-shrink: 0;
        width: unset;
      }
      a {
        width: unset;
      }
    }
  }
`;

const Header = ({
  siteTitle,
  includeResearchNavigation,
}: HeaderProps): JSX.Element => {
  const [navOpen, setNavOpen] = React.useState(false);

  const toggleNavBar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header css={headerStyles}>
      <ul className="navigation">
        <li>
          <h1>
            <Link to="/">ESMA</Link>
          </h1>
          <NavToggle toggle={toggleNavBar} />
        </li>
        <li className={navOpen ? "active" : "inactive"} css={css``}>
          <Navigation />
        </li>
      </ul>
      {includeResearchNavigation ? <ResearchNavigation /> : <></>}
    </header>
  );
};

type HeaderProps = {
  siteTitle: string;
  includeResearchNavigation: boolean;
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
