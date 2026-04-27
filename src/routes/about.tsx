import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-venue.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dhimahi Banquet Hall — Since 2009" },
      {
        name: "description",
        content:
          "A family banquet hall in Virar West, hosting weddings and milestone events since 2009. 4.2★ on Google · 500+ events hosted.",
      },
      { property: "og:title", content: "About Dhimahi Banquet Hall" },
      {
        property: "og:description",
        content: "Family-run since 2009. A hall built for weddings that families remember.",
      },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const REASONS = [
  { num: "01", title: "Owner-led service", text: "The family who built Dhimahi still walks the floor on event day. Decisions get made in the moment." },
  { num: "02", title: "One coordinator, start to finish", text: "From rehearsal to vidaai, your function is handled by one person who knows your schedule by heart." },
  { num: "03", title: "Catering done in our kitchen", text: "Pure veg, non-veg, Jain and Swaminarayan — all prepared on-site. Tasting sessions before you confirm." },
  { num: "04", title: "Decor that fits your brief", text: "Floral mandaps, stage backdrops, lighting design — built around your colours, not a catalogue." },
  { num: "05", title: "Walking distance from BAPS Mandir", text: "Five minutes from Virar Station. Ample parking. Guest pickup easy to arrange." },
  { num: "06", title: "Quotes you can read", text: "One page. Itemised. Nothing added on event day. Pricing is the same for everyone." },
];

function AboutPage() {
  return (
    <div className="pt-32 pb-28">
      {/* OPENING */}
      <section className="px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <Reveal>
            <SectionLabel>Our story</SectionLabel>
            <h1 className="font-display text-5xl md:text-7xl text-text-primary mt-6 leading-[1.05] max-w-3xl">
              A family legacy of <span className="italic text-gold">grand celebrations.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section className="px-6 lg:px-10 mt-20">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-6">
            <img
              src={aboutImg}
              alt="Inside Dhimahi Banquet Hall"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full aspect-[4/5] object-cover"
            />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:pt-10">
            <div className="space-y-6 text-text-secondary leading-[1.8]">
              <p className="text-text-primary text-lg leading-[1.7]">
                Dhimahi opened its doors in 2009 with a single idea — that families in Virar
                shouldn't have to travel to Mumbai for a hall that takes their wedding seriously.
              </p>
              <p>
                Three generations of the same family have worked here since. We've hosted over
                five hundred weddings, engagements, mehendi nights and milestone birthdays.
                Many of the couples we hosted in our first years now bring their parents'
                anniversaries back to us.
              </p>
              <p>
                What you book is not a venue with optional add-ons. It's a hall, a kitchen, a
                decor team and a coordinator who treats your function as her own family's wedding.
              </p>
            </div>

            <blockquote className="mt-12 border-l-2 border-gold pl-6 py-2">
              <p className="font-display italic text-2xl md:text-3xl text-text-primary leading-snug">
                "We don't rent halls. We host families."
              </p>
              <footer className="mt-4 text-[11px] uppercase tracking-[0.22em] text-text-secondary">
                — Hitesh Rao, Founder
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* STATS CALLOUT */}
      <section className="mt-28 border-y border-divider bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-divider">
          {[
            { value: "4.2★", label: "Google Rating" },
            { value: "320+", label: "Verified Reviews" },
            { value: "500+", label: "Events Hosted" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center py-6 md:py-0 md:px-6">
              <div className="font-display text-6xl text-gold leading-none">{s.value}</div>
              <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-text-secondary">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SIX REASONS */}
      <section className="px-6 lg:px-10 mt-28">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="max-w-2xl mb-16">
            <SectionLabel>Why families choose Dhimahi</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-5 leading-[1.1]">
              Six reasons you'll feel the difference.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-divider">
            {REASONS.map((r, i) => (
              <Reveal
                key={r.num}
                delay={i * 50}
                className="border-r border-b border-divider p-8 lg:p-10"
              >
                <div className="text-[11px] tracking-[0.3em] text-gold-muted">{r.num}</div>
                <h3 className="mt-4 font-display text-2xl text-text-primary">{r.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{r.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-[color:var(--background)] px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-85 transition-opacity"
            >
              Book a Site Visit
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
