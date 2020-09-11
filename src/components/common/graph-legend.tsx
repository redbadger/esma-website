import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

type GraphLegendProps = {
  labels: { color: string; label: string }[];
  forceVertical: boolean;
};

type GraphLegendPillProps = {
  color: string;
};

const GraphLegendPill = ({ color }: GraphLegendPillProps) => {
  const legendPillStyles = css`
    background-color: var(--${color});
    width: 1.5rem;
    height: 0.375rem;
    border-radius: 3rem;
    display: inline-block;
    margin-right: 0.75rem;
  `;
  return <div css={legendPillStyles}></div>;
};

const graphLegendStyles = css`
  display: flex;
  margin: 1.5rem 0px;
  flex-direction: column;

  ${mq(BreakPoint.lg)} {
    flex-direction: row;
  }

  .legend-wrapper {
    display: flex;
    align-items: center;
  }

  span {
    margin-right: 1.25rem;
}
`;

const GraphLegend = ({ labels }: GraphLegendProps) => {
  return (
    <div css={graphLegendStyles}>
      {labels.map((label, index) => {
        return (
          <div key={index} className="legend-wrapper">
            <GraphLegendPill color={label.color} />
            <span>{label.label}</span>
          </div>
        );
      })}
    </div>
  );
};

GraphLegend.defaultProps = {
  forceVertical: false,
};

export default GraphLegend;
