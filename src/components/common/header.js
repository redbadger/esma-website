import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import Navigation from "./navigation";

const headerStyles = css`
  ${tw`py-3 bg-midnight h-17`}

  h1 {
    ${tw`mx-3 md:mx-20`}
  }

  h1 > a {
    ${tw`pt-2.5 no-underline text-white text-xl leading-6 float-left font-semibold`}
  }
`;

const clearBoth = css`
  ${tw`clear-both`}
`;

const Header = ({ siteTitle }) => (
  <header css={headerStyles}>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Navigation />
      <div css={clearBoth}></div>
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