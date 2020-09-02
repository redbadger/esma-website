import React from "react";
import renderer from "react-test-renderer";
import Pills from "./pills";
import { PillData } from "./types";

describe("Pills", () => {
  const samplePills: PillData[] = [
    { name: "Executive summary", href: "/" },
    { name: "Early Years Foundation Stage", href: "/" },
    { name: "Family Circumstances", href: "/" },
    { name: "Social class and underachievement", href: "/" },
    { name: "School cultures", href: "/" },
    { name: "Geographical educational inequality", href: "/" },
    { name: "Type and quality of schooling", href: "/" },
    { name: "Low aspirations", href: "/" },
    { name: "Access to career advice", href: "/" },
    { name: "Gaps in attainment", href: "/" },
    { name: "Impact of Covid-19", href: "/" },
  ];

  const colorActive = "yellow";

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Pills
          pills={samplePills}
          colorActive={colorActive}
          currentPillIndex={0}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
