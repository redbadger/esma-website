import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../util/mq";
import Pills from "../components/research/pills";
import PrevNext from "../components/research/prev-next";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import FurtherReading from "../components/research/further-reading";
import ResearchImage from "../components/research/research-image";
import { ResearchPageMetaData, PillData } from "../components/research/types";
import ResearchQuote from "../components/research/research-quote";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import slugify from "slugify";
import { pages } from "../components/common/research-pages";
import { timelineIcons } from "../components/common/icons";
import Footnotes from "../components/research/footnotes";
import { Fluid, ImageNode } from "../components/common/types";

const layoutStyles = css`
  .timeline-image-wrapper {
    display: none;
  }

  .research-image-wrapper {
    margin-bottom: 1.5rem;
  }

  font-size: 1.125rem;
  line-height: 2.125rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  ul {
    list-style: circle;
    font-weight: 300;
  }

  .internal-link {
    font-weight: 600;
    text-decoration: underline;
  }

  .external-link {
    font-weight: 600;
    text-decoration: underline;
  }

  strong {
    font-weight: 600;
  }

  ${mq(BreakPoint.md)} {
    .timeline-image-wrapper {
      display: block;
      height: 20rem;
    }
  }

  ${mq(BreakPoint.lg)} {
    .timeline-image-wrapper {
      height: 25rem;
    }
  }

  position: relative;
  color: var(--midnight);

  .further-reading-container {
    border-color: var(--highlight-color);
  }

  .further-reading-bullet-point {
    background: var(--highlight-color);
  }

  .quote-mark {
    color: var(--highlight-color);
  }

  .footnote-link {
    color: var(--highlight-color);
    font-size: 1rem;
    line-height: 1rem;
  }

  ol li::before {
    color: var(--highlight-color);
  }
`;

const contentContainerStyles = css`
  h2 {
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.625rem;
  }

  ${mq(BreakPoint.md)} {
    h2 {
      font-size: 2rem;
      line-height: 2.75rem;
      margin-bottom: 2.25rem;
    }
    width: 96%;
    left: 2%;
    top: -11.5rem;
  }

  ${mq(BreakPoint.lg)} {
    width: 80%;
    left: 10%;
    top: -13.5rem;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  background-color: var(--white);
  position: relative;
  padding-top: 3.1rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const contentContainerNoImageStyles = css`
  ${contentContainerStyles};
  ${mq(BreakPoint.sm)} {
    top: 0;
  }
  ${mq(BreakPoint.lg)} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const contentBodyStyles = css`
  display: grid;
  grid-row-gap: 0.75rem;
  ${mq(BreakPoint.md)} {
    grid-row-gap: 3rem;
  }

  ${mq(BreakPoint.lg)} {
    .full-span {
      grid-column: 1 / span 2;
    }
  }

  .full-span.wide-graph {
    svg {
      max-height: 13.75rem;

      ${mq(BreakPoint.md)} {
        max-height: unset;
      }
    }
  }

  .full-span.tall-graph {
    svg {
      max-height: 23.25rem;

      ${mq(BreakPoint.md)} {
        max-height: unset;
      }
    }
  }

  .common-legend {
    ${mq(BreakPoint.md)} {
      margin-bottom: -4rem;
    }
  }

  ${mq(BreakPoint.md)} {
    grid-column-gap: 13.75rem;
  }

  ${mq(BreakPoint.lg)} {
    grid-template-columns: 1fr 1fr;
  }

  p {
    color: var(--midnight);
    margin-bottom: 1.5rem;
    font-weight: 300;
  }

  svg {
    width: 100%;
    margin-bottom: 1.5rem;
    ${mq(BreakPoint.md)} {
      margin-bottom: 2.25rem;
      width: 90%;
    }
  }

  .footnote-link {
    vertical-align: super;
    font-weight: 700;
    cursor: pointer;
  }
`;

const breadcrumbStyles = css`
  margin-bottom: 0.75rem;

  ${mq(BreakPoint.md)} {
    margin-bottom: 0;
  }

  .clear {
    clear: both;
  }

  .breadcrumb__list {
    list-style-type: none;
  }

  .breadcrumb__list__item {
    float: left;
  }

  .breadcrumb__separator {
    float: left;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .breadcrumb__link__active {
    font-weight: 600;
  }
`;

const prevNextWithBgImageStyles = css`
  position: relative;

  ${mq(BreakPoint.md)} {
    top: -13.5rem;
    margin-bottom: -13.5rem;
  }
`;

