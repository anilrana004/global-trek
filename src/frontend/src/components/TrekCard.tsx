import type { Trek } from "@/data/treks";
import { Link } from "react-router-dom";

interface TrekCardProps {
  trek: Trek;
  index: number;
}

export default function TrekCard({ trek, index }: TrekCardProps) {
  return (
    <Link
      to={`/treks/${trek.id}`}
      className="group block bg-surface-white rounded-lg overflow-hidden border border-border-subtle transition-default hover:-translate-y-1 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
      data-ocid={`treks.item.${index + 1}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={trek.image}
          alt={`${trek.title} trek landscape in ${trek.state}`}
          className="w-full h-56 object-cover transition-default group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-mint text-deep-green text-xs font-medium px-2 py-1 rounded-md font-body">
          {trek.difficulty}
        </span>
      </div>
      <div className="p-5">
        <p className="text-text-secondary text-sm font-body mb-1">
          {trek.state} · {trek.duration}
        </p>
        <h3 className="font-body font-semibold text-xl text-text-primary mb-2">
          {trek.title}
        </h3>
        <p className="text-text-secondary text-sm line-clamp-2 font-body mb-4">
          {trek.teaser}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-deep-green font-semibold font-body">
            From {trek.price}
          </span>
          <span className="text-deep-green text-sm font-medium font-body group-hover:underline">
            View trek →
          </span>
        </div>
      </div>
    </Link>
  );
}
