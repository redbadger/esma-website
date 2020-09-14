import React, { MouseEventHandler } from "react";
import { css } from "@emotion/core";

const buttonCss = css`
  height: 3rem;
  width: 10rem;
  color: var(--midnight);
  border: 0.0625rem solid var(--midnight);
  font-weight: 600;
`;

const Button = ({ label, onClick }: ButtonProps) => (
  <button css={buttonCss} onClick={onClick}>
    {label}
  </button>
);

type ButtonProps = {
  label: string;
  onClick: (event) => void;
};

export default Button;
