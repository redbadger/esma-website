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
  href: string;
  name: string;
  icon: React.ElementType;
};

export const pages: ResearchPage[] = [
  {
    className: "early-years",
    href: "/life-stage-research/early-years/",
    name: "Early years",
    icon: timelineIcons.earlyYears,
  },
  {
    className: "school-years",
    href: "/life-stage-research/school-years/",
    name: "School years",
    icon: timelineIcons.schoolYears,
  },
  {
    className: "further-education",
    href: "/life-stage-research/further-education/",
    name: "Further education",
    icon: timelineIcons.furtherEducation,
  },
  {
    className: "higher-education",
    href: "/life-stage-research/higher-education/",
    name: "Higher education",
    icon: timelineIcons.higherEducation,
  },
  {
    className: "working-life",
    href: "/life-stage-research/working-life/",
    name: "Working life",
    icon: timelineIcons.workingLife,
  },
];
