import React from "react";
import KeyStatArticle from "./key-stat-article";
import { BusinessStats, Key } from "./data/business-stats";

const BusinessArticle = () => (
  <KeyStatArticle
    stats={BusinessStats}
    legendKey={Key}
    h3="Job growth in the UK since 2012"
    h4="Inequality In The Uk"
    summaryMain={
      <>
        <p>
          The UK is one of the most unequal countries in Europe, with levels of
          socio-economic inequality comparable to the USA.
        </p>
        <p>
          The richest half receive 80% of all incomes in the UK. Leaving the
          poorest half who receive the remaining 20%. Studies show that should
          British businesses attain even average levels of social mobility, the
          economy would be boosted by around £170 billion in total.
        </p>
      </>
    }
    reference={{
      href:
        "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/798404/SMC_State_of_the_Nation_Report_2018-19.pdf",
      name: "State of the nation 2018/19",
      figure: "Figure 7.4",
    }}
  />
);

export default BusinessArticle;
