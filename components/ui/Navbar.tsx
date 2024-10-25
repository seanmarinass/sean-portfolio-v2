"use client";

import { NAVBAR_LINKS } from "@/lib/data/navbar.data";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import { useNavbarStore } from "@/stores/navbar.store";
import clsx from "clsx";
import { Button } from "./button";
import { CardDescription } from "./card";

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
                  <Button
                    variant="ghost"
                    onClick={() => handleMenuItemClick(path)}
                    className={clsx(
                      `group-[${path}]: transition-all duration-200 ease-in-out transform hover:ml-[2rem] hover:bg-primary/0`,
                      isActive ? "ml-[2rem]" : "ml-0"
                    )}
                  >
                    <CardDescription
                      className={clsx(
                        `text-base transition-all duration-200 ease-in-out transform group-[${path}]-hover:ml-[2rem] group-[${path}]-hover:font-bold group-[${path}]-hover:text-primary group-[${path}]-hover:text-xl`,
                        isActive ? "font-bold text-primary text-xl" : "ml-0"
                      )}
                    >
                      {label}
                    </CardDescription>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
