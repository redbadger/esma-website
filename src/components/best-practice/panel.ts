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
      name: "Helen Mahy CBE",
      role:
        "Non Executive Director at SSE plc",
    },
    {
      name: "Sir Kenneth Olisa OBE",
      role:
        "Chairman Of The Board at Alitam plc",
    },
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
  members: [
    {
      name: "Steve Holliday",
      role:
        "Board Member, Careers and Enterprise Company, Chairman of Zenobe, the President of the Energy Institute and Chairman of the Board of Trustees at Crisis",
    },
    {
      name: "Nigel Boardman",
      role:
        "Non-executive Director at the Department for Business, Energy and Industrial Strategy & Vice President of Save the Children",
    },
    {
      name: "Simon Levine",
      role: "CEO, DLA Piper & Office for Students Board Member",
    },
    {
      name: "Paul Cleal",
      role:
        "Former Social Mobility Commissioner, Vice Chair, Kingston University and NCS Trustee",
    },
    {
      name: "Aimee Higgins",
      role: "Executive Director, Careers and Enterprise Company",
    },
    {
      name: "Clare Hutchinson",
      role: "Executive Director, Careers and Enterprise Company",
    },
    { name: "Laura Rawstorne", role: "Social Mobility Lead, DfE" },
    { name: "Paul Botton", role: "Senior Teacher, Westminster School" },
    {
      name: "David Willis",
      role: "Chair, Paradigm Trust and SRA Board Member",
    },
    {
      name: "Likhon Muhammed",
      role: "Head of College, Headteacher at Bourne End E-ACT Academy",
    },
    { name: "Naim Moukarzel", role: "Director of Programme, NCS" },
    { name: "Dr Trevor Richards", role: "Head of All Hallows School" },
    {
      name: "Kirsty Watt",
      role: "Head of Academy Ambassadors, New Schools Network",
    },
    {
      name: "Michelle Lord",
      role:
        "Senior Arts Development Officer and Social Mobility Lead, Cambridge City Council",
    },
    {
      name: "Professor Richard Moorhead",
      role: "Head of Law, Exeter University",
    },
    {
      name: "Professor Steven Vaughan",
      role: "Law and Professional Ethics, UCL",
    },
    {
      name: "Sue Williams QPM Commander",
      role: "Head of Profession – Safeguarding, Metropolitan Police Service ",
    },
    {
      name: "Professor Thom Brooks",
      role: "Dean & Chair in Law and Government at Durham University",
    },
    {
      name: "Sean Anstee",
      role:
        "Executive Director for Advisory, Public Affairs & PR, Cratus and former Leader of Trafford Council",
    },
  ],
};

const socialMobilityAlliance: PanelSection = {
  name: "Social Mobility Scheme Alliance Representatives",
  members: [
    { name: "Liberty King", role: "Positive Transformation Alumni" },
    {
      name: "Tarnpreet Bassi",
      role: "Future Shoosmiths Trainee and SMBP Volunteer",
    },
    {
      name: "Holly Moore",
      role: "ITV Solicitor Apprentice and former SMBP Cluster Head",
    },
    { name: "Shama Aktar", role: "SMBP Alumni" },
    { name: "Muhammad Gangat", role: "SMBP Alumni" },
    { name: "Symran Gakhal", role: "SMBP Alumni" },
    {
      name: "James Hutchens",
      role:
        "Trainee Solicitor and Youth Advisory Board, Aspiring Solicitors and former SMBP Operations Manager",
    },
    { name: "Claud Williams", role: "Aleto Foundation" },
    { name: "Deborah Igunma", role: "Aleto Foundation" },
    { name: "Janira Borges", role: "Aleto Foundation" },
    { name: "Maame Serwaah", role: "Aleto Foundation" },
    { name: "Obi Okereke", role: "Aleto Foundation" },
  ],
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
