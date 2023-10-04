import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center gap-6 justify-center">
      <Link
        className="border hover:bg-white/10 px-4 py-2 border-white rounded-md"
        href="https://github.com/mshubitidze"
        target="_blank"
      >
        github
      </Link>
      <Link
        className="border px-4 py-2 hover:bg-white/10 border-white rounded-md"
        href="https://x.com/_mshub"
        target="_blank"
      >
        X
      </Link>
    </main>
  );
}
