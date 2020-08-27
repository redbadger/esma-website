import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pages, ResearchPage } from "./research-pages";

const researchNavigationCss = css`
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.15) 0rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: var(--fixed-header-height);
  color: var(--midnight);

  .scroll-help {
    display: block;
    width: 2rem;
    text-align: center;
    font-size: 3rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0rem 0rem 1rem;
    cursor: pointer;
  }

  li > a {
    height: 100%;
    > svg {
      color: var(--highlight-colour);
    }
    > span {
      padding: 0 0.5rem;
    }
  }

  ul {
    overflow-x: scroll;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
    li {
      flex-shrink: 0;
      width: unset;
    }
  }

  ${mq(BreakPoint.lg)} {
    .scroll-help {
      display: none;
    }
    ul {
      overflow-x: visible;
      justify-content: center;
    }
  }

  li {
    margin-left: 1rem;
    margin-right: 1rem;
    border-bottom: 0.5rem solid rgba(255, 255, 255, 0);
    &:hover,
    &:focus,
    &:active {
      border-color: var(--highlight-colour);
    }
    transition: 1s border-color ease;
  }

  li.current-page {
    border-bottom: 0.5rem solid var(--highlight-colour);
    font-weight: 800;
  }
`;

const ResearchNavigationLink = ({
  className,
  highlightColour,
  faIcon,
  href,
  name,
}: ResearchPage): JSX.Element => {
  return (
    <li
      className={className}
      css={css`
        --highlight-colour: ${highlightColour};
      `}
    >
      <a href={href}>
        <FontAwesomeIcon icon={faIcon} />
        <span>{name}</span>
      </a>
    </li>
  );
};

const ResearchNavigation = (): JSX.Element => {
  const widthScrollRatio = 0.8;
  let listElement: HTMLUListElement;

  const scrollLeft = () => {
    listElement.scrollBy({
      left: -listElement.clientWidth * widthScrollRatio,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    console.log(listElement.clientWidth);
    listElement.scrollBy({
      left: listElement.clientWidth * widthScrollRatio,
      behavior: "smooth",
    });
  };

  return (
    <nav css={researchNavigationCss}>
      <div
        className="scroll-help left"
        onClick={scrollLeft}
        onKeyDown={scrollRight}
      >
        <p>&lt;</p>
      </div>
      <ul ref={el => (listElement = el)}>
        {pages.map(page => (
          <ResearchNavigationLink {...page} key={page.name} />
        ))}
      </ul>
      <div
        className="scroll-help right"
        onClick={scrollRight}
        onKeyDown={scrollRight}
      >
        <p>&gt;</p>
      </div>
    </nav>
  );
};

export default ResearchNavigation;
