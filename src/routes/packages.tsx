import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { GoldDivider } from "@/components/GoldDivider";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Dhimahi Banquet Hall" },
      { name: "description", content: "Silver, Gold and Platinum wedding packages at Dhimahi Banquet Hall. Transparent pricing, no hidden costs." },
      { property: "og:title", content: "Packages & Pricing — Dhimahi" },
      { property: "og:description", content: "Three packages tailored for every celebration." },
    ],
  }),
  component: PackagesPage,
});

const PACKAGES = [
  {
    name: "Silver",
    price: "₹75,000",
    note: "Intimate gatherings",
    features: ["Hall for 4 hours", "Up to 150 guests", "Basic stage decor", "Standard lighting", "Welcome drinks", "Dedicated host"],
    variant: "cream",
  },
  {
    name: "Gold",
    price: "₹1,50,000",
    note: "Most popular for weddings",
    badge: "Most Popular",
    features: ["Hall for 6 hours", "Up to 350 guests", "Premium floral mandap", "DJ + sound system", "Full catering — 8 courses", "Bridal room", "Photographer-ready lighting", "Personal coordinator"],
    variant: "maroon",
  },
  {
    name: "Platinum",
    price: "Custom Quote",
    note: "Multi-day grand celebrations",
    features: ["Full venue, full day", "500+ guests capacity", "Bespoke decor concept", "Live food counters", "Premium bar service", "Valet parking", "Honeymoon suite night", "End-to-end planning"],
    variant: "dark",
  },
];

function PackagesPage() {
  return (
    <div className="pt-28 pb-20 px-5 lg:px-8">
      <div className="text-center mb-14 max-w-[1280px] mx-auto">
        <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-sm">Transparent pricing</p>
        <h1 className="font-display text-5xl md:text-6xl text-maroon mt-3">Choose Your Package</h1>
        <GoldDivider className="mt-5" />
        <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
          Three thoughtfully designed packages — and we'll happily customise any of them.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {PACKAGES.map((p) => {
          const isMaroon = p.variant === "maroon";
          const isDark = p.variant === "dark";
          return (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                isMaroon
                  ? "bg-gradient-maroon text-cream shadow-gold-lg border-2 border-gold md:scale-105 md:-mt-2 md:mb-2"
                  : isDark
                  ? "bg-maroon-deep text-cream shadow-warm border border-gold/40 mandala-pattern"
                  : "bg-cream-card text-foreground border-2 border-gold/30 shadow-warm"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-gradient-gold text-maroon-deep px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-gold">
                  <Sparkles className="w-3 h-3" /> {p.badge}
                </div>
              )}
              <p className={`font-decorative italic uppercase tracking-[0.3em] text-xs ${isMaroon || isDark ? "text-gold-light" : "text-gold-dark"}`}>
                {p.note}
              </p>
              <h3 className={`font-display text-4xl mt-2 ${isMaroon || isDark ? "text-gold" : "text-maroon"}`}>{p.name}</h3>
              <p className="font-display text-3xl mt-4">{p.price}</p>
              <div className={`my-6 h-px ${isMaroon || isDark ? "bg-gold/30" : "bg-gold/40"}`} />
              <ul className="space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isMaroon || isDark ? "text-gold" : "text-gold-dark"}`} strokeWidth={3} />
                    <span className={isMaroon || isDark ? "text-cream/90" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#custom"
                className={`mt-8 text-center py-3.5 rounded-full font-semibold transition-all gold-shimmer ${
                  isMaroon
                    ? "bg-gradient-gold text-maroon-deep shadow-gold hover:shadow-gold-lg"
                    : isDark
                    ? "bg-gold/15 text-gold border border-gold hover:bg-gradient-gold hover:text-maroon-deep"
                    : "bg-maroon text-cream hover:bg-maroon-deep"
                }`}
              >
                {isDark ? "Request Quote" : "Book This Package"}
              </a>
            </div>
          );
        })}
      </div>

      {/* Custom form */}
      <div id="custom" className="max-w-3xl mx-auto mt-24 bg-cream-card border border-gold/30 rounded-3xl p-8 md:p-12 shadow-warm">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-maroon">Need something custom?</h2>
          <p className="text-foreground/70 mt-2">Tell us your vision and we'll send a tailored proposal.</p>
        </div>
        <form className="grid sm:grid-cols-3 gap-3" onSubmit={(e) => e.preventDefault()}>
          <input required placeholder="Your Name" className="px-4 py-3 rounded-lg bg-cream border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm" />
          <input required type="tel" placeholder="Phone" className="px-4 py-3 rounded-lg bg-cream border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm" />
          <select required defaultValue="" className="px-4 py-3 rounded-lg bg-cream border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm">
            <option value="" disabled>Event Type</option>
            <option>Wedding</option><option>Engagement</option><option>Birthday</option><option>Corporate</option>
          </select>
          <button type="submit" className="sm:col-span-3 mt-2 bg-gradient-gold text-maroon-deep py-3.5 rounded-full font-semibold shadow-gold gold-shimmer">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
