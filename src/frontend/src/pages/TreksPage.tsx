import TrekCard from "@/components/TrekCard";
import { treks } from "@/data/treks";
import { Check, ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type StateFilter = "All" | "Uttarakhand" | "Himachal Pradesh";
type DifficultyFilter = "All" | "Easy-Moderate" | "Moderate" | "Challenging";
type SortOption =
  | "Recommended"
  | "Price: Low to High"
  | "Duration: Short to Long";

const stateFilters: StateFilter[] = ["All", "Uttarakhand", "Himachal Pradesh"];
const difficultyFilters: DifficultyFilter[] = [
  "All",
  "Easy-Moderate",
  "Moderate",
  "Challenging",
];
const sortOptions: SortOption[] = [
  "Recommended",
  "Price: Low to High",
  "Duration: Short to Long",
];

export default function TreksPage() {
  const [stateFilter, setStateFilter] = useState<StateFilter>("All");
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>("All");
  const [sort, setSort] = useState<SortOption>("Recommended");
  // sort dropdown is a native <select>, no open state needed

  const filtered = useMemo(() => {
    let result = [...treks];

    if (stateFilter !== "All") {
      result = result.filter((t) => t.state === stateFilter);
    }
    if (difficultyFilter !== "All") {
      result = result.filter((t) => t.difficulty === difficultyFilter);
    }

    if (sort === "Price: Low to High") {
      result.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sort === "Duration: Short to Long") {
      result.sort((a, b) => a.durationDays - b.durationDays);
    }

    return result;
  }, [stateFilter, difficultyFilter, sort]);

  const uttarakhandTreks = filtered.filter((t) => t.state === "Uttarakhand");
  const himachalTreks = filtered.filter((t) => t.state === "Himachal Pradesh");

  const resultText = `Showing ${filtered.length} trek${filtered.length !== 1 ? "s" : ""}`;

  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex items-center bg-cover bg-center"
        style={{
          height: "40vh",
          minHeight: "320px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-16">
          <p className="uppercase text-xs tracking-[0.05em] text-white/70 font-body font-medium mb-3">
            TREKS
          </p>
          <h1 className="font-display text-white text-4xl md:text-7xl font-bold leading-tight max-w-4xl">
            7 treks. 2 states. Every level.
          </h1>
          <p className="font-body text-white/90 text-base md:text-lg max-w-2xl mt-4">
            Small fixed-departure groups with certified local guides — from
            first-timer meadows to high-altitude passes.
          </p>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-surface-white border-b border-border-subtle shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* State Chips */}
            <fieldset
              className="flex flex-wrap gap-2"
              aria-label="Filter by state"
            >
              {stateFilters.map((chip) => {
                const active = stateFilter === chip;
                return (
                  <button
                    key={chip}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setStateFilter(chip)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-body font-medium transition-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green ${
                      active
                        ? "bg-deep-green text-white"
                        : "bg-white text-text-primary border border-border-subtle hover:border-deep-green"
                    }`}
                    data-ocid={`treks.filter.state.${chip.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {active && <Check size={14} aria-hidden="true" />}
                    {chip}
                  </button>
                );
              })}
            </fieldset>

            {/* Difficulty Chips */}
            <fieldset
              className="flex flex-wrap gap-2"
              aria-label="Filter by difficulty"
            >
              {difficultyFilters.map((chip) => {
                const active = difficultyFilter === chip;
                return (
                  <button
                    key={chip}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setDifficultyFilter(chip)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-body font-medium transition-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green ${
                      active
                        ? "bg-deep-green text-white"
                        : "bg-white text-text-primary border border-border-subtle hover:border-deep-green"
                    }`}
                    data-ocid={`treks.filter.difficulty.${chip.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {active && <Check size={14} aria-hidden="true" />}
                    {chip}
                  </button>
                );
              })}
            </fieldset>

            {/* Sort Dropdown */}
            <div className="md:ml-auto">
              <label htmlFor="sort-select" className="sr-only">
                Sort treks
              </label>
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-4 py-2 text-sm font-body font-medium text-text-primary transition-default hover:border-deep-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green appearance-none cursor-pointer pr-8"
                style={{ backgroundImage: "none" }}
                data-ocid="treks.sort.dropdown"
              >
                {sortOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Live region for result count */}
          <div className="mt-3" aria-live="polite" aria-atomic="true">
            <p className="text-sm text-text-secondary font-body">
              {resultText}
            </p>
          </div>
        </div>
      </div>

      {/* Uttarakhand Section */}
      {uttarakhandTreks.length > 0 && (
        <section className="py-16 md:py-20 bg-surface-white">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl text-text-primary font-bold mb-2">
              Uttarakhand
            </h2>
            <p className="font-body text-text-secondary text-base max-w-2xl mb-10">
              The Garhwal and Kumaon ranges — home to ancient temples, alpine
              meadows, and some of the most accessible high-altitude trails in
              India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uttarakhandTreks.map((trek, i) => (
                <TrekCard key={trek.id} trek={trek} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Himachal Pradesh Section */}
      {himachalTreks.length > 0 && (
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl text-text-primary font-bold mb-2">
              Himachal Pradesh
            </h2>
            <p className="font-body text-text-secondary text-base max-w-2xl mb-10">
              From the lush Kullu Valley to the stark Lahaul desert — dramatic
              traverses, high passes, and ridge walks in the Dhauladhar and Pir
              Panjal ranges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {himachalTreks.map((trek, i) => (
                <TrekCard
                  key={trek.id}
                  trek={trek}
                  index={i + uttarakhandTreks.length}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      <section className="py-16 md:py-20 bg-surface-white">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-text-primary font-bold mb-2">
            Compare all 7 treks at a glance
          </h2>
          <p className="font-body text-text-secondary text-base max-w-2xl mb-10">
            Side-by-side specs to help you pick the right trail for your
            fitness, schedule, and budget.
          </p>

          <div className="relative">
            {/* Scroll shadow affordance */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface-white to-transparent pointer-events-none z-10 md:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface-white to-transparent pointer-events-none z-10 md:hidden" />

            <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-deep-green">
                    <th
                      scope="col"
                      className="text-left py-3 px-4 font-body font-semibold text-sm text-text-primary uppercase tracking-wider"
                    >
                      Trek
                    </th>
                    <th
                      scope="col"
                      className="text-left py-3 px-4 font-body font-semibold text-sm text-text-primary uppercase tracking-wider"
                    >
                      State
                    </th>
                    <th
                      scope="col"
                      className="text-left py-3 px-4 font-body font-semibold text-sm text-text-primary uppercase tracking-wider"
                    >
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="text-left py-3 px-4 font-body font-semibold text-sm text-text-primary uppercase tracking-wider"
                    >
                      Max Altitude
                    </th>
                    <th
                      scope="col"
                      className="text-left py-3 px-4 font-body font-semibold text-sm text-text-primary uppercase tracking-wider"
                    >
                      Difficulty
                    </th>
                    <th
                      scope="col"
                      className="text-left py-3 px-4 font-body font-semibold text-sm text-text-primary uppercase tracking-wider"
                    >
                      Best Season
                    </th>
                    <th
                      scope="col"
                      className="text-left py-3 px-4 font-body font-semibold text-sm text-text-primary uppercase tracking-wider"
                    >
                      Price From
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((trek, i) => (
                    <tr
                      key={trek.id}
                      className={`border-b border-border-subtle transition-default hover:bg-mint/30 ${
                        i % 2 === 0 ? "bg-surface-white" : "bg-muted/30"
                      }`}
                    >
                      <td className="py-3 px-4 font-body text-sm text-text-primary font-medium">
                        <Link
                          to={`/treks/${trek.id}`}
                          className="text-deep-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
                        >
                          {trek.title}
                        </Link>
                      </td>
                      <td className="py-3 px-4 font-body text-sm text-text-secondary">
                        {trek.state}
                      </td>
                      <td className="py-3 px-4 font-body text-sm text-text-secondary">
                        {trek.duration}
                      </td>
                      <td className="py-3 px-4 font-body text-sm text-text-secondary">
                        {trek.maxAltitude}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-body font-medium ${
                            trek.difficulty === "Easy-Moderate"
                              ? "bg-mint text-deep-green"
                              : trek.difficulty === "Moderate"
                                ? "bg-strong text-text-primary"
                                : "bg-surface-black text-white"
                          }`}
                        >
                          {trek.difficulty}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-body text-sm text-text-secondary">
                        {trek.bestSeason}
                      </td>
                      <td className="py-3 px-4 font-body text-sm text-deep-green font-semibold">
                        {trek.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-surface-black text-white text-center py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Found your trek? Lock in a date.
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-body text-base mb-8">
            Browse our fixed departure dates or plan a private group trip with
            your friends, family, or colleagues.
          </p>
          <a
            href="/contact"
            className="inline-block bg-deep-green text-white rounded-full px-8 py-3 font-body font-medium transition-default hover:bg-deep-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
            data-ocid="treks.cta.check_dates_button"
          >
            Check Dates &amp; Prices
          </a>
        </div>
      </section>
    </main>
  );
}
