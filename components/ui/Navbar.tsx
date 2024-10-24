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
                    className={clsx(
                      "text-base transition-all duration-200 ease-in-out transform hover:bg-none",
                      isActive
                        ? "ml-[2rem] font-bold bg-accent"
                        : "scale-100 ml-0"
                    )}
                    onClick={() => handleMenuItemClick(path)}
                  >
                    {label}
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
