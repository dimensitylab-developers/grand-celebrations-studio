import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/85 backdrop-blur-xl shadow-elegant border-b border-gold/20"
          : "bg-transparent",
      )}
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span
            className={cn(
              "font-display text-3xl font-bold tracking-tight transition-colors",
              scrolled ? "text-maroon" : "text-gold",
            )}
          >
            Dhimahi
          </span>
          <span
            className={cn(
              "font-body text-[11px] uppercase tracking-[0.25em] transition-colors hidden sm:inline",
              scrolled ? "text-gold-dark" : "text-gold-light",
            )}
          >
            Banquet Hall
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={cn(
                "px-4 py-2 text-sm font-medium tracking-wide transition-all relative",
                scrolled ? "text-foreground/80" : "text-cream/90",
                "hover:text-gold",
              )}
              activeProps={{
                className: "text-gold font-semibold",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-gold text-maroon-deep px-5 py-2.5 rounded-full font-semibold text-sm shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5 gold-shimmer"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <button
            onClick={() => setOpen(true)}
            className={cn(
              "lg:hidden p-2 rounded-full transition-colors",
              scrolled ? "text-maroon" : "text-cream",
            )}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-all duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-maroon-deep mandala-pattern" />
        <div className="relative h-full flex flex-col p-8">
          <div className="flex items-center justify-between mb-12">
            <span className="font-display text-3xl text-gold">Dhimahi</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-cream p-2">
              <X className="w-7 h-7" />
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {NAV.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="font-display text-3xl text-cream/90 py-3 border-b border-gold/15 hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+919876543210"
            className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-gold text-maroon-deep px-6 py-4 rounded-full font-semibold shadow-gold-lg"
          >
            <Phone className="w-5 h-5" /> Call +91 98765 43210
          </a>
        </div>
      </div>
    </header>
  );
}
