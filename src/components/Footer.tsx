import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-divider">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-3xl text-gold tracking-wide">Dhimahi</h3>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-[14rem]">
              A family banquet hall in Virar West. Hosting weddings and celebrations since 2009.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-divider grid place-items-center text-text-secondary hover:text-gold hover:border-gold-muted transition-colors"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-gold font-medium mb-5">Pages</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Gallery", "/gallery"],
                ["Packages", "/packages"],
                ["Reviews", "/testimonials"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-text-secondary hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-gold font-medium mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>Weddings</li>
              <li>Engagements</li>
              <li>Mehendi & Sangeet</li>
              <li>Corporate Events</li>
              <li>In-house Catering</li>
              <li>Decoration</li>
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-gold font-medium mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>Near BAPS Mandir, Virar West<br />Maharashtra 401303</li>
              <li>
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@dhimahi.com" className="hover:text-gold transition-colors">
                  hello@dhimahi.com
                </a>
              </li>
              <li className="pt-2">
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold-muted block mb-1">Hours</span>
                Mon — Sun · 9:00 — 22:00
                <span className="block text-xs text-text-secondary/70 mt-1">Visits by appointment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-divider flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-text-secondary/70">
          <p>© {new Date().getFullYear()} Dhimahi Banquet Hall</p>
          <p>Virar West · Maharashtra · India</p>
        </div>
      </div>
    </footer>
  );
}
