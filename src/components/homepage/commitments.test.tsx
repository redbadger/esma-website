import React from "react";
import renderer from "react-test-renderer";
import Commitments from './commitments';
import { useStaticQuery } from "gatsby";

describe("Commitments", () => {
  it("renders correctly", () => {
    useStaticQuery.mockImplementation(() => {
      return testData;
    });
    const tree = renderer
      .create(
        <Commitments />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

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
              originalName: "best-practice.jpg",
            },
          },
        },
      },
      {
        node: {
          childImageSharp: {
            fluid: {
              base64: "data:image/jpeg;base64,/9j/2wBDABALDA4M...",
              sizes: "(max-width: 800px) 100vw, 800px",
              src: "/static/test/path1/test-image.jpg",
              srcSet: "/static/test/path1/test-image.jpg 200w",
              aspectRatio: 1.5,
              originalName: "incubator-fund.jpg",
            },
          },
        },
      },
      {
        node: {
          childImageSharp: {
            fluid: {
              base64: "data:image/jpeg;base64,/9j/2wBDABALDA4M...",
              sizes: "(max-width: 800px) 100vw, 800px",
              src: "/static/test/path1/test-image.jpg",
              srcSet: "/static/test/path1/test-image.jpg 200w",
              aspectRatio: 1.5,
              originalName: "life-stage-research.png",
            },
          },
        },
      },
    ],
  },
};
