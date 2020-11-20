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
    content: "/barry.png",
  },
  {
    property: `og:image:alt`,
    content: "A Barry",
  },
  {
    name: `twitter:card`,
    content: `summary`,
  },
  {
    name: `twitter:creator`,
    content: "Barry Author",
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
    content: "/barry.png",
  },
  {
    name: "twitter:image:alt",
    content: "A Barry",
  },
];

describe("buildMetadata", () => {
  it("builds metadata", () => {
    const result = buildMetadata(
      {
        description: "some kind of description",
        title: "ESMA title",
        author: "Barry Author",
        imageUrl: "/barry.png",
        imageAlt: "A Barry",
      },
      [
        { property: "og:custom", content: "test content" },
        { name: "twitter:other", content: "some twitter metadatum" },
      ]
    );

    expect(result).toStrictEqual(expectedMetadata);
  });
});
