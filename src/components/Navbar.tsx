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
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b border-divider"
          : "bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Link to="/" className="font-display text-2xl text-gold tracking-wide leading-none">
          Dhimahi
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-[11px] uppercase tracking-[0.22em] font-medium text-text-secondary hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="hidden sm:inline-flex items-center gap-2 bg-gold text-[color:var(--background)] px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold hover:opacity-85 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2.2} />
            <span className="hidden md:inline">Call +91 98765 43210</span>
            <span className="md:hidden">Call Now</span>
          </a>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 text-text-primary"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-background" />
        <div className="relative h-full flex flex-col p-8">
          <div className="flex items-center justify-between mb-16">
            <span className="font-display text-2xl text-gold">Dhimahi</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-text-primary p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="font-display text-3xl text-text-primary border-b border-divider pb-4 hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+919876543210"
            className="mt-auto inline-flex items-center justify-center gap-2 bg-gold text-[color:var(--background)] px-6 py-4 text-xs uppercase tracking-[0.22em] font-semibold"
          >
            <Phone className="w-4 h-4" /> Call +91 98765 43210
          </a>
        </div>
      </div>
    </header>
  );
}
