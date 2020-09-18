import React from "react";
import { css } from "@emotion/core";
import { BreakPoint, mq } from "../../util/mq";
import IntroVideo from "../../video/intro-olisa-mahy.mp4";

const mainCss = css`
  padding: 1.5rem 0.75rem;
  color: var(--midnight);
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 2.125rem;
  text-align: center;

  h2,
  h3 {
    font-weight: 600;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }

  p {
    padding: 1rem 0;
  }

  .trailer {
    display: flex;
    flex-direction: column;
    text-align: left;
    max-width: 45rem;
    margin: 0 auto;

    video {
      order: -1;
    }

    .share {
      font-weight: 500;
      text-decoration: underline;
    }

    .credit {
      font-size: 0.875rem;
    }

    p {
      padding: 0;
    }
  }

  ${mq(BreakPoint.md)} {
    padding: 4.5rem 2.5rem 2rem;

    .trailer {
      padding: 4.5rem 0 0 0;
      gap: 0.5rem;

      h3 {
        font-size: 1.5rem;
        padding-top: 1rem;
      }

      ul {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  ${mq(BreakPoint.lg)} {
    padding: 4.5rem 10rem 2rem;
  }
`;

const VideoSection = () => {
  return (
    <section className="trailer">
      <h3>Sir Kenneth Olisa and Helen Mahy</h3>
      <p>Employer's Social Mobility Alliance Co-Chairs</p>
      <video controls>
        <source src={IntroVideo} type="video/mp4" />
      </video>
      <ul>
        <li className="share">Share on Twitter</li>
        <li className="share">Share on LinkedIn</li>
        <li className="credit">
          Music: <a href="www.bensound.com">www.bensound.com</a>
        </li>
      </ul>
    </section>
  );
};

const Main = () => (
  <div css={mainCss}>
    <main>
      <h2>Our mission</h2>
      <p>
        We’re on a mission to promote collaboration between employers, The State
        and Third Sector to address the issues faced by those from low-income
        backgrounds entering the workforce.
      </p>
      <p>
        We want this to be the place where you can find out, in one place, what
        the issues are, who is doing something about them and how you can get
        involved no matter who you are or where you are in the UK.
      </p>
    </main>
    <VideoSection />
  </div>
);

export default Main;