type FootnoteLinkProps = {
  text: string;
};

const FootnoteLink = ({ text }: FootnoteLinkProps) => {
  return (
    <a className="footnote-link" href="#footnotes">
      {text}
    </a>
  );
};

const shortcodes = {
  Link,
  FootnoteLink,
  FurtherReading,
  ResearchQuote,
  Footnotes,
};

export type MdxData = {
  frontmatter: ResearchPageMetaData;
  body: any;
};

export type AllMdxData = {
  pillsMapping: PillsMappingData[];
};

export type PillsMappingData = {
  parent: string;
  groups: MdxListEntry[];
};

export type MdxListEntry = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
};

type PageTemplateProps = {
  data: {
    mdx: MdxData;
    allMdx: AllMdxData;
    images: { edges: ImageNode[] };
  };
  pageContext: PageContext;
};

type PageContext = {
  breadcrumb: {
    crumbs: {
      pathname: string;
      crumbLabel: string;
    }[];
  };
};

const PageTemplate = ({
  data: { mdx, allMdx, images },
  pageContext,
}: PageTemplateProps) => {
  const crumbs = getCrumbs(pageContext);

  const pillsMap: PillData[] = getPills(allMdx, mdx);

  const currentPillIndex = pillsMap.findIndex(
    pill => pill.name === mdx.frontmatter.title
  );

  const bgImage = mdx.frontmatter.bgImageName;

  const className = slugify(mdx.frontmatter.parent, { lower: true });

  const fluid: Fluid | undefined = bgImage
    ? images.edges.find((image: ImageNode) => {
        if (image.node.childImageSharp.fluid) {
          return image.node.childImageSharp.fluid.originalName === bgImage;
        }
        return false;
      }).node.childImageSharp.fluid
    : undefined;

  return (
    <>
      <Layout includeResearchNavigation={true}>
        <SEO
          title={`${mdx.frontmatter.parent} - ${mdx.frontmatter.title}`}
          image={
            fluid
              ? {
                  src: fluid.src,
                  alt: `${mdx.frontmatter.parent} - ${mdx.frontmatter.title} header image`,
                }
              : { src: null, alt: null }
          }
        />
        <section css={[layoutStyles]}>
          <div aria-hidden="true" className={className}>
            {fluid ? <ResearchImage fluid={fluid} /> : null}
            <div
              css={
                bgImage ? contentContainerStyles : contentContainerNoImageStyles
              }
            >
              <div css={breadcrumbStyles}>
                <Breadcrumb crumbs={crumbs} crumbSeparator=">" />
                <div className="clear" />
              </div>
              <Pills pills={pillsMap} currentPillIndex={currentPillIndex} />
              <h2>{mdx.frontmatter.title}</h2>
              <div css={contentBodyStyles}>
                <MDXProvider components={shortcodes}>
                  <MDXRenderer>{mdx.body}</MDXRenderer>
                </MDXProvider>
              </div>
            </div>
          </div>
        </section>
        <div css={bgImage ? prevNextWithBgImageStyles : css``}>
          <PrevNext
            pills={pillsMap}
            currentPillIndex={currentPillIndex}
            icon={
              // if for some reason a matching page can't be found, better
              // to default to some icon rather than break the page
              pages.find(page => page.className === className)?.icon ||
              timelineIcons.earlyYears
            }
          />
        </div>
        <NewsletterSignUp />
      </Layout>
    </>
  );
};

const getPills = (allMdx: AllMdxData, mdx: MdxData): PillData[] => {
  return allMdx.pillsMapping
    .find(pill => {
      return pill.parent === mdx.frontmatter.parent;
    })
    .groups.map(pill => {
      return { name: pill.frontmatter.title, href: pill.fields.slug };
    });
};

const getCrumbs = (pageContext: PageContext) => {
  return pageContext.breadcrumb.crumbs.map(entry => {
    return {
      pathname: entry.pathname,
      crumbLabel: capitalize(entry.crumbLabel.replace(/-/g, " ")),
    };
  });
};

const capitalize = (input: string) => {
  return `${input.charAt(0).toUpperCase()}${input.slice(1)}`;
};

export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        parent
        bgImageName
      }
    }

    allMdx(sort: { fields: frontmatter___order }) {
      pillsMapping: group(field: frontmatter___parent) {
        parent: fieldValue
        groups: nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }

    images: allFile(filter: {relativePath: {regex: "/research/.*\\.jpg/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`;

export default PageTemplate;
