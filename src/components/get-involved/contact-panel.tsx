import React from "react";
import { BreakPoint, mq } from "../../util/mq";
import { css } from "@emotion/core";
import linkedInImage from "../../images/linkedin/blue-sq.png";
import murphy from "../../images/barry/murphy.jpg";
import matthews from "../../images/barry/matthews.jpg";

const contactPanelCss = css`
  .more-contact-item {
    display: block;
    width: 100%;

    picture {
      display: block;
    }

    p {
      padding-top: 0.5rem;
      text-align: left;
    }

    p.contact-name {
      font-weight: 600;
      font-size: 1.25rem;
    }

    .linked-in {
      display: inline-block;
      width: 1em;
      height: 1em;
    }
  }

  .contact-panel-intro {
    font-weight: 600;
    text-align: center;
    font-size: 1.125rem;
    margin: 1.5rem;
  }

  .contact-panel {
    box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.2);
    padding: 2.25rem 1.625rem;
    margin-bottom: 4.5rem;
  }

  .heading {
    margin-bottom: 6rem;
  }

  a {
    color: var(--midnight);
    text-decoration: none;
  }

  /* .barry {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 1.625rem;
    margin-bottom: 0.25rem;
    gap: 2.25rem;
    picture,
    p {
    }
  } */

  .image-placeholder {
    border-radius: 9999px;
    width: 3.75rem;
    height: 3.75rem;
    background-size: 3.75rem;
  }

  .image-placeholder.murphy {
    background-image: url(${murphy});
  }

  .image-placeholder.matthews {
    background-image: url(${matthews});
  }

  ${mq(BreakPoint.sm)} {
    .contact-items {
      grid-template-columns: repeat(2, 1fr);
    }
    .more-contact-items {
      padding: 0 6rem;
    }
  }
`;

const ContactPanel = () => {
  return (
    <div css={contactPanelCss}>
      <p className="contact-panel-intro">
        If you’d like to know more about the above you can email:
      </p>
      <div className="contact-panel">
        <div className="more-contact-item">
          <picture className="image-placeholder matthews"></picture>
          <p className="contact-name">
            Barry Matthews{" "}
            <a
              className="linked-in"
              href="https://www.linkedin.com/in/barry-matthews-0970704/"
            >
              <img alt="linked-in" src={linkedInImage} />
            </a>
          </p>
          <a href="mailto:barrymatthews@esma.community">
            barrymatthews@esma.community
          </a>
        </div>
        <div className="more-contact-item">
          <picture className="image-placeholder murphy"></picture>
          <p className="contact-name">
            Barry Murphy{" "}
            <a
              className="linked-in"
              href="https://www.linkedin.com/in/barry-murphy-2240a115"
            >
              <img alt="linked-in" src={linkedInImage} />
            </a>
          </p>
          <a href="mailto:barrymurphy@esma.community">
            barrymurphy@esma.community
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;
