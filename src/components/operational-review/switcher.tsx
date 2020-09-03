import React from "react";
import { css } from "@emotion/core";

const switcherCss = css`
  margin-top: 1.5rem;
  width: 100%;
  box-shadow: 0 0 0.25rem 0.0625rem rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 1.125rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  ul {
    padding: 0;
  }
  li {
    display: none;
  }
  li:first-of-type {
    display: block;
  }
  li ::before {
    display: none;
  }

  ::after {
    content: "V";
  }
`;

const Switcher = () => (
  <div css={switcherCss}>
    <ul>
      <li>Business</li>
      <li>Public Bodies &amp; Education</li>
      <li>Social Mobility Scheme Alliance Representatives</li>
      <li>Third Sector</li>
    </ul>
  </div>
);

export default Switcher;
