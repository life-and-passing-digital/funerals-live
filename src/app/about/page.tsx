"use client";
import Link from "next/link";
import { Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const team = [
  { initials: "JH", name: "James Hartley", role: "Founder & Director", bio: "James founded Funerals Live after experiencing firsthand how technology could connect dispersed families during loss." },
  { initials: "SM", name: "Sarah Mitchell", role: "Head of Operations", bio: "With 10 years in broadcast media, Sarah ensures every stream meets the highest technical and emotional standards." },
  { initials: "DN", name: "David Nguyen", role: "Lead Technician", bio: "David has streamed over 2,000 services and brings a calm, professional presence to every event he covers." },
  { initials: "EP", name: "Emily Pearce", role: "Client Relations", bio: "Emily is the first voice most families hear, ensuring every family feels supported from first contact to final recording." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#F7F6F3", paddingTop: 80 }}>
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px] flex gap-16 items-center flex-wrap">
        <AnimatedSection className="flex-1 min-w-[300px]">
          <p className="text-14 font-semibold mb-4 uppercase tracking-widest" style={{ color: "#8B104E" }}>About us</p>
          <h1 className="display-56 mb-6" style={{ color: "#1D4641" }}>
            Connecting families across every distance.
          </h1>
          <p className="text-18 mb-4" style={{ color: "#463351" }}>
            Funerals Live was founded with a single belief: no one should miss the chance to say goodbye to someone they love simply because of where they live.
          </p>
          <p className="text-18" style={{ color: "#463351" }}>
            We&apos;re an Australian-owned, family-run business that brings compassionate technology to one of life&apos;s most sacred moments. Founded in 2018, we&apos;ve now served over 10,000 families across every state and territory.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="right" style={{ width: 520, flexShrink: 0 }}>
          <div
            className="card-rounded p-10"
            style={{ background: "#1D4641" }}
          >
            <div className="grid grid-cols-2 gap-8">
              {[
                { v: "2018", l: "Founded" },
                { v: "10,000+", l: "Services Streamed" },
                { v: "All States", l: "Australia-Wide" },
                { v: "99.9%", l: "Stream Uptime" },
              ].map(s => (
                <div key={s.l}>
                  <p className="font-extrabold" style={{ fontSize: 40, color: "white", lineHeight: 1 }}>{s.v}</p>
                  <p className="text-16 mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Mission */}
      <section style={{ background: "#D9EFDE", padding: "80px" }}>
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection className="max-w-[720px] mx-auto text-center">
            <h2 className="display-48 mb-6" style={{ color: "#1D4641" }}>Our mission</h2>
            <p className="text-18" style={{ color: "#463351" }}>
              We believe that distance should never prevent a family from gathering to honour a life well lived. Our mission is to use technology to bridge that gap with the compassion, discretion and professionalism that every family deserves.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px]">
        <AnimatedSection>
          <h2 className="display-48 text-center mb-12" style={{ color: "#1D4641" }}>Meet our team</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <AnimatedSection key={m.name} delay={i * 80}>
              <div
                className="card-rounded-xl p-8 flex flex-col gap-4"
                style={{ background: "white", border: "1px solid #C0BAC4" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg text-white"
                  style={{ background: "linear-gradient(135deg, #8B104E, #B01460)" }}
                >
                  {m.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-base" style={{ color: "#1D4641" }}>{m.name}</h3>
                  <p className="text-14 font-medium mt-0.5" style={{ color: "#8B104E" }}>{m.role}</p>
                </div>
                <p className="text-16" style={{ color: "#463351" }}>{m.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-[80px] px-[80px]" style={{ background: "#8B104E" }}>
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="display-48 mb-4" style={{ color: "white" }}>Are you a funeral home?</h2>
            <p className="text-18 mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
              We partner with funeral homes across Australia to offer seamless live streaming as part of your service offering.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:0411760614" className="btn-ghost-white"><Phone size={16} /> 0411 760 614</a>
              <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#8B104E" }}>Partner with us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
