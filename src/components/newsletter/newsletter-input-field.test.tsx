import React from "react";
import renderer from "react-test-renderer";
import NewsletterInputField from "./newsletter-input-field";

describe("NewsletterInputField", () => {
  it("renders correctly with no error state", () => {
    const tree = renderer
      .create(
        <NewsletterInputField
          name="test"
          type="text"
          label="testLabel"
          error={false}
          errorMessage="ERROR!"
          errorSetter={() => {}}
          valueSetter={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with an error state", () => {
    const tree = renderer
      .create(
        <NewsletterInputField
          name="test"
          type="text"
          label="testLabel"
          error={true}
          errorMessage="ERROR!"
          errorSetter={() => {}}
          valueSetter={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
