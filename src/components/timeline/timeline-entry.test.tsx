import React from "react";
import renderer from "react-test-renderer";
import TimelineEntry from "./timeline-entry";
import { useStaticQuery } from "gatsby";

describe("TimelineEntry", () => {
  it("renders correctly", () => {
    useStaticQuery.mockImplementation(() => {
      return testData;
    });
    const tree = renderer
      .create(
        <TimelineEntry
          imageName="test-image.jpg"
          title="test"
          description="test"
          icon={Icon}
          destination="/"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const Icon = () => {
  return <img />;
};

const testData = {
  images: {
    edges: [
      {
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
      },
    ],
  },
};
