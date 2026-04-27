import { createFileRoute, Link } from "@tanstack/react-router";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Weddings, Catering & Decor · Dhimahi" },
      {
        name: "description",
        content:
          "Weddings, engagements, mehendi, corporate events, in-house catering and decoration at Dhimahi Banquet Hall, Virar West.",
      },
      { property: "og:title", content: "Services — Dhimahi Banquet Hall" },
      {
        property: "og:description",
        content: "End-to-end service for weddings, engagements and corporate events.",
      },
      { property: "og:image", content: g1 },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    img: g1,
    num: "01",
    title: "Wedding Functions",
    price: "From ₹1,50,000",
    features: ["Hall and mandap setup", "Bridal room with hair and makeup space", "DJ and sound system", "Up to 500 guests"],
  },
  {
    img: g4,
    num: "02",
    title: "Engagement Ceremonies",
    price: "From ₹75,000",
    features: ["Stage decor with florals", "Lounge seating arrangement", "Photographer-ready lighting", "Welcome drinks service"],
  },
  {
    img: g5,
    num: "03",
    title: "Mehendi & Sangeet",
    price: "From ₹50,000",
    features: ["Outdoor or indoor setup", "Themed lounge decor", "DJ and dance floor", "Catered menus included"],
  },
  {
    img: g6,
    num: "04",
    title: "Corporate Events",
    price: "From ₹60,000",
    features: ["Theatre or banquet seating", "Projector and AV system", "High-speed Wi-Fi", "Working lunch menus"],
  },
  {
    img: g3,
    num: "05",
    title: "In-house Catering",
    price: "From ₹450 per plate",
    features: ["Pure veg and non-veg menus", "Jain and Swaminarayan options", "North and South Indian cuisines", "Live counters and dessert stations"],
  },
  {
    img: g2,
    num: "06",
    title: "Decoration",
    price: "From ₹30,000",
    features: ["Floral mandap design", "Stage backdrops and entrance arches", "Ceiling installations", "Theme-based concepts"],
  },
];

function ServicesPage() {
  return (
    <div className="pt-32 pb-28 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="max-w-2xl mb-16">
          <SectionLabel>What we do</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl text-text-primary mt-6 leading-[1.05]">
            From mehendi to <span className="italic text-gold">vidaai.</span>
          </h1>
          <p className="mt-6 text-text-secondary leading-relaxed">
            Six services, one team. Book individually or as part of a package — pricing
            stays transparent either way.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider border border-divider">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.num}
              delay={i * 60}
              className="bg-surface flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 text-[11px] tracking-[0.3em] text-gold bg-background/70 px-2.5 py-1">
                  {s.num}
                </div>
              </div>
              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <h2 className="font-display text-2xl text-text-primary">{s.title}</h2>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-gold">{s.price}</p>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                      <span className="text-gold-muted shrink-0 mt-2 inline-block w-3 h-px bg-gold-muted" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center justify-center gap-2 border border-gold text-gold px-5 py-3 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-gold hover:text-[color:var(--background)] transition-colors self-start"
                >
                  Enquire
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
