import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { ExitIntentModal } from "@/components/ExitIntentModal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-sm">Lost?</p>
        <h1 className="mt-3 font-display text-7xl text-maroon">404</h1>
        <h2 className="mt-3 font-display text-2xl text-foreground">This page took a wrong turn</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Let's get you back to celebrating.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold text-maroon-deep px-7 py-3 font-semibold shadow-gold gold-shimmer"
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
      { title: "Dhimahi Banquet Hall — Luxury Weddings in Virar West" },
      {
        name: "description",
        content:
          "Virar's most-loved luxury banquet hall for weddings, engagements & celebrations. 500+ events, 4.2★ rated. Near Virar Station & BAPS Mandir.",
      },
      { name: "author", content: "Dhimahi Banquet Hall" },
      { property: "og:title", content: "Dhimahi Banquet Hall — Luxury Weddings in Virar West" },
      {
        property: "og:description",
        content:
          "Virar's most-loved luxury banquet hall. 500+ events hosted, 15+ years legacy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dhimahi Banquet Hall — Luxury Weddings in Virar West" },
      { name: "description", content: "Dhimahi Elegance is a luxury banquet hall website for Dhimahi Banquet Hall in Virar West, Maharashtra." },
      { property: "og:description", content: "Dhimahi Elegance is a luxury banquet hall website for Dhimahi Banquet Hall in Virar West, Maharashtra." },
      { name: "twitter:description", content: "Dhimahi Elegance is a luxury banquet hall website for Dhimahi Banquet Hall in Virar West, Maharashtra." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2569e27b-92f3-4e26-85bb-d29b0e4f61e9/id-preview-fbf2a872--3625c993-afbe-4505-921c-1ae5cdf6cbdf.lovable.app-1777273556767.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2569e27b-92f3-4e26-85bb-d29b0e4f61e9/id-preview-fbf2a872--3625c993-afbe-4505-921c-1ae5cdf6cbdf.lovable.app-1777273556767.png" },
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <ExitIntentModal />
    </div>
  );
}
