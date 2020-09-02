import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

const withPrefixes = style => `
    ${style}
    -webkit-${style}
    -moz-${style}
    -ms-${style}
`;

const dropdownCssMobile = css`
  cursor: pointer;
  .icon {
    float: right;
    padding: 0 0.5em;
    transition: 0.6s transform ease-in-out;
    transform: rotate(180deg);
  }
  .icon.open {
    transform: rotate(-360deg);
  }
  font-size: 1.25em;
  font-weight: 600;
  color: var(--midnight);
  padding: 12px;
`;

const cssListItem = css`
  line-height: 2.5em;
  border-top: solid 1px var(--light-grey);
  display: block;

  ${mq(BreakPoint.md)} {
    border: none;
    display: inline-block;
  }
`;

type PillData = {
  name: string;
  href: string;
  isActive?: boolean;
};

type PillsProps = {
  pills: Array<PillData>;
  colorActive: string;
};

const cssList = css`
  transform: scale(1, 0);
  max-height: 0;
  transform-origin: 0 0;
  transition: transform 0.6s linear, max-height 0.6s linear;

  &.open {
    transform: scale(1);
    max-height: 40rem;
  }

  li {
    ${cssListItem}
    a {
      ${withPrefixes`user-select: none;`}
      padding: 0 12px;

      ${mq(BreakPoint.md)} {
        border-radius: 9999px;
        border: solid 1px var(--highlight-color);
        display: inline-block;
        height: 100%;
        margin: 0.25rem;

        line-height: 2.75rem;
      }
    }
  }

  ${mq(BreakPoint.md)} {
    transform: scale(1);
    max-height: 40rem;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 1.5rem 5rem;

    li a {
      transition: background-color 0.6s ease;
    }

    li a.current-page,
    li a:hover {
      background-color: var(--highlight-color);
    }
  }
`;

const cssPills = css`
  ${withPrefixes`box-shadow: 0 0 4px 0 rgba(0,0,0,0.2);`}
  z-index: 1;
  position: relative;

  .dropdown {
    ${dropdownCssMobile}
  }

  ${mq(BreakPoint.md)} {
    ${withPrefixes`box-shadow: none;`}
    padding: 1.5rem 4.5rem;
    background-color: var(--taupe);

    .dropdown {
      display: none;
      ${withPrefixes`user-select: none;`}
      padding: 12px 0;
    }
  }

  .pill-list {
    ${cssList}
  }
`;

const Next = ({ pills, colorActive }: PillsProps) => {
  const highlightColorCss = css`
    --highlight-color: ${colorActive};
  `;

  return (
    <nav css={[cssPills, highlightColorCss]}>
      <a href="family-environment">
        <div>
          <p>Previous</p>
        </div>
      </a>
      <a href="housing-and-neighbourhood">
        <div>
          <p>Next</p>
        </div>
      </a>
    </nav>
  );
};

export default Next;
