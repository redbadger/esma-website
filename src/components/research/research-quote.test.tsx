import React from "react";
import renderer from "react-test-renderer";
import PrevNext from "./prev-next";
import ResearchQuote from './research-quote';

describe("ResearchQuote", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ResearchQuote source="Sample source">
            <p>Sample quote</p>
        </ResearchQuote>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
