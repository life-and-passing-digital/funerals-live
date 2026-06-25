"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Tv } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/packages", label: "Packages" },
  { href: "/live", label: "Watch Live" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(13, 13, 26, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: "linear-gradient(135deg, #8B104E, #B01460)" }}
          >
            <Tv size={20} color="white" />
          </div>
          <div>
            <span className="text-white font-bold text-lg leading-none block">
              Funerals<span style={{ color: "#D4185A" }}>Live</span>
            </span>
            <span className="text-white/40 text-xs">Australia</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-sm"
              style={{
                color: pathname === l.href ? "#D4185A" : "rgba(255,255,255,0.8)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/live" className="live-indicator">
            <span className="live-dot" />
            LIVE NOW
          </Link>
          <Link href="/contact" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.875rem" }}>
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: open ? "600px" : "0",
          background: "rgba(13, 13, 26, 0.98)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 font-medium text-base py-2 border-b border-white/10"
              onClick={() => setOpen(false)}
              style={{ color: pathname === l.href ? "#D4185A" : undefined }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-2" onClick={() => setOpen(false)}>
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
