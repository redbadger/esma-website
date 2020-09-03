import React from "react";
import { css } from "@emotion/core";
import ReliefImage from "./relief-image";
import { BreakPoint, mq } from "../../util/mq";

const mainCss = css`
  padding: 0.75rem;
  margin-top: 1.5rem;
  color: var(--midnight);
  font-weight: 300;
  font-size: 1.125rem;

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
    aside .hero-image-wrapper {
      height: 15rem;

      picture img {
        object-position: center -5rem;
      }
    }
  }
  ${mq(BreakPoint.lg)} {
    display: flex;

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
      <p className="intro">
        Following the construction of the Social Mobility Activity Map the Study
        Segment teams will:
      </p>

      <ul>
        <li>
          In respect of each initiative and organisation mapped, make
          recommendations on how the programmes focused on the Study Segment
          could better collaborate e.g. formation of “Issue Communities” to
          avoid duplication of provision/administration (e.g. student
          on-boarding), merger of initiatives and/or adoption of a ‘baton pass’
          measures between adjoining age group focussed schemes;
        </li>
        <li>
          Create a summary of gaps in provision e.g. issues in the SM Chronology
          of Issues not addressed or lack of activity in specific geographic
          areas;
        </li>
        <li>
          Highlight best in class providers measured on reach and collaboration;
          and
        </li>
        <li>Highlight additional areas flagged for innovation focus.</li>
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
