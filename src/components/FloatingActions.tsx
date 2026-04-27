import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP = "oklch(0.62 0.16 145)";

export function FloatingActions() {
  return (
    <>
      {/* Mobile sticky bottom bar — every page */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-divider">
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center gap-2 py-4 bg-gold text-[color:var(--background)] text-[11px] uppercase tracking-[0.22em] font-semibold"
        >
          <Phone className="w-4 h-4" strokeWidth={2.2} /> Call Now
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 py-4 text-white text-[11px] uppercase tracking-[0.22em] font-semibold"
          style={{ backgroundColor: WHATSAPP }}
        >
          <MessageCircle className="w-4 h-4" strokeWidth={2.2} /> WhatsApp
        </a>
      </div>
    </>
  );
}
