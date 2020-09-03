import React from "react";
import renderer from "react-test-renderer";
import PrevNext from "./prev-next";
import FurtherReading from "./further-reading";

describe("FurtherReading", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <FurtherReading>
          <ul>
            <li>Sample entry</li>
          </ul>
        </FurtherReading>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
