"use client";

import Link from "next/link";
import { Check, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  "HD Live Stream (1080p)", "Professional camera & audio setup", "Private password-protected link",
  "Unlimited concurrent viewers", "30-day replay access", "Recording available for download",
  "Arrives 30–60 min before service", "Discreet, compassionate crew", "4G/5G backup for venues without WiFi",
];

const packages = [
  {
    name: "Essential", price: "$395",
    items: ["HD Stream", "1 Camera", "Up to 2 hrs", "Private Link", "30-Day Replay"],
  },
  {
    name: "Premium", price: "$595", popular: true,
    items: ["HD Stream", "2 Cameras", "Up to 3 hrs", "Private Link", "30-Day Replay + Download", "Professional Audio"],
  },
  {
    name: "Signature", price: "$895",
    items: ["4K Stream", "3 Cameras", "Up to 4 hrs", "Private Link", "Unlimited Replay", "Download", "Tribute Slideshow"],
  },
];

export default function LiveStreamingPage() {
  return (
    <div style={{ background: "#F7F6F3", paddingTop: 80 }}>
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px]">
        <AnimatedSection className="max-w-[720px]">
          <p className="text-14 font-semibold mb-4" style={{ color: "#8B104E", letterSpacing: "2px", textTransform: "uppercase" }}>
            Live Streaming
          </p>
          <h1 className="display-56 mb-6" style={{ color: "#1D4641" }}>
            Funeral Live Streaming Services
          </h1>
          <p className="text-18 mb-8" style={{ color: "#463351" }}>
            Let every family member say goodbye — wherever they are in the world. We provide compassionate, professional-grade live streaming so no one misses the moment.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="btn-primary">Book now</Link>
            <a href="tel:0411760614" className="btn-outline">
              <Phone size={16} /> 0411 760 614
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* What's included */}
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px] flex gap-16 items-start">
        <AnimatedSection direction="left" className="flex-1">
          <h2 className="display-48 mb-8" style={{ color: "#1D4641" }}>What&apos;s included</h2>
          <div className="flex flex-col gap-4">
            {features.map(f => (
              <div key={f} className="flex gap-3 items-center">
                <Check size={18} style={{ color: "#8B104E", flexShrink: 0, strokeWidth: 2.5 }} />
                <span className="text-18" style={{ color: "#463351" }}>{f}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" className="flex-shrink-0" style={{ width: 480 }}>
          <div
            className="card-rounded p-10 flex flex-col gap-6"
            style={{ background: "#1D4641" }}
          >
            <p className="font-semibold text-white" style={{ fontSize: 14, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              How it works
            </p>
            {[
              { n: "01", t: "Book", d: "Contact us. We confirm within 2 hours, 7 days a week." },
              { n: "02", t: "We set up", d: "Arrive 30–60 min before. Professional, discreet setup." },
              { n: "03", t: "Stream live", d: "HD broadcast via a private, password-protected link." },
              { n: "04", t: "Recording delivered", d: "Full recording available within 24 hours." },
            ].map((s, i) => (
              <div key={s.n} className="flex gap-4 items-start">
                <span className="font-black text-3xl leading-none flex-shrink-0" style={{ color: "rgba(255,255,255,0.2)" }}>{s.n}</span>
                <div>
                  <p className="font-semibold text-white" style={{ fontSize: 16 }}>{s.t}</p>
                  <p className="text-14" style={{ color: "rgba(255,255,255,0.6)" }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Packages */}
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px]">
        <AnimatedSection>
          <h2 className="display-48 text-center mb-12" style={{ color: "#1D4641" }}>Pricing</h2>
        </AnimatedSection>
        <div className="flex gap-6 justify-center flex-wrap">
          {packages.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 80} style={{ width: 360 }}>
              <div
                className="card-rounded-xl p-10 flex flex-col gap-6 h-full"
                style={{
                  background: p.popular ? "#8B104E" : "white",
                  border: p.popular ? "none" : "1px solid #C0BAC4",
                  boxShadow: p.popular ? "0 20px 60px rgba(139,16,78,0.3)" : "0 2px 20px rgba(0,0,0,0.05)",
                }}
              >
                {p.popular && (
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>
                    Most popular
                  </span>
                )}
                <div>
                  <p className="font-medium text-lg mb-1" style={{ color: p.popular ? "rgba(255,255,255,0.7)" : "#8B104E" }}>{p.name}</p>
                  <p className="font-extrabold" style={{ fontSize: 48, color: p.popular ? "white" : "#1D4641", lineHeight: 1 }}>{p.price}</p>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  {p.items.map(item => (
                    <div key={item} className="flex gap-3 items-center">
                      <Check size={16} style={{ color: p.popular ? "rgba(255,255,255,0.8)" : "#8B104E", flexShrink: 0 }} />
                      <span className="text-16" style={{ color: p.popular ? "rgba(255,255,255,0.85)" : "#463351" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={p.popular ? "btn-ghost-white" : "btn-outline"}
                  style={{ justifyContent: "center" }}
                >
                  Book this package
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={300}>
          <p className="text-center text-16 mt-8" style={{ color: "#807388" }}>
            Need something custom?{" "}
            <Link href="/contact" style={{ color: "#8B104E", fontWeight: 600 }}>Contact us for a tailored quote.</Link>
          </p>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-[80px] px-[80px]" style={{ background: "#4D1C34" }}>
        <div className="max-w-[800px] mx-auto text-center flex flex-col gap-6">
          <AnimatedSection>
            <h2 className="display-48" style={{ color: "white" }}>Ready to book?</h2>
            <p className="text-18 mt-4" style={{ color: "rgba(255,255,255,0.7)" }}>
              We respond to all enquiries within 2 hours. Available 7 days a week.
            </p>
            <div className="flex gap-4 justify-center mt-8 flex-wrap">
              <a href="tel:0411760614" className="btn-ghost-white"><Phone size={16} /> 0411 760 614</a>
              <Link href="/contact" className="btn-primary">Send an enquiry</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
