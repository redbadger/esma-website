import React from "react";
import { create } from "react-test-renderer";
import NewsletterSignUp from "./newsletter-sign-up";
import "@testing-library/jest-dom";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { render, act, fireEvent, waitFor } from "@testing-library/react";

jest.mock("gatsby-plugin-mailchimp");

describe("NewsletterSignUp", () => {
  it("renders correctly", () => {
    const component = create(<NewsletterSignUp />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("hides submission errors on render", async () => {
    const { getByText } = render(<NewsletterSignUp />);

    expect(getByText("Please enter your name.")).not.toBeVisible();
    expect(getByText("Please enter your email.")).not.toBeVisible();
  });

  it("displays name error message when blank email is submitted", async () => {
    const { container, getByText } = render(<NewsletterSignUp />);

    act(() => {
      fireEvent.click(
        container.querySelector("input[type=submit][value=Submit]")
      );
    });
    expect(getByText("Please enter your name.")).toBeVisible();
  });

  it("displays email error message when blank email is submitted", async () => {
    const { container, getByText } = render(<NewsletterSignUp />);

    act(() => {
      fireEvent.click(
        container.querySelector("input[type=submit][value=Submit]")
      );
    });
    expect(getByText("Please enter your email.")).toBeVisible();
  });

  it("displays confirmation message if subscription was successful", async () => {
    const { container, getByText } = render(<NewsletterSignUp />);

    const promise = new Promise(resolve =>
      resolve({ result: "success", msg: "Thank you for subscribing" })
    );

    const name = "Stan Smith";
    const email = "stan.smith@example.org";

    addToMailchimp.mockImplementation(() => {
      return promise;
    });

    const nameInput = container.querySelector("input[type=text]");
    const emailInput = container.querySelector("input[type=email]");

    act(() => {
      fireEvent.change(nameInput, {
        target: { value: name },
      });
    });

    act(() => {
      fireEvent.change(emailInput, {
        target: { value: email },
      });
    });

    act(() => {
      fireEvent.click(
        container.querySelector("input[type=submit][value=Submit]")
      );
    });

    expect(addToMailchimp).toHaveBeenCalledWith(email, { FNAME: name });
    await waitFor(() => getByText("Thank you for subscribing!"));
  });

  it("warns the user if the email is already subscribed", async () => {
    const { container, getByText } = render(<NewsletterSignUp />);

    const promise = new Promise(resolve =>
      resolve({ result: "error", msg: "Email already subscribed." })
    );

    const name = "Stan Smith";
    const email = "stan.smith@example.org";

    addToMailchimp.mockImplementation(() => {
      return promise;
    });

    const nameInput = container.querySelector("input[type=text]");
    const emailInput = container.querySelector("input[type=email]");

    act(() => {
      fireEvent.change(nameInput, {
        target: { value: name },
      });
    });

    act(() => {
      fireEvent.change(emailInput, {
        target: { value: email },
      });
    });

    act(() => {
      fireEvent.click(
        container.querySelector("input[type=submit][value=Submit]")
      );
    });

    expect(addToMailchimp).toHaveBeenCalledWith(email, { FNAME: name });
    await waitFor(() => getByText("This email has already been subscribed."));
  });

  it("displays generic error message if something went wrong", async () => {
    const { container, getByText } = render(<NewsletterSignUp />);

    const promise = new Promise(resolve =>
      resolve({ result: "error", msg: "Some other error." })
    );

    const name = "Stan Smith";
    const email = "stan.smith@example.org";

    addToMailchimp.mockImplementation(() => {
      return promise;
    });

    const nameInput = container.querySelector("input[type=text]");
    const emailInput = container.querySelector("input[type=email]");

    act(() => {
      fireEvent.change(nameInput, {
        target: { value: name },
      });
    });

    act(() => {
      fireEvent.change(emailInput, {
        target: { value: email },
      });
    });

    act(() => {
      fireEvent.click(
        container.querySelector("input[type=submit][value=Submit]")
      );
    });

    expect(addToMailchimp).toHaveBeenCalledWith(email, { FNAME: name });
    await waitFor(() => getByText("Something went wrong, please try again later."));
  });
});
