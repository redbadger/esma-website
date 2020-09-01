import React from "react";
import renderer from "react-test-renderer";
import ResearchNavigation from "./research-navigation";

describe("Research navigation", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ResearchNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
