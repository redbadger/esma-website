import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";

const cardStyles = tw`block`;

const squareBoxStyles = css`
  ${tw`bg-gray-300`}
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin: 10px auto;

  &:hover {
    ${tw`bg-gray-400`}
  }
`;

const titleStyle = css`
  ${tw`text-center`}
`;

const IssueCard = ({ title, desc, ...props }) => {
  return (
    <a {...props} css={cardStyles}>
      <div css={squareBoxStyles} />
      <h3 css={titleStyle}>{title}</h3>
    </a>
  );
};

export default IssueCard;
