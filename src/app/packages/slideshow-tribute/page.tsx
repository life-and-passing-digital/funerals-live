"use client";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function SlideshowTributePage() {
  return (
    <div style={{ background: "#F7F6F3", paddingTop: 80 }}>
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px]">
        <AnimatedSection className="max-w-[720px]">
          <p className="text-14 font-semibold mb-4" style={{ color: "#8B104E", letterSpacing: "2px", textTransform: "uppercase" }}>Slideshow Tribute</p>
          <h1 className="display-56 mb-6" style={{ color: "#1D4641" }}>A beautiful visual tribute</h1>
          <p className="text-18 mb-8" style={{ color: "#463351" }}>
            A beautiful and affordable way to celebrate your loved one&apos;s life. Designed for funerals, memorials, or family gatherings, this package transforms your treasured photos into a touching visual tribute.
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
              {["Upload your own photos & videos","Choose background music","Add names, dates & captions","Elegant memorial templates","Play at the funeral service","Share online with family","HD quality export","Delivered within 48 hours"].map(f => (
                <div key={f} className="flex gap-3 items-center">
                  <Check size={18} style={{ color: "#8B104E", flexShrink: 0, strokeWidth: 2.5 }} />
                  <span className="text-18" style={{ color: "#463351" }}>{f}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" className="flex-shrink-0" style={{ width: 400 }}>
            <div className="card-rounded p-10" style={{ background: "#D9EFDE", border: "1px solid #C0BAC4" }}>
              <h3 className="display-28 mb-4" style={{ color: "#1D4641" }}>Slideshow Package</h3>
              <p className="font-extrabold mb-6" style={{ fontSize: 56, color: "#1D4641", lineHeight: 1 }}>$295</p>
              <p className="text-16 mb-6" style={{ color: "#463351" }}>
                One flat price. No hidden fees. Delivered within 48 hours of receiving your photos.
              </p>
              <Link href="/contact" className="btn-primary">Book now</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-[80px] px-[80px]" style={{ background: "#1D4641" }}>
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="display-48 mb-4" style={{ color: "white" }}>Start your tribute today</h2>
            <p className="text-18 mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              Simply send us your photos and we&apos;ll handle the rest. Fast, simple, and beautiful.
            </p>
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
