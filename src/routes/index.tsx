import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Calendar, ChevronDown, Sparkles, Users, Utensils, MapPin, Star } from "lucide-react";
import heroImg from "@/assets/hero-banquet.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { GoldDivider } from "@/components/GoldDivider";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhimahi Banquet Hall — Luxury Weddings & Events in Virar West" },
      {
        name: "description",
        content:
          "Make your special moments grand at Virar's most-loved banquet hall. Weddings, engagements, corporate events. 500+ events · 4.2★ Google rated.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const HIGHLIGHTS = [
  { icon: Users, title: "Spacious Hall", text: "Up to 500 guests in regal comfort" },
  { icon: Sparkles, title: "Elegant Decor", text: "Bespoke theme setups by our in-house team" },
  { icon: Utensils, title: "Quality Catering", text: "Veg & non-veg menus crafted by award chefs" },
  { icon: MapPin, title: "Prime Location", text: "Minutes from Virar Station & BAPS Mandir" },
];

const TESTIMONIALS = [
  { name: "Priya & Rohan", event: "Wedding · Dec 2024", text: "From the mandap to the catering — every detail was perfect. Our families are still talking about it.", rating: 5 },
  { name: "Sneha Patil", event: "Engagement", text: "The decor team understood our vision instantly. The hall looked like a dream.", rating: 5 },
  { name: "Mehta Family", event: "Wedding · 600 guests", text: "Best banquet hall in Virar, hands down. Coordinator was a star.", rating: 5 },
  { name: "Arjun Shah", event: "Corporate Gala", text: "Premium experience at a fair price. Will book again.", rating: 4 },
  { name: "Kapoor Wedding", event: "3-day function", text: "They handled three functions across two days flawlessly. Complete trust.", rating: 5 },
  { name: "Reena D.", event: "Birthday Party", text: "Made my mother's 60th feel royal. Heartfelt thanks to the entire team.", rating: 5 },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury banquet hall decorated for an Indian wedding"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-maroon-deep/30" />

        <div className="relative z-10 text-center px-5 max-w-4xl fade-up">
          <GoldDivider className="mb-6" />
          <p className="font-decorative italic text-gold-light text-lg md:text-xl tracking-wide mb-3">
            Virar's most-loved luxury venue
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-cream text-shadow-soft">
            Make Your Special<br />
            <span className="text-gold italic">Moments Grand</span>
          </h1>
          <p className="mt-6 text-cream/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            For weddings, engagements & celebrations that families remember for generations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-gold text-maroon-deep px-7 py-3.5 rounded-full font-semibold shadow-gold-lg gold-shimmer transition-transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[oklch(0.66_0.18_145)] text-[oklch(0.78_0.16_145)] hover:bg-[oklch(0.66_0.18_145)] hover:text-white px-7 py-3 rounded-full font-semibold transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-cream/80 text-cream hover:bg-cream hover:text-maroon-deep px-7 py-3 rounded-full font-semibold transition-all"
            >
              <Calendar className="w-4 h-4" /> Book Free Visit
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold scroll-arrow">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-maroon py-14 mandala-pattern">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 500, suffix: "+", label: "Events Hosted" },
            { value: 4.2, suffix: "★", label: "Google Rating", float: true },
            { value: 15, suffix: "+", label: "Years Legacy" },
            { value: 1000, suffix: "+", label: "Happy Guests" },
          ].map((s, i) => (
            <div key={i} className="fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="font-display text-5xl md:text-6xl text-gold">
                {s.float ? <>4.2{s.suffix}</> : <Counter end={s.value} suffix={s.suffix} />}
              </div>
              <div className="mt-2 text-cream/85 uppercase tracking-widest text-xs md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 px-5 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-sm">Why families choose us</p>
            <h2 className="font-display text-4xl md:text-5xl text-maroon mt-3">An experience worth remembering</h2>
            <GoldDivider className="mt-5" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={i}
                className="glass-gold rounded-2xl p-7 group hover:-translate-y-2 hover:shadow-gold-lg transition-all duration-500 hover:border-gold"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-gold grid place-items-center text-maroon-deep mb-5 group-hover:scale-110 transition-transform">
                  <h.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl text-maroon mb-2">{h.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-20 px-5 lg:px-8 bg-cream-card">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-sm">A glimpse</p>
            <h2 className="font-display text-4xl md:text-5xl text-maroon mt-3">Moments worth framing</h2>
            <GoldDivider className="mt-5" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[g1, g2, g5, g4, g3, g6].map((src, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-xl shadow-warm ${
                  i === 0 ? "row-span-2 aspect-[3/5]" : i === 2 ? "row-span-2 aspect-[3/5]" : "aspect-square md:aspect-[4/3]"
                }`}
              >
                <img
                  src={src}
                  alt={`Wedding moment ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-gradient-gold text-maroon-deep px-8 py-3.5 rounded-full font-semibold shadow-gold gold-shimmer hover:-translate-y-0.5 transition-transform"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-sm">Loved by families</p>
            <h2 className="font-display text-4xl md:text-5xl text-maroon mt-3">Words from our guests</h2>
            <GoldDivider className="mt-5" />
          </div>
        </div>

        <div className="pause-on-hover relative">
          <div className="flex gap-6 marquee w-max">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="w-[340px] md:w-[400px] shrink-0 bg-cream-card rounded-2xl p-7 shadow-elegant border border-gold/15"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-decorative italic text-lg text-foreground/85 leading-relaxed mb-5">
                  "{t.text}"
                </p>
                <div className="border-t border-gold/15 pt-4">
                  <p className="font-display text-lg text-maroon">{t.name}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <section className="bg-gradient-maroon mandala-pattern py-20 px-5 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto text-center relative">
          <p className="font-decorative italic text-gold-light uppercase tracking-[0.3em] text-sm">Booking now</p>
          <h2 className="font-display text-4xl md:text-6xl text-cream mt-3 leading-tight">
            Limited Dates Available<br />
            <span className="text-gold italic">for the 2025 Season</span>
          </h2>
          <p className="mt-5 text-cream/80 max-w-xl mx-auto">
            Don't miss your perfect wedding date — peak November to February dates fill within weeks.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-gold text-maroon-deep px-8 py-4 rounded-full font-semibold shadow-gold-lg gold-shimmer mt-8 hover:-translate-y-0.5 transition-transform"
          >
            <Calendar className="w-5 h-5" /> Check Availability
          </Link>
        </div>
      </section>
    </div>
  );
}
