import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="label-eyebrow inline-flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-[color:var(--gold-muted)]" /> Lost
        </p>
        <h1 className="mt-6 font-display text-7xl text-gold">404</h1>
        <h2 className="mt-3 font-display text-2xl text-text-primary">This page took a wrong turn</h2>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed">
          The page you're looking for isn't here. Let's get you back to the venue.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gold text-[color:var(--background)] px-7 py-3 text-[11px] uppercase tracking-[0.22em] font-semibold hover:opacity-85 transition-opacity"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dhimahi Banquet Hall — Weddings & Celebrations in Virar West" },
      {
        name: "description",
        content:
          "A family banquet hall in Virar West hosting weddings, engagements and corporate events since 2009. 500+ events · 4.2★ Google rated.",
      },
      { name: "author", content: "Dhimahi Banquet Hall" },
      { property: "og:title", content: "Dhimahi Banquet Hall — Weddings in Virar West" },
      {
        property: "og:description",
        content: "A family legacy of grand celebrations. Hosting weddings and events since 2009.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pb-[60px] md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
