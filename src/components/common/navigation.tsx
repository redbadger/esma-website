import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { mq, BreakPoint } from "../../util/mq";

const destinations = [
  {
    label: "About",
    path: "/",
  },
  {
    label: "Get involved",
    path: "/",
  },
];

const menuIconStyles = css`
  ${tw`float-right md:hidden mx-3 text-3xl focus:outline-none`}

  svg {
    ${tw`text-white focus:outline-none`}
  }
`;

const navStylesCollapsed = css`
  display: none;

  a {
    ${tw`text-white text-base font-semibold leading-12 mx-4`}
  }
`;

const navStylesExpanded = css`
  ${tw`md:flex clear-left bg-midnight relative z-10`}

  ${mq(BreakPoint.md)} {
    flex-direction: row;
  }

  a {
    ${tw`float-none text-left block text-white text-base font-semibold leading-12 mx-4`}
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
    <ul css={navStylesExpanded}>
      {destinations.map((entry, i) => (
        <li>
          <Link key={i} to={entry.path}>
            {entry.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
