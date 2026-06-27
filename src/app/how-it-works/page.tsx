"use client";

import Link from "next/link";
import { CalendarCheck, Camera, Wifi, Download, CheckCircle, ChevronRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    icon: CalendarCheck,
    num: "01",
    title: "Book Your Service",
    desc: "Reach out to us by phone, email, or our online form. We respond within 2 hours, 7 days a week. We'll confirm the date, location, and package that suits your family's needs. No stress, no pressure.",
    details: [
      "Simple online booking form",
      "Phone or email enquiry welcome",
      "Response guaranteed within 2 hours",
      "Flexible scheduling — even short notice",
    ],
  },
  {
    icon: Camera,
    num: "02",
    title: "We Arrive Early & Set Up",
    desc: "Our experienced, compassionately-trained technician arrives at least 30 minutes before the service begins. We set up professional, discreet cameras and audio equipment — you won't notice we're there.",
    details: [
      "Arrives 30–60 min before the service",
      "Professional HD/4K cameras",
      "High-quality audio capture",
      "Completely discreet and unobtrusive",
    ],
  },
  {
    icon: Wifi,
    num: "03",
    title: "We Stream Live",
    desc: "We broadcast the service in real time. Your family receive a private, secure link they can access from any device — smartphone, tablet, laptop, or smart TV. No accounts or downloads needed.",
    details: [
      "Works on any device",
      "Password-protected private link",
      "Unlimited concurrent viewers",
      "Real-time HD quality",
    ],
  },
  {
    icon: Download,
    num: "04",
    title: "Recording Delivered",
    desc: "After the service, you receive a full, high-quality recording available for download and replay for 30 days. Keep it as a permanent memento of your loved one's life.",
    details: [
      "Full service recording",
      "Available within 24 hours",
      "30-day replay access",
      "Download for permanent keeping",
    ],
  },
];

const faqs = [
  {
    q: "How far in advance do I need to book?",
    a: "We recommend booking as early as possible, but we understand funeral timelines can be short. We can often accommodate bookings within 24–48 hours, subject to availability.",
  },
  {
    q: "What if the venue has poor internet?",
    a: "Our technicians carry mobile 4G/5G backup solutions to ensure reliable streaming even in locations with limited Wi-Fi.",
  },
  {
    q: "Can the stream be password protected?",
    a: "Yes. Every stream is private and password-protected by default. Only people you share the link and password with can view.",
  },
  {
    q: "How do viewers access the stream?",
    a: "We send you a private link and password. You share these with family and friends. They click the link, enter the password, and can watch — no apps or accounts required.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero-gradient py-32 px-6 relative overflow-hidden"
        style={{ paddingTop: 140 }}
      >
        <div className="orb" style={{ width: 500, height: 500, background: "#8B104E", top: "-200px", right: "-100px" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <p style={{ color: "#D4185A", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "2px", marginBottom: 16 }}>
              THE PROCESS
            </p>
            <h1 className="text-white font-extrabold mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
              Simple from start<br />to <span className="gradient-text">stream.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: 520, margin: "0 auto 32px" }}>
              We handle every technical detail so your family can focus on what truly matters.
            </p>
            <Link href="/contact" className="btn-primary">
              Book Now <ChevronRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="#fafafa" />
          </svg>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6" style={{ background: "#fafafa" }}>
        <div className="max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center mb-24`}
              >
                {/* Icon side */}
                <div className="flex-shrink-0">
                  <div
                    className="relative w-48 h-48 rounded-3xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #0d0d1a, #1a0510)",
                      boxShadow: "0 20px 60px rgba(139,16,78,0.3)",
                    }}
                  >
                    <step.icon size={60} style={{ color: "#D4185A" }} />
                    <div
                      className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm"
                      style={{ background: "linear-gradient(135deg, #8B104E, #B01460)" }}
                    >
                      {step.num}
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div>
                  <h2 className="font-bold text-3xl mb-4" style={{ color: "#1a1a2e" }}>
                    {step.title}
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-3">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm">
                        <CheckCircle size={16} style={{ color: "#8B104E", flexShrink: 0 }} />
                        <span className="text-gray-600">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="text-4xl font-bold mb-4" style={{ color: "#1a1a2e" }}>
                Common Questions
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "#f8f4f6", border: "1px solid rgba(139,16,78,0.08)" }}
                >
                  <h3 className="font-semibold text-base mb-2" style={{ color: "#1a1a2e" }}>{f.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={300}>
            <div className="text-center mt-12">
              <p className="text-gray-500 mb-4">Still have questions?</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/faq" className="btn-outline">View All FAQs</Link>
                <a href="tel:0411760614" className="btn-primary">
                  <Phone size={16} /> 0411 760 614
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
