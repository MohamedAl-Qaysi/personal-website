"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Enquire",  href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backdropFilter: "blur(12px)", background: "rgba(10,14,49,0.85)", borderBottom: "1px solid rgba(69,76,122,0.3)" }}
    >
      <nav className="max-w-[1400px] mx-auto px-5 sm:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-satisfy)", color: "#1784F2" }}>
          Mohamed<span className="text-white">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors group"
                style={{ color: isActive(link.href) ? "#1784F2" : "#858EAD" }}
              >
                {link.label}
                {/* Underline slide */}
                <span
                  className="absolute bottom-0 left-4 right-4 h-px origin-left transition-transform duration-300 ease-out"
                  style={{
                    background: "linear-gradient(90deg,#1784F2,#103FA1)",
                    transform: isActive(link.href) ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ background: "linear-gradient(90deg,#1784F2,#103FA1)", boxShadow: "0 0 20px rgba(23,132,242,0.35)" }}
        >
          Hire Me
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "#858EAD" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-5 py-4 space-y-1"
          style={{ borderTop: "1px solid rgba(69,76,122,0.3)", background: "#0A0E31" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{ color: isActive(link.href) ? "#1784F2" : "#858EAD", background: isActive(link.href) ? "rgba(23,132,242,0.1)" : "transparent" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: "linear-gradient(90deg,#1784F2,#103FA1)" }}
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
}
