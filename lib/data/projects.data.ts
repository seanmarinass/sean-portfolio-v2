import { Skill } from "../constants";

import seanPortfolioV2Image from "@/public/sean-portfolio-v2.png";
import seanPortfolioV1Image from "@/public/sean-portfolio-v1.png";
import ninavanImage from "@/public/ninjavan.png";
import apperizerImage from "@/public/appetizer.png";

interface Project {
  title: string;
  year: string;
  description: string;
  link: string;
  image: string;
  skills: Skill[];
}

export const PROJECTS: Project[] = [
  {
    title: "Beanaby (In Development)",
    year: "2024",
    description:
      "A user-friendly app for tracking bills and contracts, featuring reminders for due dates and payment history. Users can manage their financial obligations seamlessly, with payment integration planned for future updates.",
    link: "",
    image: "",
    skills: [
      "Typescript",
      "MongoDb",
      "Express.js",
      "Next.js",
      "Node.js",
      "Framer",
      "Tailwind",
      "NextAuth",
    ],
  },
  {
    title: "Sean Portfolio v2",
    year: "2024",
    description:
      "Updated web portfolio featuring the latest information and projects as of 2024.",
    link: "",
    image: seanPortfolioV2Image.src,
    skills: ["Next.js", "Typescript", "Framer", "Tailwind"],
  },
  {
    title: "Sean Portfolio v1",
    year: "2023",
    description:
      "First version of the web portfolio featuring updated information and projects as of 2023.",
    link: "",
    image: seanPortfolioV1Image.src,
    skills: ["Next.js", "Typescript", "Framer", "Tailwind"],
  },
  {
    title: "Ninja Van Hackathon",
    year: "2023",
    description:
      "A web application that provides users with real-time visualization of delivery drivers' locations, offering precise timing instead of a broad delivery range.",
    link: "",
    image: ninavanImage.src,
    skills: [
      "Java",
      "Maven",
      "Springboot",
      "Springboot Test",
      "Next.js",
      "OpenAPI Specification",
      "Typescript",
      "Tailwind",
      "PostgreSql",
    ],
  },
  {
    title: "Appetizer Hackathon",
    year: "2022",
    description:
      "A web application that scrapes Twitter for trending words and phrases, visualizing their sentiment. This tool helps aspiring entrepreneurs identify potential startup ideas based on current trends.",
    link: "",
    image: apperizerImage.src,
    skills: [
      "Java",
      "Maven",
      "Springboot",
      "React.js",
      "Typescript",
      "Tailwind",
      "PostgreSql",
    ],
  },
];
