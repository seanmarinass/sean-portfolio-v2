type Skill =
  | "Typescript"
  | "Java"
  | "Scala"
  | "Scala Test"
  | "HTML"
  | "CSS"
  | "Python"
  | "MongoDb"
  | "PostgreSql"
  | "React.js"
  | "Vue.js"
  | "Next.js"
  | "Node.js"
  | "Express.js"
  | "Springboot"
  | "Tailwind"
  | "Agile"
  | "React Native"
  | "OpenAPI Specification"
  | "Azure DevOps"
  | "Jira"
  | "RabbitMq"
  | "RestAPI"
  | "FastAPI"
  | "Microfrontend"
  | "Microservices"
  | "Git"
  | "Gradle"
  | "Springboot Test"
  | "Kotlin";

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
      "Developed responsive web applications using React.js and LoopBack with MongoDB, leveraging TypeScript for efficient development. Improved data fetching performance by 200% and enhanced user experience through Figma-designed system functions, increasing satisfaction by 20%. Designed REST APIs with OpenAPI for seamless frontend-backend integration and utilized Azure DevOps for ticket management, pull requests, and build pipelines.",
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
      "Contributed to the development of core Scala microservices, designing REST APIs with Swagger and integrating RabbitMQ for efficient message queue handling. Managed data operations using MongoDB and collaborated with product managers and designers to translate requirements into technical specifications. Ensured reliable solutions through comprehensive testing, achieving 100% test coverage and ensuring timely project deliveries.",
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
      "Extensively leveraged Java Spring Boot to enhance backend development, streamlining processes and improving code maintainability. Gained hands-on experience crafting and invoking RESTful APIs, both internal and external. Developed proficiency in PostgreSQL database management and honed Object-Oriented Programming skills in Java and Kotlin. Applied expertise in build automation using Gradle.",
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
