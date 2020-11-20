import React from "react";
import renderer from "react-test-renderer";
import Seo from "./seo";

describe("Seo", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Seo
          description={"Tests for ESMA"}
          title={"Welcome to ESMA Test"}
          image={{ src: "/barry.png", alt: "A Barry" }}
          meta={[
            { property: "og:custom", content: "test content" },
            { name: "twitter:other", content: "some twitter metadatum" },
          ]}
          lang="en"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
