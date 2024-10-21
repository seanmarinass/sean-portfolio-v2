import Image from "next/image";
import AboutSection from "@/sections/AboutSection";
import HomeSection from "@/sections/HomeSection";

export default function Home() {
  return (
    <div className="p-[1rem] h-full w-full">
      <HomeSection />
      <AboutSection />
    </div>
  );
}
