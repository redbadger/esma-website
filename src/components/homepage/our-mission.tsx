import React from "react";
import { css } from "@emotion/core";
import { BreakPoint, mq } from "../../util/mq";

const mainCss = css`
  padding: 1.5rem 0.75rem;
  color: var(--midnight);
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 2.125rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    padding: 1rem 0;
  }

  ${mq(BreakPoint.md)} {
    padding: 4.5rem 2.5rem 2rem;
  }
  ${mq(BreakPoint.lg)} {
    padding: 4.5rem 10rem 2rem;
  }
`;

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
  </div>
);

export default Main;
