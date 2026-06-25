"use client";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  {
    slug: "how-funeral-live-streaming-works",
    category: "How it works",
    title: "How funeral live streaming works — a step-by-step guide",
    excerpt: "From booking to broadcast, we walk you through exactly what happens on the day so families know what to expect.",
    date: "18 June 2026",
    readTime: "5 min read",
    color: "#1D4641",
  },
  {
    slug: "grieving-at-a-distance",
    category: "Grief & loss",
    title: "Grieving at a distance: how technology is changing the way we farewell loved ones",
    excerpt: "Geographical distance no longer has to mean emotional distance. We explore how live streaming is reshaping modern mourning.",
    date: "10 June 2026",
    readTime: "7 min read",
    color: "#8B104E",
  },
  {
    slug: "what-to-say-eulogy",
    category: "Planning a service",
    title: "What to say in a eulogy — tips from those who've been there",
    excerpt: "Writing a eulogy is one of the hardest things a person can do. Here is advice from families who've honoured loved ones through words.",
    date: "2 June 2026",
    readTime: "6 min read",
    color: "#4D1C34",
  },
  {
    slug: "choosing-a-funeral-package",
    category: "Our services",
    title: "Live stream, slideshow or memorial video — which package is right for you?",
    excerpt: "A straightforward comparison of our three packages to help you choose the right way to capture and share the service.",
    date: "25 May 2026",
    readTime: "4 min read",
    color: "#2d6b62",
  },
  {
    slug: "internet-connection-during-service",
    category: "Technical",
    title: "What happens if the internet drops during a live stream?",
    excerpt: "We explain our redundancy systems — including 4G/5G mobile backup — and why your stream stays live no matter what.",
    date: "15 May 2026",
    readTime: "3 min read",
    color: "#1D4641",
  },
  {
    slug: "regional-funerals-australia",
    category: "Coverage",
    title: "Covering regional and remote Australia — how we reach every corner of the country",
    excerpt: "From the Kimberley to Far North Queensland, our technicians travel to ensure no family is too far for a professional stream.",
    date: "5 May 2026",
    readTime: "5 min read",
    color: "#8B104E",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div style={{ background: "#F7F6F3", paddingTop: 80 }}>
      <section className="max-w-[1440px] mx-auto px-[80px] py-[80px]">
        <AnimatedSection className="max-w-[640px]">
          <p className="text-14 font-semibold mb-4 uppercase tracking-widest" style={{ color: "#8B104E" }}>Our blog</p>
          <h1 className="display-56 mb-4" style={{ color: "#1D4641" }}>Resources & insights</h1>
          <p className="text-18" style={{ color: "#463351" }}>
            Guides, advice and stories to help families navigate live streaming, funeral planning, and honouring loved ones from afar.
          </p>
        </AnimatedSection>
      </section>

      {/* Featured post */}
      <section className="max-w-[1440px] mx-auto px-[80px] pb-[80px]">
        <AnimatedSection>
          <div
            className="card-rounded p-12 flex gap-12 items-center flex-wrap"
            style={{ background: featured.color }}
          >
            <div className="flex-1 min-w-[280px]">
              <span className="text-12 font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
                {featured.category}
              </span>
              <h2 className="display-48 mb-4" style={{ color: "white" }}>{featured.title}</h2>
              <p className="text-18 mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>{featured.excerpt}</p>
              <div className="flex items-center gap-6">
                <span className="text-14" style={{ color: "rgba(255,255,255,0.5)" }}>{featured.date} · {featured.readTime}</span>
                <Link href={`/blog/${featured.slug}`} className="btn-ghost-white" style={{ fontSize: 14 }}>Read article →</Link>
              </div>
            </div>
            <div
              className="card-rounded-xl flex-shrink-0"
              style={{ width: 380, height: 260, background: "rgba(255,255,255,0.1)" }}
            />
          </div>
        </AnimatedSection>
      </section>

      {/* Post grid */}
      <section className="max-w-[1440px] mx-auto px-[80px] pb-[80px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 60}>
              <Link href={`/blog/${post.slug}`} className="block h-full group" style={{ textDecoration: "none" }}>
                <div
                  className="card-rounded-xl overflow-hidden h-full flex flex-col"
                  style={{ background: "white", border: "1px solid #C0BAC4", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div className="h-[160px] flex-shrink-0" style={{ background: post.color }} />
                  <div className="p-6 flex flex-col flex-1 gap-3">
                    <span className="text-12 font-semibold uppercase tracking-wider" style={{ color: "#8B104E" }}>{post.category}</span>
                    <h3 className="font-semibold text-base leading-snug flex-1" style={{ color: "#1D4641" }}>{post.title}</h3>
                    <p className="text-14" style={{ color: "#463351", lineHeight: 1.6 }}>{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid #E8E4EC" }}>
                      <span className="text-12" style={{ color: "#807388" }}>{post.date}</span>
                      <span className="text-12 font-medium" style={{ color: "#807388" }}>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-[80px] px-[80px]" style={{ background: "#1D4641" }}>
        <div className="max-w-[640px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="display-48 mb-4" style={{ color: "white" }}>Stay informed</h2>
            <p className="text-18 mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              Get our latest guides and resources delivered to your inbox.
            </p>
            <div className="flex gap-3 max-w-[440px] mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-xl px-4 py-3 text-16 outline-none"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontFamily: "'Poppins',sans-serif" }}
                onFocus={e => (e.target.style.borderColor = "rgba(255,255,255,0.6)")}
                onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
              />
              <button className="btn-primary flex-shrink-0">Subscribe</button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
