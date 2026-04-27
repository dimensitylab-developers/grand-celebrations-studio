import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const WHATSAPP = "oklch(0.62 0.16 145)";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dhimahi Banquet Hall — Book a Site Visit" },
      {
        name: "description",
        content:
          "Visit, call or WhatsApp Dhimahi Banquet Hall in Virar West. Site visits by appointment. Quotes within 24 hours.",
      },
      { property: "og:title", content: "Contact Dhimahi Banquet Hall" },
      { property: "og:description", content: "Book a free site visit. Quotes within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-28 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="max-w-2xl mb-16">
          <SectionLabel>Get in touch</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl text-text-primary mt-6 leading-[1.05]">
            Let's plan your <span className="italic text-gold">function.</span>
          </h1>
          <p className="mt-6 text-text-secondary leading-relaxed">
            Tell us your dates and what you're planning. We typically reply within an hour
            during business hours.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — info */}
          <div className="lg:col-span-5 space-y-10">
            <Reveal className="bg-surface border border-divider p-8">
              <h3 className="font-display text-2xl text-text-primary mb-7">Visit the venue</h3>
              <ul className="space-y-6">
                <ContactRow icon={MapPin} label="Address">
                  Near BAPS Mandir, Virar West
                  <br />
                  Maharashtra 401303
                </ContactRow>
                <ContactRow icon={Phone} label="Phone">
                  <a href="tel:+919876543210" className="text-text-primary hover:text-gold transition-colors">
                    +91 98765 43210
                  </a>
                </ContactRow>
                <ContactRow icon={Mail} label="Email">
                  <a href="mailto:hello@dhimahi.com" className="text-text-primary hover:text-gold transition-colors">
                    hello@dhimahi.com
                  </a>
                </ContactRow>
                <ContactRow icon={Clock} label="Hours">
                  Mon — Sun · 9:00 AM — 10:00 PM
                  <span className="block text-xs text-text-secondary/70 mt-1">Site visits by appointment</span>
                </ContactRow>
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-[color:var(--background)] py-3 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-85 transition-opacity"
                >
                  <Phone className="w-3.5 h-3.5" strokeWidth={2.2} /> Call
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 text-white py-3 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-85 transition-opacity"
                  style={{ backgroundColor: WHATSAPP }}
                >
                  <MessageCircle className="w-3.5 h-3.5" strokeWidth={2.2} /> WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="border border-divider overflow-hidden">
              <iframe
                title="Dhimahi Banquet Hall location"
                src="https://www.google.com/maps?q=Virar+West+BAPS+Mandir&output=embed"
                className="w-full h-72 border-0 grayscale-[20%]"
                loading="lazy"
              />
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={120} className="lg:col-span-7 bg-surface border border-divider p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-gold mx-auto" strokeWidth={1.5} />
                <h3 className="font-display text-3xl text-text-primary mt-5">Thank you.</h3>
                <p className="text-text-secondary mt-3 max-w-sm mx-auto">
                  We've received your enquiry and will be in touch within an hour during business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[11px] uppercase tracking-[0.22em] text-gold border-b border-gold-muted pb-1 hover:opacity-75 transition-opacity"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <h3 className="font-display text-2xl text-text-primary mb-2">Send your enquiry</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" required>
                    <input required maxLength={80} className={INPUT} />
                  </Field>
                  <Field label="Phone" required>
                    <input required type="tel" pattern="[0-9+\s]{8,15}" maxLength={15} className={INPUT} />
                  </Field>
                </div>
                <Field label="Email">
                  <input type="email" maxLength={120} className={INPUT} />
                </Field>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Event Type" required>
                    <select required defaultValue="" className={INPUT}>
                      <option value="" disabled>Select…</option>
                      <option>Wedding</option>
                      <option>Engagement</option>
                      <option>Mehendi / Sangeet</option>
                      <option>Birthday</option>
                      <option>Corporate</option>
                      <option>Other</option>
                    </select>
                  </Field>
                  <Field label="Guest Count" required>
                    <select required defaultValue="" className={INPUT}>
                      <option value="" disabled>Select…</option>
                      <option>Under 100</option>
                      <option>100 — 250</option>
                      <option>250 — 400</option>
                      <option>400 — 500</option>
                      <option>500+</option>
                    </select>
                  </Field>
                </div>
                <Field label="Event Date">
                  <input type="date" className={INPUT} />
                </Field>
                <Field label="Special Requests">
                  <textarea
                    rows={4}
                    maxLength={1000}
                    placeholder="Themes, dietary needs, timing…"
                    className={INPUT + " resize-none"}
                  />
                </Field>
                <button
                  type="submit"
                  className="w-full bg-gold text-[color:var(--background)] py-4 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-85 transition-opacity"
                >
                  Send My Enquiry
                </button>

                <div className="text-center pt-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-text-secondary mb-3">Or reach us instantly</p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 text-white px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-85 transition-opacity"
                      style={{ backgroundColor: WHATSAPP }}
                    >
                      <MessageCircle className="w-3.5 h-3.5" strokeWidth={2.2} /> WhatsApp
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="inline-flex items-center gap-2 border border-gold text-gold px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-gold hover:text-[color:var(--background)] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" strokeWidth={2.2} /> Call
                    </a>
                  </div>
                </div>
              </form>
            )}
          </Reveal>
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

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="w-9 h-9 border border-divider grid place-items-center text-gold shrink-0">
        <Icon className="w-4 h-4" strokeWidth={1.6} />
      </span>
      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-[0.22em] text-text-secondary">{label}</p>
        <div className="text-sm text-text-primary mt-1.5 leading-relaxed">{children}</div>
      </div>
    </li>
  );
}
