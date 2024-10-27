import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import FooterSection from "@/sections/FooterSection";
import ProjectsSection from "@/sections/ProjectsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[10rem] h-full justify-center items-center align-middle w-full">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}
