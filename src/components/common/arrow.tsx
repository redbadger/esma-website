import React from "react";
import { css } from "@emotion/core";

export const arrowHoverCss = css`
  width: 2.5rem;
`;

const arrowCss = css`
  display: inline-block;
  height: 0.75rem;
  margin-left: 0.5rem;
  position: relative;
  transition: width 0.2s ease;
  vertical-align: middle;
  width: 2rem;

  &::after {
    border-right: 0.125rem solid var(--midnight);
    border-top: 0.125rem solid var(--midnight);
    content: "";
    display: block;
    height: 0.625rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 0.625rem;
  }

  &::before {
    border-bottom: 0.125rem solid var(--midnight);
    content: "";
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
`;

const Arrow = () => {
  return <span className="arrow" css={arrowCss}></span>;
};

export default Arrow;
