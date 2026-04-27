import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { GoldDivider } from "@/components/GoldDivider";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Weddings, Engagements, Catering & Decor" },
      { name: "description", content: "Wedding functions, engagement ceremonies, birthdays, corporate events, in-house catering and decoration at Dhimahi Banquet Hall." },
      { property: "og:title", content: "Services — Dhimahi Banquet Hall" },
      { property: "og:description", content: "Full-service venue for weddings, engagements, corporate events and more." },
      { property: "og:image", content: g1 },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    img: g1,
    title: "Wedding Functions",
    price: "From ₹1,50,000",
    features: ["Hall + mandap setup", "Bridal room with hair & makeup space", "DJ + sound system", "Up to 500 guests", "Dedicated coordinator"],
  },
  {
    img: g4,
    title: "Engagement Ceremonies",
    price: "From ₹75,000",
    features: ["Stage decor with florals", "Lounge seating arrangement", "Photographer-ready lighting", "Welcome drinks", "Ring exchange setup"],
  },
  {
    img: g5,
    title: "Birthday Parties",
    price: "From ₹40,000",
    features: ["Themed decoration", "Custom cake setup", "Kids entertainment area", "Multi-cuisine menu", "Photo booth"],
  },
  {
    img: g6,
    title: "Corporate Events",
    price: "From ₹60,000",
    features: ["Theatre / banquet seating", "Projector + AV system", "High-speed Wi-Fi", "Working lunch menus", "Branded backdrops"],
  },
  {
    img: g3,
    title: "In-house Catering",
    price: "From ₹450 / plate",
    features: ["Pure veg & non-veg menus", "Live counters", "North & South Indian cuisines", "Jain & Swaminarayan options", "Dessert stations"],
  },
  {
    img: g2,
    title: "Decoration",
    price: "From ₹30,000",
    features: ["Floral mandap design", "Stage backdrops", "Entrance archways", "Ceiling installations", "Theme-based concepts"],
  },
];

function ServicesPage() {
  return (
    <div className="pt-28 pb-10">
      <div className="text-center px-5 mb-14">
        <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-sm">What we do</p>
        <h1 className="font-display text-5xl md:text-6xl text-maroon mt-3">Our Services</h1>
        <GoldDivider className="mt-5" />
        <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
          From intimate ring ceremonies to 500-guest weddings — handled end to end.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 space-y-16 lg:space-y-24">
        {SERVICES.map((s, i) => (
          <div key={i}>
            <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              <div className="[direction:ltr]">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover rounded-3xl shadow-warm border-4 border-gold/20"
                />
              </div>
              <div className="[direction:ltr]">
                <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-xs">Service {String(i + 1).padStart(2, "0")}</p>
                <h2 className="font-display text-4xl text-maroon mt-2">{s.title}</h2>
                <p className="font-display text-2xl text-gold mt-2">{s.price}</p>
                <ul className="mt-6 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-foreground/80">
                      <span className="w-5 h-5 rounded-full bg-gradient-gold grid place-items-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-maroon-deep" strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 bg-gradient-gold text-maroon-deep px-7 py-3 rounded-full font-semibold shadow-gold gold-shimmer hover:-translate-y-0.5 transition-transform"
                >
                  Enquire Now →
                </Link>
              </div>
            </div>
            {i < SERVICES.length - 1 && (
              <div className="mt-16 lg:mt-24">
                <GoldDivider />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
