import React from "react";
import { BreakPoint, mq } from "../../util/mq";
import { css } from "@emotion/core";
import linkedInImage from "../../images/linkedin/blue-sq.png";
import murphy from "../../images/barry/murphy.jpg";
import matthews from "../../images/barry/matthews.jpg";

const contactPanelCss = css`
  width: 100%;

  .barry {
    display: block;

    picture {
      display: block;
    }

    picture img {
      max-width: 100%;
      height: auto;
    }

    p {
      text-align: left;
    }

    p.contact-name a {
      font-weight: 600;
      font-size: 1.25rem;
      picture {
        display: inline-block;
        margin: 0 1rem;
        width: 1.125rem;
      }
    }
  }

  .contact-panel-intro {
    font-weight: 600;
    text-align: center;
    font-size: 1.125rem;
    margin: 1.5rem;
  }

  .contact-panel {
    display: flex;
    flex-direction: column;
    margin-bottom: 4.5rem;
    gap: 2rem;
    padding: 2.25rem 1.625rem;
    box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.2);
  }

  .heading {
    margin-bottom: 6rem;
  }

  a {
    color: var(--midnight);
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 300;
    :hover {
      text-decoration: underline;
    }
  }

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

  ${mq(BreakPoint.md)} {
    .contact-panel {
      flex-direction: row;
      margin: 0 2.25rem;
      justify-content: center;
    }
  }
  ${mq(BreakPoint.lg)} {
    .barry {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.25rem;
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
        <div className="barry">
          <picture className="image-placeholder matthews"></picture>
          <div>
            <p className="contact-name">
              <a
                href="https://www.linkedin.com/in/barry-matthews-0970704/"
                title="Barry Matthews on LinkedIn"
              >
                Barry Matthews
                <picture>
                  <img alt="linked-in" src={linkedInImage} />
                </picture>
              </a>
            </p>
            <a href="mailto:barry.matthews@smbp.org.uk">
              barry.matthews@smbp.org.uk
            </a>
          </div>
        </div>
        <div className="barry">
          <picture className="image-placeholder murphy"></picture>
          <div>
            <p className="contact-name">
              <a
                href="https://www.linkedin.com/in/barry-murphy-2240a115"
                title="Barry Murphy on LinkedIn"
              >
                Barry Murphy
                <picture>
                  <img alt="linked-in" src={linkedInImage} />
                </picture>
              </a>
            </p>
            <a href="mailto:barrymurphy@esma.community">
              barrymurphy@esma.community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;
