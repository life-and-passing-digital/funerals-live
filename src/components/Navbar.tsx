"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

function LogoMark() {
  const [imgFailed, setImgFailed] = useState(false);
  if (!imgFailed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/assets/images/logo.png"
        alt="Funerals Live"
        style={{ height: 48, width: "auto", objectFit: "contain" }}
        onError={() => setImgFailed(true)}
      />
    );
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg, #8B104E, #B01460)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2C6 2 3 6 3 10s3 8 7 8 7-4 7-8-3-8-7-8z" fill="white" opacity="0.2"/>
          <path d="M10 4C8 4 6 7 6 10s2 6 4 6 4-3 4-6-2-6-4-6z" fill="white" opacity="0.6"/>
          <path d="M10 6c-1 0-2 2-2 4s1 4 2 4 2-2 2-4-1-4-2-4z" fill="white"/>
        </svg>
      </div>
      <div>
        <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 18, color: "#1D4641", letterSpacing: "-0.5px", lineHeight: 1, margin: 0 }}>
          Funerals<span style={{ color: "#8B104E" }}>Live</span>
        </p>
        <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: 10, color: "#807388", lineHeight: 1, marginTop: 3 }}>A Gaia Digital Company</p>
      </div>
    </div>
  );
}

const packagesLinks = [
  { href: "/packages/live-streaming", label: "Live Streaming" },
  { href: "/packages/slideshow-tribute", label: "Slideshow Tribute" },
  { href: "/packages/memorial-video", label: "Memorial Video" },
  { href: "/packages", label: "All Packages" },
];

const upcomingLinks = [
  { href: "/funerals/upcoming", label: "All Upcoming Services" },
];

const pastLinks = [
  { href: "/funerals/past", label: "All Past Funerals" },
];

function Dropdown({ label, items, active }: { label: string; items: { href: string; label: string }[]; active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative flex flex-col gap-[2px] items-center pt-1">
      <button
        onClick={() => setOpen(!open)}
        className="flex gap-2 items-center py-2"
        style={{
          background: "none", border: "none", cursor: "pointer",
          fontFamily: "'Poppins', sans-serif", fontWeight: 500,
          fontSize: 16, color: "#8B104E", letterSpacing: "-0.288px",
          whiteSpace: "nowrap",
        }}
      >
        {label}
        <ChevronDown
          size={16}
          style={{ color: "#8B104E", transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>

      {/* Active underline */}
      {active && (
        <div style={{ height: 2, width: "100%", background: "#8B104E", borderRadius: 1 }} />
      )}

      {open && (
        <div
          className="absolute top-full left-0 mt-2 rounded-2xl overflow-hidden z-50"
          style={{
            background: "white",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
            border: "1px solid #e5e0ea",
            minWidth: 220,
          }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3"
              style={{
                fontFamily: "'Poppins', sans-serif", fontWeight: 500,
                fontSize: 15, color: "#463351", textDecoration: "none",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F7F6F3"; e.currentTarget.style.color = "#8B104E"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#463351"; }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <div className="relative flex flex-col gap-[2px] items-center pt-1">
      <Link
        href={href}
        className="py-2"
        style={{
          fontFamily: "'Poppins', sans-serif", fontWeight: 500,
          fontSize: 16, color: "#8B104E", letterSpacing: "-0.288px",
          textDecoration: "none", whiteSpace: "nowrap",
        }}
      >
        {label}
      </Link>
      {active && (
        <div style={{ height: 2, width: "100%", background: "#8B104E", borderRadius: 1 }} />
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
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center gap-12" style={{ paddingLeft: 80, paddingRight: 80, paddingTop: 16, paddingBottom: 16 }}>

        {/* Logo — replace /assets/images/logo.png with the actual logo file */}
        <Link href="/" className="flex-shrink-0 flex items-center" style={{ textDecoration: "none" }}>
          <LogoMark />
        </Link>

        {/* Desktop nav — centred */}
        <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end">
          <Dropdown
            label="Packages"
            items={packagesLinks}
            active={pathname.startsWith("/packages")}
          />
          <Dropdown
            label="Upcoming funerals"
            items={upcomingLinks}
            active={pathname.startsWith("/funerals/upcoming")}
          />
          <Dropdown
            label="Past funerals"
            items={pastLinks}
            active={pathname.startsWith("/funerals/past")}
          />
          <NavLink href="/blog" label="Blog" active={pathname === "/blog"} />
          <NavLink href="/about" label="About" active={pathname === "/about"} />
        </nav>

        {/* CTA */}
        <a
          href="tel:0411760614"
          className="hidden lg:flex items-center justify-center flex-shrink-0"
          style={{
            background: "#8B104E", color: "white",
            fontFamily: "'Poppins', sans-serif", fontWeight: 500,
            fontSize: 16, letterSpacing: "-0.288px",
            padding: "9px 16px", borderRadius: 8,
            textDecoration: "none", whiteSpace: "nowrap",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#6B0C3C")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#8B104E")}
        >
          Call us now
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto p-2 rounded-lg"
          style={{ color: "#8B104E", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t" style={{ background: "#F7F6F3", borderColor: "#e5e0ea" }}>
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
                className="py-3 border-b"
                style={{
                  fontFamily: "'Poppins', sans-serif", fontWeight: 500,
                  fontSize: 16, color: "#8B104E",
                  borderColor: "#e5e0ea", textDecoration: "none",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:0411760614"
              className="flex items-center justify-center gap-2 mt-4"
              style={{
                background: "#8B104E", color: "white",
                fontFamily: "'Poppins', sans-serif", fontWeight: 500,
                fontSize: 16, padding: "10px 16px", borderRadius: 8,
                textDecoration: "none",
              }}
            >
              <Phone size={16} /> Call us now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
