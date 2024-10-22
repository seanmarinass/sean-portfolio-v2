import { CardTitle } from "@/components/ui/card";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/data/projects.data";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-[2rem]">
      <CardTitle className="text-2xl">Featured Projects</CardTitle>

      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          year={project.year}
          description={project.description}
          link={project.link}
          image={project.image}
          skills={project.skills}
        />
      ))}
    </section>
  );
}
