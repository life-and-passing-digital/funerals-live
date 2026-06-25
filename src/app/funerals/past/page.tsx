"use client";
import { Play, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const past = [
  { id: "SVC-098", name: "Service of Remembrance — William Hart", venue: "Chapel of Peace, Sydney NSW", date: "22 June 2026", duration: "1hr 24min" },
  { id: "SVC-097", name: "Celebration of Life — Mary-Anne Kowalski", venue: "Norwood Park, Canberra ACT", date: "20 June 2026", duration: "58min" },
  { id: "SVC-096", name: "Funeral Mass — Giuseppe Martino", venue: "St Francis of Assisi, Melbourne VIC", date: "18 June 2026", duration: "1hr 12min" },
  { id: "SVC-095", name: "Memorial — Sandra Lee", venue: "Pinegrove Cemetery, Sydney NSW", date: "15 June 2026", duration: "45min" },
  { id: "SVC-094", name: "Service — John & Barbara Williams", venue: "Centennial Gardens, Brisbane QLD", date: "14 June 2026", duration: "1hr 8min" },
  { id: "SVC-093", name: "Thanksgiving Service — Rev. Thomas Brooke", venue: "St Paul's Anglican, Perth WA", date: "11 June 2026", duration: "1hr 35min" },
];

export default function PastFuneralsPage() {
  return (
    <div style={{ background: "#F7F6F3", paddingTop: 80 }}>
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px]">
        <AnimatedSection className="max-w-[640px]">
          <h1 className="display-56 mb-4" style={{ color: "#1D4641" }}>Past Funerals</h1>
          <p className="text-18" style={{ color: "#463351" }}>
            Recordings are kept for 30 days. To access a past recording, you will need the private link and access code provided at the time of the service.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-[1440px] mx-auto px-[80px] pb-[80px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {past.map((s, i) => (
            <AnimatedSection key={s.id} delay={i * 60}>
              <div
                className="rounded-3xl p-6 flex flex-col gap-4"
                style={{ background: "white", border: "1px solid #C0BAC4", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div
                  className="rounded-2xl flex items-center justify-center"
                  style={{ height: 120, background: "linear-gradient(135deg, #1D4641, #2d6b62)" }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <Play size={20} color="white" fill="white" style={{ marginLeft: 2 }} />
                  </div>
                </div>
                <div>
                  <p className="text-12 font-semibold mb-1 uppercase tracking-wider" style={{ color: "#807388" }}>Recording available</p>
                  <h3 className="font-semibold text-base leading-snug" style={{ color: "#1D4641" }}>{s.name}</h3>
                  <p className="text-14 mt-1" style={{ color: "#807388" }}>{s.venue}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} style={{ color: "#807388" }} />
                    <span className="text-14" style={{ color: "#807388" }}>{s.date}</span>
                  </div>
                  <span className="text-12 font-medium px-2 py-1 rounded-full" style={{ background: "#F7F6F3", color: "#463351" }}>{s.duration}</span>
                </div>
                <button className="btn-outline-sm justify-center w-full">Access recording</button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
