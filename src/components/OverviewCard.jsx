import { useState } from 'react'
import { BedDouble, CalendarDays, Coffee, Maximize2, Users } from 'lucide-react'
import PhotoPlaceholder from './PhotoPlaceholder'

const infoIcons = {
  dates: CalendarDays,
  party: Users,
  meals: Coffee,
}

export default function OverviewCard({ trip, hotels, onOpenPhoto }) {
  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-ocean-950/[0.06] bg-white/85 shadow-soft">
      <h1 className="sr-only">{trip.title}</h1>
      <div className="relative">
        <button
          type="button"
          onClick={() => onOpenPhoto('photo-trip-hero')}
          aria-label="Open the cover photo"
          className="relative block aspect-[4/3] w-full overflow-hidden text-left sm:aspect-[16/11]"
        >
          <img
            src={trip.heroImage}
            alt="Bali coastline"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/25 to-ocean-950/10" />

          <span className="absolute inset-x-0 bottom-0 block p-5">
            <span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-gold-300">
              Bali · Indonesia
            </span>
            <span className="mt-1.5 block font-display text-[2.1rem] leading-[1.08] text-white [text-shadow:0_2px_20px_rgba(7,33,36,0.45)] sm:text-[2.5rem]">
              {trip.title}
            </span>
            <span className="mt-1 block text-[12.5px] font-medium text-white/75">
              {trip.subtitle}
            </span>
          </span>

          <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-ocean-950/35 text-white/90 backdrop-blur-sm">
            <Maximize2 className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
          </span>
        </button>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-1.5">
          {trip.quickInfo.map((info) => {
            const Icon = infoIcons[info.id] ?? CalendarDays
            return (
              <span
                key={info.id}
                className="inline-flex items-center gap-1.5 rounded-full bg-sand-100 px-3 py-2 text-[13.5px] font-semibold text-ocean-900/85 ring-1 ring-ocean-950/[0.04]"
              >
                <Icon className="h-3.5 w-3.5 text-ocean-600" strokeWidth={2} aria-hidden="true" />
                {info.label}
              </span>
            )
          })}
        </div>

        <div className="mt-4 border-t border-ocean-950/[0.07] pt-4">
          <h2 className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-ocean-500">
            <BedDouble className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
            Where you&rsquo;ll stay
          </h2>

          <ul className="mt-3 space-y-3">
            {hotels.map((hotel) => (
              <HotelRow key={hotel.id} hotel={hotel} onOpenPhoto={onOpenPhoto} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function HotelRow({ hotel, onOpenPhoto }) {
  const [failed, setFailed] = useState(false)
  const canOpen = Boolean(hotel.image) && !failed

  return (
    <li className="flex items-center gap-3">
      {canOpen ? (
        <button
          type="button"
          onClick={() => onOpenPhoto(`photo-hotel-${hotel.id}`)}
          aria-label={`Open photo: ${hotel.name}`}
          className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-ocean-900 ring-1 ring-ocean-950/10"
        >
          <img
            src={hotel.image}
            alt={hotel.name}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        </button>
      ) : (
        <span className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl">
          <PhotoPlaceholder label="Hotel photo" />
        </span>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-gold-300/90 px-2 py-0.5 text-[10px] font-extrabold text-ocean-950">
            {hotel.nights}
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-ocean-500">
            {hotel.area}
          </span>
        </div>
        <p className="mt-0.5 truncate text-[15px] font-bold text-ocean-950">
          {hotel.name}
        </p>
        <p className="truncate text-[12.5px] text-ocean-900/60">{hotel.room}</p>
      </div>
    </li>
  )
}
