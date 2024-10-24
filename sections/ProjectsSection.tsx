import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROJECTS } from "@/lib/data/projects.data";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-[2rem]">
      <SectionTitle title="Projects" />

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
