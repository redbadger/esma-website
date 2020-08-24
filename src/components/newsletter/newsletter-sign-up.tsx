import React, { FormEvent, useState } from "react";
import { css } from "@emotion/core";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { mq, BreakPoint } from "../../util/mq";
import NewsletterInputField from './newsletter-input-field';

const newsletterSignUpStyles = css`
  padding: 4.5rem 0.75rem;

  header {
    margin-bottom: 2.25rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.75rem;
    font-weight: 600;
    color: var(--midnight);
    margin-bottom: 0.75rem;
  }

  p {
    line-height: 1.875rem;
    color: var(--midnight);
  }

  form {
    display: block;
  }

  label {
    line-height: 2.125rem;
  }

  fieldset {
    display: contents;
  }

  input[type="submit"] {
    width: 100%;
    height: 3rem;
    background-color: var(--midnight);
    color: var(--white);
    line-height: 2.125rem;
    font-weight: 700;

    &:hover {
      background-color: var(--denim);
      cursor: pointer;
    }
  }

  ${mq(BreakPoint.md)} {
    padding-left: 5rem;
    padding-right: 5rem;
    input[type="text"],
    input[type="email"] {
      width: 50%;
    }
    input[type="submit"] {
      width: 40%;
    }
  }

  ${mq(BreakPoint.lg)} {
    padding-left: 10rem;
    padding-right: 10rem;

    form {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1.875rem;
    }

    input[type="text"],
    input[type="email"] {
      width: 100%;
    }
    input[type="submit"] {
      width: 100%;
    }
  }

  .full-span {
    grid-column: 1 / span 3;
    text-align: left;
    margin-top: 1.375rem;
  }

  a {
    text-decoration: underline;
    font-weight: 600;
  }

  p.response {
    display: none;
    margin-bottom: 1rem;
  }

  p.response.success {
    display: block;
    color: var(--midnight);
  }

  p.response.error {
    display: block;
    color: var(--error);
  }

  .submitSection {
    label {
      width: 1px;
    }
  }
`;

type SignUpStatus = {
  success: boolean;
  msg: string;
};

const NewsletterSignUp = () => {
  const [email, setEmail] = useState(undefined);
  const [emailError, setEmailError] = useState(false);
  const [name, setName] = useState(undefined);
  const [nameError, setNameError] = useState(false);
  const [mcResponse, setMcResponse] = useState<SignUpStatus | undefined>(
    undefined
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setMcResponse(undefined);

    if (!name) setNameError(true);
    if (!email) setEmailError(true);
    if (!name || !email) return;

    try {
      const response = await addToMailchimp(email, { FNAME: name });
      handleResult(response.result, response.msg);
    } catch(e) {
      setMcResponse({success: false, msg: "Something went wrong, please try again later."})
      console.log(e)
    }
  };

  const handleResult = (result: string, message: string) => {
    const success = result === "success";
    if (!success) {
      const msg = message.includes("already subscribed")
        ? "This email has already been subscribed."
        : "Something went wrong, please try again later.";
      setMcResponse({ success, msg });
    } else {
      setMcResponse({ success, msg: "Thank you for subscribing!" });
    }
  };

  return (
    <>
      <section css={newsletterSignUpStyles}>
        <header>
          <h2>Join our mission</h2>
          <p>
            We’ve got bold ambitions and need impact focused leaders to join us
            on our journey. Sign up to our newsletter to be the first to hear
            about our events and stay up to date on our future plans.
          </p>
        </header>

        <article>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <NewsletterInputField
                label="Full name"
                type="text"
                name="fullName"
                error={nameError}
                errorMessage="Please enter your name."
                errorSetter={setNameError}
                valueSetter={setName}
                />
              <NewsletterInputField
                label="Email address"
                type="email"
                name="email"
                error={emailError}
                errorMessage="Please enter your email."
                errorSetter={setEmailError}
                valueSetter={setEmail}
                />
              <section className="submitSection">
                <label htmlFor="submit">&nbsp;</label>
                <input type="submit" value="Submit" id="submit" />
              </section>
              <section className="full-span">
                <p
                  className={`response ${
                    mcResponse
                      ? mcResponse?.success
                        ? "success"
                        : "error"
                      : ""
                  }`}
                >
                  {mcResponse?.msg}
                </p>
                <p>
                  By clicking Subscribe you accept the{" "}
                  <a href="#">Privacy Policy</a>. This will allow us to send you
                  newsletter and event updates. Our Privacy Policy covers how we
                  protect data. You can unsubscribe from this at any point.
                </p>
              </section>
            </fieldset>
          </form>
        </article>
      </section>
    </>
  );
};

export default NewsletterSignUp;
