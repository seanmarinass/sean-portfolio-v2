"use client";

import { useInView } from "react-intersection-observer";
import { CardDescription } from "@/components/ui/card";
import SectionTitle from "@/components/ui/SectionTitle";
import { useEffect } from "react";
import { useNavbarStore } from "@/stores/navbar.store";
import { NavbarPath } from "@/lib/data/navbar.data";

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const handleIsInView = useNavbarStore((state) => state.setActiveSection);

  useEffect(() => {
    if (inView) handleIsInView(NavbarPath.ABOUT);
  }, [inView]);

  return (
    <section ref={ref} className="flex flex-col gap-[1rem]">
      <SectionTitle title="About" />
      <CardDescription className="text-base">
        I got my start in programming with a C++ module back in 2015, but it
        didn&apos;t really resonate with me then. During the COVID pandemic, I
        took a Python course on YouTube, and that sparked my passion for
        software development. Since then, I&apos;ve built software for a
        <span className="text-primary font-bold"> fintech startup, </span>a
        <span className="text-primary font-bold"> medtech startup, </span>
        and now an
        <span className="text-primary font-bold"> AI company. </span>
      </CardDescription>

      <CardDescription className="text-base">
        Nowadays, I focus on creating
        <span className="text-primary font-bold">
          {" "}
          fullstack applications for clients.{" "}
        </span>
        I enjoy understanding their needs and figuring out how to bring their
        ideas to life through smart design and engineering.
        <span className="text-primary font-bold">
          {" "}
          I aim to build solutions that look great and work efficiently,{" "}
        </span>
        while also exploring new tech—whether it&apos;s a cool UI library or a
        backend framework.
      </CardDescription>

      <CardDescription className="text-base">
        Outside of coding, you&apos;ll usually find me bouldering, which I love
        for both the physical and mental challenge. I enjoy taking and editing
        photos, jogging around Marina Bay, and rewatching my favorite sitcoms
        like
        <span className="text-primary font-bold"> How I Met Your Mother </span>
        and
        <span className="text-primary font-bold"> The Office. </span>I like to
        keep a good mix of adventure and relaxation in my free time.
      </CardDescription>
    </section>
  );
}
