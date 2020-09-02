import React from "react";
import { css, SerializedStyles } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import { PillsProps } from "./types";
import Arrow, { arrowHoverCss } from "../common/arrow";
import EarlyDevIcon from "../../svg/blocks.svg";

const withPrefixes = style => `
    ${style}
    -webkit-${style}
    -moz-${style}
    -ms-${style}
`;

const prevNextCss = css`
  z-index: 1;
  position: relative;
  padding: 4.5rem 0;
  display: flex;
  justify-content: space-between;

  .prev-next-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    background-color: var(--white);
    ${withPrefixes`box-shadow: 0 0 0.25rem 0 rgba(0,0,0,0.2);`}
    min-height: 7rem;
    color: var(--midnight);
    padding: 1.5rem;

    :hover {
      transform: translate3d(0px, -1px, 0px);
      ${withPrefixes`box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);`}
      .arrow {
        ${arrowHoverCss}
      }
    }
    h4,
    p {
      display: flex;
      align-items: center;
      gap: 1rem;
      min-height: 2rem;
      margin: 0.25rem 0;
    }
  }

  .icon {
    display: none;
  }

  .page-title {
    font-weight: 600;
    font-size: 1rem;
  }

  .label {
    text-transform: uppercase;
  }

  .spacer {
    min-width: 1rem;
  }

  h4 .arrow {
    display: none;
  }
  .arrow {
    margin-left: 0;
  }

  ${mq(BreakPoint.md)} {
    ${withPrefixes`box-shadow: none;`}
    padding: 4.5rem 0;
    background-color: var(--white);

    .spacer {
      min-width: 1rem;
      flex: 1;
    }

    .icon {
      display: block;
      svg {
        height: 1.5rem;
      }
    }
    p .page-title {
      font-size: 1.25rem;
    }

    .mobile-arrow .arrow {
      display: none;
    }
    h4 .arrow {
      display: block;
    }
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
  icon,
}: PrevNextProps & {
  type: PrevNextType;
}) => {
  const Icon = icon;
  let index: number;
  let isValid: boolean;
  let customCss: SerializedStyles;

  switch (type) {
    case PrevNextType.Previous:
      index = currentPillIndex - 1;
      isValid = index >= 0;
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
      break;
  }
  if (!isValid) {
    return <></>;
  }
  return (
    <a href={pills[index].href} className="prev-next-box" css={customCss}>
      <h4>
        <span className="label">{type}</span>
        <Arrow />
      </h4>
      <p>
        <span className="icon">
          <Icon />
        </span>
        <span className="page-title">{pills[index].name}</span>
      </p>
      <div className="mobile-arrow">
        <Arrow />
      </div>
    </a>
  );
};

type PrevNextProps = PillsProps & {
  icon: React.ElementType;
};

const PrevNext = (props: PrevNextProps) => {
  const highlightColorCss = css`
    --highlight-color: ${props.colorActive};
  `;

  return (
    <nav css={[prevNextCss, highlightColorCss]}>
      <PrevNextLink {...props} type={PrevNextType.Previous} />
      <div aria-hidden="true" className="spacer">
        {/* This is here as a spacer to force Next to the right-hand side, and Prev to the left-hand side */}
      </div>
      <PrevNextLink {...props} type={PrevNextType.Next} />
    </nav>
  );
};

export default PrevNext;
