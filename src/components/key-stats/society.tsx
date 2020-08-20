import React from "react";
import KeyStatArticle from "./key-stat-article";
import { SocietyStats, Key } from "./data/society-stats";

const SocietyArticle = () => (
  <KeyStatArticle
    stats={SocietyStats}
    legendKey={Key}
    h3="Map of performance against the Social Mobility Index by region and local authority"
    h4="Social Mobility Index"
    summaryMain={
      <>
        <p>
          The Social Mobility Index compares the chances that a child from a
          disadvantaged background will do well at school and get a good job
          across each of the 324 local authority district areas of England.
        </p>
        <p>
          <strong>Hotspots</strong> &ndash; Young people from disadvantaged
          backgrounds who live in London and its commuter belt are more likely
          to achieve good outcomes in school and have more opportunities to do
          well as adults.
        </p>
        <p>
          <strong>Coldspots</strong> &ndash; Coastal areas and industrial towns
          are becoming real social mobility coldspots. Many of these areas
          perform badly on both educational measures and adulthood outcomes.
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
