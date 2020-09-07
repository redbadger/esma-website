import React from "react";
import useWindowSize from "../../util/useWindowSize";
import { BreakPoint, screenSizes, mq } from "../../util/mq";
import { css } from "@emotion/core";

const graphContainerStyles = (fullSpan: boolean) => css`
  ${mq(BreakPoint.lg)} {
    ${fullSpan ? "grid-column: 1 / span  2" : ""};
  }
`;

interface ResizableGraphProps {
  mobile: React.ReactNode;
  tablet: React.ReactNode;
  desktop: React.ReactNode;
  children: any;
  fullSpan: boolean;
}

const ResizableGraph = ({
  mobile,
  tablet,
  desktop,
  fullSpan,
  children
}: ResizableGraphProps) => {
  const { width } = useWindowSize();

  let Graph = undefined;

  if (width < screenSizes[BreakPoint.md]) {
    Graph = mobile;
  } else if (width < screenSizes[BreakPoint.lg]) {
    Graph = tablet;
  } else {
    Graph = desktop;
  }

  return (
    <div css={graphContainerStyles(fullSpan)}>
        {children}
      <Graph />
    </div>
  );
};

ResizableGraph.defaultProps = {
  fullSpan: true,
};

export default ResizableGraph;
