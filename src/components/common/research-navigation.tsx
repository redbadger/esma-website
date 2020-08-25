import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

const researchNavigationCss = css`
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.15) 0rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  .scroll-help {
    display: block;
    width: 2rem;
    text-align: center;
    font-size: 3rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0rem 0rem 1rem;
    cursor: pointer;
  }

  ul {
    overflow-x: scroll;
    flex-direction: row;
    padding: 0;
    li {
      flex-shrink: 0;
      width: unset;
    }
  }

  ${mq(BreakPoint.md)} {
    ul {
      flex-direction: column;
    }
  }

  li {
    margin-left: 1rem;
    margin-right: 1rem;
    border-bottom: 0.5rem solid rgba(255, 255, 255, 0);
    &:hover,
    &:focus,
    &:active {
      border-color: blue;
    }
    transition: 1s border-color ease;
  }
  li:hover {
  }

  li.current-page {
    border-bottom: 0.5rem solid black;
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
        <li>Early years</li>
        <li className="current-page">School years</li>
        <li>Further Education</li>
        <li>Higher Education</li>
        <li>Working life</li>
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
