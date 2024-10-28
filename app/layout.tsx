import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { Inter } from "next/font/google";
import IntroCard from "@/sections/IntroCard";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sean Marinas | Personl Portfolio v2",
  description: "Created by Sean Marinas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter} dark antialiased flex md:flex-row flex-col p-[1rem] lg:py-[6rem] lg:px-[10rem] justify-center w-full gap-[2rem]`}
      >
        <div className="hidden lg:flex flex-col w-[20rem] h-full relative">
          <div className="fixed flex flex-col gap-[4rem]">
            <IntroCard />
            <Navbar />

            <div className="flex-grow" />
          </div>
        </div>

        <div className="block lg:hidden">
          <IntroCard />
        </div>
        <div className="md:w-[50%] min-h-screen">{children}</div>
      </body>
    </html>
  );
}
