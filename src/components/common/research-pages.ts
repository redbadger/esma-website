import {
  faBriefcase,
  faPencilAlt,
  faBookOpen,
  faGraduationCap,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { timelineIcons } from './icons';

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
    href: "/issues-chronology/early-years/overview",
    name: "Early years",
    icon: timelineIcons.earlyYears,
  },
  {
    className: null,
    highlightColour: "var(--yellow)",
    faIcon: faPencilAlt,
    href: "/issues-chronology/school-years/overview",
    name: "School years",
    icon: timelineIcons.schoolYears,
  },
  {
    className: null,
    highlightColour: "var(--midnight)",
    faIcon: faBookOpen,
    href: "/issues-chronology/further-education/overview",
    name: "Further education",
    icon: timelineIcons.furtherEducation,
  },
  {
    className: null,
    highlightColour: "var(--cobalt)",
    faIcon: faGraduationCap,
    href: "/issues-chronology/higher-education/overview",
    name: "Higher education",
    icon: timelineIcons.higherEducation,
  },
  {
    className: null,
    highlightColour: "var(--copperfield)",
    faIcon: faBriefcase,
    href: "/issues-chronology/working-life/overview",
    name: "Working life",
    icon: timelineIcons.workingLife,
  },
];
