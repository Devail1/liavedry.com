export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <button className="btn btn-primary">Hello daisy</button>
      <a href="/api/hello" className="link">
        Testing Backend
      </a>
    </div>
  );
}
