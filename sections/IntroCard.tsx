"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import SocialMediaRow from "@/components/ui/SocialMediaRow";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5, // Duration of the fade-in effect
      ease: "easeInOut",
    },
  },
};

export default function IntroCard() {
  return (
    <motion.section
      className="flex flex-col gap-[0.5rem] w-full border-none"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <CardTitle className="text-5xl font-bold">Sean Marinas</CardTitle>
      <CardTitle className="text-lg font-bold">
        Fullstack Software Engineer
      </CardTitle>
      <CardDescription className="text-base flex-wrap hidden md:block">
        I build scalable Fullstack applications
      </CardDescription>
      <div className="mt-[0.5rem]" />
      <SocialMediaRow />
    </motion.section>
  );
}
