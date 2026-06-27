"use client";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function MemorialVideoPage() {
  return (
    <div style={{ background: "#F7F6F3", paddingTop: 80 }}>
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px]">
        <AnimatedSection className="max-w-[720px]">
          <p className="text-14 font-semibold mb-4" style={{ color: "#8B104E", letterSpacing: "2px", textTransform: "uppercase" }}>Memorial Video</p>
          <h1 className="display-56 mb-6" style={{ color: "#1D4641" }}>A custom memorial video</h1>
          <p className="text-18 mb-8" style={{ color: "#463351" }}>
            A heartfelt and personalised way to honour and celebrate your loved one&apos;s life. We carefully craft a custom video using your chosen photos, video clips, music, and messages to tell their unique story.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="btn-primary">Get started</Link>
            <a href="tel:0411760614" className="btn-outline"><Phone size={16} /> 0411 760 614</a>
          </div>
        </AnimatedSection>
      </section>

      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px]">
        <div className="flex gap-16 items-start flex-wrap">
          <AnimatedSection direction="left" className="flex-1 min-w-[300px]">
            <h2 className="display-48 mb-8" style={{ color: "#1D4641" }}>What&apos;s included</h2>
            <div className="flex flex-col gap-4">
              {["Professionally produced video","Photos, video clips & voice-overs","Licensed background music","Personalised text overlays","Professional colour grading","HD/4K export file","Physical USB option available","Delivered within 5 business days","Revision included"].map(f => (
                <div key={f} className="flex gap-3 items-center">
                  <Check size={18} style={{ color: "#8B104E", flexShrink: 0, strokeWidth: 2.5 }} />
                  <span className="text-18" style={{ color: "#463351" }}>{f}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" className="flex-shrink-0" style={{ width: 400 }}>
            <div className="card-rounded p-10" style={{ background: "white", border: "1px solid #C0BAC4" }}>
              <h3 className="display-28 mb-4" style={{ color: "#1D4641" }}>Memorial Video</h3>
              <p className="font-extrabold mb-2" style={{ fontSize: 56, color: "#1D4641", lineHeight: 1 }}>$595</p>
              <p className="text-14 mb-6" style={{ color: "#807388" }}>Starting price — custom quotes available</p>
              <p className="text-16 mb-6" style={{ color: "#463351" }}>
                Each memorial video is unique. We work with you to ensure it captures the essence of your loved one&apos;s life.
              </p>
              <Link href="/contact" className="btn-primary">Book now</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-[80px] px-[80px]" style={{ background: "#4D1C34" }}>
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="display-48 mb-4" style={{ color: "white" }}>Let&apos;s create something beautiful</h2>
            <p className="text-18 mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Reach out today and we&apos;ll guide you through the whole process.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:0411760614" className="btn-ghost-white"><Phone size={16} /> 0411 760 614</a>
              <Link href="/contact" className="btn-primary">Send an enquiry</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
