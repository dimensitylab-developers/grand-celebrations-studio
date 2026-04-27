import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews — What Families Say · Dhimahi Banquet Hall" },
      {
        name: "description",
        content: "Verified reviews from families who celebrated weddings, engagements and milestones at Dhimahi Banquet Hall.",
      },
      { property: "og:title", content: "Reviews — Dhimahi Banquet Hall" },
      { property: "og:description", content: "4.2★ on Google · 320+ verified reviews." },
    ],
  }),
  component: TestimonialsPage,
});

const REVIEWS = [
  { name: "Priya Sharma", initials: "PS", event: "Wedding", text: "An absolutely magical experience. The team treated our wedding like their own family event. Every guest commented on how organised everything was." },
  { name: "Rohan Mehta", initials: "RM", event: "Engagement", text: "Booked Dhimahi for our roka and were taken aback by the decor. The photographers had a field day with the lighting setup." },
  { name: "Sneha Patil", initials: "SP", event: "Wedding", text: "The catering team handled both Jain and non-veg menus without a hitch. Everyone left full and happy." },
  { name: "Arjun Shah", initials: "AS", event: "Corporate", text: "Hosted our annual conference here — 250 attendees, AV worked flawlessly, food was top tier. We will return." },
  { name: "Reena Desai", initials: "RD", event: "Birthday", text: "My mother's 60th felt like royalty. The team customised the decor based on her favourite colours. Worth every rupee." },
  { name: "Kapoor Family", initials: "KF", event: "Wedding", text: "Three functions across two days handled flawlessly. The coordinator anticipated every need before we even asked." },
  { name: "Anjali Verma", initials: "AV", event: "Engagement", text: "We had a small intimate engagement here. Even with 80 guests they made it feel grand. Beautiful florals throughout." },
  { name: "Mihir Joshi", initials: "MJ", event: "Wedding", text: "From the first call to the farewell, every interaction was warm and professional. I recommend Dhimahi without reservation." },
  { name: "Tanvi Naik", initials: "TN", event: "Birthday", text: "Threw a 21st here for my daughter — they handled the DJ, decor, and theme cake. Stress-free planning." },
];

const FILTERS = ["All", "Wedding", "Engagement", "Birthday", "Corporate"];

function TestimonialsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? REVIEWS : REVIEWS.filter((r) => r.event === filter);

  return (
    <div className="pt-32 pb-28 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="max-w-2xl mb-12">
          <SectionLabel>Reviews</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl text-text-primary mt-6 leading-[1.05]">
            What families <span className="italic text-gold">say.</span>
          </h1>
          <div className="mt-8 inline-flex items-center gap-3 border border-divider px-5 py-3">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="font-display text-xl text-text-primary leading-none">4.2</span>
            <span className="w-px h-4 bg-divider" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-text-secondary">320+ Google Reviews</span>
          </div>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-medium border transition-colors ${
                filter === f
                  ? "bg-gold text-[color:var(--background)] border-gold"
                  : "border-divider text-text-secondary hover:border-gold-muted hover:text-text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
          {filtered.map((r, i) => (
            <Reveal
              key={`${filter}-${i}`}
              delay={i * 40}
              className="mb-5 break-inside-avoid bg-surface border border-divider p-7"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 border border-gold-muted text-gold font-display text-base grid place-items-center shrink-0">
                  {r.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-text-primary text-sm">{r.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gold-muted mt-0.5">
                    {r.event}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display italic text-lg text-text-primary leading-relaxed">
                "{r.text}"
              </p>
              <div className="mt-5 pt-4 border-t border-divider flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-text-secondary">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                  <path fill="#4285F4" d="M22.5 12.3c0-.7-.1-1.4-.2-2H12v3.8h5.9c-.3 1.4-1.1 2.5-2.3 3.3v2.7h3.7c2.1-2 3.4-4.9 3.4-7.8z" />
                  <path fill="#34A853" d="M12 23c3.1 0 5.7-1 7.6-2.8l-3.7-2.7c-1 .7-2.4 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3C3.7 20.5 7.6 23 12 23z" />
                  <path fill="#FBBC04" d="M5.6 14c-.2-.7-.4-1.4-.4-2s.1-1.3.4-2v-3H1.8C1 8.7.5 10.3.5 12s.5 3.3 1.3 4.8L5.6 14z" />
                  <path fill="#EA4335" d="M12 5.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.6 1.9 15 1 12 1 7.6 1 3.7 3.5 1.8 7.2L5.6 10c.9-2.7 3.4-4.6 6.4-4.6z" />
                </svg>
                Posted on Google
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
