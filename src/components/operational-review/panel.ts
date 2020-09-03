type PanelMember = {
  name: string;
  role: string;
};

export type PanelSection = {
  name: string;
  members: PanelMember[];
};

export type Panel = {
  business: PanelSection;
  publicSector: PanelSection;
  socialMobilityAlliance: PanelSection;
  education: PanelSection;
};

const business: PanelSection = {
  name: "Business",
  members: [
    {
      name: "Andrew Garard",
      role:
        "Group General Counsel and Director of Corporate Affairs, Meggitt plc",
    },
    { name: "David Ampaw", role: "Partner, DLA Piper & PRIME Board member" },
    { name: "Dr Tony Munton", role: "Managing Director theRTK" },
    { name: "Hollie Crompton", role: "Social Mobility Operations Lead, PwC" },
    { name: "Jeanie York", role: "CTIO, Virgin Media" },
    { name: "John Godfrey", role: "Commercial Director, Red Badger" },
    { name: "Joe Seddon", role: "Founder and CEO, Zero Gravity Tech" },
    { name: "Katherine Ainely", role: "Managing Director Ventures, BT" },
    {
      name: "Katie Perrior",
      role: "former Downing Street Director of Communications",
    },
    {
      name: "Kirsty Cooper",
      role: `General Counsel and Company Secretary, Aviva Plc & Insurance and
        Pensions Champion, Government Dormant Assets Scheme`,
    },
    { name: "Raphael Mokades", role: "Founder & CEO, Rare Recruitment" },
  ],
};

const publicSector: PanelSection = {
  name: "Public Bodies & Education",
  members: [],
};
const socialMobilityAlliance: PanelSection = {
  name: "Social Mobility Scheme Alliance Representatives",
  members: [],
};
const education: PanelSection = { name: "Third Sector", members: [] };

const panel: Panel = {
  business,
  publicSector,
  socialMobilityAlliance,
  education,
};

export default panel;
