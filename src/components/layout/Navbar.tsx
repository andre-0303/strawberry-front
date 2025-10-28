"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-lg font-semibold text-pink-700">
          🍓 Strawberry
        </Link>
        <div className="flex gap-4">
          <Link href="/fruits" className="text-gray-700 hover:text-pink-700">
            Frutas
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-pink-700">
            Sobre
          </Link>
        </div>
      </div>
    </nav>
  );
}
