"use client";

import { useInView } from "react-intersection-observer";
import ExperienceCard from "@/components/ui/ExperienceCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { EXPERIENCES } from "@/lib/data/experiences.data";
import { useEffect } from "react";
import { useNavbarStore } from "@/stores/navbar.store";
import { NavbarPath } from "@/lib/data/navbar.data";

export default function ExperienceSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const handleIsInView = useNavbarStore((state) => state.setActiveSection);

  useEffect(() => {
    if (inView) handleIsInView(NavbarPath.EXPERIENCE);
  }, [inView]);

  return (
    <section ref={ref} className="flex flex-col gap-[2rem]">
      <SectionTitle title="Experience" />
      {EXPERIENCES.map((experience, index) => (
        <ExperienceCard
          key={index}
          position={experience.position}
          company={experience.company}
          startYear={experience.startYear}
          endYear={experience.endYear}
          description={experience.description}
          skills={experience.skills}
          link={experience.link}
        />
      ))}
    </section>
  );
}
