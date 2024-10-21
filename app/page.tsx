import Image from "next/image";
import AboutSection from "@/sections/AboutSection";
import HomeSection from "@/sections/HomeSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem] h-full w-full">
      <HomeSection />
      <AboutSection />
    </div>
  );
}
