"use client";

import Link from "next/link";
import { CheckCircle, X, ChevronRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const packages = [
  {
    name: "Essential",
    price: "$395",
    tagline: "For simple, intimate services",
    features: [
      { label: "HD Live Stream (1080p)", included: true },
      { label: "1 Professional Camera", included: true },
      { label: "Up to 2 Hours", included: true },
      { label: "Private Password-Protected Link", included: true },
      { label: "30-Day Replay Access", included: true },
      { label: "Unlimited Viewers", included: true },
      { label: "2 Cameras", included: false },
      { label: "Recording Download", included: false },
      { label: "Professional Audio Mixing", included: false },
      { label: "Tribute Slideshow", included: false },
    ],
    popular: false,
    color: "#1a1a2e",
  },
  {
    name: "Premium",
    price: "$595",
    tagline: "Most popular — ideal for most services",
    features: [
      { label: "HD Live Stream (1080p)", included: true },
      { label: "2 Professional Cameras", included: true },
      { label: "Up to 3 Hours", included: true },
      { label: "Private Password-Protected Link", included: true },
      { label: "30-Day Replay Access", included: true },
      { label: "Unlimited Viewers", included: true },
      { label: "Recording Download", included: true },
      { label: "Professional Audio Mixing", included: true },
      { label: "Tribute Slideshow", included: false },
      { label: "4K Quality", included: false },
    ],
    popular: true,
    color: "#8B104E",
  },
  {
    name: "Signature",
    price: "$895",
    tagline: "Full production for larger services",
    features: [
      { label: "4K Live Stream", included: true },
      { label: "3 Cameras + Drone Footage", included: true },
      { label: "Up to 4 Hours", included: true },
      { label: "Private Password-Protected Link", included: true },
      { label: "Unlimited Replay Access", included: true },
      { label: "Unlimited Viewers", included: true },
      { label: "Recording Download", included: true },
      { label: "Professional Audio Mixing", included: true },
      { label: "Tribute Slideshow", included: true },
      { label: "Custom Branded Page", included: true },
    ],
    popular: false,
    color: "#1a1a2e",
  },
];

const addons = [
  { name: "Extended Coverage", price: "$95/hr", desc: "Additional hours beyond your package limit." },
  { name: "Second Location", price: "$195", desc: "Stream a wake or gathering at a second venue." },
  { name: "Tribute Slideshow", price: "$125", desc: "A professionally compiled photo & music slideshow played during the service." },
  { name: "Social Sharing Stream", price: "$75", desc: "Optional public or semi-public stream for broader audiences." },
  { name: "Rush Booking (< 24hrs)", price: "$150", desc: "Last-minute bookings under 24 hours from the service." },
  { name: "Interstate Travel", price: "POA", desc: "Coverage in remote locations or requiring overnight travel." },
];

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero-gradient py-32 px-6 relative overflow-hidden"
        style={{ paddingTop: 140 }}
      >
        <div className="orb" style={{ width: 500, height: 500, background: "#8B104E", top: "-150px", left: "-150px" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <p style={{ color: "#D4185A", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "2px", marginBottom: 16 }}>
              PRICING
            </p>
            <h1 className="text-white font-extrabold mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
              Transparent, respectful<br />
              <span className="gradient-text">pricing.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: 500, margin: "0 auto" }}>
              No hidden fees, no surprises. Choose the package that&apos;s right for your family.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="#fafafa" />
          </svg>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-6" style={{ background: "#fafafa" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 100}>
                <div
                  className={`pricing-card h-full flex flex-col ${p.popular ? "pricing-card-popular" : "pricing-card-standard"}`}
                >
                  {p.popular && (
                    <div
                      className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                    >
                      MOST POPULAR
                    </div>
                  )}
                  <div className="mb-6">
                    <p
                      className="font-bold text-xl mb-1"
                      style={{ color: p.popular ? "rgba(255,255,255,0.7)" : "#8B104E" }}
                    >
                      {p.name}
                    </p>
                    <p
                      className="font-extrabold leading-none mb-2"
                      style={{ fontSize: "3rem", color: p.popular ? "white" : "#1a1a2e" }}
                    >
                      {p.price}
                    </p>
                    <p className="text-sm" style={{ color: p.popular ? "rgba(255,255,255,0.6)" : "#9ca3af" }}>
                      {p.tagline}
                    </p>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {p.features.map((f) => (
                      <li key={f.label} className="flex items-center gap-3 text-sm">
                        {f.included ? (
                          <CheckCircle size={16} style={{ color: p.popular ? "rgba(255,255,255,0.9)" : "#8B104E", flexShrink: 0 }} />
                        ) : (
                          <X size={16} style={{ color: p.popular ? "rgba(255,255,255,0.3)" : "#d1d5db", flexShrink: 0 }} />
                        )}
                        <span
                          style={{
                            color: f.included
                              ? p.popular ? "rgba(255,255,255,0.9)" : "#374151"
                              : p.popular ? "rgba(255,255,255,0.35)" : "#9ca3af",
                          }}
                        >
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={p.popular ? "btn-ghost" : "btn-outline"}
                    style={{ justifyContent: "center" }}
                  >
                    Book {p.name} <ChevronRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="text-3xl font-bold mb-3" style={{ color: "#1a1a2e" }}>Optional Add-Ons</h2>
              <p className="text-gray-500">Customise any package with these extras.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((a, i) => (
              <AnimatedSection key={a.name} delay={i * 60}>
                <div
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#f8f4f6",
                    border: "1px solid rgba(139,16,78,0.1)",
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold" style={{ color: "#1a1a2e" }}>{a.name}</h3>
                    <span className="font-bold text-sm" style={{ color: "#8B104E" }}>{a.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #0d0d1a, #1a0510)" }}
      >
        <AnimatedSection>
          <h2 className="text-white text-3xl font-bold mb-4">Not sure which to choose?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)" }} className="mb-8 max-w-md mx-auto">
            Our team is happy to advise the right option for your service. There&apos;s no pressure and no obligation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:0411760614" className="btn-ghost">
              <Phone size={16} /> 0411 760 614
            </a>
            <Link href="/contact" className="btn-primary">
              Send an Enquiry <ChevronRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
