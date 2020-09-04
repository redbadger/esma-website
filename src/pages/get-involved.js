import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import Button from "../components/common/button";
import { BreakPoint, mq } from "../util/mq";
import { css } from "@emotion/core";

const mainCss = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--midnight);
    font-size: 2rem;
    line-height: 2.75rem;
    font-weight: 600;
  }

  h2 {
    color: var(--midnight);
    font-size: 1.25rem;
    line-height: 2.75rem;
    font-weight: 600;
  }

  p {
    color: var(--midnight);
    font-size: 1rem;
  }

  .contact-items {
    text-align: left;
  }

  .contact-item {
    display: inline-block;
    vertical-align: top;
    width: 445px;
    margin: 0 95px 95px;

    p {
      margin-bottom: 36px;
    }
  }

  .heading {
    margin-bottom: 95px;
  }

`;

const Main = () => (
  <div css={mainCss}>
    <main>
      <div className="heading">
        <h1>Ways to get involved</h1>
        <p>
          Help us make the change. We have bold and ambitious plans and need help to execute them.
        </p>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <h2>Newsletter</h2>
          <p>Sign up to our newsletter to stay up to date on the progress of our plans, events and research.</p>
          <Button label="Sign up" variant="light-grey" onClick={() => {}} />
        </div>

        <div className="contact-item">
          <h2>Connecting organisations</h2>
          <p>Connect ESMA to organisations that are tackling social mobility to include on our platform for others to collaborate with.</p>
        </div>
        <br />
        <div className="contact-item">
          <h2>Funding community</h2>
          <p>Connect ESMA to organisations that are tackling social mobility to include on our platform for others to collaborate with.</p>
        </div>
        <div className="contact-item">
          <h2>Resources</h2>
          <p>Provide technology resources to continue to build out our platform services</p>
        </div>
      </div>
    </main>
  </div>
);

const GetInvolvedPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Main></Main>
    </Layout>
  );
};

export default GetInvolvedPage;
