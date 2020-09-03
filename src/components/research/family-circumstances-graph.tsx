import React from "react";
import DesktopGraphSVG from "../../svg/school-years-family-circumstances-desktop.svg";
import { css } from "@emotion/core";

// TODO parking this for now, until we get some design input on how to handle this on different screen sizes

const containerStyles = css`
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: 30% 70%;

  svg {
    width: 40rem;
  }
`;

const labelStyles = css`
    p {
      border-bottom: 1px solid #efefef
    }
`;

const labels = [
  "Moved to live in an area which I thought had good schools",
  "Appealed against a decision allocating my child(ren) to a specific school",
  "Appealed against a decision allocating my child(ren) to a specific school",
  "Attended religious services to that my child(ren) could enter a religious school",
  "Employed a private tutor to help my child(ren) pass the entrance test for a particular school",
  "Bought/rented a second home and used that address in order for my child(ren) to gain access to a particular school",
  "Used a relative’s address in order for my child(ren) to gain access to a specific school",
];

const MobileGraph = () => {
  return <div></div>;
};

const FamilyCircumstancesGraph = () => {
  return (
    <div css={containerStyles}>
      <div css={labelStyles}>
        {labels.map((label, index) => {
          return <p key={index}>{label}</p>;
        })}
      </div>
      <DesktopGraphSVG />
    </div>
  );
};

export default FamilyCircumstancesGraph;
