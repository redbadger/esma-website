import {
  faBriefcase,
  faPencilAlt,
  faBookOpen,
  faGraduationCap,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import EarlyDevIcon from "../../svg/blocks.svg";
import SchoolYearsIcon from "../../svg/pencil.svg";
import FurtherEduIcon from "../../svg/book.svg";
import HigherEduIcon from "../../svg/cap.svg";
import WorkingLifeIcon from "../../svg/briefcase.svg";

export type ResearchPage = {
  className: string;
  highlightColour: string;
  faIcon: IconProp;
  href: string;
  name: string;
  icon: React.ElementType;
};

export const pages: ResearchPage[] = [
  {
    className: "current-page",
    highlightColour: "var(--aqua)",
    faIcon: faShapes,
    href: "/research/early-years/overview",
    name: "Early years",
    icon: EarlyDevIcon,
  },
  {
    className: null,
    highlightColour: "var(--yellow)",
    faIcon: faPencilAlt,
    href: "/research/school-years/overview",
    name: "School years",
    icon: SchoolYearsIcon,
  },
  {
    className: null,
    highlightColour: "var(--midnight)",
    faIcon: faBookOpen,
    href: "/research/further-education/overview",
    name: "Further education",
    icon: FurtherEduIcon,
  },
  {
    className: null,
    highlightColour: "var(--cobalt)",
    faIcon: faGraduationCap,
    href: "/research/higher-education/overview",
    name: "Higher education",
    icon: HigherEduIcon,
  },
  {
    className: null,
    highlightColour: "var(--copperfield)",
    faIcon: faBriefcase,
    href: "/research/working-life/overview",
    name: "Working life",
    icon: WorkingLifeIcon,
  },
];
