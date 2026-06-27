"use client";
import { MapPin, Clock, Lock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { id: "SVC-001", name: "Celebration of Life — Margaret Davies", venue: "St Andrew's Cathedral, Sydney NSW", date: "Today", time: "2:00 PM AEST", status: "live", viewers: 84 },
  { id: "SVC-002", name: "Remembrance Service — Robert Chen", venue: "Garden Chapel, Melbourne VIC", date: "Today", time: "4:30 PM AEST", status: "upcoming" },
  { id: "SVC-003", name: "Funeral Mass — Patricia O'Brien", venue: "St Patrick's Church, Brisbane QLD", date: "Tomorrow", time: "10:00 AM AEST", status: "upcoming" },
  { id: "SVC-004", name: "Memorial Service — Alan Thompson", venue: "Fremantle Cemetery, Perth WA", date: "Tomorrow", time: "1:00 PM AWST", status: "upcoming" },
  { id: "SVC-005", name: "Service of Thanksgiving — Dorothy Nguyen", venue: "Knox Presbyterian Church, Adelaide SA", date: "Thursday", time: "11:00 AM ACST", status: "upcoming" },
];

export default function UpcomingFuneralsPage() {
  return (
    <div style={{ background: "#F7F6F3", paddingTop: 80 }}>
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px]">
        <AnimatedSection className="max-w-[640px]">
          <h1 className="display-56 mb-4" style={{ color: "#1D4641" }}>Upcoming Funerals</h1>
          <p className="text-18" style={{ color: "#463351" }}>
            All streams are private and password-protected. If you have been sent a link and access code, use the viewer below.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-[1440px] mx-auto px-[80px] pb-[80px] flex gap-12 items-start flex-wrap">
        {/* Service list */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-4">
          {services.map((s, i) => (
            <AnimatedSection key={s.id} delay={i * 60}>
              <div
                className="rounded-3xl p-6 flex items-start justify-between gap-4"
                style={{
                  background: "white",
                  border: s.status === "live" ? "1.5px solid #8B104E" : "1px solid #C0BAC4",
                  boxShadow: s.status === "live" ? "0 4px 24px rgba(139,16,78,0.12)" : "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "none")}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {s.status === "live" ? (
                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase px-2 py-0.5 rounded-full" style={{ background: "rgba(139,16,78,0.1)", color: "#8B104E" }}>
                        <span className="live-dot" style={{ width: 6, height: 6 }} /> Live now
                      </span>
                    ) : (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "#f3f0f5", color: "#807388" }}>
                        Upcoming
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-base leading-snug" style={{ color: "#1D4641" }}>{s.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={12} style={{ color: "#807388", flexShrink: 0 }} />
                    <p className="text-14 truncate" style={{ color: "#807388" }}>{s.venue}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="font-medium text-sm" style={{ color: "#1D4641" }}>{s.date}</p>
                  <div className="flex items-center gap-1 justify-end mt-0.5">
                    <Clock size={12} style={{ color: "#807388" }} />
                    <p className="text-14" style={{ color: "#807388" }}>{s.time}</p>
                  </div>
                  {s.viewers && (
                    <p className="text-xs mt-1 font-medium" style={{ color: "#8B104E" }}>{s.viewers} watching</p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Access form */}
        <AnimatedSection direction="right" style={{ width: 400, flexShrink: 0 }}>
          <div className="card-rounded p-8" style={{ background: "white", border: "1px solid #C0BAC4", position: "sticky", top: 100 }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(139,16,78,0.08)" }}>
              <Lock size={20} style={{ color: "#8B104E" }} />
            </div>
            <h2 className="display-28 mb-2" style={{ color: "#1D4641" }}>Access a stream</h2>
            <p className="text-16 mb-6" style={{ color: "#807388" }}>
              Enter the private link and access code sent to you by the family or funeral home.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Service ID or email"
                className="w-full rounded-xl px-4 py-3 text-16 outline-none"
                style={{ background: "#F7F6F3", border: "1px solid #C0BAC4", fontFamily: "'Poppins',sans-serif" }}
                onFocus={e => (e.target.style.borderColor = "#8B104E")}
                onBlur={e => (e.target.style.borderColor = "#C0BAC4")}
              />
              <input
                type="password"
                placeholder="Access code"
                className="w-full rounded-xl px-4 py-3 text-16 outline-none"
                style={{ background: "#F7F6F3", border: "1px solid #C0BAC4", fontFamily: "'Poppins',sans-serif" }}
                onFocus={e => (e.target.style.borderColor = "#8B104E")}
                onBlur={e => (e.target.style.borderColor = "#C0BAC4")}
              />
              <button className="btn-primary justify-center">Access stream</button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
