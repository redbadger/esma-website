import React from "react";
import HeroVideo from "./hero-video";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

export const heroCss = css`
  position: relative;
  font-weight: 500;
  height: 20rem;
  padding: 3rem 0.75rem;

  ${mq(BreakPoint.md)} {
    height: 26.25rem;
    padding: 4.5rem 2rem;
  }

  ${mq(BreakPoint.lg)} {
    padding: 6.25rem 10rem;
  }
`;

const backgroundCss = css`
  .background {
    background-color: var(--midnight);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    > .video-container {
      position: relative;
      height: 100%;
      width: 70rem;
      left: calc(50vw - 35rem);
    }
  }
  .background-image-filter {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  ${mq(BreakPoint.md)} {
    .background > .video-container {
      width: 92rem;
      left: calc(50vw - 46rem);
    }
  }
  @media screen and (min-width: 1440px) {
    .background > .video-container {
      width: 100vw;
      left: 0;
    }
  }
`;

const foregroundCss = css`
  .foreground {
    position: relative;
    z-index: 2;
    color: var(--white);
    font-size: 1.25rem;
    line-height: 1.875rem;
    p {
      margin-bottom: 2.125rem;
    }
    max-width: 51rem;
  }

  .highlight {
    background-color: var(--yellow);
    color: var(--midnight);
    padding: 0.25rem;
  }

  ${mq(BreakPoint.md)} {
    .foreground {
      font-size: 2rem;
      line-height: 2.75rem;
    }
  }
`;

const Hero = () => (
  <header css={[heroCss, backgroundCss, foregroundCss]}>
    <div className="background">
      <div className="video-container">
        <div className="background-image-filter"></div>
        <HeroVideo />
      </div>
    </div>
    <div className="foreground">
      <p>
        <span className="highlight">Social inequality</span> is persistent and
        systematic. Often where you start in life is where you’ll end up.
      </p>
      <p>Together we can change this.</p>
    </div>
  </header>
);

export default Hero;
