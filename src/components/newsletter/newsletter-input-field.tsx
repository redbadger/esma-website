import React from "react";
import { css } from "@emotion/core";

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
    <>
      <div>
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
      </div>
      <p className={`input-error ${error ? "error" : ""}`}>{errorMessage}</p>
    </>
  );
};

export default NewsletterInputField;
