import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import Button from "../components/common/button";
import { BreakPoint, mq } from "../util/mq";
import { css } from "@emotion/core";
import HeroBackgroundImage from "../components/operational-review/hero-background-image";
import linkedInImage from "../images/LinkedIn-Logos/LI-In-Bug.png";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";

const mainCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0.75rem;
  color: var(--midnight);

  h1 {

    font-size: 2rem;
    line-height: 2.75rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 14px;
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
    max-width: 1024px;
  }

  .contact-item {
    margin-bottom: 36px;
    p {
      margin-bottom: 36px;
    }
  }

  .more-contact {
    p {
      padding: 24px 0;
      text-align: center;
    }
  }

  .more-contact-item {
    display: inline-block;
    vertical-align: top;
    width: 445px;
    margin: 0 95px;

    h2 {
      margin-top: 26px;
      margin-bottom: 4px ;
    }

    .linked-in {
      display: inline-block;
      width: 1em;
      height: 1em;
    }
  }

  .contact-panel {
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.2);
  }

  .heading {
    margin-bottom: 95px;
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

const headerCss = css`
  font-weight: 600;

  .header {
    height: 12.5rem;
  }

  p {
    color: var(--white);
  }

  .highlight {
    font-size: 1.25rem;
  }

  h2 {
    background-color: var(--yellow);
    color: var(--midnight);
    display: inline-block;
    padding: 0.125rem;
  }

  .container {
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    height: 100%;
  }

  ${mq(BreakPoint.md)} {
    .header {
      padding: 0 2.5rem;
      height: 16rem;
    }
    h2 {
      font-size: 2rem;
    }
    .highlight {
      font-size: 1.5rem;
    }
  }
  ${mq(BreakPoint.lg)} {
    .header {
      padding: 0 10rem;
      height: 18.75rem;
    }
  }
`;

const Header = () => (
  <header css={headerCss}>
    <HeroBackgroundImage className="header">
      <div className="container">
        <p>Home &gt; Get Involved</p>
        <h2>Get Involved</h2>
        <p className="highlight">&nbsp;</p>
      </div>
    </HeroBackgroundImage>
  </header>)

const Main = () => (
  <main css={mainCss}>
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
      <div className="contact-item">
        <h2>Funding community</h2>
        <p>Connect ESMA to organisations that are tackling social mobility to include on our platform for others to collaborate with.</p>
      </div>
      <div className="contact-item">
        <h2>Resources</h2>
        <p>Provide technology resources to continue to build out our platform services</p>
      </div>
    </div>
    <div className="more-contact">
      <p>If you’d like to know more about the above you can email:</p>
      <div className="contact-panel">
        <div className="more-contact-item">
          <div className="image-placeholder" style={{backgroundColor: "pink", borderRadius: "9999px", width: "60px", height: "60px", float: "left", margin: "2.25em" }}></div>
          <h2>Barry Matthews <a className="linked-in" href="https://www.linkedin.com/in/barry-matthews-0970704/"><img alt="linked-in" src={linkedInImage} /></a></h2>
          <a href="mailto:barrymatthews@esma.community">barrymatthews@esma.community</a>
        </div>
        <div className="more-contact-item">
          <div className="image-placeholder" style={{backgroundColor: "pink", borderRadius: "9999px", width: "60px", height: "60px", float: "left", margin: "2.25em" }}></div>
          <h2>Barry Murphy <a className="linked-in" href="https://www.linkedin.com/in/barry-murphy-2240a115"><img alt="linked-in" src={linkedInImage} /></a></h2>
          <a href="mailto:barrymurphy@esma.community">barrymurphy@esma.community</a>
        </div>
      </div>
    </div>
  </main>
);

const GetInvolvedPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Main />
      <NewsletterSignUp />
    </Layout>
  );
};

export default GetInvolvedPage;
