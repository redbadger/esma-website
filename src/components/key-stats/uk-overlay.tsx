import React from "react";
import UkSvg from "./uk.svg";

const UkOverlay = ({ children }: { children: React.SVGProps<SVGElement> }) => (
  <>
    <svg width="360" height="591" viewBox="0 0 360 591">
      <title>Uk Overlay</title>
      <UkSvg />
      {children}
    </svg>
  </>
);

export default UkOverlay;
