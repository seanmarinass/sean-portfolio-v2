import { Badge } from "./badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

interface ExperienceCardProps {
  position: string;
  company: string;
  startYear: string;
  endYear: string;
  description: string;
  skills: string[];
  link: string;
}

export default function ExperienceCard({
  position,
  company,
  startYear,
  endYear,
  description,
  skills,
  link,
}: ExperienceCardProps) {
  return (
    <Card className="flex w-full">
      <div>
        <CardHeader>
          <CardDescription className="text-nowrap text-lg">
            {startYear} - {endYear}
          </CardDescription>
        </CardHeader>
      </div>

      <div>
        <CardHeader>
          <CardTitle className="text-lg">{position}</CardTitle>
          <CardDescription>{company}</CardDescription>
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
