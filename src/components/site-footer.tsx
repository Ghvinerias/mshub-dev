import { ModeToggle } from "@/components/mode-toggle";

export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-40 w-full bg-background">
      <div className="container flex h-16 items-center justify-end">
        <ModeToggle />
      </div>
    </footer>
  );
}
