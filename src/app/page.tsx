"use client";

import Link from "next/link";
import { Play, Shield, Clock, Globe, Users, ChevronRight, Star, Heart, Video, CheckCircle, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { value: "10,000+", label: "Families Served" },
  { value: "99.9%", label: "Uptime Reliability" },
  { value: "24/7", label: "Support Available" },
  { value: "All States", label: "Australia-Wide" },
];

const features = [
  {
    icon: Video,
    title: "HD Live Streaming",
    desc: "Crystal-clear, high-definition video broadcast so every family member can experience the service as if they were there.",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    desc: "Password-protected streams ensure only invited guests can access the service. Your privacy is our highest priority.",
  },
  {
    icon: Clock,
    title: "30-Day Replay Access",
    desc: "Can't watch live? Access a full recording of the service for 30 days after the ceremony at no extra charge.",
  },
  {
    icon: Globe,
    title: "Australia-Wide",
    desc: "Our experienced technicians travel to locations across all Australian states and territories.",
  },
  {
    icon: Users,
    title: "Unlimited Viewers",
    desc: "No cap on viewer numbers. Hundreds of family and friends can join simultaneously from anywhere in the world.",
  },
  {
    icon: Heart,
    title: "Compassionate Service",
    desc: "Our team is specially trained to work sensitively and unobtrusively during ceremonies.",
  },
];

const steps = [
  { num: "01", title: "Book Online", desc: "Fill out our simple booking form or call us. We'll confirm within 2 hours." },
  { num: "02", title: "We Set Up", desc: "Our technician arrives early to set up professional cameras and equipment." },
  { num: "03", title: "We Stream", desc: "We broadcast live in HD. Loved ones watch from anywhere via secure link." },
  { num: "04", title: "You Keep It", desc: "Receive a full recording downloadable for 30 days after the service." },
];

