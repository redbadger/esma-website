import React, { useState } from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { mq, BreakPoint } from "../../util/mq";

const withPrefixes = style => `
    ${style}
    -webkit-${style}
    -moz-${style}
    -ms-${style}
`;

const cssPills = css`
  ${withPrefixes`box-shadow: 0 0 4px 0 rgba(0,0,0,0.2);`}
  ${mq(BreakPoint.md)} {
    ${withPrefixes`box-shadow: none;`}
    padding: 1.5rem 0;
    background-color: var(--taupe);
  }
`;

const cssContent = css`
  cursor: pointer;
  .icon {
    float: right;
    padding: 0 0.5em;
    transition: 0.6s transform ease-in-out;
  }
  .icon.open {
    transform: rotate(-540deg);
  }
  font-size: 1.25em;
  font-weight: 600;
  color: var(--midnight);
  padding: 12px;

  ${mq(BreakPoint.md)} {
    display: none;
    ${withPrefixes`user-select: none;`}
    padding: 12px 0;
  }
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

const Pill = ({ name, href, cssPill }) => (
  <li css={cssListItem}>
    <a css={cssPill} href={href}>
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

const Pills = ({ pills, colorActive }: PillsProps) => {
  const [isOpen, setOpen] = useState(false);

  let cssPill = css`
    ${withPrefixes`user-select: none;`}
    padding: 0 12px;
    background-color: var(--white);

    ${mq(BreakPoint.md)} {
      border-radius: 9999px;
      border: solid 1px ${colorActive};
      display: inline-block;
      height: 100%;
      margin: 0 0.25rem;

      line-height: 2.75rem;
    }
  `;

  let cssActive = css`
    ${mq(BreakPoint.md)} {
      background-color: ${colorActive};
    }
  `;

  let cssList = css`
    transform: scale(1, 0);
    max-height: 0;
    transform-origin: 0 0;
    transition: transform 0.6s ease-in, max-height 0.6s ease-in;

    &.open {
      transform: scale(1);
      max-height: 40rem;
    }

    ${mq(BreakPoint.md)} {
      transform: scale(1);
      max-height: 40rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  return (
    <div css={cssPills}>
      <div css={cssContent} onClick={() => setOpen(!isOpen)}>
        Contents
        <span className={["icon", isOpen ? "open" : ""].join(" ")}>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </div>
      <ol css={cssList} className={isOpen ? "open" : ""}>
        {pills.map((pill, idx) => {
          const cssPillInstance = [pill.isActive && cssActive, cssPill];
          return <Pill {...pill} key={idx} cssPill={cssPillInstance} />;
        })}
      </ol>
    </div>
  );
};

export default Pills;
