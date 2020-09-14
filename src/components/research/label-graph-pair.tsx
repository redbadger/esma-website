import React from "react";
import { css } from "@emotion/core";
import ResizableGraph from "./resizable-graph";
import { mq, BreakPoint } from "../../util/mq";

const containerStyles = css`
  display: grid;

  ${mq(BreakPoint.md)} {
    grid-template-columns: 2fr 3fr;
  }
  column-gap: 1.75rem;

  svg {
    margin-bottom: 1rem;
    height: 100%;
  }

  div.label-wrapper {
    border-top: 1px solid var(--separator);
    height: 6rem;
    ${mq(BreakPoint.md)} {
      border-bottom: 1px solid var(--separator);
      height: 11rem;
    }
    display: flex;
    align-items: center;
  }

  span {
    font-size: 1rem;
    ${mq(BreakPoint.md)} {
      margin-top: 3rem;
    }
  }
`;

type LabelGraphPairProps = {
  label: string;
  mobileGraph: React.ElementType;
  tabletGraph: React.ElementType;
  desktopGraph: React.ElementType;
};

const LabelGraphPair = ({
  label,
  mobileGraph,
  tabletGraph,
  desktopGraph,
}: LabelGraphPairProps) => {
  return (
    <div css={containerStyles}>
      <div className="label-wrapper">
        <span>{label}</span>
      </div>
      <ResizableGraph
        fullSpan={false}
        mobile={mobileGraph}
        tablet={tabletGraph}
        desktop={desktopGraph}
      ></ResizableGraph>
    </div>
  );
};

export default LabelGraphPair;
