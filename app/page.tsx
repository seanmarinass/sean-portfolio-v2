import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[7.5rem] h-full">
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
