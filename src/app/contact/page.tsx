"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "0411 760 614",
    sub: "Available 7 days a week",
    href: "tel:0411760614",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@funeralslive.com.au",
    sub: "We respond within 2 hours",
    href: "mailto:info@funeralslive.com.au",
  },
  {
    icon: MapPin,
    title: "Coverage",
    value: "All of Australia",
    sub: "All states & territories",
    href: undefined,
  },
  {
    icon: Clock,
    title: "Hours",
    value: "7 Days a Week",
    sub: "Including public holidays",
    href: undefined,
  },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 12,
  padding: "14px 18px",
  fontSize: "0.9rem",
  outline: "none",
  background: "#f8f4f6",
  border: "1px solid rgba(139,16,78,0.15)",
  fontFamily: "'Poppins', sans-serif",
  color: "#1a1a2e",
  transition: "border-color 0.2s",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service_date: "",
    venue: "",
    package: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="hero-gradient py-32 px-6 relative overflow-hidden"
        style={{ paddingTop: 140 }}
      >
        <div className="orb" style={{ width: 400, height: 400, background: "#8B104E", bottom: 0, right: 0 }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <p style={{ color: "#D4185A", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "2px", marginBottom: 16 }}>
              GET IN TOUCH
            </p>
            <h1 className="text-white font-extrabold mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
              We&apos;re here when<br />
              <span className="gradient-text">you need us.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto" }}>
              Our compassionate team is available 7 days a week. Reach out by phone, email, or the form below.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="#fafafa" />
          </svg>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 px-6" style={{ background: "#fafafa" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">

          {/* Left — info */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="left">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a1a2e" }}>
                Contact Information
              </h2>
              <div className="space-y-5">
                {contactInfo.map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, rgba(139,16,78,0.12), rgba(176,20,96,0.06))" }}
                    >
                      <c.icon size={20} style={{ color: "#8B104E" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#6b7280" }}>{c.title}</p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="font-bold transition-colors duration-200 hover:underline"
                          style={{ color: "#1a1a2e", fontSize: "0.95rem" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#8B104E")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#1a1a2e")}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-bold" style={{ color: "#1a1a2e", fontSize: "0.95rem" }}>{c.value}</p>
                      )}
                      <p className="text-gray-400 text-xs mt-0.5">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="rounded-2xl p-6 mt-8"
                style={{
                  background: "linear-gradient(135deg, #0d0d1a, #1a0510)",
                }}
              >
                <p style={{ color: "#D4185A", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "1.5px", marginBottom: 8 }}>
                  URGENT BOOKING?
                </p>
                <p className="text-white font-semibold mb-2">Call us directly</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginBottom: 16 }}>
                  For services within 24 hours, please call so we can prioritise your request.
                </p>
                <a href="tel:0411760614" className="btn-primary" style={{ fontSize: "0.875rem", padding: "11px 24px" }}>
                  <Phone size={14} />
                  0411 760 614
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="right">
              <div
                className="rounded-3xl p-8"
                style={{
                  background: "white",
                  boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(139,16,78,0.08)",
                }}
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: "rgba(139,16,78,0.1)" }}
                    >
                      <CheckCircle size={32} style={{ color: "#8B104E" }} />
                    </div>
                    <h3 className="font-bold text-2xl mb-3" style={{ color: "#1a1a2e" }}>
                      Thank you, we&apos;ll be in touch soon.
                    </h3>
                    <p className="text-gray-500 mb-6">
                      We aim to respond to all enquiries within 2 hours. If you need to speak with us urgently, please call{" "}
                      <a href="tel:0411760614" style={{ color: "#8B104E", fontWeight: 600 }}>0411 760 614</a>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline"
                    >
                      Send Another Message <ChevronRight size={14} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-bold text-xl mb-6" style={{ color: "#1a1a2e" }}>
                      Send an Enquiry
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6b7280" }}>Full Name *</label>
                        <input
                          name="name"
                          required
                          placeholder="Your full name"
                          style={inputStyle}
                          value={form.name}
                          onChange={handleChange}
                          onFocus={(e) => (e.target.style.borderColor = "#8B104E")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(139,16,78,0.15)")}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6b7280" }}>Phone *</label>
                        <input
                          name="phone"
                          required
                          placeholder="Your phone number"
                          style={inputStyle}
                          value={form.phone}
                          onChange={handleChange}
                          onFocus={(e) => (e.target.style.borderColor = "#8B104E")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(139,16,78,0.15)")}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6b7280" }}>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        style={inputStyle}
                        value={form.email}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.style.borderColor = "#8B104E")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(139,16,78,0.15)")}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6b7280" }}>Service Date</label>
                        <input
                          name="service_date"
                          type="date"
                          style={inputStyle}
                          value={form.service_date}
                          onChange={handleChange}
                          onFocus={(e) => (e.target.style.borderColor = "#8B104E")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(139,16,78,0.15)")}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6b7280" }}>Package Interest</label>
                        <select
                          name="package"
                          style={{ ...inputStyle, appearance: "none" }}
                          value={form.package}
                          onChange={handleChange}
                          onFocus={(e) => (e.target.style.borderColor = "#8B104E")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(139,16,78,0.15)")}
                        >
                          <option value="">Select a package...</option>
                          <option>Essential — $395</option>
                          <option>Premium — $595</option>
                          <option>Signature — $895</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6b7280" }}>Venue / Location</label>
                      <input
                        name="venue"
                        placeholder="Chapel name, suburb, state"
                        style={inputStyle}
                        value={form.venue}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.style.borderColor = "#8B104E")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(139,16,78,0.15)")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6b7280" }}>Message</label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Any additional details about the service..."
                        style={{ ...inputStyle, resize: "vertical" }}
                        value={form.message}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.style.borderColor = "#8B104E")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(139,16,78,0.15)")}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      Send Enquiry <ChevronRight size={16} />
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      We respect your privacy. Your details are never shared.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
