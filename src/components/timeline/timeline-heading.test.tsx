import React from "react";
import renderer from "react-test-renderer";
import TimelineHeading from "./timeline-heading";
import { useStaticQuery } from "gatsby";

describe("TimelineHeading", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TimelineHeading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
