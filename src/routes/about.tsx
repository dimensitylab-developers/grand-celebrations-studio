import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Users, Utensils, Layout, Sparkles, IndianRupee, Star } from "lucide-react";
import aboutImg from "@/assets/about-venue.jpg";
import { GoldDivider } from "@/components/GoldDivider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dhimahi Banquet Hall — 15 Years of Celebrations" },
      { name: "description", content: "Family-run luxury banquet hall in Virar West. 15+ years hosting weddings, engagements and corporate events with personal care." },
      { property: "og:title", content: "About Dhimahi Banquet Hall" },
      { property: "og:description", content: "15+ years hosting unforgettable celebrations in Virar West." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const REASONS = [
  { icon: MapPin, title: "Prime Location", text: "5 min from Virar Station, walking distance from BAPS Mandir." },
  { icon: Users, title: "Dedicated Coordinator", text: "A single point of contact handles every detail of your day." },
  { icon: Utensils, title: "In-house Catering", text: "Multi-cuisine kitchen with pure veg & non-veg menus." },
  { icon: Layout, title: "Flexible Layouts", text: "Theatre, banquet, mandap, lounge — reconfigured to your vision." },
  { icon: Sparkles, title: "Decor Team", text: "From florals to lighting, our designers craft bespoke setups." },
  { icon: IndianRupee, title: "Transparent Pricing", text: "Clear, written quotes. No surprises, ever." },
];

function AboutPage() {
  return (
    <div className="pt-28">
      <section className="px-5 lg:px-8 py-16">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Dhimahi Banquet Hall venue exterior"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full rounded-3xl shadow-warm border-4 border-gold/20"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold text-maroon-deep px-6 py-4 rounded-2xl shadow-gold-lg hidden md:block">
              <div className="font-display text-3xl">15+</div>
              <div className="text-xs uppercase tracking-widest">Years</div>
            </div>
          </div>

          <div>
            <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-sm">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl text-maroon mt-3 leading-tight">
              A family legacy of <span className="italic">grand celebrations</span>
            </h1>
            <GoldDivider className="my-6 justify-start" withMotif={false} />
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Founded in 2009, Dhimahi began as a humble dream — to give every Virar family a space worthy of their biggest moments. Three generations later, that dream has hosted over 500 weddings, engagements, and milestone celebrations.
              </p>
              <p>
                What sets us apart isn't just the chandeliers or the cuisine — it's the care. Every couple who walks in is greeted by a coordinator who treats their function as their own family's wedding.
              </p>
              <p className="font-decorative italic text-xl text-maroon border-l-4 border-gold pl-4">
                "We don't rent halls. We host families."
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 p-5 rounded-2xl bg-cream-card border border-gold/20">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-gold text-gold" />
                <span className="font-display text-2xl text-maroon">4.2</span>
                <span className="text-sm text-muted-foreground">Google</span>
              </div>
              <div className="h-8 w-px bg-gold/30" />
              <div>
                <div className="font-display text-2xl text-maroon">320+</div>
                <div className="text-xs uppercase text-muted-foreground tracking-widest">Reviews</div>
              </div>
              <div className="h-8 w-px bg-gold/30 hidden sm:block" />
              <div>
                <div className="font-display text-2xl text-maroon">500+</div>
                <div className="text-xs uppercase text-muted-foreground tracking-widest">Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="px-5 lg:px-8 py-20 bg-cream-card">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="font-decorative italic text-gold uppercase tracking-[0.3em] text-sm">What you get</p>
            <h2 className="font-display text-4xl md:text-5xl text-maroon mt-3">Why Choose Dhimahi</h2>
            <GoldDivider className="mt-5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REASONS.map((r, i) => (
              <div key={i} className="bg-cream rounded-2xl p-6 border border-gold/15 hover:border-gold hover:shadow-gold transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold grid place-items-center text-maroon-deep mb-4">
                  <r.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-maroon mb-2">{r.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-gold text-maroon-deep px-8 py-3.5 rounded-full font-semibold shadow-gold gold-shimmer">
              Plan Your Visit →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
