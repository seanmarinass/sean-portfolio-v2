export enum NavbarPath {
  HOME = "home",
  ABOUT = "about",
  EXPERIENCE = "experience",
  PROJECTS = "projects",
  SKILLS = "skills",
}

export interface NavbarLink {
  label: string;
  path: string;
}

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    label: "Home",
    path: `${NavbarPath.HOME}`,
  },
  {
    label: "About",
    path: `${NavbarPath.ABOUT}`,
  },
  {
    label: "Experience",
    path: `${NavbarPath.EXPERIENCE}`,
  },
  {
    label: "Projects",
    path: `${NavbarPath.PROJECTS}`,
  },
  {
    label: "Skills",
    path: `${NavbarPath.SKILLS}`,
  },
];
