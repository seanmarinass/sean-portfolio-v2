import Image from "next/image";
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
    <Card className="flex w-full bg-primary/5 border-none hover:scale-105 group">
      <div className="flex w-[40%] justify-center items-center align-middle p-[0.5rem]">
        <Image src={image} alt={title} height={500} width={500} />
      </div>

      <div className="w-[60%]">
        <CardHeader>
          <CardTitle className="text-lg group-hover:text-sky-300">
            {title}
          </CardTitle>
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
