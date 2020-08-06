import React from "react";
import renderer from "react-test-renderer";
import StatsCard from "./stats-card";

describe("StatsCard", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<StatsCard styles={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
