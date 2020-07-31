import React from "react";
import renderer from "react-test-renderer";

import { PureHeroImage as HeroImage } from "./hero-image";

describe("HeroImage", () => {
  it("renders correctly", () => {
    const data = {
      placeholderImage: {
        childImageSharp: {
          fluid: {
            base64: "data:image/jpeg;base64,/9j/ABC",
            aspectRatio: 1,
            src: "/static/test/test/hero.jpg",
            srcSet: "/static/test/test/hero.jpg 200w",
            sizes: "(max-width: 800px) 100vw, 800px",
          },
        },
      },
    };
    const tree = renderer.create(<HeroImage data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
