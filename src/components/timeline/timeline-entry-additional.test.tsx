import React from "react";
import renderer from "react-test-renderer";
import TimelineEntryAdditional from "./timeline-entry-additional";

describe("TimelineEntryAdditional", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TimelineEntryAdditional />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});