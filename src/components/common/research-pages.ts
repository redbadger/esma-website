import {
  faBriefcase,
  faPencilAlt,
  faBookOpen,
  faGraduationCap,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ResearchPage = {
  className: string;
  highlightColour: string;
  faIcon: IconProp;
  href: string;
  name: string;
};

export const pages: ResearchPage[] = [
  {
    className: null,
    highlightColour: "var(--aqua)",
    faIcon: faShapes,
    href: "/research/early",
    name: "Early years",
  },
  {
    className: "current-page",
    highlightColour: "var(--yellow)",
    faIcon: faPencilAlt,
    href: "/research/school",
    name: "School years",
  },
  {
    className: null,
    highlightColour: "var(--midnight)",
    faIcon: faBookOpen,
    href: "/research/further",
    name: "Further education",
  },
  {
    className: null,
    highlightColour: "var(--cobalt)",
    faIcon: faGraduationCap,
    href: "/research/higher",
    name: "Higher education",
  },
  {
    className: null,
    highlightColour: "var(--copperfield)",
    faIcon: faBriefcase,
    href: "/research/working",
    name: "Working life",
  },
];
