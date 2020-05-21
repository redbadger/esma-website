import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";

const headerStyles = css`
  ${tw`container mx-auto py-4 px-4 bg-gray-300`}

  h1 > a {
    ${tw`no-underline font-bold`}
  }
`;

const headerContainer = css``;

const Header = ({ siteTitle }) => (
  <header css={headerStyles}>
    <div css={headerContainer}>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
