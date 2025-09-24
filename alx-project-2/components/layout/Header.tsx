import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex space-x-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}
