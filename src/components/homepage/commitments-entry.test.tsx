import React from "react";
import renderer from "react-test-renderer";
import CommitmentsEntry from './commitments-entry';

describe("CommitmentsEntry", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <CommitmentsEntry content={<div>test</div>} image={<Icon/>} shiftRight={false} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const Icon = () => {
  return <img />;
};
