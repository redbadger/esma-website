import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pages, ResearchPage } from "./research-pages";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const researchNavigationCss = css`
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.15) 0rem 0.25rem 0.375rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: var(--fixed-header-height);
  color: var(--midnight);

  .scroll-help {
    display: block;
    width: 3rem;
    text-align: center;
    font-size: 2rem;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.5s linear;
    &.can-scroll {
      opacity: 1;
    }
  }

  li > a {
    height: 100%;
    display: flex;
    align-items: center;
    > svg {
      color: var(--highlight-colour);
      display: inline-block;
      height: 1.5rem;
      vertical-align: bottom;
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
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    /* TODO - decide whether we want a scrollbar
    
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
    transition: scrollbar-color 0.5s linear;
    &:hover {
      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
    }
    */
    li {
      flex-shrink: 0;
      width: unset;
    }
  }

  ${mq(BreakPoint.xl)} {
    .scroll-help {
      display: none;
    }
    ul {
      padding: 0 4rem;
      overflow-x: visible;
    }
  }

  li {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  a {
    border-top: 0.375rem solid transparent;
    border-bottom: 0.375rem solid transparent;
    transition: 0.6s border-color ease;
    
    &:hover,
    &:focus,
    &:active {
      border-bottom-color: var(--highlight-colour);
    }
  }

  a.current-page {
    border-bottom-color: var(--highlight-colour);
    font-weight: 800;
  }
`;

const ResearchNavigationLink = ({
  className,
  highlightColour,
  href,
  name,
  icon,
}: ResearchPage): JSX.Element => {
  const Icon = icon;
  return (
    <li
      className={className}
      css={css`
        --highlight-colour: ${highlightColour};
      `}
    >
      <Link
        to={href}
        getProps={({isPartiallyCurrent}) => {
          return {
            className: isPartiallyCurrent ? "current-page" : "",
          };
        }}
      >
        <Icon />
        <span>{name}</span>
      </Link>
    </li>
  );
};

const ResearchNavigation = (): JSX.Element => {
  const [canScrollLeft, setCanScrollLeft] = React.useState(true);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const widthScrollRatio = 0.8;
  let listElement: HTMLUListElement;

  const scrollLeft = () => {
    listElement.scrollBy({
      left: -listElement.clientWidth * widthScrollRatio,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    listElement.scrollBy({
      left: listElement.clientWidth * widthScrollRatio,
      behavior: "smooth",
    });
  };

  const updateScrollers = overflowElement => {
    if (!overflowElement) {
      return;
    }
    setCanScrollLeft(overflowElement.scrollLeft > 0);
    // Firefox gives us a really nice API feature, 'scrollLeftMax'
    // for other browsers, there's the classic.
    const scrollLeftMax =
      overflowElement.scrollLeftMax ||
      overflowElement.scrollWidth - overflowElement.clientWidth;
    setCanScrollRight(overflowElement.scrollLeft < scrollLeftMax);
  };

  const updateCanScroll = target => {
    // We request an animation frame so that the scrolling finishes before we
    // attempt to make any update to the current state.
    // The 'scroll' event has a rapid fire rate, and we only need to change anything
    // when the scrolling is finished.
    window.requestAnimationFrame(() => updateScrollers(target));
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => updateCanScroll(listElement));
    listElement.addEventListener("scroll", event =>
      updateCanScroll(event.target)
    );
    updateScrollers(listElement);
  });

  return (
    <nav css={researchNavigationCss}>
      <div
        className={`scroll-help left ${canScrollLeft ? "can-scroll" : ""}`}
        onClick={scrollLeft}
        onKeyDown={scrollLeft}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <ul ref={el => (listElement = el)}>
        {pages.map(page => (
          <ResearchNavigationLink {...page} key={page.name} />
        ))}
      </ul>
      <div
        className={`scroll-help right ${canScrollRight ? "can-scroll" : ""}`}
        onClick={scrollRight}
        onKeyDown={scrollRight}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </nav>
  );
};

export default ResearchNavigation;
