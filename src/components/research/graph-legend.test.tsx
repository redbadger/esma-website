import React from "react";
import renderer from "react-test-renderer";
import GraphLegend, { LegendVariant } from "./graph-legend";

describe("GraphLegend", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <GraphLegend
          variant={LegendVariant.PILL}
          labels={[{ color: "aqua", label: "Test" }]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
