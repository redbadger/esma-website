import React, { FormEvent, useState } from "react";
import { css } from "@emotion/core";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { mq, BreakPoint } from "../../util/mq";
import NewsletterInputField from "./newsletter-input-field";
import { Link } from "gatsby";

const inputStyles = css`
  label {
    display: block;
    font-weight: 600;
    color: var(--midnight);
  }

  .input-error {
    color: var(--error);
    line-height: 1.625rem;
    margin-top: 0.75rem;
    visibility: hidden;
    display: none;
  }

  .input-error.error {
    display: block;
    visibility: visible;
  }

  input {
    border: 1px solid var(--midnight);
    border-radius: 0.1875rem;
    width: 100%;
    height: 3rem;
    padding: 0.4375rem 1.125rem 0.4375rem 0.625rem;

    &:focus {
      outline: none;
      border-color: var(--cobalt);
    }
  }

  input.error {
    border-color: var(--error);
  }
`;

const newsletterSignUpStyles = css`
  padding: 2.25rem 0.75rem;
  ${mq(BreakPoint.md)} {
    padding: 4.5rem 0.75rem;
  }
  background-color: var(--highlight-color);

  font-size: 1.125rem;

  ${inputStyles}

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
    margin-top: 1rem;
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
      row-gap: 1rem;
      align-items: end;
    }

    input[type="text"],
    input[type="email"] {
      width: 100%;
    }
    input[type="submit"] {
      width: 100%;
    }

    .input-error {
      display: none;
      grid-row: 2 / span 1;
      margin-top: 0;
    }
  }

  .full-span {
    grid-column: 1 / span 3;
    text-align: left;
    margin-top: 0.375rem;
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
`;

type SignUpStatus = {
  success: boolean;
  msg: string;
};

const NewsletterSignUp = (props: { color: string }) => {
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
    } catch (e) {
      setMcResponse({
        success: false,
        msg: "Something went wrong, please try again later.",
      });
      console.log(e);
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

  const bgColor = css`
    --highlight-color: var(--${props.color});
  `;

  return (
    <>
      <section css={[newsletterSignUpStyles, bgColor]}>
        <header>
          <h2>Join our mission</h2>
          <p>
            We've got bold ambitions to connect the whole social mobility
            community in one place. Sign up to our newsletter to be the first to
            hear news on events, exciting new ideas and connect to others who
            want to make a difference.
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
                errorMessageStyles={css`
                  grid-column: 1 / span 1;
                `}
              />
              <NewsletterInputField
                label="Email address"
                type="email"
                name="email"
                error={emailError}
                errorMessage="Please enter your email."
                errorSetter={setEmailError}
                valueSetter={setEmail}
                errorMessageStyles={css`
                  grid-column: 2 / span 1;
                `}
              />
              <input type="submit" value="Submit" id="submit" />
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
                  By clicking Submit you accept the{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link>. This will
                  allow us to send you newsletter and event updates. Our Privacy
                  Policy covers how we protect data. You can unsubscribe from
                  this at any point.
                </p>
              </section>
            </fieldset>
          </form>
        </article>
      </section>
    </>
  );
};

NewsletterSignUp.defaultProps = {
  color: "taupe",
};

export default NewsletterSignUp;
