import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Global, css } from "@emotion/core";
import tw from "twin.macro";

const headerStyles = css`
  ${tw`py-4`}
  background: #eee;
`;

const headerContainer = css`
  ${tw`container mx-auto`}
`;

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
