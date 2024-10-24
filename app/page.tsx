import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[10rem] h-full">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}
