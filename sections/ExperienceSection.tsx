import ExperienceCard from "@/components/ui/ExperienceCard";
import { EXPERIENCES } from "@/lib/experiences.data";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col gap-[2rem]">
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
