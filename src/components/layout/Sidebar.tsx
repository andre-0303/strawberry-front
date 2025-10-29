"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BarChart, FileText, Image, Settings } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: BarChart },
    { href: "/dashboard/production", label: "Produção", icon: Image },
    { href: "/dashboard/reports", label: "Relatórios", icon: FileText },
    { href: "/dashboard/settings", label: "Configurações", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-pink-700">🍓 Strawberry</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 p-2 rounded-md text-gray-700 hover:bg-pink-100 transition-colors",
              pathname === href && "bg-pink-200 text-pink-800 font-medium"
            )}
          >
            <Icon className="w-5 h-5" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
