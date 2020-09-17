import React from "react";
import { css } from "@emotion/core";
import ReliefImage from "./relief-image";
import { BreakPoint, mq } from "../../util/mq";

const mainCss = css`
  padding: 1.5rem 0.75rem;
  color: var(--midnight);
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 2.125rem;

  .intro {
    font-size: 1.25rem;
    font-weight: 600;
  }

  ul {
    list-style: circle;
    list-style-position: inside;
  }
  li::before {
    display: inline-block;
    width: 1rem;
    content: "";
  }
  li,
  p {
    padding: 1rem 0;
  }

  ${mq(BreakPoint.md)} {
    padding: 2rem 2.5rem;

    aside .hero-image-wrapper {
      height: 15rem;

      picture img {
        object-position: center -5rem;
      }
    }
  }
  ${mq(BreakPoint.lg)} {
    display: flex;
    padding: 4.5rem 10rem 2rem;
    gap: 8rem;

    aside .hero-image-wrapper {
      width: 27.5rem;
      height: 37.5rem;

      picture img {
        object-position: -7rem 0rem;
      }
    }
  }
`;

const Main = () => (
  <div css={mainCss}>
    <main>
      <p>
        The information in Life Stages tells us that social mobility remains a
        problem, and it's getting worse. The work we are doing on the Activity
        Map tells us there is a huge amount of work being done to tackle the
        problem. You're here reading this, and we know many more like you want
        to make a difference. But what works?
      </p>

      <p>
        We've commissioned a panel to review each organisation and programme
        focused on the different Life Stages. The panel will look at
        opportunities for better collaboration within and across Life Stages.
        The work will result in:
      </p>

      <ul>
        <li>
          a summary of gaps in provision for any Life Stage or specific
          geographic areas
        </li>
        <li>
          a spotlight on best in class providers measured on outcomes achieved
        </li>
        <li>recommendations for new innovation</li>
      </ul>
      <p>
        The Study Segment teams will then present their findings to the ESMA
        panel in September 2021
      </p>
    </main>
    <aside>
      <ReliefImage />
    </aside>
  </div>
);

export default Main;
