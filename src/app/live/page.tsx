"use client";

import { useState } from "react";
import { Play, Lock, Search, Clock, Users, ChevronRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const upcomingServices = [
  {
    id: "SVC-001",
    name: "Celebration of Life — Margaret Davies",
    venue: "St Andrew's Cathedral, Sydney NSW",
    date: "Today",
    time: "2:00 PM AEST",
    status: "live",
    viewers: 84,
  },
  {
    id: "SVC-002",
    name: "Remembrance Service — Robert Chen",
    venue: "Garden Chapel, Melbourne VIC",
    date: "Today",
    time: "4:30 PM AEST",
    status: "upcoming",
    viewers: 0,
  },
  {
    id: "SVC-003",
    name: "Funeral Mass — Patricia O'Brien",
    venue: "St Patrick's Church, Brisbane QLD",
    date: "Tomorrow",
    time: "10:00 AM AEST",
    status: "upcoming",
    viewers: 0,
  },
  {
    id: "SVC-004",
    name: "Memorial Service — Alan Thompson",
    venue: "Fremantle Cemetery, Perth WA",
    date: "Tomorrow",
    time: "1:00 PM AWST",
    status: "upcoming",
    viewers: 0,
  },
];

export default function LivePage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) {
      setError("Please enter your access code.");
      return;
    }
    setError("The access code you entered is invalid or has expired. Please check the link and code sent to you.");
  };

  return (
    <>
      {/* Hero */}
      <section
        className="hero-gradient py-32 px-6 relative overflow-hidden"
        style={{ paddingTop: 140 }}
      >
        <div className="orb" style={{ width: 400, height: 400, background: "#8B104E", bottom: 0, right: "-100px" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="live-indicator mb-6 justify-center" style={{ display: "inline-flex" }}>
              <span className="live-dot" />
              STREAMING NOW
            </div>
            <h1 className="text-white font-extrabold mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
              Watch a Live<br /><span className="gradient-text">Funeral Service</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: 480, margin: "0 auto" }}>
              Enter the private access code sent to you to join a live or recorded service.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="#fafafa" />
          </svg>
        </div>
      </section>

      {/* Access form + current services */}
      <section className="py-24 px-6" style={{ background: "#fafafa" }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* Access form */}
          <AnimatedSection direction="left">
            <div
              className="rounded-3xl p-8"
              style={{
                background: "white",
                boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
                border: "1px solid rgba(139,16,78,0.1)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "linear-gradient(135deg, #8B104E, #B01460)" }}
              >
                <Lock size={24} color="white" />
              </div>
              <h2 className="font-bold text-2xl mb-2" style={{ color: "#1a1a2e" }}>
                Access a Service
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Your access code and link were sent to you by the funeral home or family.
              </p>

              <form onSubmit={handleAccess} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
                    Service ID or Email
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SVC-001 or your email"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: "#f8f4f6",
                      border: "1px solid rgba(139,16,78,0.15)",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#1a1a2e",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#8B104E")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(139,16,78,0.15)")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
                    Access Code
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your private access code"
                    value={code}
                    onChange={(e) => { setCode(e.target.value); setError(""); }}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: "#f8f4f6",
                      border: "1px solid rgba(139,16,78,0.15)",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#1a1a2e",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#8B104E")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(139,16,78,0.15)")}
                  />
                </div>
                {error && (
                  <p className="text-red-600 text-xs bg-red-50 rounded-lg px-4 py-3 border border-red-100">
                    {error}
                  </p>
                )}
                <button type="submit" className="btn-primary w-full justify-center">
                  <Play size={16} fill="white" />
                  Access Stream
                </button>
              </form>

              <p className="text-xs text-gray-400 mt-4 text-center">
                Don&apos;t have a code?{" "}
                <Link href="/contact" style={{ color: "#8B104E" }}>
                  Contact the family or funeral home.
                </Link>
              </p>
            </div>
          </AnimatedSection>

          {/* Upcoming services */}
          <AnimatedSection direction="right">
            <h2 className="font-bold text-2xl mb-6" style={{ color: "#1a1a2e" }}>
              Current & Upcoming Services
            </h2>
            <div className="space-y-4">
              {upcomingServices.map((s) => (
                <div
                  key={s.id}
                  className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "white",
                    border: s.status === "live"
                      ? "1.5px solid #8B104E"
                      : "1px solid rgba(139,16,78,0.1)",
                    boxShadow: s.status === "live"
                      ? "0 4px 30px rgba(139,16,78,0.15)"
                      : "0 2px 15px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {s.status === "live" && (
                          <span
                            className="live-indicator"
                            style={{
                              background: "rgba(139,16,78,0.1)",
                              color: "#8B104E",
                              fontSize: "0.65rem",
                              padding: "3px 8px",
                            }}
                          >
                            <span className="live-dot" style={{ background: "#8B104E" }} />
                            LIVE
                          </span>
                        )}
                        {s.status === "upcoming" && (
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full"
                            style={{ background: "rgba(107,114,128,0.1)", color: "#6b7280" }}
                          >
                            UPCOMING
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm leading-snug truncate" style={{ color: "#1a1a2e" }}>
                        {s.name}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1 truncate">{s.venue}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-xs font-medium" style={{ color: "#1a1a2e" }}>{s.date}</p>
                      <p className="text-gray-400 text-xs flex items-center gap-1 justify-end mt-0.5">
                        <Clock size={11} /> {s.time}
                      </p>
                      {s.viewers > 0 && (
                        <p className="text-xs flex items-center gap-1 justify-end mt-1" style={{ color: "#8B104E" }}>
                          <Users size={11} /> {s.viewers} watching
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 rounded-2xl p-5 flex items-center gap-4"
              style={{ background: "rgba(139,16,78,0.06)", border: "1px solid rgba(139,16,78,0.12)" }}
            >
              <Search size={20} style={{ color: "#8B104E", flexShrink: 0 }} />
              <div>
                <p className="font-semibold text-sm" style={{ color: "#1a1a2e" }}>Looking for a specific service?</p>
                <p className="text-gray-500 text-xs">All streams are private. Contact the family or funeral home for your access link.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Info strip */}
      <section
        className="py-16 px-6"
        style={{ background: "linear-gradient(135deg, #0d0d1a, #1a0510)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", marginBottom: 12 }}>
              NOT A VIEWER? STREAMING A SERVICE?
            </p>
            <h2 className="text-white text-2xl font-bold mb-4">
              Book our team for your upcoming service.
            </h2>
            <Link href="/packages" className="btn-primary">
              See Packages <ChevronRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
