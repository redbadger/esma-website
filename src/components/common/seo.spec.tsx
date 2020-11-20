import React from "react";
import renderer from "react-test-renderer";
import { PureSeo } from "./seo";

describe("PureSeo", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <PureSeo
          description={"Tests for ESMA"}
          title={"Welcome to ESMA Test"}
          image={{ src: "/barry.png", alt: "A Barry" }}
          meta={[
            { property: "og:custom", content: "test content" },
            { name: "twitter:other", content: "some twitter metadatum" },
          ]}
          lang="en"
          allFile={{ nodes: [{ publicURL: "/path/to/logo.svg" }] }}
          site={{
            siteMetadata: {
              title: "title",
              author: "author",
              hostName: "hostName",
              description: "description",
            },
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
