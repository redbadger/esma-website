import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import PropTypes from "prop-types";

const darkStyles = css`
  ${tw`h-12 w-88 bg-midnight text-white font-bold`}
`;

const lightGreyStyles = css`
  ${tw`h-12 w-40 text-midnight border border-midnight font-bold`}
`;

const lightBlueStyles = css`
  ${tw`h-12 w-40 text-cobalt border border-cobalt font-bold`}
`;

const borderlessStyles = css`
  background: var(--white);
  color: var(--midnight);
  width: 7.875rem;
`;

const Button = ({ variant, label, onClick }) => (
  <button css={styleForVariant(variant)} onClick={onClick}>
    {label}
  </button>
);

const styleForVariant = variant =>
  ({
    dark: darkStyles,
    "light-grey": lightGreyStyles,
    "light-blue": lightBlueStyles,
    borderless: borderlessStyles,
  }[variant] ||
  (() => {
    throw new Error(`Unknown button variant: ${variant}`);
  }));

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};

export default Button;
