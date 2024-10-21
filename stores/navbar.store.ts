"use client";

import { NavbarPath } from "@/lib/constants/navbar.constants";
import { create } from "zustand";

interface NavbarState {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  activeSection: NavbarPath.HOME,
  setActiveSection: (section: string) => set({ activeSection: section }),
}));
