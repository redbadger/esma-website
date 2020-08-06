import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
  ${tw`float-right md:hidden mx-3 text-3xl`}

  svg {
    ${tw`text-white`}
  }
`;

const navStylesCollapsed = css`
  ${tw`hidden md:flex float-right justify-between mx-20`}

  a {
    ${tw`text-white text-base font-semibold leading-12 mx-4`}
  }
`;

const navStylesExpanded = css`
  ${tw`md:flex clear-left`}

  a {
    ${tw`float-none text-left block text-white text-base font-semibold leading-12 mx-4`}
  }
`;

const Navigation = () => {
  const [navbarExpanded, setNavbarExpanded] = React.useState(false);
  const toggleNavBar = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        css={menuIconStyles}
        onClick={toggleNavBar}
        onKeyDown={toggleNavBar}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div css={navbarExpanded ? navStylesExpanded : navStylesCollapsed}>
        {destinations.map((entry, i) => (
          <Link key={i} to={entry.path}>
            {entry.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
