import React from "react";
import renderer from "react-test-renderer";
import ResizableGraph from "./resizable-graph";
import BlocksSVG from "../../svg/blocks.svg";
import BookSVG from "../../svg/book.svg";
import CapSVG from "../../svg/cap.svg";

describe("ResizableGraph", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ResizableGraph mobile={CapSVG} desktop={BookSVG} tablet={BlocksSVG}>
          <p>Sample heading</p>
        </ResizableGraph>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
