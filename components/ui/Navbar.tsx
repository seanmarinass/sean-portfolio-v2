"use client";

import { NAVBAR_LINKS } from "@/lib/data/navbar.data";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import Link from "next/link";
import { useNavbarStore } from "@/stores/navbar.store";
import clsx from "clsx";
import { Button } from "./button";
import { motion } from "framer-motion";

export default function Navbar() {
  const activeSection = useNavbarStore((state) => state.activeSection);
  const handleMenuItemClick = useNavbarStore((state) => state.setActiveSection);

  return (
    <nav>
      <NavigationMenu orientation="vertical">
        <NavigationMenuList className="flex flex-col gap-[0.5rem]">
          {NAVBAR_LINKS.map((link, index) => {
            const { path, label } = link;
            const isActive = activeSection === path;

            return (
              <NavigationMenuItem key={index} className="w-full">
                <NavigationMenuLink>
                  <motion.button
                    className={clsx("text-base", {
                      "text-lg p-[0.5rem] font-bold": isActive,
                    })}
                    onClick={() => {
                      handleMenuItemClick(path);
                    }}
                    whileHover={{
                      padding: "0.5rem",
                      fontWeight: "bold",
                      fontSize: "1.125rem",
                      transition: { duration: 0.2 },
                    }}
                    initial={{ padding: "0rem", fontSize: "1rem" }}
                  >
                    {label}
                  </motion.button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
