"use client";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#showcase" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-end items-center px-10 py-6">

        {/* NAV LINKS */}
        <nav className="flex gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/70 hover:text-purple-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}