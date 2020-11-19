import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const getSocialImageSrc = (image: { src; alt }, site) => {
  const relativeImagePath = image.src;
  return `https://${site.siteMetadata.hostName}${relativeImagePath}`;
};

function SEO({ description, lang, meta, title, image }: SeoProperties) {
  const { site, allFile } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            hostName
          }
        }
        allFile(filter: { relativePath: { eq: "logo/short.svg" } }) {
          nodes {
            publicURL
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  if (!image || !image.src) {
    image = { src: allFile.nodes.publicURL, alt: "ESMA logo" };
  }
  const imageSrc = getSocialImageSrc(image, site);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: imageSrc,
        },
        {
          property: `og:image:alt`,
          content: image.alt,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: imageSrc,
        },
        {
          name: "twitter:image:alt",
          content: image.alt,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

interface SeoProperties {
  description: string;
  lang: string;
  meta: { name: string; content: string }[];
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

export default SEO;
