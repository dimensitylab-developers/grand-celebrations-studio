import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Dhimahi Banquet Hall" },
      {
        name: "description",
        content:
          "Silver, Gold and Platinum packages at Dhimahi. Transparent pricing for weddings, engagements and milestone celebrations.",
      },
      { property: "og:title", content: "Packages — Dhimahi Banquet Hall" },
      { property: "og:description", content: "Three packages. One transparent quote." },
    ],
  }),
  component: PackagesPage,
});

const PACKAGES = [
  {
    name: "Silver",
    price: "₹75,000",
    note: "Intimate gatherings",
    features: ["Hall booking — 4 hours", "Up to 150 guests", "Standard stage decor", "Welcome drinks", "Dedicated host on the day"],
    cta: "Book Silver",
  },
  {
    name: "Gold",
    price: "₹1,50,000",
    note: "Most booked for weddings",
    badge: true,
    features: [
      "Hall booking — 6 hours",
      "Up to 350 guests",
      "Premium floral mandap",
      "DJ and sound system",
      "Full catering — eight courses",
      "Bridal room",
      "Photographer-ready lighting",
      "Personal coordinator",
    ],
    cta: "Book Gold",
  },
  {
    name: "Platinum",
    price: "Custom Quote",
    note: "Multi-day celebrations",
    features: [
      "Full venue, full day",
      "500+ guests capacity",
      "Bespoke decor concept",
      "Live food counters",
      "Premium bar service",
      "Valet parking",
      "End-to-end planning",
    ],
    cta: "Request Quote",
  },
];

function PackagesPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-28 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="max-w-2xl mb-16">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl text-text-primary mt-6 leading-[1.05]">
            Three packages. <span className="italic text-gold">One honest quote.</span>
          </h1>
          <p className="mt-6 text-text-secondary leading-relaxed">
            Each package is fully itemised before you sign. No service charges added on
            event day, no hidden line items.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-divider border border-divider">
          {PACKAGES.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className="bg-surface p-8 lg:p-10 flex flex-col relative"
            >
              {p.badge && (
                <div className="absolute top-0 left-0 right-0 -translate-y-px text-center">
                  <span className="inline-block bg-gold text-[color:var(--background)] px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] font-semibold">
                    Most Booked
                  </span>
                </div>
              )}
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold-muted">{p.note}</p>
              <h3 className="font-display text-4xl text-text-primary mt-3">{p.name}</h3>
              <p className="font-display text-3xl text-gold mt-6">{p.price}</p>
              <div className="my-7 hairline" />
              <ul className="space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-1" strokeWidth={2} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#custom"
                className={
                  p.badge
                    ? "mt-10 text-center bg-gold text-[color:var(--background)] py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-85 transition-opacity"
                    : "mt-10 text-center border border-gold text-gold py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-gold hover:text-[color:var(--background)] transition-colors"
                }
              >
                {p.cta}
              </a>
            </Reveal>
          ))}
        </div>

        {/* Custom enquiry form */}
        <div id="custom" className="max-w-3xl mx-auto mt-28 bg-surface border border-divider p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-12 h-12 text-gold mx-auto" strokeWidth={1.5} />
              <h3 className="font-display text-3xl text-text-primary mt-5">Enquiry received.</h3>
              <p className="text-text-secondary mt-3">
                We'll reply within the hour during business hours.
              </p>
            </div>
          ) : (
            <>
              <Reveal className="text-center mb-10">
                <SectionLabel className="justify-center">Need something custom</SectionLabel>
                <h2 className="font-display text-3xl md:text-4xl text-text-primary mt-5">
                  Tell us your vision.
                </h2>
                <p className="mt-3 text-text-secondary text-sm">
                  We'll send a tailored proposal within 24 hours.
                </p>
              </Reveal>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your Name" required>
                    <input required maxLength={80} className={INPUT} />
                  </Field>
                  <Field label="Phone" required>
                    <input required type="tel" pattern="[0-9+\s]{8,15}" maxLength={15} className={INPUT} />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Event Type" required>
                    <select required defaultValue="" className={INPUT}>
                      <option value="" disabled>Select…</option>
                      <option>Wedding</option>
                      <option>Engagement</option>
                      <option>Mehendi / Sangeet</option>
                      <option>Birthday</option>
                      <option>Corporate</option>
                    </select>
                  </Field>
                  <Field label="Preferred Date">
                    <input type="date" className={INPUT} />
                  </Field>
                </div>
                <Field label="Anything specific">
                  <textarea rows={4} maxLength={1000} className={INPUT + " resize-none"} placeholder="Themes, dietary needs, guest count…" />
                </Field>
                <button
                  type="submit"
                  className="w-full bg-gold text-[color:var(--background)] py-4 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-85 transition-opacity"
                >
                  Submit Enquiry
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const INPUT =
  "w-full px-4 py-3 bg-background border border-divider focus:border-gold focus:outline-none text-sm text-text-primary placeholder:text-text-secondary/60";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] text-text-secondary font-medium">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
