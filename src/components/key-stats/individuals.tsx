import React from "react";
import { KeyStatsCategories } from "./types";
import KeyStatArticle from "./key-stat-article";
import { IndividualStats, Key } from "./data/individuals-stats";

const IndividualsArticle = ({
  statClasses,
}: {
  statClasses: (x: KeyStatsCategories) => string;
}) => (
  <KeyStatArticle
    statClasses={statClasses}
    stats={IndividualStats}
    legendKey={Key}
    category={KeyStatsCategories.Individual}
    h3="Percentage of individuals from different socio-economic backgrounds in a
    professional occupation"
    h4="Barriers to Success"
    summaryMain={
      <p>
        Individuals who are <strong>"upwardly mobile"</strong> face considerable
        obstacles in getting in and getting on Britain’s professions, and high
        status professions remain dominated from higher socio-economic
        backgrounds.
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
