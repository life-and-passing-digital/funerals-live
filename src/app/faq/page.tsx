"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const categories = [
  {
    cat: "Booking & Availability",
    items: [
      {
        q: "How far in advance do I need to book?",
        a: "We recommend booking as early as possible, however we understand that funeral timelines can be very short. We regularly accept bookings within 24–48 hours of the service, and in some cases on the same day. Call us on 0411 760 614 for urgent enquiries.",
      },
      {
        q: "Are you available on weekends and public holidays?",
        a: "Yes. We operate 7 days a week, 365 days a year including public holidays. There is no surcharge for weekend or public holiday services.",
      },
      {
        q: "Do you cover regional and remote areas?",
        a: "Yes. Our technicians travel across all Australian states and territories including regional and rural areas. Additional travel fees may apply for very remote locations — contact us for a quote.",
      },
      {
        q: "What if I need to cancel or reschedule?",
        a: "We understand circumstances can change. Cancellations made more than 48 hours before the service receive a full refund. Cancellations within 48 hours may incur a fee. Reschedules are always accommodated where possible at no extra charge.",
      },
    ],
  },
  {
    cat: "The Stream",
    items: [
      {
        q: "How do viewers access the stream?",
        a: "We provide you with a private link and an access code. You share these with whoever you'd like to invite. Viewers simply click the link, enter the access code, and can watch live — no app downloads or accounts required.",
      },
      {
        q: "Can the stream be password protected?",
        a: "Yes. Every stream is private and password-protected by default. Only people you share the link and password with can view the service.",
      },
      {
        q: "How many people can watch at the same time?",
        a: "There is no limit on the number of concurrent viewers. Whether 10 or 10,000 people join, the quality remains the same.",
      },
      {
        q: "What devices can viewers watch on?",
        a: "The stream works on any device with a modern web browser — smartphone, tablet, laptop, desktop, and smart TVs. No app or special software is needed.",
      },
      {
        q: "What happens if the internet drops during the stream?",
        a: "Our technicians carry mobile 4G/5G backup equipment to ensure continuity. In the rare case of a brief interruption, the stream automatically resumes. Viewers miss very little and can watch the full recording afterwards.",
      },
    ],
  },
  {
    cat: "Recording & Replay",
    items: [
      {
        q: "Will there be a recording of the service?",
        a: "Yes. A full recording of the service is available for all packages. Depending on your package, you can replay for 30 days or download a copy for permanent keeping.",
      },
      {
        q: "When will the recording be available?",
        a: "The recording is typically available within 24 hours of the service. For Premium and Signature packages, the recording link is sent to you by the evening of the same day.",
      },
      {
        q: "Can I download the recording?",
        a: "Download is included in our Premium and Signature packages. You will receive a high-quality MP4 file that you can keep forever.",
      },
    ],
  },
  {
    cat: "Funeral Homes",
    items: [
      {
        q: "Can you partner with our funeral home?",
        a: "Absolutely. We work closely with funeral homes across Australia to offer live streaming as part of their service offering. We handle all the technology so your team can focus entirely on supporting families. Contact us to discuss a partnership.",
      },
      {
        q: "What is required from the funeral home?",
        a: "Very little. We bring all our own equipment. We just need access to the venue 30–60 minutes before the service begins. We work discreetly and professionally throughout.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="w-full text-left"
      onClick={() => setOpen(!open)}
      style={{
        background: open ? "#fdf8fb" : "white",
        border: open ? "1.5px solid rgba(139,16,78,0.25)" : "1px solid rgba(139,16,78,0.08)",
        borderRadius: 16,
        padding: "20px 24px",
        transition: "all 0.2s ease",
        cursor: "pointer",
        display: "block",
        width: "100%",
        marginBottom: 8,
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-semibold text-sm text-left" style={{ color: "#1a1a2e" }}>{q}</span>
        <ChevronDown
          size={18}
          style={{
            color: "#8B104E",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
          }}
        />
      </div>
      {open && (
        <p className="text-gray-500 text-sm leading-relaxed mt-3 text-left">{a}</p>
      )}
    </button>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero-gradient py-32 px-6 relative overflow-hidden"
        style={{ paddingTop: 140 }}
      >
        <div className="orb" style={{ width: 500, height: 500, background: "#8B104E", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <p style={{ color: "#D4185A", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "2px", marginBottom: 16 }}>
              HELP & SUPPORT
            </p>
            <h1 className="text-white font-extrabold mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
              Frequently Asked<br /><span className="gradient-text">Questions</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto" }}>
              Everything you need to know about our funeral live streaming service.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="#fafafa" />
          </svg>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="py-24 px-6" style={{ background: "#fafafa" }}>
        <div className="max-w-3xl mx-auto">
          {categories.map((cat, ci) => (
            <AnimatedSection key={cat.cat} delay={ci * 60}>
              <div className="mb-12">
                <h2 className="font-bold text-xl mb-5" style={{ color: "#1a1a2e" }}>
                  <span
                    className="inline-block w-2 h-6 rounded mr-3 align-middle"
                    style={{ background: "#8B104E" }}
                  />
                  {cat.cat}
                </h2>
                {cat.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection>
            <div
              className="rounded-3xl p-8 text-center"
              style={{
                background: "linear-gradient(135deg, #0d0d1a, #1a0510)",
                marginTop: 24,
              }}
            >
              <h3 className="text-white font-bold text-xl mb-3">Still have a question?</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: 24, fontSize: "0.9rem" }}>
                Our friendly team is available 7 days a week and always happy to help.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="tel:0411760614" className="btn-ghost">
                  <Phone size={16} /> 0411 760 614
                </a>
                <Link href="/contact" className="btn-primary">
                  Send a Message <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
