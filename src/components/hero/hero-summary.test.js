import React from "react";
import renderer from "react-test-renderer";

import HeroSummary from "./hero-summary";

describe("HeroSummary", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HeroSummary />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
