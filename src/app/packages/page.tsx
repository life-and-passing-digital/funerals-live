"use client";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function PackagesPage() {
  return (
    <div style={{ background: "#F7F6F3", paddingTop: 80 }}>
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px]">
        <AnimatedSection className="max-w-[700px] mx-auto text-center">
          <h1 className="display-56 mb-6" style={{ color: "#1D4641" }}>Our packages</h1>
          <p className="text-18" style={{ color: "#463351" }}>
            Choose from our range of compassionate, professional packages. All prices are transparent — no hidden fees.
          </p>
        </AnimatedSection>
      </section>
      <section className="max-w-[1440px] mx-auto px-[80px] pb-[80px] flex gap-7 justify-center flex-wrap">
        {[
          { href: "/packages/live-streaming", title: "Live Streaming", price: "From $395", bg: "#1D4641", desc: "Professional HD live streaming for any funeral service, Australia-wide." },
          { href: "/packages/slideshow-tribute", title: "Slideshow Tribute", price: "From $295", bg: "#8B104E", desc: "Turn your treasured photos into a beautiful visual tribute for the service." },
          { href: "/packages/memorial-video", title: "Memorial Video", price: "From $595", bg: "#4D1C34", desc: "A professionally produced, personalised video to celebrate your loved one's life." },
        ].map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 80} style={{ width: 420 }}>
            <div
              className="card-rounded p-10 flex flex-col gap-6 h-full"
              style={{ background: p.bg }}
            >
              <div>
                <p className="font-semibold mb-2" style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", letterSpacing: "1.5px", textTransform: "uppercase" }}>Package</p>
                <h2 className="display-28" style={{ color: "white" }}>{p.title}</h2>
                <p className="font-extrabold mt-3" style={{ fontSize: 40, color: "white", lineHeight: 1 }}>{p.price}</p>
              </div>
              <p className="text-18" style={{ color: "rgba(255,255,255,0.75)" }}>{p.desc}</p>
              <Link href={p.href} className="btn-ghost-white mt-auto">View details</Link>
            </div>
          </AnimatedSection>
        ))}
      </section>
    </div>
  );
}
