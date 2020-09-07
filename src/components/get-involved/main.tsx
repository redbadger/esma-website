import React from "react";
import { animateScroll as scroll } from 'react-scroll';
import Button from "../../components/common/button";
import { BreakPoint, mq } from "../../util/mq";
import { css } from "@emotion/core";
import linkedInImage from "../../images/linkedin/blue-sq.png";

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
    margin: 4.5rem 0 0.75rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.875rem;
  }

  p {
    font-size: 1rem;
  }

  .heading {
    text-align: center;
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

  .more-contact {
    p {
      padding-top: 0.5rem;
      text-align: left;
    }
  }

  .more-contact-item {
    display: inline-block;
    vertical-align: top;
    width: 27.5rem;
    margin: 0 6rem;

    p.contact-name {
      font-weight: 600;
      font-size: 1.25rem;
      margin-top: 1.625rem;
      margin-bottom: 0.25rem ;
    }

    .linked-in {
      display: inline-block;
      width: 1em;
      height: 1em;
    }
  }

  .contact-panel {
    box-shadow: 0 0 0.25rem 0 rgba(0,0,0,0.2);
  }

  .heading {
    margin-bottom: 6rem;
  }


  a {
    color: var(--midnight);
    text-decoration: underline;
  }

  ${mq(BreakPoint.sm)} {
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
        Help us make the change. We have bold and ambitious plans and need help to execute them.
      </p>
    </div>
    <div className="contact-items">
      <div className="contact-item">
        <h3>Newsletter</h3>
        <p>Sign up to our newsletter to stay up to date on the progress of our plans, events and research.</p>
        <Button label="Sign up" variant="light-grey" onClick={() => scroll.scrollToBottom() } />
      </div>
      <div className="contact-item">
        <h3>Connecting organisations</h3>
        <p>Connect ESMA to organisations that are tackling social mobility to include on our platform for others to collaborate with.</p>
      </div>
      <div className="contact-item">
        <h3>Funding community</h3>
        <p>Connect ESMA to organisations that are tackling social mobility to include on our platform for others to collaborate with.</p>
      </div>
      <div className="contact-item">
        <h3>Resources</h3>
        <p>Provide technology resources to continue to build out our platform services</p>
      </div>
    </div>
    <div className="more-contact">
      <p>If you’d like to know more about the above you can email:</p>
      <div className="contact-panel">
        <div className="more-contact-item">
          <div className="image-placeholder" style={{backgroundColor: "pink", borderRadius: "9999px", width: "60px", height: "60px", float: "left", margin: "2.25em" }}></div>
          <p className="contact-name">Barry Matthews <a className="linked-in" href="https://www.linkedin.com/in/barry-matthews-0970704/"><img alt="linked-in" src={linkedInImage} /></a></p>
          <a href="mailto:barrymatthews@esma.community">barrymatthews@esma.community</a>
        </div>
        <div className="more-contact-item">
          <div className="image-placeholder" style={{backgroundColor: "pink", borderRadius: "9999px", width: "60px", height: "60px", float: "left", margin: "2.25em" }}></div>
          <p className="contact-name">Barry Murphy <a className="linked-in" href="https://www.linkedin.com/in/barry-murphy-2240a115"><img alt="linked-in" src={linkedInImage} /></a></p>
          <a href="mailto:barrymurphy@esma.community">barrymurphy@esma.community</a>
        </div>
      </div>
    </div>
  </main>
);

export default Main;
