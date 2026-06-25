"use client";

import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// Figma asset URLs (replace with /assets/... paths once images are added)
const IPAD_IMG = "/assets/images/ipad-stream.png";
const CHAPEL_IMG = "/assets/images/chapel.jpg";
const EULOGY_ILLUS = "/assets/illustrations/eulogy-writer.png";
const PASSING_ILLUS = "/assets/illustrations/passing-moments.png";
const WHY_1 = "/assets/illustrations/why-1.png";
const WHY_2 = "/assets/illustrations/why-2.png";
const WHY_3 = "/assets/illustrations/why-3.png";
const PKG_STREAM = "/assets/images/package-streaming.jpg";
const PKG_SLIDE = "/assets/images/package-slideshow.jpg";
const PKG_MEMORIAL = "/assets/images/package-memorial.jpg";

function CheckItem({ text }: { text: string }) {
  return (
    <div className="check-item">
      <div className="check-icon">
        <Check size={18} style={{ color: "#8B104E", strokeWidth: 2.5 }} />
      </div>
      <span className="text-18" style={{ color: "#180026" }}>{text}</span>
    </div>
  );
}

function PlaceholderImage({ label, className, style }: { label: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`img-placeholder ${className || ""}`} style={style}>
      <span style={{ padding: 16 }}>{label}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ background: "#F7F6F3", paddingTop: 80 }}>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto flex items-center gap-10 flex-wrap px-4 py-14 md:px-[80px] md:py-[48px]">
        {/* Left */}
        <AnimatedSection className="flex flex-col gap-10" style={{ width: 593, flexShrink: 0, maxWidth: "100%" }}>
          <div className="flex flex-col gap-6">
            <h1 className="display-56" style={{ color: "#1D4641" }}>
              Connecting hearts, sharing stories, and honouring memories globally.
            </h1>
            <p className="text-18" style={{ color: "#463351" }}>
              In times of loss and sorrow, we believe that every farewell matters. At Funerals Live Streaming, we are committed to making sure that distance does not keep anyone from being part of the final tribute to a loved one.
            </p>
          </div>
          <div className="flex gap-2 items-end flex-wrap">
            <Link href="/contact" className="btn-primary">Book now</Link>
            <Link href="/packages/live-streaming" className="btn-outline">View packages</Link>
          </div>
        </AnimatedSection>

        {/* Right — iPad + decorative loops, matching Figma node 603:8628 */}
        <AnimatedSection direction="right" className="flex-1 flex justify-center" style={{ minWidth: 300, minHeight: 540 }}>
          <div style={{ position: "relative", width: 680, height: 540, flexShrink: 0 }}>

            {/* Decorative loops SVG — replicates imgLoops from Figma */}
            <svg
              viewBox="0 0 680 680"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", top: -16, left: 9, width: 680, height: 680, pointerEvents: "none" }}
            >
              {/* Large outer arc — dark green */}
              <circle cx="430" cy="360" r="310" stroke="#1D4641" strokeWidth="1.5" />
              {/* Medium arc — dark green, offset */}
              <circle cx="390" cy="330" r="250" stroke="#1D4641" strokeWidth="1.5" />
              {/* Inner rose/pink arc */}
              <circle cx="460" cy="310" r="200" stroke="#C0BAC4" strokeWidth="1.5" />
            </svg>

            {/* iPad mockup — matches Figma imgIPad, rotated to match tilt */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 51,
                width: 500,
                transform: "rotate(-8deg)",
                transformOrigin: "center center",
                borderRadius: 28,
                border: "14px solid #2D1240",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.28)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/img_live_stream.webp"
                alt="Funeral live stream in progress"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── WHAT IS FUNERAL LIVE STREAMING ─────────────────── */}
      <section
        className="max-w-[1440px] mx-auto px-[80px] py-[80px] flex gap-[64px] items-center"
      >
        {/* Left — image */}
        <AnimatedSection direction="left" className="flex-shrink-0">
          <div
            className="card-rounded overflow-hidden"
            style={{ width: 560, height: 640 }}
          >
            <PlaceholderImage
              label="📸 Chapel / Venue Interior Photo"
              style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #c8d8c4 0%, #a8c4a0 100%)" }}
            />
          </div>
        </AnimatedSection>

        {/* Right — content */}
        <AnimatedSection direction="right" className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="display-48" style={{ color: "#1D4641" }}>
              What is Funeral Live Streaming?
            </h2>
            <p className="text-18" style={{ color: "#463351" }}>
              A compassionate service enabling friends and family unable to be physically present at a funeral to participate virtually from anywhere in the world. Recognising the challenges of modern life, geographical distances, and unexpected circumstances, this service ensures that no one misses the opportunity to say their final goodbyes.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ── SPLIT OFFERING ─────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-[80px] py-[56px] flex gap-6">

        {/* EulogyWriter card — Mint */}
        <AnimatedSection className="flex-1" delay={0}>
          <div
            className="card-rounded border flex flex-col gap-6 p-[40px] h-full"
            style={{ background: "#D9EFDE", borderColor: "#C0BAC4" }}
          >
            <div className="flex flex-col gap-2">
              <p className="display-20" style={{ color: "#1D4641" }}>EulogyWriter</p>
              <div style={{ width: 280, height: 280 }}>
                <PlaceholderImage
                  label="🖊️ Eulogy Writer Illustration"
                  style={{ width: 280, height: 280, borderRadius: 20, background: "rgba(29,70,65,0.08)" }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="display-28" style={{ color: "#463351" }}>Write a heartfelt eulogy</h3>
              <p className="text-18" style={{ color: "#180026", fontSize: 20, lineHeight: "28px" }}>
                When grief makes it hard to begin, Gaia helps you shape their stories into words you can share with confidence.
              </p>
              <div className="flex flex-col gap-4">
                <CheckItem text="Personalised your message" />
                <CheckItem text="Guided writing prompts" />
                <CheckItem text="Ready to read at the service" />
                <CheckItem text="Save and edit at anytime" />
              </div>
            </div>
            <div className="mt-4">
              <Link href="/packages/eulogy-writer" className="btn-primary">Start writing</Link>
            </div>
          </div>
        </AnimatedSection>

        {/* PassingMoments card — White */}
        <AnimatedSection className="flex-1" delay={100}>
          <div
            className="card-rounded border flex flex-col gap-6 p-[40px] h-full"
            style={{ background: "white", borderColor: "#C0BAC4" }}
          >
            <div className="flex flex-col gap-2">
              <p className="display-20" style={{ color: "#8B104E" }}>PassingMoments</p>
              <div style={{ width: 280, height: 280 }}>
                <PlaceholderImage
                  label="🎞️ Passing Moments Illustration"
                  style={{ width: 280, height: 280, borderRadius: 20, background: "rgba(139,16,78,0.06)" }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="display-28" style={{ color: "#463351" }}>Make a beautiful tribute</h3>
              <p className="text-18" style={{ color: "#180026", fontSize: 20, lineHeight: "28px" }}>
                Gaia helps you honour a life well lived by turning photos and videos into a beautiful tribute for the service.
              </p>
              <div className="flex flex-col gap-4">
                <CheckItem text="Upload photos and videos" />
                <CheckItem text="Elegant memorial templates" />
                <CheckItem text="Music and captions" />
                <CheckItem text="Ready for funeral services or sharing online" />
              </div>
            </div>
            <div className="mt-4">
              <Link href="/packages/slideshow-tribute" className="btn-primary">Create slideshow</Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px] flex flex-col gap-10 items-center">
        <AnimatedSection>
          <h2 className="display-48 text-center" style={{ color: "#1D4641" }}>
            Why choose us?
          </h2>
        </AnimatedSection>

        <div className="flex gap-6 w-full max-w-[1280px]">
          {[
            { img: WHY_1, text: "Available 24/7 in the Sydney Metro and Greater Sydney areas" },
            { img: WHY_2, text: "Get value for money and high-quality service with our streaming and memorial packages" },
            { img: WHY_3, text: "All your loved one's funeral recordings, saved and available online." },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 80} className="flex-1 flex flex-col gap-6 items-center">
              <div
                className="w-full flex items-center justify-center overflow-hidden"
                style={{ height: 240 }}
              >
                <PlaceholderImage
                  label={`✨ Why Us Illustration ${i + 1}`}
                  style={{ width: 224, height: 224, borderRadius: 16, background: "rgba(29,70,65,0.06)" }}
                />
              </div>
              <p
                className="text-center text-18"
                style={{ color: "#463351" }}
              >
                {item.text}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ────────────────────────────────────── */}
      <section
        className="testimonial-section px-[80px] py-[88px]"
      >
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <AnimatedSection>
            <h2 className="display-48 text-center" style={{ color: "white" }}>
              Client testimonials
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="flex flex-col gap-6 text-center">
              <p
                className="font-medium"
                style={{ fontSize: 28, lineHeight: "36px", letterSpacing: "-0.504px", color: "white" }}
              >
                &ldquo;Funerals Live provided a recent live stream of a funeral of a much loved family member. The quality of this stream was excellent and the service was very professional. We couldn&apos;t recommend this business highly enough&rdquo;
              </p>
              <p className="text-18" style={{ color: "rgba(255,255,255,0.75)" }}>
                — Antoinette
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OUR PACKAGES ───────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px] flex flex-col gap-16 items-center">
        <AnimatedSection>
          <h2 className="display-48 text-center" style={{ color: "#1D4641" }}>
            Our packages
          </h2>
        </AnimatedSection>

        <div className="flex gap-7 w-full justify-center flex-wrap">
          {[
            {
              img: PKG_STREAM,
              imgLabel: "📹 Live Streaming Package Photo",
              title: "Live Streaming",
              desc: "We work with you to memorialise the person and their life in a way that is fitting and appropriate for you, your family, friends and loved ones. We offer packages starting from $900 AUD.",
              href: "/packages/live-streaming",
            },
            {
              img: PKG_SLIDE,
              imgLabel: "🖼️ Slideshow Tribute Package Photo",
              title: "Slideshow Tribute",
              desc: "A beautiful and affordable way to celebrate your loved one's life. Designed for funerals, memorials, or family gatherings, this package transforms your treasured photos into a touching visual tribute.",
              href: "/packages/slideshow-tribute",
            },
            {
              img: PKG_MEMORIAL,
              imgLabel: "🎬 Memorial Video Package Photo",
              title: "Memorial Video",
              desc: "A heartfelt and personalised way to honour and celebrate your loved one's life. We carefully craft a custom video using your chosen photos, video clips, music, and messages to tell their unique story.",
              href: "/packages/memorial-video",
            },
          ].map((pkg, i) => (
            <AnimatedSection key={pkg.title} delay={i * 80} className="flex flex-col gap-6" style={{ width: 408 }}>
              <div className="card-rounded-xl overflow-hidden" style={{ width: 408, height: 360, flexShrink: 0 }}>
                <PlaceholderImage
                  label={pkg.imgLabel}
                  style={{
                    width: "100%", height: "100%",
                    background: i === 0
                      ? "linear-gradient(135deg, #1D4641, #2d6b62)"
                      : i === 1
                      ? "linear-gradient(135deg, #4D1C34, #8B104E)"
                      : "linear-gradient(135deg, #463351, #807388)",
                  }}
                />
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h3 style={{ fontSize: 28, fontWeight: 500, lineHeight: "36px", letterSpacing: "-0.504px", color: "#463351" }}>
                    {pkg.title}
                  </h3>
                  <p className="text-18" style={{ color: "#463351" }}>{pkg.desc}</p>
                </div>
                <Link href={pkg.href} className="btn-outline-sm">Learn more</Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

    </div>
  );
}
