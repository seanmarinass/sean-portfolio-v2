export enum NavbarPath {
  ABOUT = "#about",
  EXPERIENCE = "#experience",
  PROJECTS = "#projects",
}

export interface NavbarLink {
  label: string;
  path: string;
}

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    label: "About",
    path: NavbarPath.ABOUT,
  },
  {
    label: "Experience",
    path: NavbarPath.EXPERIENCE,
  },
  {
    label: "Projects",
    path: NavbarPath.PROJECTS,
  },
];
