import React from "react";
import renderer from "react-test-renderer";
import TimelineLegend from './timeline-legend';
import SchoolYearsIcon from "../../svg/pencil.svg";


describe("TimelineLegend", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TimelineLegend entries={entries}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


const entries = [
  {
    title: "test",
    imageName: "test.jpg",
    description: "Test",
    icon: SchoolYearsIcon,
    destination: "/issues-chronology/early-years/overview",
    color: "aqua",
    anchor: "early-years",
  }]
  