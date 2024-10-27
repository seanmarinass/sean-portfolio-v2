import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import SocialMediaRow from "@/components/ui/SocialMediaRow";

export default function IntroCard() {
  return (
    <section className="flex flex-col gap-[0.5rem] w-[75%] border-none">
      <CardTitle className="text-5xl font-bold">Sean Marinas</CardTitle>
      <CardTitle className="text-lg font-bold">
        Fullstack Software Engineer
      </CardTitle>
      <CardDescription className="text-base flex-wrap hidden md:block">
        I build scalable Fullstack applications
      </CardDescription>
      <div className="mt-[0.5rem]" />
      <SocialMediaRow />
    </section>
  );
}
