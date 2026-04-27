import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      {/* Desktop floating */}
      <div className="hidden md:flex fixed bottom-8 right-6 z-40 flex-col gap-3">
        <a
          href="tel:+919876543210"
          aria-label="Call us"
          className="group relative w-14 h-14 rounded-full bg-gradient-gold text-maroon-deep grid place-items-center shadow-gold-lg hover:scale-110 transition-transform"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-maroon text-cream text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call Now
          </span>
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
          className="group relative w-14 h-14 rounded-full bg-[oklch(0.66_0.18_145)] text-white grid place-items-center pulse-glow hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6" fill="currentColor" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-maroon text-cream text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)]">
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center gap-2 py-4 bg-maroon text-cream font-semibold text-sm"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 py-4 bg-[oklch(0.66_0.18_145)] text-white font-semibold text-sm"
        >
          <MessageCircle className="w-4 h-4" fill="currentColor" /> WhatsApp
        </a>
      </div>
    </>
  );
}
