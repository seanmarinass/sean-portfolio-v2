"use client";

import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import FooterSection from "@/sections/FooterSection";
import ProjectsSection from "@/sections/ProjectsSection";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Home() {
  return (
    <motion.div
      className="flex flex-col gap-[10rem] h-full justify-center items-center align-middle w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={childVariants}>
        <AboutSection />
      </motion.div>
      <motion.div variants={childVariants}>
        <ExperienceSection />
      </motion.div>
      <motion.div variants={childVariants}>
        <ProjectsSection />
      </motion.div>
      <motion.div variants={childVariants}>
        <FooterSection />
      </motion.div>
    </motion.div>
  );
}
