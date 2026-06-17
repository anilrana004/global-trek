import TrekCard from "@/components/TrekCard";
import { treks } from "@/data/treks";
import { Calendar, ClipboardCheck, Compass, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const whyCards = [
  {
    icon: Users,
    title: "Small groups, always.",
    body: "Capped 8–14 trekkers per batch, small enough to know everyone, never feels like a tour bus.",
  },
  {
    icon: Compass,
    title: "Expert local guides.",
    body: "Certified local guides who know how altitude, weather, and terrain change day to day.",
  },
  {
    icon: ClipboardCheck,
    title: "Everything sorted for you.",
    body: "Permits, gear, meals, transport, medical kits all arranged before arrival.",
  },
  {
    icon: Calendar,
    title: "Fixed departures, real flexibility.",
    body: "Multiple fixed dates each season, or ask about a private departure.",
  },
];

const featuredTrekIds = ["kedarkantha", "har-ki-dun", "hampta-pass"];
const featuredTreks = featuredTrekIds
  .map((id) => treks.find((t) => t.id === id))
  .filter((t): t is NonNullable<typeof t> => t !== undefined);

const yatraCards = [
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    state: "Uttarakhand",
    duration: "5 Days",
    difficulty: "Moderate",
    title: "Kedarnath Yatra",
    teaser:
      "A spiritual journey to one of the holiest Shiva temples, nestled at 3,583 metres in the Garhwal range.",
    price: "₹15,999",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    state: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    title: "Do Dham Yatra",
    teaser:
      "Visit Kedarnath and Badrinath in one carefully paced pilgrimage, with guided support at every step.",
    price: "₹18,499",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    state: "Uttarakhand",
    duration: "10 Days",
    difficulty: "Moderate",
    title: "Char Dham Yatra",
    teaser:
      "The complete circuit — Yamunotri, Gangotri, Kedarnath, and Badrinath — undertaken with comfort and care.",
    price: "₹32,999",
  },
];

const testimonials = [
  {
    quote:
      "I had never trekked before Kedarkantha. By day two, I was sharing Maggi with strangers who now feel like family. The snow, the silence, the stars — I did not expect to feel this alive.",
    name: "Priya Sharma",
    trip: "Kedarkantha Trek",
    date: "Jan 2026",
  },
  {
    quote:
      "The 4 AM aarti at Kedarnath, with the temple bells echoing against the mountains and no one else around except our small group. That moment will stay with me forever.",
    name: "Rajesh Iyer",
    trip: "Kedarnath Yatra",
    date: "May 2026",
  },
  {
    quote:
      "Traveling solo as a woman, safety was my biggest concern. The guides made sure I never felt alone — from the airport pickup to the last descent. I am already booking my next trek.",
    name: "Ananya Gupta",
    trip: "Hampta Pass",
    date: "Jun 2026",
  },
];

