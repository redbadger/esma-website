import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../util/mq";
import Pills from "../components/research/pills";
import PrevNext from "../components/research/prev-next";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";
import EarlyDevIcon from "../svg/blocks.svg";
import FurtherReading from "../components/research/further-reading";
import ResearchImage from "../components/research/research-image";
import { FootNoteData } from "../components/research/types";
import { ResearchPageMetaData, PillData } from "../components/research/types";
import ResearchQuote from "../components/research/research-quote";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

const layoutStyles = css`
  .timeline-image-wrapper {
    display: none;
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
    border-color: var(--highlight-colour);
  }

  .further-reading-bullet-point {
    background: var(--highlight-colour);
  }

  .quote-mark {
    color: var(--highlight-colour);
  }

  .footnote-link {
    color: var(--highlight-colour);
  }

  ol li:before {
    color: var(--highlight-colour);
  }
`;

const contentContainerStyles = css`
  ${mq(BreakPoint.md)} {
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

  h2 {
    margin-bottom: 2.25rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 3.875rem;
  }
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
  grid-row-gap: 4.5rem;

  ${mq(BreakPoint.md)} {
    grid-column-gap: 13.75rem;
  }

  ${mq(BreakPoint.lg)} {
    grid-template-columns: 1fr 1fr;
  }

  p {
    line-height: 2.125rem;
    color: var(--midnight);
    margin-bottom: 1.5rem;
  }

  svg {
    margin-bottom: 2.25rem;
    width: 100%;
  }

  .footnote-link {
    vertical-align: super;
    font-weight: 700;
    cursor: pointer;
  }
`;

const footnoteStyles = css`
  h3 {
    margin-top: 4.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  a {
    text-decoration: underline;
    line-height: 1.875rem;
    margin-bottom: 0.75rem;
  }

  ol {
    counter-reset: custom-counter;
  }

  ol li {
    counter-increment: custom-counter;
  }

  ol li:before {
    content: counter(custom-counter);
    margin-right: 1.5rem;
  }
`;

const breadcrumbStyles = css`
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

type FootnoteLinkProps = {
  children: React.ReactNode;
  linkId: string;
};

const FootnoteLink = ({ children, linkId }: FootnoteLinkProps) => {
  return (
    <a className="footnote-link" href={`#${linkId}`}>
      {children}
    </a>
  );
};

const shortcodes = { FootnoteLink, FurtherReading, ResearchQuote };

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
  data: { mdx, allMdx },
  pageContext,
}: PageTemplateProps) => {
  const colorActive = `var(--${mdx.frontmatter.color})`;

  const crumbs = getCrumbs(pageContext);

  const pillsMap: PillData[] = getPills(allMdx, mdx);

  const currentPillIndex = pillsMap.findIndex(
    pill => pill.name === mdx.frontmatter.title
  );

  const bgImage = mdx.frontmatter.bgImageName;

  return (
    <>
      <Layout includeResearchNavigation={true}>
        <SEO title={`${mdx.frontmatter.parent} - ${mdx.frontmatter.title}`} />
        <section css={[layoutStyles, highlightColorOverride(colorActive)]}>
          {bgImage && <ResearchImage imageName={bgImage} />}
          <div
            css={
              bgImage ? contentContainerStyles : contentContainerNoImageStyles
            }
          >
            <div css={breadcrumbStyles}>
              <Breadcrumb crumbs={crumbs} crumbSeparator=">" />
              <div className="clear" />
            </div>
            <Pills
              pills={pillsMap}
              colorActive={colorActive}
              currentPillIndex={currentPillIndex}
            />
            <h2>{mdx.frontmatter.title}</h2>
            <div css={contentBodyStyles}>
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
            <div css={footnoteStyles}>
              {mdx.frontmatter.footnotes && (
                <>
                  <h3>Footnotes</h3>
                  <ol>
                    {mdx.frontmatter.footnotes.map(
                      (entry: FootNoteData, index: number) => (
                        <li key={index}>
                          <a key={index} href={entry.destination} id={entry.id}>
                            {entry.text}
                          </a>
                        </li>
                      )
                    )}
                  </ol>
                </>
              )}
            </div>
          </div>
        </section>
        <PrevNext
          pills={pillsMap}
          colorActive={colorActive}
          currentPillIndex={currentPillIndex}
          icon={EarlyDevIcon}
        />
        <NewsletterSignUp />
      </Layout>
    </>
  );
};

const highlightColorOverride = (colorActive: string) => {
  return css`
    --highlight-colour: ${colorActive};
  `;
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
        color
        footnotes {
          id
          text
          destination
        }
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
  }
`;

export default PageTemplate;
