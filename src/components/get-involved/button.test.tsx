import React from "react";
import renderer from "react-test-renderer";
import Button from "./button";

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button variant="dark" label="test" onClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
