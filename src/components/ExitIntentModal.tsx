import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { GoldDivider } from "./GoldDivider";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY < 6 && !shown) {
        setOpen(true);
        setShown(true);
      }
    };
    const timer = setTimeout(() => {
      document.addEventListener("mouseout", handler);
    }, 8000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handler);
    };
  }, [shown]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4 bg-maroon-deep/70 backdrop-blur-sm fade-up">
      <div className="relative bg-cream-card border-2 border-gold rounded-2xl p-8 md:p-10 max-w-md w-full shadow-gold-lg">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-maroon/10 transition-colors"
        >
          <X className="w-5 h-5 text-maroon" />
        </button>
        <div className="text-center">
          <p className="font-decorative italic text-gold uppercase tracking-widest text-sm">Wait!</p>
          <h3 className="font-display text-3xl md:text-4xl text-maroon mt-2">
            Get Your Free Custom Quote
          </h3>
          <GoldDivider className="my-4" />
          <p className="text-sm text-foreground/70 mb-5">
            Tell us your dates and we'll send a personalised proposal within 24 hours.
          </p>
        </div>
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
        >
          <input
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-cream border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm"
          />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg bg-cream border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm"
          />
          <input
            required
            type="date"
            className="w-full px-4 py-3 rounded-lg bg-cream border border-gold/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-gradient-gold text-maroon-deep py-3.5 rounded-lg font-semibold shadow-gold hover:shadow-gold-lg gold-shimmer transition-all"
          >
            ✨ Claim My Free Quote
          </button>
        </form>
      </div>
    </div>
  );
}
