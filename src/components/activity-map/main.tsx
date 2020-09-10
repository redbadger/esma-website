import React from "react";
import { css } from "@emotion/core";
import { BreakPoint, mq } from "../../util/mq";
import { Link } from "gatsby";
import ActivityMapSvg from "../../svg/activity-map.svg";

const mainCss = css`
  padding: 1.5rem 0.75rem;
  color: var(--midnight);
  font-weight: 300;
  font-size: 1.125rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  h3 {
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

  h3,
  p {
    padding: 1rem 0;
  }

  aside {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  picture > svg {
    max-width: 100%;
    height: auto;
  }

  ${mq(BreakPoint.md)} {
    padding: 2rem 2.5rem;
  }
  ${mq(BreakPoint.lg)} {
    display: flex;
    padding: 4.5rem 10rem 2rem;
    gap: 8rem;

    main {
      flex-basis: 50%;
      flex-shrink: 0;
    }
  }
`;

const Main = () => (
  <div css={mainCss}>
    <main>
      <h2>Activity Map</h2>
      <p>
        ESMA has recruited over 200 volunteer business professionals to date to
        map the social mobility activity of Business, State and Third Sector
        across the UK. Volunteers have been divided into ‘Study Segment’ teams –
        one for each Life Stage set out in the{" "}
        <Link to="/issues-chronology">Social Mobility Issues Chronology</Link>.
      </p>
      <p>
        The Study Segment teams first task will be to map and summarise the
        activity of all material agencies and initiatives in the public, private
        and third sector in each region seeking to address issues identified in
        the Issues Chronology. The interactive map will be capable of filtering
        by Study Segment, Sector (Business, State and Third Sector) and industry
        (Business) and will also be:
      </p>
      <h3>Subdivided and capable of filtering by reference to:</h3>
      <ul>
        <li>Local Enterprise Partnership map in respect of England;</li>
        <li>MSP constituency in Scotland;</li>
        <li>Welsh Assembly Member constituency in Wales; and</li>
        <li>NI Assembly Member constituency in Northern Ireland. </li>
      </ul>
    </main>
    <aside>
      <picture>
        <ActivityMapSvg />
      </picture>
    </aside>
  </div>
);

export default Main;
