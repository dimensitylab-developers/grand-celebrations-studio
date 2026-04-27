import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { GoldDivider } from "@/components/GoldDivider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dhimahi Banquet Hall — Book a Free Site Visit" },
      { name: "description", content: "Visit, call or message Dhimahi Banquet Hall in Virar West. Free site visits, transparent quotes, immediate WhatsApp response." },
      { property: "og:title", content: "Contact Dhimahi Banquet Hall" },
      { property: "og:description", content: "Book a free visit · Get a custom quote within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-28 pb-20 px-5 lg:px-8">
      <div className="text-center mb-12 max-w-[1280px] mx-auto">
        <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-sm">Get in touch</p>
        <h1 className="font-display text-5xl md:text-6xl text-maroon mt-3">Let's Plan Together</h1>
        <GoldDivider className="mt-5" />
        <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
          Tell us about your celebration — we typically reply within an hour.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-5 gap-8">
        {/* Left: contact info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-cream-card border border-gold/25 rounded-2xl p-7 shadow-warm">
            <h3 className="font-display text-2xl text-maroon mb-5">Visit Us</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center text-maroon-deep shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Address</p>
                  <p className="text-sm mt-1">Near BAPS Mandir, Virar West<br />Maharashtra 401303, India</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center text-maroon-deep shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                  <a href="tel:+919876543210" className="text-sm font-medium text-maroon hover:text-gold mt-1 block">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center text-maroon-deep shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                  <a href="mailto:hello@dhimahi.com" className="text-sm font-medium text-maroon hover:text-gold mt-1 block">hello@dhimahi.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center text-maroon-deep shrink-0">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Open</p>
                  <p className="text-sm mt-1">Mon — Sun · 9:00 AM — 10:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[oklch(0.66_0.18_145)] text-white py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-gold/30 shadow-warm">
            <iframe
              title="Dhimahi Banquet Hall location"
              src="https://www.google.com/maps?q=Virar+West+BAPS+Mandir&output=embed"
              className="w-full h-72 border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-3 bg-cream-card border border-gold/25 rounded-2xl p-7 md:p-10 shadow-warm">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-gold mx-auto" />
              <h3 className="font-display text-3xl text-maroon mt-5">Thank You!</h3>
              <p className="text-foreground/70 mt-3">We'll be in touch within an hour during business hours.</p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <h3 className="font-display text-2xl text-maroon mb-4">Send Your Enquiry</h3>
              <div className="grid sm:grid-cols-2 gap-4">
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
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Event Type" required>
                  <select required defaultValue="" className={INPUT}>
                    <option value="" disabled>Select…</option>
                    <option>Wedding</option><option>Engagement</option><option>Birthday</option>
                    <option>Corporate</option><option>Other</option>
                  </select>
                </Field>
                <Field label="Guest Count" required>
                  <select required defaultValue="" className={INPUT}>
                    <option value="" disabled>Select…</option>
                    <option>Under 100</option><option>100–250</option>
                    <option>250–400</option><option>400–500</option><option>500+</option>
                  </select>
                </Field>
              </div>
              <Field label="Event Date">
                <input type="date" className={INPUT} />
              </Field>
              <Field label="Special Requests">
                <textarea rows={4} maxLength={1000} placeholder="Tell us anything specific — themes, dietary needs, timing…" className={INPUT + " resize-none"} />
              </Field>
              <button
                type="submit"
                className="w-full bg-gradient-gold text-maroon-deep py-4 rounded-full font-semibold shadow-gold-lg gold-shimmer hover:-translate-y-0.5 transition-transform inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send My Enquiry
              </button>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground mb-3">Or reach us instantly →</p>
                <div className="flex gap-3 justify-center">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[oklch(0.66_0.18_145)] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a href="tel:+919876543210" className="inline-flex items-center gap-2 bg-maroon text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-maroon-deep">
                    <Phone className="w-4 h-4" /> Call
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const INPUT = "w-full px-4 py-3 rounded-lg bg-cream border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm text-foreground placeholder:text-muted-foreground";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
