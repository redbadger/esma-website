import React, { useState } from "react";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
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

const Pill = ({ name, href, isActive }: PillData) => (
  <li>
    <a className={isActive ? "current-page" : null} href={href}>
      {name}
    </a>
  </li>
);

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
  transition: transform 0.6s ease-in, max-height 0.6s ease-in;

  &.open {
    transform: scale(1);
    max-height: 40rem;
  }

  li {
    ${cssListItem}
    a {
      ${withPrefixes`user-select: none;`}
      padding: 0 12px;
      background-color: var(--white);

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

    li a.current-page {
      background-color: var(--highlight-color);
    }
  }
`;

const cssPills = css`
  ${withPrefixes`box-shadow: 0 0 4px 0 rgba(0,0,0,0.2);`}

  .dropdown {
    ${dropdownCssMobile}
  }

  ${mq(BreakPoint.md)} {
    ${withPrefixes`box-shadow: none;`}
    padding: 1.5rem 0;
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

const Pills = ({ pills, colorActive }: PillsProps) => {
  const [isOpen, setOpen] = useState(false);

  const highlightColorCss = css`
    --highlight-color: ${colorActive};
  `;

  return (
    <nav css={[cssPills, highlightColorCss]}>
      <div className="dropdown" onClick={() => setOpen(!isOpen)}>
        Contents
        <span className={["icon", isOpen ? "open" : ""].join(" ")}>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </div>
      <ol className={isOpen ? "open pill-list" : "pill-list"}>
        {pills.map((pill, idx) => {
          // const cssPillInstance = [pill.isActive && cssActive, cssPill];
          return <Pill {...pill} key={idx} />;
        })}
      </ol>
    </nav>
  );
};

export default Pills;
