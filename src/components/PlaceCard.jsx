import { Clock3, Expand, MapPin } from 'lucide-react'
import { getCategoryTheme, handleImageError } from '../lib/theme'

export default function PlaceCard({ place, index = 0, onOpen }) {
  const category = getCategoryTheme(place.category)

  return (
    <article
      className="stagger-card group relative overflow-hidden rounded-[1.5rem] border border-ocean-950/[0.04] bg-white shadow-soft transition duration-500 hover:-translate-y-1.5 hover:shadow-lift"
      style={{ animationDelay: `${Math.min(index, 10) * 55}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ocean-900">
          <img
            src={place.imageUrl}
            alt={`${place.title} — ${place.location}`}
            onError={handleImageError}
            loading="lazy"
            className="h-full w-full object-cover transition duration-[1000ms] ease-out group-hover:scale-[1.09]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/85 via-ocean-950/10 to-ocean-950/20" />
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-t from-ocean-950/40 to-transparent" />

          {/* Badges */}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3.5">
            <span className="rounded-full border border-white/25 bg-ocean-950/40 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-md">
              {place.day}
            </span>
            <span
              className={`max-w-[10.5rem] truncate rounded-full px-2.5 py-1 text-[10px] font-bold shadow-sm backdrop-blur-sm ${category.badge}`}
            >
              {category.short}
            </span>
          </div>

          {/* Overlay footer */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-sand-50/90 backdrop-blur-md">
                <Clock3 className="h-3 w-3 text-gold-300" strokeWidth={1.9} />
                {place.time}
              </span>
            </div>
            <span className="grid h-9 w-9 shrink-0 scale-90 place-items-center rounded-full border border-white/40 bg-white/20 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:scale-100 group-hover:opacity-100">
              <Expand className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

      <div className="p-4 sm:p-5">
        <h3 className="font-display text-[1.4rem] font-normal leading-[1.3] text-ocean-950 transition-colors duration-300 group-hover:text-ocean-600">
          {place.title}
        </h3>

        <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-ocean-900/45">
          <MapPin className="h-3 w-3 shrink-0 text-ocean-400" strokeWidth={2} />
          <span className="truncate">{place.location}</span>
        </p>

        <p className="mt-2.5 line-clamp-3 text-[12.5px] leading-relaxed text-ocean-900/60">
          {place.description}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {place.highlights.slice(0, 3).map((highlight) => (
            <span
              key={highlight}
              className="rounded-full bg-sand-100/80 px-2.5 py-1 text-[10px] font-semibold text-ocean-800/70 ring-1 ring-ocean-950/[0.03]"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>

      {/* Full-card hit area; keeps the card a single, accessible control. */}
      <button
        type="button"
        onClick={() => onOpen(place.id)}
        className="absolute inset-0 z-20 rounded-[1.5rem] focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-inset"
        aria-label={`${place.title} નો ફોટો અને વિગતો જુઓ`}
      />
    </article>
  )
}
