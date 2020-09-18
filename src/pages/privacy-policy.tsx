import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { css } from "@emotion/core"; 

const privacyPolicyStyles = css`
  height: 70vh;
  text-align:center;
  color: var(--midnight);

  h3 {
    margin-top: 4.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  p {
    margin-top: 2.25rem;
    font-size: 1.125rem;
  }
`

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div css={privacyPolicyStyles}>
        <h3>Privacy Policy</h3>
        <p>Coming soon...</p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
