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
  faIcon: IconProp;
  href: string;
  name: string;
  icon: React.ElementType;
};

export const pages: ResearchPage[] = [
  {
    className: "early-years",
    faIcon: faShapes,
    href: "/issues-chronology/early-years/",
    name: "Early years",
    icon: timelineIcons.earlyYears,
  },
  {
    className: "school-years",
    faIcon: faPencilAlt,
    href: "/issues-chronology/school-years/",
    name: "School years",
    icon: timelineIcons.schoolYears,
  },
  {
    className: "further-education",
    faIcon: faBookOpen,
    href: "/issues-chronology/further-education/",
    name: "Further education",
    icon: timelineIcons.furtherEducation,
  },
  {
    className: "higher-education",
    faIcon: faGraduationCap,
    href: "/issues-chronology/higher-education/",
    name: "Higher education",
    icon: timelineIcons.higherEducation,
  },
  {
    className: "working-life",
    faIcon: faBriefcase,
    href: "/issues-chronology/working-life/",
    name: "Working life",
    icon: timelineIcons.workingLife,
  },
];
