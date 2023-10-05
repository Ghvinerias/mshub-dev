import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github } from "lucide-react";
// import { ModeToggle } from "@/components/mode-toggle";

export default function IndexPage() {
  return (
    <main className="flex min-h-screen items-center gap-6 justify-center">
      <Link href={siteConfig.links.x} target="_blank" rel="noreferrer">
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            }),
          )}
        >
          <span className="text-[1.2rem]">𝕏</span>
          <span className="sr-only">X(twitter)</span>
        </div>
      </Link>
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            }),
          )}
        >
          <Github className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      {/* <ModeToggle /> */}
    </main>
  );
}
