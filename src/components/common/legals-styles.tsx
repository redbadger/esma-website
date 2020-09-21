import { css } from "@emotion/core";

export const legalsStyles = css`
  text-align: left;
  color: var(--midnight);
  padding: 4.5rem 4.5rem;
  font-size: 1.125rem;

  a {
    text-decoration: underline;
    font-weight: 600;
  }

  h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    margin-top: 1rem;
    font-size: 1.125rem;
  }

  ul {
    margin-top: 1rem;
    margin-left: 2rem;
    list-style-type: disc;
  }

  ol {
    list-style-position: inside;
    list-style-type: decimal;
    text-align: left;
    margin-top: 2rem;

    li {
      font-weight: 600;
    }
  }
`;
