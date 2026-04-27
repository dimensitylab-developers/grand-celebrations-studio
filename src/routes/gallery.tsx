import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GoldDivider } from "@/components/GoldDivider";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Dhimahi Banquet Hall Weddings & Events" },
      { name: "description", content: "Browse photos from real weddings, engagements, stage decor and ceremonies hosted at Dhimahi Banquet Hall, Virar West." },
      { property: "og:title", content: "Gallery — Dhimahi Banquet Hall" },
      { property: "og:description", content: "Real weddings & celebrations hosted at Dhimahi." },
      { property: "og:image", content: g2 },
    ],
  }),
  component: GalleryPage,
});

const PHOTOS = [
  { src: g1, cat: "Weddings", caption: "A red & gold wedding mandap" },
  { src: g2, cat: "Stage Decor", caption: "Floral mandap with crystal chandelier" },
  { src: g5, cat: "Stage Decor", caption: "Grand chandelier showcase" },
  { src: g4, cat: "Engagements", caption: "Ring ceremony moment" },
  { src: g6, cat: "Ceremonies", caption: "Reception table setup" },
  { src: g3, cat: "Catering", caption: "Traditional thali service" },
  { src: g2, cat: "Stage Decor", caption: "Pastel floral arch" },
  { src: g1, cat: "Weddings", caption: "Couple at the mandap" },
  { src: g6, cat: "Ceremonies", caption: "Banquet floor view" },
  { src: g4, cat: "Engagements", caption: "Family blessing ceremony" },
  { src: g5, cat: "Stage Decor", caption: "Ornate ceiling detail" },
  { src: g3, cat: "Catering", caption: "Candle-lit dinner setup" },
];

const FILTERS = ["All", "Weddings", "Engagements", "Stage Decor", "Catering", "Ceremonies"];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === filter);

  return (
    <div className="pt-28 pb-20 px-5 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-10">
          <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-sm">Memories</p>
          <h1 className="font-display text-5xl md:text-6xl text-maroon mt-3">Gallery</h1>
          <GoldDivider className="mt-5" />
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
            A glimpse into the celebrations we've had the honour of hosting.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-gradient-gold text-maroon-deep shadow-gold"
                  : "bg-cream-card border border-gold/30 text-foreground/70 hover:border-gold hover:text-maroon"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((p, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative block w-full mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-warm border border-gold/15 cursor-zoom-in"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/85 via-maroon-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-gradient-gold text-maroon-deep px-3 py-2 rounded-lg text-left">
                  <p className="text-[10px] uppercase tracking-widest opacity-80">{p.cat}</p>
                  <p className="font-display text-base">{p.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] bg-maroon-deep/95 grid place-items-center p-4">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-gold p-2 hover:text-gold-light"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={() => setLightbox((v) => (v === null ? 0 : (v - 1 + filtered.length) % filtered.length))}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-gold p-2 hover:text-gold-light"
            aria-label="Previous"
          >
            <ChevronLeft className="w-9 h-9" />
          </button>
          <button
            onClick={() => setLightbox((v) => (v === null ? 0 : (v + 1) % filtered.length))}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-gold p-2 hover:text-gold-light"
            aria-label="Next"
          >
            <ChevronRight className="w-9 h-9" />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].caption}
            className="max-h-[85vh] max-w-[92vw] object-contain rounded-lg shadow-gold-lg border border-gold/30"
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-decorative italic text-gold-light text-lg">
            {filtered[lightbox].caption}
          </p>
        </div>
      )}
    </div>
  );
}
