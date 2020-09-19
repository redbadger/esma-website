import React from "react";
import renderer from "react-test-renderer";
import CommitmentsGrid from "./commitments-entry";
import { CommitmentsEntryProps } from "./commitments-data";

const dummyCommitmentsData: CommitmentsEntryProps[] = [
  {
    content: <p>I'm some test data.</p>,
    image: (
      <svg>
        <text>Hi, I'm an SVG</text>
      </svg>
    ),
  },
];

describe("CommitmentsGrid", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CommitmentsGrid commitmentsData={dummyCommitmentsData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
