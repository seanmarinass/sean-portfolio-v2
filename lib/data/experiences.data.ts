import { Skill } from "../constants";

interface Experience {
  position: string;
  company: string;
  startYear: string;
  endYear: string;
  description: string;
  skills: Skill[];
  link: string;
}

export const EXPERIENCES: Experience[] = [
  {
    position: "Software Engineer",
    company: "Simulation Software and Technology",
    startYear: "2024",
    endYear: "Present",
    description:
      "Worked on web applications using React.js, LoopBack, and MongoDB, focusing on data fetching optimization and user experience improvements. Designed REST APIs with OpenAPI and managed project workflows using Azure DevOps.",
    skills: [
      "MongoDb",
      "Express.js",
      "React.js",
      "Node.js",
      "Vue.js",
      "Microfrontend",
      "Typescript",
      "HTML",
      "CSS",
      "Python",
      "FastAPI",
      "OpenAPI Specification",
    ],
    link: "",
  },
  {
    position: "Software Development Intern",
    company: "Neurowyzr",
    startYear: "2023",
    endYear: "2023",
    description:
      "Developed microservices in Scala and designed REST APIs, integrating RabbitMQ for message handling. Collaborated with cross-functional teams and ensured project quality through comprehensive testing.",
    skills: [
      "MongoDb",
      "Microservices",
      "Scala",
      "RabbitMq",
      "RestAPI",
      "OpenAPI Specification",
      "Scala Test",
    ],
    link: "",
  },
  {
    position: "Backend Engineering Intern",
    company: "Contour",
    startYear: "2022",
    endYear: "2022",
    description:
      "Enhanced backend development using Java Spring Boot, working with RESTful APIs and PostgreSQL. Developed skills in build automation with Gradle and applied object-oriented programming concepts in Java and Kotlin.",
    skills: [
      "PostgreSql",
      "Microservices",
      "Java",
      "Springboot",
      "RestAPI",
      "OpenAPI Specification",
      "Springboot Test",
      "Gradle",
      "Kotlin",
    ],
    link: "",
  },
];
