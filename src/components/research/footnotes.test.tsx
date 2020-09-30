import React from "react";
import renderer from "react-test-renderer";
import Footnotes from './footnotes';

describe("Footnotes", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Footnotes>
          <ol>
            <li>Sample entry</li>
          </ol>
        </Footnotes>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
