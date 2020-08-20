import React from "react";
import KeyStatArticle from "./key-stat-article";
import { IndividualStats, Key } from "./data/individuals-stats";

const IndividualsArticle = () => (
  <KeyStatArticle
    stats={IndividualStats}
    legendKey={Key}
    h3="Percentage of individuals from different socio-economic backgrounds in a
    professional occupation"
    h4="Move Out To Move Up"
    summaryMain={
      <p>
        Those from more privileged backgrounds are much more likely to move
        region to take up opportunities. Despite the disproportionate number of
        opportunities London offers, it is the least accessible due to the high
        costs associated with moving to London. People from less privileged
        backgrounds are less able to move to access those opportunities.
      </p>
    }
    reference={{
      href:
        "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/798404/SMC_State_of_the_Nation_Report_2018-19.pdf",
      name: "State of the nation 2018/19",
      figure: "Figure 6.13",
    }}
  />
);

export default IndividualsArticle;
