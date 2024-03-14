import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <button type="button" className="btn btn-primary">
        Hello daisy
      </button>
      <Link href="/api/hello" className="link">
        Testing Backend
      </Link>
    </div>
  );
}
