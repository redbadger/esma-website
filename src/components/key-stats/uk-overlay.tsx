import React from "react";
// import { ReactComponent as Uk } from "./uk.svg";
const ukSvg = require("./uk.svg") as string;

const UkOverlay = ({ children }: { children: React.SVGProps<SVGElement> }) => (
  <>
    <svg width="360" height="591" viewBox="0 0 360 591">
      <title>Uk Overlay</title>
      <image x="0" y="0" width="360" height="591" href={ukSvg} />
      {children}
    </svg>
  </>
);

export default UkOverlay;
