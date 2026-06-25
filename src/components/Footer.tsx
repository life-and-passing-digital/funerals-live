"use client";

import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";

const footerLinks = [
  { href: "/packages/live-streaming", label: "Live Streaming Packages" },
  { href: "/packages/slideshow-tribute", label: "Slideshow Tribute" },
  { href: "/packages/memorial-video", label: "Memorial Video" },
  { href: "/funerals/upcoming", label: "Upcoming Funerals" },
  { href: "/funerals/past", label: "Past Funerals" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer>
      {/* Newsletter */}
      <div className="footer-newsletter py-12 px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-6">
          <p
            className="text-white font-medium text-[18px] text-center sm:text-left"
            style={{ letterSpacing: "-0.324px", fontFamily: "'Poppins',sans-serif", whiteSpace: "nowrap" }}
          >
            Subscribe to our newsletter
          </p>
          {subscribed ? (
            <p className="text-white/70 text-sm">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex bg-white rounded-full overflow-hidden pr-2 pl-6 py-2 gap-2 items-center" style={{ minWidth: 320 }}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 text-[16px] outline-none bg-transparent"
                style={{ fontFamily: "'Poppins',sans-serif", color: "#180026", letterSpacing: "-0.288px" }}
                required
              />
              <button
                type="submit"
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105"
                style={{ background: "#8B104E" }}
              >
                <Send size={18} color="white" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Base */}
      <div className="footer-base py-[80px] px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10 items-center">
          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white text-[14px] transition-opacity hover:opacity-70"
                style={{ fontFamily: "'Poppins',sans-serif", letterSpacing: "-0.252px" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-4 items-center">
            {/* Instagram */}
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-70"
              style={{ border: "1.5px solid rgba(255,255,255,0.4)" }}
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-70"
              style={{ border: "1.5px solid rgba(255,255,255,0.4)" }}
              aria-label="Facebook"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-70"
              style={{ border: "1.5px solid rgba(255,255,255,0.4)" }}
              aria-label="YouTube"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#4D1C34"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p
            className="text-white text-center text-[12px]"
            style={{ fontFamily: "'Poppins',sans-serif", letterSpacing: "-0.216px" }}
          >
            © {new Date().getFullYear()} Gaia Digital Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
