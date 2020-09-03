import React from "react";
import Router from "@reach/router";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { mq, BreakPoint } from "../../util/mq";

const destinations = [
  {
    label: "About",
    path: "/",
  },
  {
    label: "Operational review",
    path: "/operational-review",
  },
  {
    label: "Get involved",
    path: "/",
  },
];

const menuIconStyles = css`
  ${mq(BreakPoint.md)} {
    display: none;
  }

  &:focus {
    outline: 0;
  }
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  font-size: 1.875rem;

  svg {
    color: white;
    &:focus {
      outline: 0;
    }
  }
`;

export const NavToggle = ({ toggle }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      css={menuIconStyles}
      onClick={toggle}
      onKeyDown={toggle}
    >
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <ul className="inner-navigation">
        {destinations.map((entry, i) => (
          <li>
            <Link
              key={i}
              to={entry.path}
              getProps={({ isCurrent }) => {
                return {
                  className: isCurrent ? "active" : "",
                };
              }}
            >
              <span>{entry.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
