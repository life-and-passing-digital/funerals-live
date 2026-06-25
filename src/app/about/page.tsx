"use client";

import Link from "next/link";
import { Heart, Award, Users, Globe, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    desc: "We approach every service with deep respect and sensitivity. Our team is specially trained to work during the most difficult of times.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    desc: "Broadcast-quality equipment and experienced technicians ensure the stream reflects the dignity of your loved one's life.",
  },
  {
    icon: Users,
    title: "Family Focused",
    desc: "We work directly with families and funeral homes to make the process as simple and stress-free as possible.",
  },
  {
    icon: Globe,
    title: "Truly Australia-Wide",
    desc: "From Sydney to Perth, Darwin to Hobart — our technicians travel to serve families in every corner of Australia.",
  },
];

const team = [
  {
    name: "James Hartley",
    role: "Founder & Director",
    bio: "James founded Funerals Live after experiencing firsthand how technology could bring dispersed families together during loss.",
    initials: "JH",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Operations",
    bio: "With 10 years in broadcast media, Sarah ensures every stream meets the highest technical and emotional standards.",
    initials: "SM",
  },
  {
    name: "David Nguyen",
    role: "Lead Technician",
    bio: "David has streamed over 2,000 services and brings a calm, professional presence to every event he covers.",
    initials: "DN",
  },
  {
    name: "Emily Pearce",
    role: "Client Relations",
    bio: "Emily is the first voice most families hear. She ensures every family feels supported from first contact to final recording.",
    initials: "EP",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero-gradient py-32 px-6 relative overflow-hidden"
        style={{ paddingTop: 140 }}
      >
        <div className="orb" style={{ width: 500, height: 500, background: "#8B104E", top: "-100px", right: "-200px" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <p style={{ color: "#D4185A", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "2px", marginBottom: 16 }}>
              OUR STORY
            </p>
            <h1 className="text-white font-extrabold mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", maxWidth: 640 }}>
              Connecting families across<br />
              <span className="gradient-text">every distance.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: 580, lineHeight: 1.8, marginBottom: 32 }}>
              Funerals Live was founded with a single belief: no one should miss the chance to say
              goodbye to someone they love simply because of where they live. We&apos;re an
              Australian-owned, family-run business that brings compassionate technology to one
              of life&apos;s most sacred moments.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch <ChevronRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="#fafafa" />
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6" style={{ background: "#fafafa" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div
              className="rounded-3xl p-10 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0d0d1a, #1a0510)" }}
            >
              <div className="orb" style={{ width: 300, height: 300, background: "#8B104E", top: "-100px", right: "-100px", opacity: 0.25 }} />
              <p style={{ color: "#D4185A", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "2px", marginBottom: 12 }}>
                OUR MISSION
              </p>
              <h2 className="text-white text-3xl font-bold mb-4 relative z-10">
                Technology in service<br />of love.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, position: "relative", zIndex: 10 }}>
                We believe that distance should never prevent a family from gathering to honour a
                life well lived. Our mission is to use technology to bridge that gap with the
                compassion, discretion and professionalism that every family deserves.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 relative z-10">
                {[
                  { v: "2018", l: "Founded" },
                  { v: "10,000+", l: "Services Streamed" },
                  { v: "All States", l: "Australia Coverage" },
                  { v: "99.9%", l: "Stream Uptime" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-white font-extrabold text-2xl">{s.v}</p>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem" }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <p style={{ color: "#8B104E", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "2px", marginBottom: 12 }}>
              OUR VALUES
            </p>
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1a1a2e" }}>
              What we stand for
            </h2>
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(139,16,78,0.08)" }}
                  >
                    <v.icon size={20} style={{ color: "#8B104E" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "#1a1a2e" }}>{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="text-4xl font-bold mb-3" style={{ color: "#1a1a2e" }}>Meet Our Team</h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Compassionate professionals who treat every service with the dignity it deserves.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 80}>
                <div className="feature-card text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-white text-lg mb-4 mx-auto"
                    style={{ background: "linear-gradient(135deg, #8B104E, #B01460)" }}
                  >
                    {m.initials}
                  </div>
                  <h3 className="font-bold mb-1" style={{ color: "#1a1a2e" }}>{m.name}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: "#8B104E" }}>{m.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #8B104E, #B01460)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-white text-3xl font-bold mb-4">Are you a funeral home?</h2>
            <p className="text-white/75 mb-8 max-w-lg mx-auto">
              We partner with funeral homes across Australia to offer seamless live streaming as part
              of your service offering. Contact us to discuss a partnership.
            </p>
            <Link href="/contact" className="btn-ghost">
              Partner With Us <ChevronRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
