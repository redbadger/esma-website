import React from "react";
import renderer from "react-test-renderer";
import EsmaPanel from "./esma-panel";
import { Panel } from "./panel";

const samplePanel: Panel = {
  business: {
    name: "Business People",
    members: [
      {
        name: "Derek Trotter",
        role: "CEO of Trotters Independent Traders Ltd",
      },
    ],
  },
  publicSector: {
    name: "Public Sector People",
    members: [
      {
        name: "Jim Hacker",
        role: "Former minister, Department of Administrative Affairs",
      },
    ],
  },
  socialMobilityAlliance: {
    name: "Social Mobility Alliance People",
    members: [
      {
        name: "Barry Matthews",
        role: "SMBP Alumni",
      },
    ],
  },
  thirdSector: {
    name: "Third Sector People",
    members: [
      {
        name: "Bruce Wayne",
        role: "Founder, Thomas and Martha Wayne Foundation",
      },
    ],
  },
};

describe("EsmaPanel", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<EsmaPanel panel={samplePanel} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
