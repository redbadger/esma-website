import { buildMetadata } from "./seo-helper";

const expectedMetadata: Metadatum[] = [
  {
    name: `description`,
    content: "some kind of description",
  },
  {
    property: `og:title`,
    content: "ESMA title",
  },
  {
    property: `og:description`,
    content: "some kind of description",
  },
  {
    property: `og:type`,
    content: `website`,
  },
  {
    property: `og:image`,
    content: "/path/to/logo.svg",
  },
  {
    property: `og:image:alt`,
    content: "ESMA Logo",
  },
  {
    name: `twitter:card`,
    content: `summary`,
  },
  {
    name: `twitter:creator`,
    content: "Employers Social Mobility Alliance",
  },
  {
    name: `twitter:title`,
    content: "ESMA title",
  },
  {
    name: `twitter:description`,
    content: "some kind of description",
  },
  {
    name: "twitter:image",
    content: "/path/to/logo.svg",
  },
  {
    name: "twitter:image:alt",
    content: "ESMA Logo",
  },
];

describe("buildMetadata", () => {
  it("builds metadata", () => {
    const result = buildMetadata(
      {
        description: "some kind of description",
        title: "ESMA title",
        author: "Employers Social Mobility Alliance",
        imageUrl: "/path/to/logo.svg",
        imageAlt: "ESMA Logo",
      },
      [
        { property: "og:custom", content: "test content" },
        { name: "twitter:other", content: "some twitter metadatum" },
      ]
    );

    expect(result).toStrictEqual(expectedMetadata);
  });
});
