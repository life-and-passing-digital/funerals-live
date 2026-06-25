"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

const packagesLinks = [
  { href: "/packages/live-streaming", label: "Live Streaming" },
  { href: "/packages/slideshow-tribute", label: "Slideshow Tribute" },
  { href: "/packages/memorial-video", label: "Memorial Video" },
];

const upcomingLinks = [
  { href: "/funerals/upcoming", label: "All Upcoming" },
  { href: "/funerals/upcoming?state=NSW", label: "New South Wales" },
  { href: "/funerals/upcoming?state=VIC", label: "Victoria" },
  { href: "/funerals/upcoming?state=QLD", label: "Queensland" },
];

const pastLinks = [
  { href: "/funerals/past", label: "All Past Funerals" },
  { href: "/funerals/past?year=2025", label: "2025" },
  { href: "/funerals/past?year=2024", label: "2024" },
];

function Dropdown({ label, items, active }: { label: string; items: { href: string; label: string }[]; active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        className="nav-link"
        style={{ color: active ? "#8B104E" : "#8B104E", background: "none", border: "none", cursor: "pointer", fontFamily: "'Poppins',sans-serif" }}
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown size={16} style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }} />
        {active && <span className="nav-link-underline" />}
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 rounded-2xl overflow-hidden z-50"
          style={{
            background: "white",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
            border: "1px solid #e5e7eb",
            minWidth: 200,
            animation: "fadeUp 0.15s ease",
          }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-3 text-sm font-medium transition-colors"
              style={{ color: "#463351", fontFamily: "'Poppins',sans-serif" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F7F6F3"; e.currentTarget.style.color = "#8B104E"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#463351"; }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "#F7F6F3",
        borderBottom: scrolled ? "1px solid #e5e0ea" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-[80px] py-[16px] flex items-center gap-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div
            className="w-[36px] h-[36px] rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, #8B104E, #B01460)" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4h12v8H4z" fill="white" opacity="0.3" rx="1"/>
              <circle cx="10" cy="8" r="3" fill="white" opacity="0.9"/>
              <path d="M10 11l-2 4h4l-2-4z" fill="white" opacity="0.7"/>
              <rect x="6" y="14" width="8" height="1.5" rx="0.75" fill="white" opacity="0.5"/>
            </svg>
          </div>
          <div>
            <span className="font-bold text-[18px] leading-none" style={{ color: "#1D4641", letterSpacing: "-0.5px" }}>
              Funerals<span style={{ color: "#8B104E" }}>Live</span>
            </span>
            <p className="text-[10px] leading-none mt-0.5" style={{ color: "#807388" }}>A Gaia Digital Company</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 flex-1">
          <Dropdown label="Packages" items={packagesLinks} active={pathname.startsWith("/packages")} />
          <Dropdown label="Upcoming funerals" items={upcomingLinks} active={pathname.startsWith("/funerals/upcoming")} />
          <Dropdown label="Past funerals" items={pastLinks} active={pathname.startsWith("/funerals/past")} />
          <Link href="/blog" className="nav-link" style={{ color: pathname === "/blog" ? "#6B0C3C" : "#8B104E" }}>
            Blog {pathname === "/blog" && <span className="nav-link-underline" />}
          </Link>
          <Link href="/about" className="nav-link" style={{ color: pathname === "/about" ? "#6B0C3C" : "#8B104E" }}>
            About {pathname === "/about" && <span className="nav-link-underline" />}
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <a href="tel:0411760614" className="btn-primary" style={{ fontSize: 16, padding: "9px 16px" }}>
            Call us now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto p-2 rounded-lg"
          style={{ color: "#8B104E" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ background: "#F7F6F3", borderColor: "#e5e0ea" }}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {[
              { href: "/packages/live-streaming", label: "Live Streaming" },
              { href: "/packages/slideshow-tribute", label: "Slideshow Tribute" },
              { href: "/packages/memorial-video", label: "Memorial Video" },
              { href: "/funerals/upcoming", label: "Upcoming Funerals" },
              { href: "/funerals/past", label: "Past Funerals" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/faq", label: "FAQ" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-base font-medium border-b"
                style={{ color: "#8B104E", borderColor: "#e5e0ea", fontFamily: "'Poppins',sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:0411760614" className="btn-primary mt-4 justify-center">
              <Phone size={16} /> Call us now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
