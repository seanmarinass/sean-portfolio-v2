import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function IntroCard() {
  return (
    <Card className="flex flex-col gap-[0.5rem] w-[75%] border-none">
      <CardTitle className="text-5xl font-bold">Sean Marinas</CardTitle>
      <CardTitle className="text-lg font-bold">
        Fullstack Software Engineer
      </CardTitle>
      <CardDescription className="text-base">
        I build scalable Fullstack applications using the MERN stack with
        Typescript
      </CardDescription>
    </Card>
  );
}