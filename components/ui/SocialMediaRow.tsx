import { GITHUB_URL, LINKED_IN_URL } from "@/lib/social-media-links";
import Link from "next/link";
import { Button } from "./button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SocialMediaRow() {
  return (
    <nav className="flex gap-[1rem]">
      <Link href={LINKED_IN_URL}>
        <Button>
          <LinkedInIcon />
        </Button>
      </Link>

      <Link href={GITHUB_URL}>
        <Button>
          <GitHubIcon />
        </Button>
      </Link>
    </nav>
  );
}
