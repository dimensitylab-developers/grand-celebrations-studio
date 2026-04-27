import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";
import { GoldDivider } from "@/components/GoldDivider";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews — What Families Say About Dhimahi" },
      { name: "description", content: "Real reviews from couples and families who celebrated at Dhimahi Banquet Hall in Virar West." },
      { property: "og:title", content: "Reviews — Dhimahi Banquet Hall" },
      { property: "og:description", content: "4.2★ Google rated. Read what our guests say." },
    ],
  }),
  component: TestimonialsPage,
});

const REVIEWS = [
  { name: "Priya Sharma", initials: "PS", color: "oklch(0.72 0.13 80)", event: "Wedding", text: "Absolutely magical experience. The team treated our wedding like their own family event. Every guest commented on how organised everything was.", rating: 5 },
  { name: "Rohan Mehta", initials: "RM", color: "oklch(0.55 0.18 25)", event: "Engagement", text: "Booked Dhimahi for our roka and were blown away by the decor. Photographers had a field day with the lighting setup.", rating: 5 },
  { name: "Sneha Patil", initials: "SP", color: "oklch(0.45 0.15 320)", event: "Wedding", text: "The catering team handled both Jain and non-veg menus seamlessly. Everyone left full and happy.", rating: 5 },
  { name: "Arjun Shah", initials: "AS", color: "oklch(0.50 0.18 220)", event: "Corporate", text: "Hosted our annual conference here — 250 attendees, AV worked flawlessly, food was top-tier. Will return.", rating: 4 },
  { name: "Reena Desai", initials: "RD", color: "oklch(0.65 0.14 50)", event: "Birthday", text: "My mum's 60th felt like royalty. The team customised the decor based on her favourite colours. Worth every rupee.", rating: 5 },
  { name: "Kapoor Family", initials: "KF", color: "oklch(0.30 0.13 12)", event: "Wedding", text: "Three functions across two days handled flawlessly. The coordinator anticipated every need before we even asked.", rating: 5 },
  { name: "Anjali Verma", initials: "AV", color: "oklch(0.58 0.16 145)", event: "Engagement", text: "We had a small intimate engagement here. Even with 80 guests they made it feel grand. Beautiful florals.", rating: 5 },
  { name: "Mihir Joshi", initials: "MJ", color: "oklch(0.60 0.15 285)", event: "Wedding", text: "From the first call to the farewell, every interaction was warm and professional. Highly recommend.", rating: 5 },
  { name: "Tanvi Naik", initials: "TN", color: "oklch(0.55 0.18 15)", event: "Birthday", text: "Threw a 21st here for my daughter — they handled the DJ, decor, theme cake. Stress-free planning.", rating: 4 },
];

const FILTERS = ["All", "Wedding", "Engagement", "Birthday", "Corporate"];

function TestimonialsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? REVIEWS : REVIEWS.filter((r) => r.event === filter);

  return (
    <div className="pt-28 pb-20 px-5 lg:px-8">
      <div className="text-center mb-12 max-w-[1280px] mx-auto">
        <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-sm">Voices of trust</p>
        <h1 className="font-display text-5xl md:text-6xl text-maroon mt-3">What Families Say</h1>
        <GoldDivider className="mt-5" />
        <div className="inline-flex items-center gap-2 mt-6 bg-cream-card px-5 py-2 rounded-full border border-gold/30">
          <Star className="w-4 h-4 fill-gold text-gold" />
          <span className="font-display text-lg text-maroon">4.2</span>
          <span className="text-sm text-muted-foreground">· 320+ Google Reviews</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === f
                ? "bg-gradient-gold text-maroon-deep shadow-gold"
                : "bg-cream-card border border-gold/30 text-foreground/70 hover:border-gold hover:text-maroon"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-5">
        {filtered.map((r, i) => {
          const alt = i % 2 === 1;
          return (
            <div
              key={i}
              className={`mb-5 break-inside-avoid rounded-2xl p-6 border shadow-warm ${
                alt ? "bg-maroon text-cream border-gold/30" : "bg-cream-card text-foreground border-gold/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full grid place-items-center font-display text-lg text-cream shrink-0"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-display text-lg ${alt ? "text-gold" : "text-maroon"}`}>{r.name}</p>
                  <span className={`inline-block text-[10px] uppercase tracking-widest mt-0.5 px-2 py-0.5 rounded-full ${alt ? "bg-gold/20 text-gold-light" : "bg-gold/15 text-gold-dark"}`}>
                    {r.event}
                  </span>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className={`font-decorative italic text-base leading-relaxed ${alt ? "text-cream/90" : "text-foreground/85"}`}>
                "{r.text}"
              </p>
              <div className={`mt-4 pt-3 border-t flex items-center gap-2 text-xs ${alt ? "border-gold/20 text-cream/60" : "border-gold/15 text-muted-foreground"}`}>
                <svg viewBox="0 0 24 24" className="w-4 h-4"><path fill="#4285F4" d="M22.5 12.3c0-.7-.1-1.4-.2-2H12v3.8h5.9c-.3 1.4-1.1 2.5-2.3 3.3v2.7h3.7c2.1-2 3.4-4.9 3.4-7.8z"/><path fill="#34A853" d="M12 23c3.1 0 5.7-1 7.6-2.8l-3.7-2.7c-1 .7-2.4 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3C3.7 20.5 7.6 23 12 23z"/><path fill="#FBBC04" d="M5.6 14c-.2-.7-.4-1.4-.4-2s.1-1.3.4-2v-3H1.8C1 8.7.5 10.3.5 12s.5 3.3 1.3 4.8L5.6 14z"/><path fill="#EA4335" d="M12 5.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.6 1.9 15 1 12 1 7.6 1 3.7 3.5 1.8 7.2L5.6 10c.9-2.7 3.4-4.6 6.4-4.6z"/></svg>
                Posted on Google
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
