import React from "react";
import { css } from "@emotion/core";

const containerStyles = css`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1.75rem;

  svg {
    margin-bottom: 1rem;
    width: unset;
    height: 100%;
  }

  div.label-wrapper {
    border-bottom: 1px solid var(--separator);
    min-height: 10rem;
    display: flex;
    align-items: center;
  }

  span {
    font-size: 1rem;
    margin-top: 3rem;
  }
`;

type LabelGraphPairProps = {
  label: string;
  icon: React.ElementType;
};

const LabelGraphPair = ({ label, icon }: LabelGraphPairProps) => {
  const Graph = icon;
  return (
    <div css={containerStyles}>
      <div className="label-wrapper">
        <span>{label}</span>
      </div>
      <Graph />
    </div>
  );
};

export default LabelGraphPair;
