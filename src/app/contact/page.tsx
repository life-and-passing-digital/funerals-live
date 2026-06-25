"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const inputStyle: React.CSSProperties = {
  width: "100%", borderRadius: 12, padding: "14px 18px",
  fontSize: 16, outline: "none",
  background: "#F7F6F3", border: "1px solid #C0BAC4",
  fontFamily: "'Poppins',sans-serif", color: "#180026",
  transition: "border-color 0.2s",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", package: "", venue: "", message: "" });
  const [sent, setSent] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div style={{ background: "#F7F6F3", paddingTop: 80 }}>
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px] flex gap-16 items-start flex-wrap">

        {/* Left info */}
        <AnimatedSection direction="left" className="flex-shrink-0" style={{ width: 380 }}>
          <p className="text-14 font-semibold mb-4 uppercase tracking-widest" style={{ color: "#8B104E" }}>Get in touch</p>
          <h1 className="display-48 mb-6" style={{ color: "#1D4641" }}>We&apos;re here when you need us.</h1>
          <p className="text-18 mb-10" style={{ color: "#463351" }}>
            Our compassionate team is available 7 days a week. Reach out by phone, email, or the form.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { icon: Phone, label: "Phone", value: "0411 760 614", sub: "7 days a week", href: "tel:0411760614" },
              { icon: Mail, label: "Email", value: "info@funeralslive.com.au", sub: "We reply within 2 hours", href: "mailto:info@funeralslive.com.au" },
              { icon: MapPin, label: "Coverage", value: "All of Australia", sub: "All states & territories", href: undefined },
              { icon: Clock, label: "Hours", value: "7 Days a Week", sub: "Including public holidays", href: undefined },
            ].map(c => (
              <div key={c.label} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139,16,78,0.08)" }}>
                  <c.icon size={18} style={{ color: "#8B104E" }} />
                </div>
                <div>
                  <p className="text-14 font-medium" style={{ color: "#807388" }}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-semibold text-base transition-colors" style={{ color: "#1D4641" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#8B104E")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#1D4641")}
                    >{c.value}</a>
                  ) : (
                    <p className="font-semibold text-base" style={{ color: "#1D4641" }}>{c.value}</p>
                  )}
                  <p className="text-14" style={{ color: "#807388" }}>{c.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 card-rounded-xl p-6" style={{ background: "#4D1C34" }}>
            <p className="text-12 font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Urgent booking?</p>
            <p className="font-semibold text-white mb-1">Call us directly</p>
            <p className="text-14 mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>For services within 24 hours, please call so we can prioritise your request.</p>
            <a href="tel:0411760614" className="btn-primary" style={{ fontSize: 14, padding: "10px 20px" }}>
              <Phone size={14} /> 0411 760 614
            </a>
          </div>
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection direction="right" className="flex-1 min-w-[320px]">
          <div className="card-rounded p-10" style={{ background: "white", border: "1px solid #C0BAC4" }}>
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(139,16,78,0.08)" }}>
                  <CheckCircle size={32} style={{ color: "#8B104E" }} />
                </div>
                <h3 className="display-28 mb-3" style={{ color: "#1D4641" }}>Thank you — we&apos;ll be in touch soon.</h3>
                <p className="text-18 mb-6" style={{ color: "#463351" }}>
                  We aim to respond within 2 hours. Urgently need us?{" "}
                  <a href="tel:0411760614" style={{ color: "#8B104E", fontWeight: 600 }}>Call 0411 760 614</a>.
                </p>
                <button className="btn-outline" onClick={() => setSent(false)}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-5">
                <h2 className="display-28 mb-2" style={{ color: "#1D4641" }}>Send an enquiry</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-12 font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "#807388" }}>Full Name *</label>
                    <input name="name" required placeholder="Your full name" style={inputStyle} value={form.name} onChange={change}
                      onFocus={e => (e.target.style.borderColor = "#8B104E")} onBlur={e => (e.target.style.borderColor = "#C0BAC4")} />
                  </div>
                  <div>
                    <label className="block text-12 font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "#807388" }}>Phone *</label>
                    <input name="phone" required placeholder="Your phone number" style={inputStyle} value={form.phone} onChange={change}
                      onFocus={e => (e.target.style.borderColor = "#8B104E")} onBlur={e => (e.target.style.borderColor = "#C0BAC4")} />
                  </div>
                </div>
                <div>
                  <label className="block text-12 font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "#807388" }}>Email Address *</label>
                  <input name="email" type="email" required placeholder="your@email.com" style={inputStyle} value={form.email} onChange={change}
                    onFocus={e => (e.target.style.borderColor = "#8B104E")} onBlur={e => (e.target.style.borderColor = "#C0BAC4")} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-12 font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "#807388" }}>Service Date</label>
                    <input name="date" type="date" style={inputStyle} value={form.date} onChange={change}
                      onFocus={e => (e.target.style.borderColor = "#8B104E")} onBlur={e => (e.target.style.borderColor = "#C0BAC4")} />
                  </div>
                  <div>
                    <label className="block text-12 font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "#807388" }}>Package</label>
                    <select name="package" style={{ ...inputStyle, appearance: "none" }} value={form.package} onChange={change}
                      onFocus={e => (e.target.style.borderColor = "#8B104E")} onBlur={e => (e.target.style.borderColor = "#C0BAC4")} >
                      <option value="">Select a package…</option>
                      <option>Live Streaming</option>
                      <option>Slideshow Tribute</option>
                      <option>Memorial Video</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-12 font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "#807388" }}>Venue / Location</label>
                  <input name="venue" placeholder="Chapel name, suburb, state" style={inputStyle} value={form.venue} onChange={change}
                    onFocus={e => (e.target.style.borderColor = "#8B104E")} onBlur={e => (e.target.style.borderColor = "#C0BAC4")} />
                </div>
                <div>
                  <label className="block text-12 font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "#807388" }}>Message</label>
                  <textarea name="message" rows={4} placeholder="Any additional details…" style={{ ...inputStyle, resize: "vertical" }} value={form.message} onChange={change}
                    onFocus={e => (e.target.style.borderColor = "#8B104E")} onBlur={e => (e.target.style.borderColor = "#C0BAC4")} />
                </div>
                <button type="submit" className="btn-primary justify-center">Send enquiry</button>
                <p className="text-12 text-center" style={{ color: "#807388" }}>We respect your privacy. Your details are never shared.</p>
              </form>
            )}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
