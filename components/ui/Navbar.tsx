"use client";

import { NAVBAR_LINKS } from "@/lib/constants/navbar.constants";
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

export default function Navbar() {
  const activeSection = useNavbarStore((state) => state.activeSection);
  const handleMenuItemClick = useNavbarStore((state) => state.setActiveSection);

  return (
    <nav className="h-full p-[1rem]">
      <NavigationMenu className="h-full" orientation="vertical">
        <NavigationMenuList className="h-full flex flex-col h-full gap-[1rem]">
          {NAVBAR_LINKS.map((link, index) => {
            const { path, label } = link;
            const isActive = activeSection === path;
            console.log(
              `Active: ${activeSection} Path: ${path} isActive: ${isActive}`
            );

            return (
              <NavigationMenuItem key={index}>
                <Link
                  href="/"
                  onClick={() => {
                    handleMenuItemClick(path);
                  }}
                >
                  <NavigationMenuLink
                    className={clsx(
                      navigationMenuTriggerStyle(),
                      "w-full font-semibold",
                      { "bg-accent": isActive }
                    )}
                  >
                    {label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
