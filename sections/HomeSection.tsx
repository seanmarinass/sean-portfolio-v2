import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { GITHUB_URL, LINKED_IN_URL } from "@/lib/social-media-links";

export default function HomeSection() {
  return (
    <section className="flex flex-col text-2xl h-full w-full p-[1rem] justify-center items-center align-middle gap-[0.5rem]">
      <h1 className="text-4xl font-bold">Hello, I'm Sean Marinas</h1>

      <h2 className="text-center">
        I'm a Fullstack Software Engineer based in Singapore and my current tech
        stack includes
      </h2>

      <div className="flex gap-[0.5rem]">
        <Badge variant="outline" className="text-base">
          MongoDb
        </Badge>
        <Badge variant="outline" className="text-base">
          Express.js
        </Badge>
        <Badge variant="outline" className="text-base">
          React.js
        </Badge>
        <Badge variant="outline" className="text-base">
          Node.js
        </Badge>
        <Badge variant="outline" className="text-base">
          Typescript
        </Badge>
      </div>

      <div className="mt-[1rem] flex gap-[0.5rem] justify-center items-center align-middle">
        <Button className="text-lg font-semibold">Download Resume</Button>
        <Link href={LINKED_IN_URL}>
          <Button>
            <LinkedInIcon fontSize="inherit" />
          </Button>
        </Link>

        <Link href={GITHUB_URL}>
          <Button>
            <GitHubIcon fontSize="inherit" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
