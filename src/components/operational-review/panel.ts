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
  thirdSector: PanelSection;
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
const thirdSector: PanelSection = {
  name: "Third Sector",
  members: [
    {
      name: "Martin Lewis OBE",
      role: `SMBP Patron and Founder, <a href="https://www.moneyandmentalhealth.org/">The Money and Mental Health Policy Institute</a>`,
    },
    {
      name: "Nick Newman",
      role: "Founder and CEO, National Careers Week CIC",
    },
    { name: "Sherry Coutu CBE ", role: "Workfinder" },
    {
      name: "Paul Evans",
      role: "CEO, Leadership Through Sport and Business",
    },
    { name: "John Shiels", role: "CEO, Manchester United Foundation" },
    {
      name: "Sharon Evans",
      role: "Trustee, PTI and CEO, Dotcom Children’s Foundation",
    },
    {
      name: "Mark Soden",
      role: "SMBP Patron and Director, Cleartrack Performance",
    },
    { name: "Binda Patel", role: "Head of Innovation, The Sutton Trust" },
    { name: "Nicholas Cheffings", role: "Chair, Making the Leap" },
    {
      name: "Sarah Horner",
      role: "Head of Policy and Communications, Learning and Work Institute",
    },
    { name: "Debbie Forster", role: "CEO, Tech Talent Charter" },
  ],
};

const panel: Panel = {
  business,
  publicSector,
  socialMobilityAlliance,
  thirdSector,
};

export default panel;
