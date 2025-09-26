import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white text-center">
      <h1 className="text-5xl font-extrabold mb-4 animate-bounce">
        Flowboard
      </h1>
      <p className="mb-6 text-lg">
        Organize your tasks in style. Let’s get productive!
      </p>
      <Link
        href="/boards"
        className="px-6 py-3 bg-white text-blue-600 rounded-xl shadow-lg hover:scale-105 transition-transform"
      >
        Go to Boards
      </Link>
    </main>
  );
}
