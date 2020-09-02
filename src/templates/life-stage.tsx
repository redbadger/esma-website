import React, { useState, useRef } from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import TimelineImage from "../components/timeline/timeline-image";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../util/mq";
import Pills from "../components/research/pills";
import PrevNext from "../components/research/prev-next";
import NewsletterSignUp from "../components/newsletter/newsletter-sign-up";

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
  }

  background-color: var(--white);
  position: relative;
  padding-top: 7.8rem;
  padding-left: 5rem;
  padding-right: 5rem;

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
    color: var(--aqua);
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
    color: var(--aqua);
    margin-right: 1.5rem;
  }
`;

type FootnoteLinkProps = {
  children: React.SVGProps<SVGElement>;
  linkId: string;
};

const FootnoteLink = ({ children, linkId }: FootnoteLinkProps) => {
  return (
    <a className="footnote-link" href={`#${linkId}`}>
      {children}
    </a>
  );
};

const currentPillIndex = 0;
const samplePills = [
  {
    name: "Executive Summary",
    href: "/research/early-years/executive-summary",
  },
  {
    name: "Family environment",
    href: "/research/early-years/family-environment",
  },
  {
    name: "Housing and the neighbourhood",
    href: "/research/early-years/housing-and-neighbourhood",
  },
  {
    name: "Early years provision",
    href: "/research/early-years/early-years-provision",
  },
  {
    name: "Impact of Covid-19",
    href: "/research/early-years/impact-of-covid-19",
  },
];

const colorActive = "orange";

// This makes <Link/> and <FootnoteLink/> component available in all mdx files without import
const shortcodes = { Link, FootnoteLink };

const PageTemplate = ({ data: { mdx } }) => {
  const bgImage = mdx.frontmatter.bgImageName;
  return (
    <>
      <Layout includeResearchNavigation={true}>
        <Pills
          pills={samplePills}
          colorActive={colorActive}
          currentPillIndex={currentPillIndex}
        />
        <SEO title={`${mdx.frontmatter.parent} - ${mdx.frontmatter.title}`} />
        <section css={layoutStyles}>
          {bgImage && (
            <TimelineImage
              imageName="timeline-early-development.jpg"
              objectPosition="top"
            />
          )}
          <div
            css={
              bgImage ? contentContainerStyles : contentContainerNoImageStyles
            }
          >
            <h2>{mdx.frontmatter.title}</h2>
            <div css={contentBodyStyles}>
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
            <div css={footnoteStyles}>
              <h3>Footnotes</h3>
              <ol>
                {mdx.frontmatter.footnotes.map((entry, index) => (
                  <li>
                    <a key={index} href={entry.destination} id={entry.id}>
                      {entry.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <PrevNext
          pills={samplePills}
          colorActive={colorActive}
          currentPillIndex={currentPillIndex}
        />
        <NewsletterSignUp />
      </Layout>
    </>
  );
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
        footnotes {
          id
          text
          destination
        }
      }
    }
  }
`;

export default PageTemplate;
