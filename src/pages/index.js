import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import IssueCard from "../components/issue-card";

const cardContainerStyles = css`
  ${tw`flex`}
`;

const issueCardStyles = css`
  ${tw`flex-grow mx-2`}
`;
const issues = [];

const IndexPage = ({ data }) => {
  const content = data.contentfulHomepageCopy;
  console.log(content);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{content.title}</h1>
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
    }
  }
`;
