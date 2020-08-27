import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPencilAlt,
  faBookOpen,
  faGraduationCap,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";

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

  li > svg {
    color: var(--highlight-colour);
  }
  li > span {
    padding: 0 0.5rem;
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

  ${mq(BreakPoint.md)} {
    padding: 0 5rem;
    .scroll-help {
      display: none;
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

const ResearchNavigation = (): JSX.Element => {
  const ratioToScroll = 0.8;
  let thingToScroll;

  const scrollLeft = () => {
    thingToScroll.scrollBy({
      left: -thingToScroll.clientWidth * ratioToScroll,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    console.log(thingToScroll.clientWidth);
    thingToScroll.scrollBy({
      left: thingToScroll.clientWidth * ratioToScroll,
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
      <ul ref={el => (thingToScroll = el)}>
        <li
          css={css`
            --highlight-colour: var(--aqua);
          `}
        >
          <FontAwesomeIcon icon={faShapes} />
          <span>Early years</span>
        </li>
        <li
          className="current-page"
          css={css`
            --highlight-colour: var(--yellow);
          `}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
          <span>School years</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faBookOpen} />
          <span>Further Education</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faGraduationCap} />
          <span>Higher Education</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faBriefcase} />
          <span>Working life</span>
        </li>
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
