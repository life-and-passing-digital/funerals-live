"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  { cat: "Booking", items: [
    { q: "How far in advance do I need to book?", a: "We recommend booking as early as possible, but we regularly accept bookings within 24–48 hours. Call us on 0411 760 614 for urgent enquiries." },
    { q: "Are you available on weekends and public holidays?", a: "Yes — 7 days a week, 365 days a year, with no weekend surcharge." },
    { q: "Do you cover regional and remote areas?", a: "Yes. We cover all Australian states and territories. Additional travel fees may apply for very remote locations." },
    { q: "What if I need to cancel or reschedule?", a: "Cancellations more than 48 hours before the service receive a full refund. Reschedules are always accommodated at no charge." },
  ]},
  { cat: "The stream", items: [
    { q: "How do viewers access the stream?", a: "We provide a private link and access code. Viewers click the link, enter the code, and watch live — no apps or accounts needed." },
    { q: "Can the stream be password protected?", a: "Yes. Every stream is private and password-protected by default." },
    { q: "How many people can watch at once?", a: "There is no limit. Whether 10 or 10,000 people join, quality remains the same." },
    { q: "What devices can viewers use?", a: "Any modern device — smartphone, tablet, laptop, desktop, or smart TV." },
    { q: "What if the internet drops during the stream?", a: "Our technicians carry mobile 4G/5G backup equipment. In a rare interruption, the stream resumes automatically." },
  ]},
  { cat: "Recording & replay", items: [
    { q: "Will there be a recording?", a: "Yes. A full recording is available for all packages, with 30-day replay access." },
    { q: "When will the recording be available?", a: "Typically within 24 hours, and often by the same evening for Premium and Signature packages." },
    { q: "Can I download the recording?", a: "Download is included in our Premium and Signature packages as a high-quality MP4 file." },
  ]},
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Poppins',sans-serif" }}
      >
        <span className="font-semibold text-base" style={{ color: "#1D4641" }}>{q}</span>
        <ChevronDown
          size={18}
          style={{ color: "#8B104E", flexShrink: 0, transition: "transform 0.25s", transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-16" style={{ color: "#463351", lineHeight: 1.7 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div style={{ background: "#F7F6F3", paddingTop: 80 }}>
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px]">
        <AnimatedSection className="max-w-[640px]">
          <h1 className="display-56 mb-4" style={{ color: "#1D4641" }}>Frequently asked questions</h1>
          <p className="text-18" style={{ color: "#463351" }}>
            Everything you need to know about our funeral live streaming service.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-[800px] mx-auto px-6 pb-[80px]">
        {faqs.map((cat, ci) => (
          <AnimatedSection key={cat.cat} delay={ci * 60} className="mb-10">
            <h2 className="font-bold text-xl mb-4 flex items-center gap-3" style={{ color: "#1D4641" }}>
              <span className="w-1 h-6 rounded inline-block" style={{ background: "#8B104E" }} />
              {cat.cat}
            </h2>
            <div className="flex flex-col gap-2">
              {cat.items.map(item => <FAQItem key={item.q} q={item.q} a={item.a} />)}
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection>
          <div className="card-rounded p-10 text-center" style={{ background: "#1D4641" }}>
            <h3 className="display-28 mb-3" style={{ color: "white" }}>Still have a question?</h3>
            <p className="text-18 mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              Our friendly team is available 7 days a week.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:0411760614" className="btn-ghost-white"><Phone size={16} /> 0411 760 614</a>
              <Link href="/contact" className="btn-primary">Send a message</Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
