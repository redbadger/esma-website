import React from "react";
import renderer from "react-test-renderer";
import { PureSeo } from "./seo";

describe("PureSeo", () => {
  it("renders correctly", () => {
    // TODO: currently, this test generates `null` as its snapshot
    // despite the fact that `jest-serializer-react-helmet` is loaded as a serializer
    // we will leave this test here as-is for that issue to be corrected later
    const tree = renderer
      .create(
        <PureSeo
          description={"Tests for ESMA"}
          title={"Welcome to ESMA Test"}
          image={{ src: "/path/to/logo.svg", alt: "ESMA Logo" }}
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
