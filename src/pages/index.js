import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { LoremIpsum } from "lorem-ipsum";
import IssueCard from "../components/issue-card";

const lorem = new LoremIpsum();

const cardContainerStyles = css`
  ${tw`flex`}
`;

const issueCardStyles = css`
  ${tw`flex-grow mx-2`}
`;

const issues = [
  {
    title: "Early years",
    desc: lorem.generateSentences(2),
  },
  {
    title: "School (6-12)",
    desc: lorem.generateSentences(2),
  },
  {
    title: "Further Ed 16-18yrs",
    desc: lorem.generateSentences(2),
  },
  {
    title: "Higher ed + apprenticeships",
    desc: lorem.generateSentences(2),
  },
  {
    title: "Working life",
    desc: lorem.generateSentences(2),
  },
];

const IndexPage = ({ data }) => {
  const content = data.contentfulHomepageCopy;
  console.log(content);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{content.title}</h1>
      <p>{content.introText.content[0].content[0].value}</p>
      <img
        src={content.picture.file.url}
        alt="test"
        style={{ width: "200px" }}
      />
      <h1>Chronology of issues</h1>
      <div css={cardContainerStyles}>
        {issues.map((issue, i) => (
          <IssueCard key={i} css={issueCardStyles} {...issue} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
export const query = graphql`
  query HomePageQuery {
    contentfulHomepageCopy {
      title
      introText {
        content {
          content {
            value
          }
        }
      }
      picture {
        file {
          url
        }
      }
    }
  }
`;