const testimonials = [
  {
    quote: "Funerals Live made it possible for our family in the UK to attend Mum's funeral. We are so grateful for such a caring, professional service.",
    author: "Sarah M.",
    location: "Sydney, NSW",
    stars: 5,
  },
  {
    quote: "The quality was outstanding and the team was so respectful. It meant everything to us that our interstate relatives could be there.",
    author: "James T.",
    location: "Melbourne, VIC",
    stars: 5,
  },
  {
    quote: "Simple to use, high quality, and the team was incredibly compassionate. I would recommend Funerals Live to anyone.",
    author: "Linda K.",
    location: "Brisbane, QLD",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero-gradient min-h-screen flex items-center relative overflow-hidden"
        style={{ paddingTop: 100 }}
      >
        {/* Decorative orbs */}
        <div className="orb" style={{ width: 600, height: 600, background: "#8B104E", top: "-200px", right: "-200px" }} />
        <div className="orb" style={{ width: 400, height: 400, background: "#4a0a2e", bottom: "-100px", left: "-100px" }} />

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left */}
          <div>
            <div className="live-indicator mb-6 inline-flex">
              <span className="live-dot" />
              STREAMING NOW ACROSS AUSTRALIA
            </div>
            <h1
              className="font-extrabold leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "white" }}
            >
              Honour Every
              <br />
              <span className="gradient-text">Life, Together.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Compassionate, professional funeral live streaming so every family member
              can say goodbye — no matter where they are in the world.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/packages" className="btn-primary">
                View Packages <ChevronRight size={16} />
              </Link>
              <Link href="/live" className="btn-ghost">
                <Play size={16} fill="white" />
                Watch Live
              </Link>
            </div>
            {/* Micro-stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-white font-bold text-xl">{s.value}</p>
                  <p className="text-white/50 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mock stream card */}
          <div className="flex justify-center lg:justify-end">
            <div className="animate-float">
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  width: "min(460px, 90vw)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
                }}
              >
                {/* Screen */}
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    height: 260,
                    background: "linear-gradient(135deg, #1a0510, #2d0a1a)",
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{
                      background: "rgba(139,16,78,0.8)",
                      border: "3px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <Play size={32} fill="white" color="white" style={{ marginLeft: 4 }} />
                  </div>
                  {/* Top bar */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="live-indicator" style={{ fontSize: "0.7rem" }}>
                      <span className="live-dot" />
                      LIVE
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>
                      247 watching
                    </span>
                  </div>
                  {/* Waveform */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end gap-1 justify-center opacity-40">
                    {[30, 50, 40, 70, 55, 80, 45, 60, 35, 65, 50, 75, 40, 55, 30].map((h, i) => (
                      <div
                        key={i}
                        className="wave-bar"
                        style={{
                          height: h,
                          animationDelay: `${i * 0.08}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Info strip */}
                <div className="p-6">
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", marginBottom: 4 }}>
                    LIVE SERVICE
                  </p>
                  <p style={{ color: "white", fontWeight: 600, marginBottom: 2 }}>
                    Celebration of Life — John Williams
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
                    St Mary's Chapel, Sydney · Today 2:00 PM
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "#8B104E" }}
                    >
                      FL
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>
                      Funerals Live — Secure Stream
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="#fafafa" />
          </svg>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6" style={{ background: "#fafafa" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-divider" />
              <h2 className="text-4xl font-bold mb-4" style={{ color: "#1a1a2e" }}>
                Everything you need,{" "}
                <span className="gradient-text">nothing you don&apos;t.</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                We handle the technology so families can focus entirely on what matters — celebrating a beautiful life.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 80}>
                <div className="feature-card h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "linear-gradient(135deg, rgba(139,16,78,0.12), rgba(176,20,96,0.08))" }}
                  >
                    <f.icon size={22} style={{ color: "#8B104E" }} />
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: "#1a1a2e" }}>
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="py-24 px-6"
        style={{
          background: "linear-gradient(135deg, #0d0d1a 0%, #1a0510 50%, #0d0d1a 100%)",
          color: "white",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-divider" />
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p style={{ color: "rgba(255,255,255,0.6)" }} className="max-w-lg mx-auto">
                From booking to broadcast, we take care of every detail with compassion and professionalism.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 100} direction="up">
                <div className="relative">
                  <div
                    className="text-6xl font-black mb-4"
                    style={{ color: "rgba(139,16,78,0.3)", lineHeight: 1 }}
                  >
                    {s.num}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontSize: "0.9rem" }}>
                    {s.desc}
                  </p>
                  {i < steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-10 right-0 w-1/2 h-px"
                      style={{
                        background: "linear-gradient(90deg, rgba(139,16,78,0.5), transparent)",
                        transform: "translateX(50%)",
                      }}
                    />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="text-center mt-14">
              <Link href="/how-it-works" className="btn-primary">
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-divider" />
              <h2 className="text-4xl font-bold mb-4" style={{ color: "#1a1a2e" }}>
                Families Trust Us
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Thousands of Australian families have relied on us during their most difficult moments.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="testimonial-card h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={16} fill="#8B104E" style={{ color: "#8B104E" }} />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm italic flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                      style={{ background: "linear-gradient(135deg, #8B104E, #B01460)" }}
                    >
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#1a1a2e" }}>{t.author}</p>
                      <p className="text-gray-400 text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="py-24 px-6" style={{ background: "#f8f4f6" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-divider" />
              <h2 className="text-4xl font-bold mb-4" style={{ color: "#1a1a2e" }}>
                Simple, Transparent Pricing
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                No hidden fees. Choose the package that&apos;s right for your family.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Essential",
                price: "$395",
                desc: "Perfect for simple, intimate services",
                features: ["HD Live Stream", "1 Camera", "30-Day Replay", "Secure Private Link", "Up to 2hrs"],
                popular: false,
              },
              {
                name: "Premium",
                price: "$595",
                desc: "Most popular — ideal for most services",
                features: ["HD Live Stream", "2 Cameras", "30-Day Replay + Download", "Secure Private Link", "Up to 3hrs", "Professional Audio"],
                popular: true,
              },
              {
                name: "Signature",
                price: "$895",
                desc: "Full production for larger services",
                features: ["4K Live Stream", "3 Cameras + Drone", "Unlimited Replay", "Custom Branded Page", "Up to 4hrs", "Tribute Slideshow"],
                popular: false,
              },
            ].map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 100}>
                <div className={p.popular ? "pricing-card pricing-card-popular" : "pricing-card pricing-card-standard"}>
                  {p.popular && (
                    <div
                      className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                    >
                      MOST POPULAR
                    </div>
                  )}
                  <p
                    className="font-bold text-xl mb-1"
                    style={{ color: p.popular ? "rgba(255,255,255,0.7)" : "#8B104E" }}
                  >
                    {p.name}
                  </p>
                  <p
                    className="font-extrabold mb-2"
                    style={{ fontSize: "2.5rem", color: p.popular ? "white" : "#1a1a2e" }}
                  >
                    {p.price}
                  </p>
                  <p
                    className="text-sm mb-6"
                    style={{ color: p.popular ? "rgba(255,255,255,0.65)" : "#9ca3af" }}
                  >
                    {p.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <CheckCircle
                          size={16}
                          style={{ color: p.popular ? "rgba(255,255,255,0.8)" : "#8B104E", flexShrink: 0 }}
                        />
                        <span style={{ color: p.popular ? "rgba(255,255,255,0.85)" : "#4b5563" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={p.popular ? "btn-ghost" : "btn-outline"}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Book This Package
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <p className="text-center text-gray-400 text-sm mt-8">
              Need something custom?{" "}
              <Link href="/contact" style={{ color: "#8B104E", fontWeight: 600 }}>
                Contact us for a tailored quote.
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #8B104E, #B01460)" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-white text-3xl font-bold mb-4">
              We&apos;re available when you need us most.
            </h2>
            <p className="text-white/75 mb-8 max-w-lg mx-auto">
              Our team is available 7 days a week. We understand time is critical and we&apos;ll
              respond to every enquiry within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0411760614" className="btn-ghost">
                <Phone size={16} />
                0411 760 614
              </a>
              <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#8B104E" }}>
                Get a Free Quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
