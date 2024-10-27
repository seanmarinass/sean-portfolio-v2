import { CardDescription } from "@/components/ui/card";

export default function FooterSection() {
  return (
    <section className="flex flex-col w-full justify-center items-center align-middle">
      <CardDescription className="text-center">
        Built with React & Next.js, Typescript, Tailwind CSS ad Shadcn. Hosted
        on Vercel
      </CardDescription>
    </section>
  );
}
