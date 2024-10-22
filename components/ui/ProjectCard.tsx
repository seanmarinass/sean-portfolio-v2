import { Badge } from "./badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  link: string;
  image: string;
  skills: string[];
}

export default function ProjectCard({
  title,
  year,
  description,
  link,
  image,
  skills,
}: ProjectCardProps) {
  return (
    <Card className="flex w-full">
      {/* <div>
        <CardHeader>
          <CardDescription className="text-nowrap text-lg">
            {startYear} - {endYear}
          </CardDescription>
        </CardHeader>
      </div> */}

      <div>
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{year}</CardDescription>
        </CardHeader>

        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-[0.5rem]">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="default"
              className="bg-sky-300/10 text-sky-300 hover:bg-sky-300/10 hover:text-sky-300"
            >
              {skill}
            </Badge>
          ))}
        </CardFooter>
      </div>
    </Card>
  );
}
