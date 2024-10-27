"use client";

import { useInView } from "react-intersection-observer";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROJECTS } from "@/lib/data/projects.data";
import { useEffect } from "react";
import { useNavbarStore } from "@/stores/navbar.store";
import { NavbarPath } from "@/lib/data/navbar.data";

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const handleIsInView = useNavbarStore((state) => state.setActiveSection);

  useEffect(() => {
    if (inView) handleIsInView(NavbarPath.PROJECTS);
  }, [inView]);
  return (
    <section
      ref={ref}
      className="flex flex-col gap-[2rem] justify-center items-start align-middle"
    >
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
