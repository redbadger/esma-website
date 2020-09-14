import React, { useState } from "react";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { mq, BreakPoint } from "../../util/mq";
import { PillsProps, PillData } from "./types";
import { Link } from "gatsby";

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
    padding: 0 0.5rem;
    transition: 0.6s transform ease-in-out;
    transform: rotate(180deg);
  }
  .icon.open {
    transform: rotate(-360deg);
  }
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--midnight);
  padding: 0.75rem;
`;

const cssListItem = css`
  line-height: 2.5rem;
  border-top: solid 1px var(--light-grey);
  display: block;

  ${mq(BreakPoint.md)} {
    border: none;
    display: inline-block;
  }
`;

const Pill = ({ name, href, isActive }: PillData & { isActive: boolean }) => (
  <li className={isActive ? "current-page" : null}>
    <Link className={isActive ? "current-page" : null} to={href}>
      {name}
    </Link>
  </li>
);

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
      padding: 0 0.75rem;

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
    padding: 1.5rem 0rem;

    li a {
      transition: background-color 0.6s ease;
    }

    li a.current-page,
    li a:hover {
      background-color: var(--highlight-color);
    }
  }

  li.current-page {
    background-color: var(--midnight);
    color: var(--white);

    ${mq(BreakPoint.md)} {
      background-color: unset;
      color: unset;
    }
  }
`;

const cssPills = css`
  ${withPrefixes`box-shadow: 0 0 0.25rem 0 rgba(0,0,0,0.2);`}
  z-index: 1;
  position: relative;

  .dropdown {
    ${dropdownCssMobile}
  }

  margin-bottom: 1.5rem;

  ${mq(BreakPoint.md)} {
    ${withPrefixes`box-shadow: none;`}
    margin-bottom: 0;

    .dropdown {
      display: none;
      ${withPrefixes`user-select: none;`}
      padding: 0.75rem 0;
    }
  }

  .pill-list {
    ${cssList}
  }
`;

const Pills = ({ pills, currentPillIndex }: PillsProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav css={cssPills}>
      <div className="dropdown" onClick={() => setOpen(!isOpen)}>
        Life stage issues
        <span className={["icon", isOpen ? "open" : ""].join(" ")}>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </div>
      <ol className={isOpen ? "open pill-list" : "pill-list"}>
        {pills.map((pill, idx) => {
          // const cssPillInstance = [pill.isActive && cssActive, cssPill];
          return (
            <Pill {...pill} key={idx} isActive={idx === currentPillIndex} />
          );
        })}
      </ol>
    </nav>
  );
};

export default Pills;