const steps = [
  {
    num: "01",
    title: "Pick your trek or yatra",
    desc: "Browse our curated list of trails and pilgrimages across Uttarakhand and Himachal.",
  },
  {
    num: "02",
    title: "Choose your date & pay a deposit",
    desc: "Select from fixed departure dates or request a private batch. Secure your spot with a small deposit.",
  },
  {
    num: "03",
    title: "Get your prep pack",
    desc: "Receive a detailed gear list, fitness plan, and itinerary so you show up ready.",
  },
  {
    num: "04",
    title: "Show up and trek",
    desc: "We handle permits, transport, meals, and guides. You handle the adventure.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-24">
          <h1 className="font-display text-white text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            The Himalaya, properly done.
          </h1>
          <p className="font-body text-white/90 text-base md:text-lg max-w-2xl mt-6">
            Small-group treks and yatras across Uttarakhand and Himachal —
            guided, planned, and built around people who want a real adventure
            without doing it all themselves.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/treks"
              className="inline-block bg-deep-green text-white rounded-full px-6 py-3 font-body font-medium transition-default hover:bg-deep-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
              data-ocid="hero.explore_treks_button"
            >
              Explore Treks
            </Link>
            <Link
              to="/yatras"
              className="inline-block border-2 border-white text-white rounded-full px-6 py-3 font-body font-medium transition-default hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              data-ocid="hero.explore_yatras_button"
            >
              Explore Yatras
            </Link>
          </div>
          <p className="text-white/80 text-sm mt-10 font-body">
            4.9★ average rating · 12,000+ trekkers since 2016 · Small groups of
            8–14
          </p>
        </div>
      </section>

      {/* Why Global Trek */}
      <section className="py-20 bg-surface-white">
        <div className="container mx-auto px-6">
          <p className="uppercase text-xs tracking-widest text-text-secondary font-body font-medium mb-3">
            WHY TRAVEL WITH US
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-text-primary font-bold mb-12">
            Adventure, minus the admin.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-surface-white p-6 rounded-lg border border-border-subtle transition-default hover:-translate-y-1 hover:shadow-card"
                  data-ocid={`why.item.${i + 1}`}
                >
                  <Icon
                    className="w-8 h-8 text-deep-green mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-body font-semibold text-xl text-text-primary mb-2">
                    {card.title}
                  </h3>
                  <p className="font-body text-text-secondary text-base leading-relaxed">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Treks */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <p className="uppercase text-xs tracking-widest text-text-secondary font-body font-medium mb-3">
            TREKS
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-text-primary font-bold mb-3">
            Trails worth lacing up for.
          </h2>
          <p className="font-body text-text-secondary text-base max-w-2xl mb-10">
            Hand-picked trails across Uttarakhand and Himachal Pradesh, each
            guided by locals who know every ridge and river crossing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTreks.map((trek, i) => (
              <TrekCard key={trek.id} trek={trek} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/treks"
              className="inline-block text-deep-green font-medium font-body hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
              data-ocid="treks.view_all_link"
            >
              View all 7 treks →
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Yatras */}
      <section className="py-20 bg-surface-white">
        <div className="container mx-auto px-6">
          <p className="uppercase text-xs tracking-widest text-text-secondary font-body font-medium mb-3">
            YATRAS
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-text-primary font-bold mb-3">
            Pilgrimages, planned with the same care.
          </h2>
          <p className="font-body text-text-secondary text-base max-w-2xl mb-10">
            Sacred journeys to the holiest shrines in the Himalaya, supported by
            experienced handlers who understand both terrain and tradition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yatraCards.map((card, i) => (
              <a
                key={card.title}
                href="/yatras"
                className="group block bg-surface-white rounded-lg overflow-hidden border border-border-subtle transition-default hover:-translate-y-1 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
                data-ocid={`yatras.item.${i + 1}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={`${card.title} pilgrimage route`}
                    className="w-full h-56 object-cover transition-default group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-mint text-deep-green text-xs font-medium px-2 py-1 rounded-md font-body">
                    {card.difficulty}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-text-secondary text-sm font-body mb-1">
                    {card.state} · {card.duration}
                  </p>
                  <h3 className="font-body font-semibold text-xl text-text-primary mb-2">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-2 font-body mb-4">
                    {card.teaser}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-deep-green font-semibold font-body">
                      From {card.price}
                    </span>
                    <span className="text-deep-green text-sm font-medium font-body group-hover:underline">
                      View yatra →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/yatras"
              className="inline-block text-deep-green font-medium font-body hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
              data-ocid="yatras.view_all_link"
            >
              View all 3 yatras →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <p className="uppercase text-xs tracking-widest text-text-secondary font-body font-medium mb-3">
            WHAT TREKKERS SAY
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-text-primary font-bold mb-10">
            Real people, real trails.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-surface-white border border-border-subtle rounded-lg p-6 transition-default hover:shadow-card"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((starNum) => (
                    <Star
                      key={starNum}
                      className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="font-body text-text-primary text-base leading-relaxed mb-4">
                  “{t.quote}”
                </p>
                <div className="border-t border-border-subtle pt-4">
                  <p className="font-body font-semibold text-text-primary text-sm">
                    {t.name}
                  </p>
                  <p className="font-body text-text-secondary text-xs">
                    {t.trip} · {t.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-surface-white">
        <div className="container mx-auto px-6">
          <p className="uppercase text-xs tracking-widest text-text-secondary font-body font-medium mb-3">
            HOW IT WORKS
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-text-primary font-bold mb-10">
            From booking to basecamp, in four steps.
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex-1"
                data-ocid={`steps.item.${i + 1}`}
              >
                <span className="font-display text-4xl text-deep-green/30 font-bold block mb-3">
                  {step.num}
                </span>
                <h3 className="font-body font-semibold text-lg text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-text-secondary text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-surface-black text-white text-center py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Your next trail is waiting.
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-body text-base mb-8">
            Browse our fixed departure dates or plan a private group trip with
            your friends, family, or colleagues.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/treks"
              className="inline-block bg-deep-green text-white rounded-full px-8 py-3 font-body font-medium transition-default hover:bg-deep-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
              data-ocid="cta.explore_treks_button"
            >
              Explore Treks
            </Link>
            <Link
              to="/yatras"
              className="inline-block bg-deep-green text-white rounded-full px-8 py-3 font-body font-medium transition-default hover:bg-deep-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
              data-ocid="cta.explore_yatras_button"
            >
              Explore Yatras
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
