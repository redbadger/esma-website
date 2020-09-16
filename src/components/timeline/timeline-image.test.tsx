import React from "react";
import renderer from "react-test-renderer";
import { PureTimelineImage as TimelineImage } from "./timeline-image";

describe("TimelineImage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<TimelineImage data={testData} objectPosition="center" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const testData = {
  node: {
    childImageSharp: {
      fluid: {
        base64: "data:image/jpeg;base64,/9j/2wBDABALDA4M...",
        sizes: "(max-width: 800px) 100vw, 800px",
        src: "/static/test/path1/test-image.jpg",
        srcSet: "/static/test/path1/test-image.jpg 200w",
        aspectRatio: 1.5,
        originalName: "test-image.jpg",
      },
    },
  },
};
