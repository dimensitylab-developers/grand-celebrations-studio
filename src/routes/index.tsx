import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Calendar, Star } from "lucide-react";
import heroImg from "@/assets/hero-banquet.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const WHATSAPP = "oklch(0.62 0.16 145)";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhimahi Banquet Hall — Weddings & Celebrations in Virar West" },
      {
        name: "description",
        content:
          "A family banquet hall in Virar West hosting weddings and celebrations since 2009. Up to 500 guests. 4.2★ Google rated.",
      },
      { property: "og:title", content: "Dhimahi Banquet Hall — Weddings in Virar West" },
      {
        property: "og:description",
        content: "A family legacy of grand celebrations. Since 2009.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: "500+", label: "Events Hosted" },
  { value: "4.2★", label: "Google Rating" },
  { value: "320+", label: "Verified Reviews" },
  { value: "15+", label: "Years of Service" },
];

const FEATURES = [
  { num: "01", title: "Up to 500 guests", text: "A pillar-free hall that adapts to mandap, banquet or theatre layouts." },
  { num: "02", title: "Dedicated coordinator", text: "One person handles every detail of your function — from rehearsal to vidaai." },
  { num: "03", title: "In-house catering", text: "Pure veg, non-veg, Jain and Swaminarayan menus prepared on-site." },
  { num: "04", title: "Bespoke decor", text: "Florals, mandap and stage design crafted by our in-house team." },
  { num: "05", title: "Near BAPS Mandir", text: "Five minutes from Virar Station. Ample parking, easy guest access." },
  { num: "06", title: "Transparent pricing", text: "Written quotes, itemised costs. What you see is what you pay." },
];

const TESTIMONIALS = [
  { name: "Priya & Rohan", event: "Wedding · Dec 2024", text: "Every detail was handled. Our families are still talking about the mandap." },
  { name: "Sneha Patil", event: "Engagement", text: "The decor team understood our vision instantly. The hall looked like a dream." },
  { name: "The Mehta Family", event: "Wedding · 600 guests", text: "Best banquet hall in Virar. The coordinator anticipated every need." },
  { name: "Arjun Shah", event: "Corporate Gala", text: "Premium experience at a fair price. We will be back next year." },
  { name: "The Kapoors", event: "Three-day function", text: "Three functions across two days, handled flawlessly. Complete trust." },
  { name: "Reena D.", event: "60th Birthday", text: "They made my mother's evening feel royal. Heartfelt thanks to the team." },
];

const GALLERY = [g1, g2, g3, g4, g5, g6];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Banquet hall set for an Indian wedding"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[color:var(--background)]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--background)]/60 via-transparent to-[color:var(--background)]" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <Reveal>
            <p className="label-eyebrow inline-flex items-center gap-3 justify-center">
              <span className="inline-block w-8 h-px bg-[color:var(--gold-muted)]" />
              Est. 2009 · Virar West
              <span className="inline-block w-8 h-px bg-[color:var(--gold-muted)]" />
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] mt-8 leading-[1.05] text-text-primary">
              A family legacy of<br />
              <span className="italic text-gold">grand celebrations</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Weddings, engagements and milestone events — held in a hall that families
              trust with their most important moments.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-[color:var(--background)] px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-85 transition-opacity"
              >
                <Phone className="w-3.5 h-3.5" strokeWidth={2.2} /> Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-75 transition-opacity"
                style={{ borderColor: WHATSAPP, color: WHATSAPP }}
              >
                <MessageCircle className="w-3.5 h-3.5" strokeWidth={2.2} /> WhatsApp
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold text-gold px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-75 transition-opacity"
              >
                <Calendar className="w-3.5 h-3.5" strokeWidth={2.2} /> Book a Visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-divider bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className={`text-center px-4 ${i > 0 ? "md:border-l border-divider" : ""} ${i === 1 ? "border-l border-divider" : ""} ${i === 2 ? "border-t md:border-t-0 border-divider pt-10 md:pt-0" : ""} ${i === 3 ? "border-t md:border-t-0 border-l border-divider pt-10 md:pt-0" : ""}`}
            >
              <div className="font-display text-5xl md:text-6xl text-gold leading-none">{s.value}</div>
              <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-text-secondary">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="max-w-2xl mb-16">
            <SectionLabel>Why families choose us</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-5 leading-[1.1]">
              Every detail, <span className="italic text-gold">handled.</span>
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              We've spent fifteen years refining one thing — how to host a family well.
              These are the six promises that come with every booking.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.num}
                delay={i * 60}
                className={`p-8 lg:p-10 border-divider ${i % 3 !== 0 ? "lg:border-l" : ""} ${i % 2 !== 0 ? "sm:border-l lg:border-l-0" : ""} ${i % 3 === 1 || i % 3 === 2 ? "lg:border-l" : ""} ${i >= 2 ? "sm:border-t" : ""} ${i >= 3 ? "lg:border-t" : ""} border-divider`}
              >
                <div className="text-[11px] tracking-[0.3em] text-gold-muted">{f.num}</div>
                <h3 className="mt-4 font-display text-2xl text-text-primary">{f.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-28 px-6 lg:px-10 border-t border-divider">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="flex items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel>From the venue</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-5">
                Recent celebrations
              </h2>
            </div>
            <Link
              to="/gallery"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold border-b border-gold-muted pb-1 hover:text-text-primary transition-colors"
            >
              View Gallery
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {GALLERY.map((src, i) => (
              <Reveal
                key={i}
                delay={i * 50}
                className={`overflow-hidden ${i === 0 ? "md:row-span-2 aspect-[4/5] md:aspect-auto" : "aspect-[4/5]"}`}
              >
                <img
                  src={src}
                  alt={`Event moment ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-opacity duration-500 hover:opacity-85"
                />
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold border-b border-gold-muted pb-1"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — marquee only */}
      <section className="py-28 border-t border-divider overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-14">
          <Reveal>
            <SectionLabel>What guests say</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-5">
              Voices from the <span className="italic text-gold">families we've hosted</span>
            </h2>
          </Reveal>
        </div>

        <div className="pause-on-hover relative">
          <div className="flex gap-6 marquee w-max px-3">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <article
                key={i}
                className="w-[340px] md:w-[420px] shrink-0 bg-surface border border-divider p-8"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display italic text-xl text-text-primary leading-relaxed">
                  "{t.text}"
                </p>
                <div className="mt-6 pt-5 border-t border-divider">
                  <p className="text-sm text-text-primary">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-text-secondary mt-1">{t.event}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-28 px-6 lg:px-10 border-t border-divider">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionLabel className="justify-center">Booking · 2025</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl text-text-primary mt-6 leading-[1.05]">
              Limited dates for <span className="italic text-gold">2025.</span>
            </h2>
            <p className="mt-6 text-text-secondary leading-relaxed max-w-lg mx-auto">
              Peak November to February dates fill within weeks. Send us your preferred date
              and we'll respond within the hour.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-[color:var(--background)] px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-85 transition-opacity"
              >
                Check Availability
              </Link>
              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-75 transition-opacity"
              >
                Call +91 98765 43210
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
