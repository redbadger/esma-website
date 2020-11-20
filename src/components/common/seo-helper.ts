type Metadatum =
  | {
      property: string;
      content: string;
    }
  | {
      name: string;
      content: string;
    };

interface MetadataProps {
  description: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  author: string;
}

export const buildMetadata = (
  { description, title, imageUrl, imageAlt, author }: MetadataProps,
  customMetadata: Metadatum[]
): Metadatum[] => {
  const metadata = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: imageUrl,
    },
    {
      property: `og:image:alt`,
      content: imageAlt,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: "twitter:image",
      content: imageUrl,
    },
    {
      name: "twitter:image:alt",
      content: imageAlt,
    },
  ];
  metadata.concat(customMetadata);
  return metadata;
};

export const getSocialImageUrl = (
  relativeImagePath: string,
  siteHostName: string
) => {
  return `https://${siteHostName}${relativeImagePath}`;
};
