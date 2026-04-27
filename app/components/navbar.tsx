import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-700 bg-gray-900/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:gap-4 sm:px-6">
        <h1 className="rounded-full bg-red-100 px-4 py-3 text-xl font-bold text-red-500">
          JD
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-300 sm:gap-6 sm:text-base">
          <Link href="/" className="transition duration-200 hover:text-blue-400">
            Home
          </Link>

          <Link
            href="/proyecto"
            className="transition duration-200 hover:text-blue-400"
          >
            Buscador
          </Link>
        </div>
      </div>
    </nav>
  );
}
