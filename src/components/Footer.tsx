import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { GoldDivider } from "./GoldDivider";

export function Footer() {
  return (
    <footer className="bg-maroon-deep text-cream/85 mandala-pattern relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 pt-20 pb-8 relative">
        <div className="text-center mb-14">
          <h3 className="font-display text-4xl md:text-5xl text-gold mb-3">Dhimahi</h3>
          <p className="font-decorative italic text-xl text-gold-light/90">
            Where Celebrations Become Memories
          </p>
        </div>

        <GoldDivider />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14">
          <div>
            <h4 className="font-display text-lg text-gold mb-5">Quick Links</h4>
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
                  <Link to={to} className="hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>Weddings</li>
              <li>Engagements</li>
              <li>Birthdays</li>
              <li>Corporate Events</li>
              <li>Catering</li>
              <li>Decoration</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Near BAPS Mandir, Virar West, Maharashtra 401303</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:hello@dhimahi.com" className="hover:text-gold">hello@dhimahi.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-5">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <div>Mon — Sun</div>
                  <div className="text-cream/60">9:00 AM — 10:00 PM</div>
                </div>
              </li>
              <li className="text-cream/60">
                Site visits by appointment only.
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full border border-gold/40 grid place-items-center text-gold hover:bg-gold hover:text-maroon-deep transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-gold/20 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Dhimahi Banquet Hall. All rights reserved.</p>
          <p>Crafted with care for unforgettable celebrations.</p>
        </div>
      </div>
    </footer>
  );
}
