import TrekCard from "@/components/TrekCard";
import { treks } from "@/data/treks";
import type { Trek } from "@/data/treks";
import {
  CalendarDays,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Gauge,
  IndianRupee,
  MapPin,
  Minus,
  Mountain,
  Plus,
  Star,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

/* ─── helpers ─── */
function useTrekFromSlug() {
  const { slug } = useParams<{ slug: string }>();
  const trek = useMemo(() => treks.find((t) => t.id === slug), [slug]);
  return { slug, trek };
}

function classNames(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

/* ─── sub-components ─── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="uppercase text-xs tracking-[0.05em] text-text-secondary font-body font-medium mb-3">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl text-text-primary font-bold mb-8">
      {children}
    </h2>
  );
}

function Section({
  children,
  className,
  bg = "bg-surface-white",
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <section className={classNames("py-16 md:py-20", bg, className)}>
      <div className="container mx-auto px-6 max-w-[1280px]">{children}</div>
    </section>
  );
}

/* ─── 1. Hero ─── */
function Hero({ trek }: { trek: Trek }) {
  return (
    <section
      className="relative flex items-end bg-cover bg-center"
      style={{
        minHeight: "70vh",
        backgroundImage: `url('${trek.image}')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative z-10 container mx-auto px-6 pb-32 md:pb-24 max-w-[1280px]">
        <h1 className="font-display text-white text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          {trek.title}
        </h1>
        <p className="font-body text-white/90 text-base md:text-lg max-w-2xl mt-4">
          {trek.teaser}
        </p>
      </div>

      {/* Quick-facts bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {[
              { icon: Clock, label: "Duration", value: trek.duration },
              {
                icon: Mountain,
                label: "Max Altitude",
                value: trek.maxAltitude,
              },
              { icon: Gauge, label: "Difficulty", value: trek.difficulty },
              {
                icon: CalendarDays,
                label: "Best Season",
                value: trek.bestSeason,
              },
              { icon: IndianRupee, label: "Price From", value: trek.price },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-white rounded-lg p-4 shadow-card text-center"
              >
                <stat.icon
                  className="w-5 h-5 text-deep-green mx-auto mb-2"
                  aria-hidden="true"
                />
                <p className="text-text-secondary text-xs font-body mb-1">
                  {stat.label}
                </p>
                <p className="text-text-primary font-semibold font-body text-sm">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 2. Overview ─── */
function Overview({ trek }: { trek: Trek }) {
  const paragraphs = trek.overview?.length
    ? trek.overview
    : [
        `${trek.title} is one of the most rewarding treks in ${trek.state}. The trail takes you through diverse Himalayan terrain, from dense forests to high-altitude meadows and ridges.`,
        `With a maximum altitude of ${trek.maxAltitude} and a duration of ${trek.duration}, this trek strikes a balance between challenge and accessibility. It is suitable for trekkers with basic to moderate fitness levels.`,
        `Global Trek's fixed-departure batches ensure small groups of ${trek.groupSize} trekkers, led by certified local guides who know every turn of the trail. All permits, meals, and transport are handled for you.`,
        `The best time to attempt this trek is ${trek.bestSeason}. Each season brings a different character to the landscape — from blooming rhododendrons in spring to snow-covered ridges in winter.`,
      ];

  return (
    <Section bg="bg-surface-white">
      <Eyebrow>Overview</Eyebrow>
      <SectionHeading>What to expect</SectionHeading>
      <div className="max-w-3xl space-y-5">
        {paragraphs.map((p) => (
          <p
            key={p.slice(0, 20)}
            className="font-body text-text-primary text-base leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}

/* ─── 3. At a Glance ─── */
function AtAGlance({ trek }: { trek: Trek }) {
  const items = [
    { label: "Region", value: trek.region },
    { label: "Starting Point", value: trek.startPoint },
    { label: "Ending Point", value: trek.endPoint },
    { label: "Total Distance", value: trek.distance },
    { label: "Max Altitude", value: trek.maxAltitude },
    { label: "Group Size", value: trek.groupSize },
    { label: "Difficulty", value: trek.difficulty },
    { label: "Best Season(s)", value: trek.bestSeason },
    { label: "Nearest Airport", value: trek.nearestAirport },
    { label: "Nearest Railhead", value: trek.nearestRailhead },
    { label: "Base Camp / Assembly", value: trek.assemblyPoint },
  ];

  return (
    <Section bg="bg-muted">
      <Eyebrow>At a Glance</Eyebrow>
      <SectionHeading>Trek specs</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex justify-between border-b border-border-subtle pb-3"
          >
            <span className="font-body text-text-secondary text-sm">
              {item.label}
            </span>
            <span className="font-body text-text-primary text-sm font-medium text-right max-w-[60%]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
      {trek.difficultyGuide?.[0] && (
        <div className="mt-8 p-5 bg-mint/40 rounded-lg">
          <p className="font-body text-text-primary text-sm leading-relaxed">
            <strong>What {trek.difficulty} means:</strong>{" "}
            {trek.difficultyGuide[0]}
          </p>
        </div>
      )}
    </Section>
  );
}

/* ─── 4. Itinerary Accordion ─── */
function Itinerary({ trek }: { trek: Trek }) {
  const [openDay, setOpenDay] = useState<number | null>(1);

  const days = trek.itinerary?.length
    ? trek.itinerary
    : Array.from({ length: trek.durationDays }, (_, i) => ({
        day: i + 1,
        title: `Day ${i + 1} on the ${trek.title} trail`,
        meta: "Trekking · Altitude change varies",
        description: `Detailed route description for Day ${i + 1} of the ${trek.title} trek. The trail progresses through Himalayan terrain with experienced guides, proper acclimatization, and scenic campsites.`,
      }));

  return (
    <Section bg="bg-surface-white">
      <Eyebrow>Itinerary</Eyebrow>
      <SectionHeading>Day-by-day breakdown</SectionHeading>
      <div className="space-y-3">
        {days.map((d) => {
          const isOpen = openDay === d.day;
          return (
            <div
              key={d.day}
              className="border border-border-subtle rounded-lg overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenDay(isOpen ? null : d.day)}
                className="w-full flex items-center justify-between p-5 text-left bg-surface-white hover:bg-muted/30 transition-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
                aria-expanded={isOpen}
                data-ocid={`itinerary.day.${d.day}.toggle`}
              >
                <div>
                  <span className="font-body font-semibold text-text-primary">
                    Day {d.day}: {d.title}
                  </span>
                  <p className="font-body text-text-secondary text-xs mt-1">
                    {d.meta}
                  </p>
                </div>
                {isOpen ? (
                  <ChevronUp
                    className="w-5 h-5 text-text-secondary flex-shrink-0"
                    aria-hidden="true"
                  />
                ) : (
                  <ChevronDown
                    className="w-5 h-5 text-text-secondary flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="font-body text-text-primary text-sm leading-relaxed">
                    {d.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ─── 5. Difficulty & Fitness ─── */
function DifficultyFitness({ trek }: { trek: Trek }) {
  const paragraphs = trek.difficultyGuide?.length
    ? trek.difficultyGuide
    : [
        `The ${trek.title} trek is rated ${trek.difficulty}. Trekkers should be able to walk 5–7 hours a day on uneven terrain with a light daypack. Regular walking, stair climbing, or light jogging for 3–4 weeks before the trek is recommended.`,
        "Altitude sickness is a possibility above 3,000 metres. Our guides monitor every trekker with oximeters, carry emergency oxygen, and follow a gradual ascent profile. If you have heart conditions, severe asthma, or are pregnant, please consult your doctor before booking.",
      ];

  return (
    <Section bg="bg-muted">
      <Eyebrow>Fitness</Eyebrow>
      <SectionHeading>Difficulty &amp; fitness guide</SectionHeading>
      <div className="max-w-3xl space-y-5">
        {paragraphs.map((p) => (
          <p
            key={p.slice(0, 20)}
            className="font-body text-text-primary text-base leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}

/* ─── 6. Included / Not Included ─── */
function Inclusions({ trek }: { trek: Trek }) {
  const included = trek.included?.length
    ? trek.included
    : [
        "Accommodation in tents or guesthouses on twin-sharing basis",
        "All meals during the trek (breakfast, lunch, dinner)",
        "All required trekking and forest permits",
        "Shared transport from assembly point to base and return",
        "Certified local guide and support staff",
        "Basic medical kit and safety equipment",
        "Evening briefing and route orientation",
      ];

  const notIncluded = trek.notIncluded?.length
    ? trek.notIncluded
    : [
        "Flights or trains to the assembly point",
        "Personal trekking gear and clothing",
        "Travel insurance covering high-altitude trekking",
        "Tips for guides and support staff",
        "Personal expenses and snacks outside provided meals",
        "Porter or mule charges for backpack offloading",
      ];

  return (
    <Section bg="bg-surface-white">
      <Eyebrow>Inclusions</Eyebrow>
      <SectionHeading>What&apos;s included &amp; not included</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Included */}
        <div className="bg-mint/30 rounded-lg p-6">
          <h3 className="font-body font-semibold text-text-primary text-lg mb-4 flex items-center gap-2">
            <Check className="w-5 h-5 text-success" aria-hidden="true" />
            Included
          </h3>
          <ul className="space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  className="w-4 h-4 text-success flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="font-body text-text-primary text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Included */}
        <div className="bg-surface-white border border-border-subtle rounded-lg p-6">
          <h3 className="font-body font-semibold text-text-primary text-lg mb-4 flex items-center gap-2">
            <X className="w-5 h-5 text-error" aria-hidden="true" />
            Not Included
          </h3>
          <ul className="space-y-3">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <X
                  className="w-4 h-4 text-error flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="font-body text-text-primary text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ─── 7. Packing List ─── */
function PackingList({ trek }: { trek: Trek }) {
  const list =
    trek.packingList && Object.keys(trek.packingList).length
      ? trek.packingList
      : {
          Clothing: [
            "Thermal base layers (top + bottom)",
            "Fleece or down jacket",
            "Trek pants (2 pairs)",
            "Warm gloves and woollen cap",
          ],
          Footwear: [
            "Trekking shoes with ankle support",
            "Cotton and woollen socks",
            "Camp sandals",
          ],
          "Gear & Equipment": [
            "Backpack (30–40L) with rain cover",
            "Headlamp with extra batteries",
            "Sunglasses with UV protection",
            "Trekking poles",
            "Water bottles (2L total)",
          ],
          "Personal & Health": [
            "Sunscreen SPF 50+",
            "Lip balm and moisturiser",
            "Personal medicines",
            "Toiletries and quick-dry towel",
            "ID proof and emergency contact",
          ],
        };

  return (
    <Section bg="bg-muted">
      <Eyebrow>Packing</Eyebrow>
      <SectionHeading>What to pack</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(list).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-body font-semibold text-text-primary text-base mb-3">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="font-body text-text-secondary text-sm leading-relaxed flex items-start gap-2"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-deep-green flex-shrink-0 mt-1.5"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── 8. Best Time to Visit ─── */
function BestTime({ trek }: { trek: Trek }) {
  const table = trek.bestTimeTable?.length
    ? trek.bestTimeTable
    : [
        { month: "Jan", rating: "Fair", note: "Cold; possible snow" },
        { month: "Feb", rating: "Fair", note: "Cold; possible snow" },
        { month: "Mar", rating: "Good", note: "Late winter; clearing skies" },
        { month: "Apr", rating: "Excellent", note: "Spring bloom begins" },
        { month: "May", rating: "Excellent", note: "Peak season; clear views" },
        { month: "Jun", rating: "Good", note: "Warm; pre-monsoon showers" },
        { month: "Jul", rating: "Closed", note: "Monsoon; landslide risk" },
        { month: "Aug", rating: "Closed", note: "Monsoon; landslide risk" },
        { month: "Sep", rating: "Excellent", note: "Post-monsoon clarity" },
        { month: "Oct", rating: "Excellent", note: "Crisp air; best views" },
        { month: "Nov", rating: "Good", note: "Cold mornings; early snow" },
        { month: "Dec", rating: "Fair", note: "Snow cover; winter trekking" },
      ];

  const ratingColor = (r: string) => {
    if (r === "Excellent") return "bg-success/20 text-success";
    if (r === "Good") return "bg-mint text-deep-green";
    if (r === "Fair") return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <Section bg="bg-surface-white">
      <Eyebrow>Seasons</Eyebrow>
      <SectionHeading>Best time to visit</SectionHeading>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="border-b-2 border-deep-green">
              <th
                scope="col"
                className="text-left py-3 px-4 font-body font-semibold text-sm text-text-primary uppercase tracking-wider"
              >
                Month
              </th>
              <th
                scope="col"
                className="text-left py-3 px-4 font-body font-semibold text-sm text-text-primary uppercase tracking-wider"
              >
                Rating
              </th>
              <th
                scope="col"
                className="text-left py-3 px-4 font-body font-semibold text-sm text-text-primary uppercase tracking-wider"
              >
                Conditions
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map((row, i) => (
              <tr
                key={row.month}
                className={classNames(
                  "border-b border-border-subtle transition-default hover:bg-muted/30",
                  i % 2 === 0 ? "bg-surface-white" : "bg-muted/20",
                )}
              >
                <td className="py-3 px-4 font-body text-sm text-text-primary font-medium">
                  {row.month}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={classNames(
                      "inline-block rounded-full px-2.5 py-0.5 text-xs font-body font-medium",
                      ratingColor(row.rating),
                    )}
                  >
                    {row.rating}
                  </span>
                </td>
                <td className="py-3 px-4 font-body text-sm text-text-secondary">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ─── 9. How to Reach ─── */
function HowToReach({ trek }: { trek: Trek }) {
  const steps = trek.howToReach?.length
    ? trek.howToReach
    : [
        `Nearest airport: ${trek.nearestAirport}. Most trekkers fly into the nearest airport and take a taxi or our shared pickup to the assembly point.`,
        `Nearest railhead: ${trek.nearestRailhead}. Overnight trains from Delhi are the most popular option.`,
        `From Delhi: Plan for a full day of road or rail travel to reach ${trek.assemblyPoint}. We recommend arriving a day early.`,
        "Global Trek arranges shared pickup vehicles from the assembly point to the trek base on Day 1, and return on the final day.",
      ];

  return (
    <Section bg="bg-muted">
      <Eyebrow>Travel</Eyebrow>
      <SectionHeading>How to reach the base point</SectionHeading>
      <div className="max-w-3xl space-y-5">
        {steps.map((step) => (
          <div key={step} className="flex items-start gap-4">
            <MapPin
              className="w-5 h-5 text-deep-green flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="font-body text-text-primary text-base leading-relaxed">
              {step}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── 10. Photo Gallery ─── */
function Gallery({ trek }: { trek: Trek }) {
  const images = trek.gallery?.length
    ? trek.gallery
    : Array.from({ length: 6 }, (_, i) => ({
        src: trek.image,
        alt: `${trek.title} landscape view ${i + 1}`,
      }));

  return (
    <Section bg="bg-surface-white">
      <Eyebrow>Gallery</Eyebrow>
      <SectionHeading>Photo gallery</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div
            key={img.src}
            className="rounded-lg overflow-hidden aspect-[4/3] group"
            data-ocid={`gallery.item.${idx + 1}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-default group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── 11. FAQs ─── */
function Faqs({ trek }: { trek: Trek }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = trek.faqs?.length
    ? trek.faqs
    : [
        {
          question: "What is the best time to do this trek?",
          answer:
            "The ideal season varies by trek. Each month offers different conditions, so check our month-by-month table above for detailed guidance.",
        },
        {
          question: "How fit do I need to be?",
          answer:
            "Regular walking or light cardio for 3–4 weeks before the trek is sufficient for most trekkers.",
        },
        {
          question: "What is included in the trek fee?",
          answer:
            "The fee covers accommodation, all meals during the trek, permits, shared transport from the assembly point, guide services, and basic safety equipment.",
        },
        {
          question: "Can I join as a solo traveler?",
          answer:
            "Absolutely. Many of our trekkers join solo. Our small groups make it easy to bond with fellow trekkers, and our guides ensure everyone feels included and safe.",
        },
        {
          question: "What happens if the weather turns bad?",
          answer:
            "Our guides are trained to handle weather contingencies. If conditions become unsafe, we adjust the itinerary or descend as needed. Safety always comes first.",
        },
        {
          question: "Do I need travel insurance?",
          answer:
            "Yes, we strongly recommend travel insurance that covers high-altitude trekking and emergency evacuation. It is not included in the trek fee.",
        },
      ];

  return (
    <Section bg="bg-muted">
      <Eyebrow>FAQs</Eyebrow>
      <SectionHeading>Frequently asked questions</SectionHeading>
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={faq.question}
              className="border border-border-subtle rounded-lg overflow-hidden bg-surface-white"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/20 transition-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
                aria-expanded={isOpen}
                data-ocid={`faq.item.${idx + 1}.toggle`}
              >
                <span className="font-body font-semibold text-text-primary text-sm pr-4">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp
                    className="w-5 h-5 text-text-secondary flex-shrink-0"
                    aria-hidden="true"
                  />
                ) : (
                  <ChevronDown
                    className="w-5 h-5 text-text-secondary flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="font-body text-text-secondary text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ─── 12. Booking Panel ─── */
function BookingPanel({ trek }: { trek: Trek }) {
  const [travelers, setTravelers] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const dates = trek.sampleDates?.length
    ? trek.sampleDates
    : ["15 Apr 2026", "22 Apr 2026", "6 May 2026", "20 May 2026"];

  return (
    <div className="lg:sticky lg:top-[100px] z-30">
      <div className="bg-surface-white border border-border-subtle rounded-lg p-6 shadow-card">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <p className="font-body text-text-secondary text-xs mb-1">
              Starting from
            </p>
            <p className="font-display text-3xl text-text-primary font-bold">
              {trek.price}
            </p>
          </div>
          <span className="font-body text-text-secondary text-xs">
            per person
          </span>
        </div>

        {/* Date pills */}
        <p className="font-body text-text-primary text-sm font-medium mb-2">
          Select a departure date
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {dates.map((date) => {
            const active = selectedDate === date;
            return (
              <button
                key={date}
                type="button"
                onClick={() => setSelectedDate(active ? null : date)}
                className={classNames(
                  "rounded-full px-3 py-1.5 text-xs font-body font-medium transition-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green",
                  active
                    ? "bg-deep-green text-white"
                    : "bg-muted text-text-primary border border-border-subtle hover:border-deep-green",
                )}
                aria-pressed={active}
                data-ocid={`booking.date.${date.replace(/\s+/g, "_")}`}
              >
                {date}
              </button>
            );
          })}
        </div>

        {/* Traveler stepper */}
        <p className="font-body text-text-primary text-sm font-medium mb-2">
          Travelers
        </p>
        <div className="flex items-center gap-3 mb-6">
          <button
            type="button"
            onClick={() => setTravelers((t) => Math.max(1, t - 1))}
            className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-text-primary hover:border-deep-green transition-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
            aria-label="Decrease travelers"
            data-ocid="booking.travelers.minus"
          >
            <Minus className="w-4 h-4" aria-hidden="true" />
          </button>
          <span className="font-body font-semibold text-text-primary w-6 text-center">
            {travelers}
          </span>
          <button
            type="button"
            onClick={() => setTravelers((t) => Math.min(14, t + 1))}
            className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-text-primary hover:border-deep-green transition-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
            aria-label="Increase travelers"
            data-ocid="booking.travelers.plus"
          >
            <Plus className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          className="w-full rounded-full bg-deep-green text-white py-3 font-body font-medium transition-default hover:bg-deep-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
          data-ocid="booking.check_availability_button"
        >
          Check Availability
        </button>

        <p className="font-body text-text-secondary text-xs text-center mt-3">
          No payment required now. We&apos;ll confirm availability within 24
          hours.
        </p>
      </div>
    </div>
  );
}

/* ─── 13. Reviews ─── */
function Reviews({ trek }: { trek: Trek }) {
  const reviews = trek.reviews?.length
    ? trek.reviews
    : [
        {
          quote:
            "This trek exceeded every expectation. The guides knew exactly when to push and when to let us rest. Watching the sunrise from the highest point was a moment I will never forget.",
          name: "Aditya Kapoor",
          trip: `${trek.title} Trek`,
          date: "May 2026",
        },
        {
          quote:
            "As a first-time trekker, I was nervous about altitude and fitness. The Global Trek team made me feel safe from day one. The group was small, the food was great, and the views were unreal.",
          name: "Meera Nair",
          trip: `${trek.title} Trek`,
          date: "Apr 2026",
        },
      ];

  return (
    <Section bg="bg-surface-white">
      <Eyebrow>Reviews</Eyebrow>
      <SectionHeading>What trekkers say</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, idx) => (
          <div
            key={r.name}
            className="bg-muted border border-border-subtle rounded-lg p-6 transition-default hover:shadow-card"
            data-ocid={`reviews.item.${idx + 1}`}
          >
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-4 h-4 fill-deep-green text-deep-green"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="font-body text-text-primary text-base leading-relaxed mb-4">
              &ldquo;{r.quote}&rdquo;
            </p>
            <div className="border-t border-border-subtle pt-4">
              <p className="font-body font-semibold text-text-primary text-sm">
                {r.name}
              </p>
              <p className="font-body text-text-secondary text-xs">
                {r.trip} · {r.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── 14. Related Treks ─── */
function RelatedTreks({ trek }: { trek: Trek }) {
  const relatedIds = trek.relatedTreks?.length
    ? trek.relatedTreks
    : treks
        .filter((t) => t.state === trek.state && t.id !== trek.id)
        .map((t) => t.id);

  const related = relatedIds
    .map((id) => treks.find((t) => t.id === id))
    .filter(Boolean)
    .slice(0, 3) as Trek[];

  if (related.length === 0) return null;

  return (
    <Section bg="bg-muted">
      <Eyebrow>More Treks</Eyebrow>
      <SectionHeading>You might also like</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((t, i) => (
          <TrekCard key={t.id} trek={t} index={i} />
        ))}
      </div>
    </Section>
  );
}

/* ─── Main Page ─── */
export default function TrekDetailPage() {
  const { slug, trek } = useTrekFromSlug();

  if (!trek) {
    return (
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center max-w-md px-6">
          <h1 className="font-display text-4xl text-text-primary font-bold mb-4">
            Trek not found
          </h1>
          <p className="font-body text-text-secondary text-base mb-6">
            We couldn&apos;t find a trek matching &ldquo;{slug}&rdquo;. It may
            have been moved or renamed.
          </p>
          <Link
            to="/treks"
            className="inline-block rounded-full bg-deep-green text-white px-6 py-3 font-body font-medium transition-default hover:bg-deep-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
            data-ocid="trek_not_found.back_button"
          >
            Browse all treks
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Hero trek={trek} />

      {/* Spacer for quick-facts bar overlap */}
      <div className="h-16 md:h-12" />

      {/* Two-column layout: content + sticky booking panel on desktop */}
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <Overview trek={trek} />
            <AtAGlance trek={trek} />
            <Itinerary trek={trek} />
            <DifficultyFitness trek={trek} />
            <Inclusions trek={trek} />
            <PackingList trek={trek} />
            <BestTime trek={trek} />
            <HowToReach trek={trek} />
            <Gallery trek={trek} />
            <Faqs trek={trek} />
            <Reviews trek={trek} />
            <RelatedTreks trek={trek} />
          </div>

          {/* Booking sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0 order-first lg:order-none mb-8 lg:mb-0">
            <BookingPanel trek={trek} />
          </aside>
        </div>
      </div>
    </main>
  );
}
