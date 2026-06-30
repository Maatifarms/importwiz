"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b1f3a]/95 shadow-lg backdrop-blur" : "bg-[#0b1f3a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1FA971] rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">IW</span>
            </div>
            <span className="text-xl font-black text-white">
              Import<span className="text-[#1FA971]">Wiz</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-gray-300 hover:text-[#1FA971] text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-[#1FA971] hover:bg-[#17a063] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Request Quote
          </a>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-white mb-1" />
            <span className="block w-5 h-0.5 bg-white mb-1" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0b1f3a] border-t border-white/10 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-gray-300 font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-[#1FA971] text-white text-center font-semibold py-2 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Request Quote
          </a>
        </div>
      )}
    </nav>
  );
}
