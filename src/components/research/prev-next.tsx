import React from "react";
import { css, SerializedStyles } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import { PillsProps } from "./types";
import Arrow, { arrowHoverCss } from "../common/arrow";
import EarlyDevIcon from "../../svg/blocks.svg";
import WorkingLifeIcon from "../../svg/briefcase.svg";

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

const prevNextCss = css`
  z-index: 1;
  position: relative;
  padding: 4.5rem 0;
  display: flex;
  justify-content: space-between;

  .dropdown {
    ${dropdownCssMobile}
  }

  .prev-next-box {
    background-color: var(--white);
    border: 0.0625rem solid var(--midnight);
    ${withPrefixes`box-shadow: 0 0 0.25rem 0 rgba(0,0,0,0.2);`}
    height: 7rem;
    width: 32rem;
    color: var(--midnight);
    padding: 1.5rem;

    :hover {
      transform: translate3d(0px, -1px, 0px);
      box-shadow: rgba(0, 0, 0, 0.15) 0rem 1rem 1rem;
      /* ${withPrefixes`box-shadow: 0 0 0.25rem 0.25rem rgba(0,0,0,0.2);`} */
      .arrow {
        ${arrowHoverCss}
      }
    }
    h4, p {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 2rem;
      .label {
        text-transform: uppercase;
      }
      margin: 0.25rem 0;
    }
    .page-title {
      font-weight: 600;
      font-size: 1.25rem;
    }
    .icon svg {
      height: 1.5rem;
    }
  }

  ${mq(BreakPoint.md)} {
    ${withPrefixes`box-shadow: none;`}
    padding: 4.5rem 0;
    background-color: var(--white);

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

enum PrevNextType {
  Previous = "Previous",
  Next = "Next Up",
}

const PrevNextLink = ({
  pills,
  currentPillIndex,
  type,
}: PillsProps & { type: PrevNextType }) => {
  let index: number;
  let isValid: boolean;
  let label: string;
  let customCss: SerializedStyles;

  switch (type) {
    case PrevNextType.Previous:
      index = currentPillIndex - 1;
      isValid = index >= 0;
      label = "Previous";
      customCss = css`
        .arrow {
          transform: scaleX(-1);
          order: -1;
        }
      `;
      break;
    case PrevNextType.Next:
      index = currentPillIndex + 1;
      isValid = index < pills.length;
      label = "Next";
      break;
  }
  if (!isValid) {
    return <></>;
  }
  return (
    <a href={pills[index].href}>
      <div className="prev-next-box">
        <h4 css={customCss}>
          <span className="label">{label}</span>
          <Arrow />
        </h4>
        <p>
          <span className="icon">
            <EarlyDevIcon />
          </span>
          <span className="page-title">{pills[index].name}</span>
        </p>
      </div>
    </a>
  );
};

const PrevNext = (props: PillsProps) => {
  const highlightColorCss = css`
    --highlight-color: ${props.colorActive};
  `;

  return (
    <nav css={[prevNextCss, highlightColorCss]}>
      <PrevNextLink {...props} type={PrevNextType.Previous} />
      <div aria-hidden="true">
        {/* This is here as a spacer to force Next to the right-hand side, and Prev to the left-hand side */}
      </div>
      <PrevNextLink {...props} type={PrevNextType.Next} />
    </nav>
  );
};

export default PrevNext;
