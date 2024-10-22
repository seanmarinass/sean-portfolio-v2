"use client";

import { NavbarPath } from "@/lib/data/navbar.data";
import { create } from "zustand";

interface NavbarState {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  activeSection: NavbarPath.ABOUT,
  setActiveSection: (section: string) => set({ activeSection: section }),
}));
