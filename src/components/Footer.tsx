"use client";

import Link from "next/link";
import { Tv, Phone, Mail, MapPin, Globe, Link2, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #1a0510 60%, #0d0d1a 100%)",
        color: "rgba(255,255,255,0.7)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Top CTA band */}
      <div
        style={{
          background: "linear-gradient(135deg, #8B104E, #B01460)",
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <h3 className="text-white text-2xl font-bold mb-3">
          Ready to stream a service?
        </h3>
        <p className="text-white/80 mb-6 text-sm max-w-md mx-auto">
          We respond within 2 hours. Available 7 days a week across all of Australia.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="btn-ghost">Get a Quote</Link>
          <a href="tel:0411760614" className="btn-primary" style={{ background: "white", color: "#8B104E" }}>
            <Phone size={16} />
            0411 760 614
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #8B104E, #B01460)" }}
            >
              <Tv size={18} color="white" />
            </div>
            <span className="text-white font-bold text-lg">
              Funerals<span style={{ color: "#D4185A" }}>Live</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Compassionate, professional funeral live streaming services across Australia.
            Australian-owned and operated.
          </p>
          <div className="flex gap-3">
            {[Globe, Link2, Play].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(139,16,78,0.3)", color: "white" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#8B104E")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(139,16,78,0.3)")}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/how-it-works", label: "How It Works" },
              { href: "/packages", label: "Packages & Pricing" },
              { href: "/live", label: "Watch Live" },
              { href: "/about", label: "About Us" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors duration-200 hover:text-white"
                  style={{ color: "inherit" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4185A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              "Funeral Live Streaming",
              "Service Recording & Video",
              "Private Password-Protected Streams",
              "Multi-Camera Production",
              "Replay Access (30 Days)",
              "Funeral Home Partnership",
              "Interstate & Remote Coverage",
            ].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#8B104E",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-5">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={16} style={{ color: "#8B104E", flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="text-white font-medium">0411 760 614</p>
                <p className="text-xs">Available 7 days</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} style={{ color: "#8B104E", flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="text-white font-medium">info@funeralslive.com.au</p>
                <p className="text-xs">We reply within 2 hours</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} style={{ color: "#8B104E", flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="text-white font-medium">Australia-Wide</p>
                <p className="text-xs">All states & territories</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "20px 24px",
          textAlign: "center",
          fontSize: "0.8rem",
        }}
      >
        <p>
          © {new Date().getFullYear()} Funerals Live. All rights reserved. Australian-owned and operated.
          {" · "}
          <Link href="#" style={{ color: "inherit" }} className="hover:text-white transition-colors">Privacy Policy</Link>
          {" · "}
          <Link href="#" style={{ color: "inherit" }} className="hover:text-white transition-colors">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}
