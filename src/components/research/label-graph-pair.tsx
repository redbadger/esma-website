import React from "react";
import { css } from "@emotion/core";

const containerStyles = css`
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 1.75rem;

  svg {
    margin-bottom: 1rem;
    width: unset;
    height: 100%;
  }

  div.label-wrapper {
    border-bottom: 1px solid var(--separator);
    height: 10rem;
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
  graph: React.ElementType;
};

const LabelGraphPair = ({ label, graph }: LabelGraphPairProps) => {
  const Graph = graph;
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
