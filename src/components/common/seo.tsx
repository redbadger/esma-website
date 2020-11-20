import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { buildMetadata, getSocialImageUrl } from "./seo-helper";

const Seo = ({ description, lang, meta, title, image }: SeoProperties) => {
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

  return (
    <PureSeo
      description={description}
      lang={lang}
      meta={meta}
      title={title}
      image={image}
      site={site}
      allFile={allFile}
    />
  );
};

export const PureSeo = ({
  description,
  lang,
  meta,
  title,
  image,
  site,
  allFile,
}: PureSeoProperties) => {
  const metaDescription = description || site.siteMetadata.description;
  if (!image || !image.src) {
    image = { src: allFile.nodes[0].publicURL, alt: "ESMA logo" };
  }
  const imageUrl = getSocialImageUrl(image.src, site.siteMetadata.hostName);
  const metadata = buildMetadata(
    {
      description: metaDescription,
      title,
      imageUrl,
      imageAlt: image.alt,
      author: site.siteMetadata.author,
    },
    meta
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metadata}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

interface SeoProperties {
  description: string;
  lang: string;
  meta: Metadatum[];
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

type PureSeoProperties = SeoProperties & {
  site: {
    siteMetadata: {
      title: string;
      author: string;
      hostName: string;
      description: string;
    };
  };
  allFile: { nodes: [{ publicURL: string }] };
};

export default Seo;
