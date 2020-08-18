import React from "react";
import { LegendProps } from "./types";

const Legend = ({ legendDetails }: { legendDetails: LegendProps }) => (
  <div className="key">
    <p>Key</p>
    <ul>
      {legendDetails.map(key => (
        <li key={key.label}>
          <span style={{ color: key.colour }}></span>
          {key.label}
        </li>
      ))}
    </ul>
  </div>
);

export default Legend;
