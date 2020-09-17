import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { mq, BreakPoint } from "../../util/mq";

const destinations = [
  {
    label: "Life Stages Research",
    path: "/life-stage-research",
  },
  {
    label: "Activity Map",
    path: "/activity-map",
  },
  {
    label: "Best Practice",
    path: "/best-practice",
  },
  {
    label: "Get involved",
    path: "/get-involved",
  },
];

const menuIconStyles = css`
  ${mq(BreakPoint.lg)} {
    display: none;
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
      aria-label="Navigation menu"
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
          <li key={i}>
            <Link
              key={i}
              to={entry.path}
              getProps={({ isPartiallyCurrent }) => {
                return {
                  className: isPartiallyCurrent ? "active" : "",
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
