import React from "react";
import { css } from "@emotion/core";

const newsletterInputFieldStyles = css`
  label {
    display: block;
    font-weight: 600;
    color: var(--midnight);
  }

  .input-error {
    color: var(--error);
    line-height: 1.625rem;
    margin-top: 0.75rem;
    display: none;
  }

  input.error + .input-error {
    display: block;
  }

  input {
    border: 1px solid var(--midnight);
    border-radius: 3px;
    width: 100%;
    height: 3rem;
    padding: 7px 18px 7px 10px;

    &:focus {
      outline: none;
      border-color: var(--cobalt);
    }
  }

  input.error {
    border-color: var(--error);
  }
`;

type NewsletterInputFieldProps = {
  label: string;
  type: string;
  name: string;
  error: boolean;
  errorMessage: string;
  errorSetter: (isError: boolean) => void;
  valueSetter: (value: string) => void;
};

const NewsletterInputField = ({
  label,
  type,
  name,
  error,
  errorMessage,
  errorSetter,
  valueSetter,
}: NewsletterInputFieldProps) => {
  return (
    <section css={newsletterInputFieldStyles}>
      <label htmlFor={`${name}Input`}>{label}</label>
      <input
        type={type}
        name={name}
        id={`${name}Input`}
        className={error ? "error" : ""}
        onChange={e => {
          errorSetter(false);
          valueSetter(e.target.value);
        }}
      />
      <p className="input-error">{errorMessage}</p>
    </section>
  );
};

export default NewsletterInputField;
