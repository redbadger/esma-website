import React from "react";
import renderer from "react-test-renderer";
import PrevNext from "./prev-next";
import { PillData } from "./types";
import EarlyDevIcon from "../../svg/blocks.svg";

describe("PrevNext", () => {
  const samplePills: PillData[] = [
    {
      name: "Life stage overview",
      href: "/research/early-years/executive-summary",
    },
    {
      name: "Family environment",
      href: "/research/early-years/family-environment",
    },
    {
      name: "Housing and the neighbourhood",
      href: "/research/early-years/housing-and-neighbourhood",
    },
    {
      name: "Early years provision",
      href: "/research/early-years/early-years-provision",
    },
    {
      name: "Impact of Covid-19",
      href: "/research/early-years/impact-of-covid-19",
    },
  ];

  const colorActive = "var(--aqua)";

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <PrevNext
          pills={samplePills}
          colorActive={colorActive}
          currentPillIndex={0}
          icon={EarlyDevIcon}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
