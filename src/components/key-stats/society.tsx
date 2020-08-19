import React from "react";
import KeyStatArticle from "./key-stat-article";
import { SocietyStats, Key } from "./data/society-stats";

const SocietyArticle = () => (
  <KeyStatArticle
    stats={SocietyStats}
    legendKey={Key}
    h3="Performance levels of local authorities in each region"
    h4="Social Mobility Cold Spots"
    summaryMain={
      <>
        <p>
          England&apos;s major cities are failing to be the places of
          opportunity that they should be. Many of the richest places in England
          are doing worse for their disadvantaged children than places that are
          much poorer.
        </p>
      </>
    }
    reference={{
      href:
        "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/496103/Social_Mobility_Index.pdf",
      name: "Social Mobility Index",
      figure: "Figure 4",
    }}
  />
);

export default SocietyArticle;
