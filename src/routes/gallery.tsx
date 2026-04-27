import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Dhimahi Banquet Hall" },
      {
        name: "description",
        content: "Photographs from weddings, engagements and ceremonies hosted at Dhimahi Banquet Hall, Virar West.",
      },
      { property: "og:title", content: "Gallery — Dhimahi Banquet Hall" },
      { property: "og:description", content: "Real weddings and events from our hall." },
      { property: "og:image", content: g2 },
    ],
  }),
  component: GalleryPage,
});

const PHOTOS = [
  { src: g2, caption: "Floral mandap with crystal chandelier" },
  { src: g1, caption: "Red and gold wedding mandap" },
  { src: g5, caption: "Grand chandelier showcase" },
  { src: g4, caption: "Engagement ring ceremony" },
  { src: g6, caption: "Reception table setup" },
  { src: g3, caption: "Traditional thali service" },
];

function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-28 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="max-w-2xl mb-16">
          <SectionLabel>The venue</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl text-text-primary mt-6 leading-[1.05]">
            From the <span className="italic text-gold">archive.</span>
          </h1>
          <p className="mt-6 text-text-secondary leading-relaxed">
            A small selection from the celebrations we've had the honour of hosting.
            Browse the full library on a site visit.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {PHOTOS.map((p, i) => {
            // Editorial asymmetric grid spans
            const spans = [
              "md:col-span-7 md:row-span-2 aspect-[4/5]",
              "md:col-span-5 aspect-[4/5]",
              "md:col-span-5 aspect-[4/5]",
              "md:col-span-4 aspect-[4/5]",
              "md:col-span-4 aspect-[4/5]",
              "md:col-span-4 aspect-[4/5]",
            ];
            return (
              <Reveal key={i} delay={i * 60} className={spans[i]}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full h-full overflow-hidden cursor-zoom-in"
                  aria-label={`View ${p.caption}`}
                >
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[color:var(--background)]/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                      {p.caption}
                    </p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] bg-background/95 grid place-items-center p-4">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-gold p-2 hover:opacity-70 transition-opacity"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={() => setLightbox((v) => (v === null ? 0 : (v - 1 + PHOTOS.length) % PHOTOS.length))}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-gold p-2 hover:opacity-70 transition-opacity"
            aria-label="Previous"
          >
            <ChevronLeft className="w-9 h-9" />
          </button>
          <button
            onClick={() => setLightbox((v) => (v === null ? 0 : (v + 1) % PHOTOS.length))}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-gold p-2 hover:opacity-70 transition-opacity"
            aria-label="Next"
          >
            <ChevronRight className="w-9 h-9" />
          </button>
          <img
            src={PHOTOS[lightbox].src}
            alt={PHOTOS[lightbox].caption}
            className="max-h-[85vh] max-w-[92vw] object-contain"
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.22em] text-text-secondary">
            {PHOTOS[lightbox].caption}
          </p>
        </div>
      )}
    </div>
  );
}
