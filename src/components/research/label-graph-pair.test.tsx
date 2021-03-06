import React from "react";
import renderer from "react-test-renderer";
import LabelGraphPair from "./label-graph-pair";
import EarlyDevIcon from "../../svg/blocks.svg";

describe("LabelGraphPair", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <LabelGraphPair
          label="Test"
          mobileGraph={EarlyDevIcon}
          tabletGraph={EarlyDevIcon}
          desktopGraph={EarlyDevIcon}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
