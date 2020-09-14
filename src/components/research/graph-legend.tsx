import React from "react";
import { css } from "@emotion/core";
import { mq, BreakPoint } from "../../util/mq";

type GraphLegendProps = {
  labels: { color: string; label: string }[];
  forceVertical: boolean;
  variant: LegendVariant;
};

export enum LegendVariant {
  PILL,
  BRICK,
}

type GraphLegendMarkerProps = {
  color: string;
  variant: LegendVariant;
};

const variantStyles = {
  [LegendVariant.PILL] : {width: "1.5rem", height: "0.375rem", borderRadius: "3rem"},
  [LegendVariant.BRICK] : {width: "0.75rem", height: "1.875rem", borderRadius: "0"},
}

const GraphLegendMarker = ({ color, variant }: GraphLegendMarkerProps) => {
  const legendMarkerStyles = css`
    background-color: var(--${color});
    min-width: ${variantStyles[variant].width};
    height: ${variantStyles[variant].height};
    border-radius: ${variantStyles[variant].borderRadius};
    display: inline-block;
    margin-right: 0.75rem;
  `;
  return <div css={legendMarkerStyles}></div>;
};

const GraphLegend = ({ labels, forceVertical, variant }: GraphLegendProps) => {
  const graphLegendStyles = css`
    display: flex;
    margin: 1.5rem 0px;
    flex-direction: column;
    
    span {
      font-size: 1rem;
    }

    ${mq(BreakPoint.lg)} {
      flex-direction: ${forceVertical ? "column" : "row"};
    }

    .legend-wrapper {
      display: flex;
      ${mq(BreakPoint.md)} {
        align-items: center;
      }
    }

    span {
      margin-right: 1.25rem;
    }
  `;

  return (
    <div css={graphLegendStyles}>
      {labels.map((label, index) => {
        return (
          <div key={index} className="legend-wrapper">
            <GraphLegendMarker color={label.color} variant={variant} />
            <span>{label.label}</span>
          </div>
        );
      })}
    </div>
  );
};

GraphLegend.defaultProps = {
  forceVertical: false,
  variant: LegendVariant.PILL,
};

export default GraphLegend;
