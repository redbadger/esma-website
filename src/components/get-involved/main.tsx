import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Button from "./button";
import { css } from "@emotion/core";
import ContactPanel from "./contact-panel";
import { BreakPoint, mq } from "../../util/mq";

const mainCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0.75rem;
  color: var(--midnight);

  h2 {
    font-size: 2rem;
    line-height: 2.75rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.875rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 2.125rem;
    font-weight: 300;
  }

  .heading {
    margin: 2.25rem 0;
    text-align: center;
  }

  ul.contact-items {
    list-style: none;
  }

  .contact-items {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1em;
    grid-column-gap: 2.25em;
    grid-auto-rows: minmax(100px, auto);
    max-width: 64rem;
  }

  .contact-item {
    margin-bottom: 2.25rem;
    p {
      margin-bottom: 1.25rem;
    }
  }

  ${mq(BreakPoint.sm)} {
    .heading {
      margin: 4.5rem 0;
    }
    .contact-items {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const Main = () => (
  <main css={mainCss}>
    <div className="heading">
      <h2>Ways to get involved</h2>
      <p>
        Help us make the change. We have bold and ambitious plans and need help
        to execute them.
      </p>
    </div>
    <ul className="contact-items">
      <li className="contact-item">
        <h3>Newsletter</h3>
        <p>
          Sign up to our newsletter to stay up to date on the progress of our
          plans, events and research.
        </p>
        <Button label="Sign up" onClick={() => scroll.scrollToBottom()} />
      </li>
      <li className="contact-item">
        <h3>Connecting organisations</h3>
        <p>
          Connect ESMA to organisations that are tackling social mobility to
          include on our platform for others to collaborate with.
        </p>
      </li>
      <li className="contact-item">
        <h3>Funding community</h3>
        <p>
          Join our funding community who are committed to making change stick.
        </p>
      </li>
      <li className="contact-item">
        <h3>Provide resources</h3>
        <p>
          Provide design and technology resource to continue to build our
          digital platform.
        </p>
      </li>
    </ul>
    <ContactPanel />
  </main>
);

export default Main;
