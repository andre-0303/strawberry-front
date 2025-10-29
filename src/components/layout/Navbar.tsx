"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar() {

  const router = useRouter();
  
      function handleLogout() {
          document.cookie = 'token=; Max-Age=0; path=/'
          router.push('/login');  
      }


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
          <button
          onClick={handleLogout}
          className="text-sm w-40 cursor-pointer bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Sair
        </button>
        </div>
      </div>
    </nav>
  );
}
