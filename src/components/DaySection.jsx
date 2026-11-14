import { useState } from 'react'
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Compass,
  Hotel,
  MapPin,
  Minus,
  ShoppingBag,
  UtensilsCrossed,
} from 'lucide-react'
import PhotoCard from './PhotoCard'
import PhotoPlaceholder from './PhotoPlaceholder'

export default function DaySection({ day, onOpenPhoto, onOpenMarkets }) {
  return (
    <section id={day.id} className="pt-1">
      <div className="overflow-hidden rounded-[1.75rem] border border-ocean-950/[0.06] bg-white/85 p-3.5 shadow-soft sm:p-4">
        <header className="flex items-start justify-between gap-3 px-0.5 pb-3.5">
          <div className="min-w-0">
            <p className="inline-flex items-center rounded-full bg-ocean-900 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-sand-50">
              {day.label}
            </p>
            <h2 className="mt-2 font-display text-[1.6rem] leading-[1.15] text-ocean-950">
              {day.title}
            </h2>
            <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-ocean-900/50">
              {day.date}
            </p>
            <p className="mt-1.5 flex items-start gap-1.5 text-[13px] font-semibold text-ocean-700/80">
              <Hotel className="mt-px h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
              <span>{day.stay}</span>
            </p>
          </div>
          <span
            aria-hidden="true"
            className="shrink-0 font-display text-[3.25rem] leading-none text-ocean-100"
          >
            {String(day.number).padStart(2, '0')}
          </span>
        </header>

        <div className="space-y-3">
          {day.photos.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onOpen={onOpenPhoto}
              priority={day.number === 1 && index === 0}
            />
          ))}

          <IncludedToday items={day.included} />
          <NotIncludedToday items={day.excluded} />
          {day.indianFood && <IndianFoodBox dining={day.indianFood} />}
          {day.shopping && (
            <ShoppingNearby
              shopping={day.shopping}
              onOpenMarkets={onOpenMarkets}
            />
          )}
          {day.nearby.length > 0 && (
            <NearbyBox places={day.nearby} onOpenPhoto={onOpenPhoto} />
          )}
        </div>
      </div>
    </section>
  )
}

function IncludedToday({ items }) {
  return (
    <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-3.5">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-emerald-800">
        Included today
      </p>
      <ul className="mt-2.5 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-base leading-relaxed text-emerald-950/85">
            <Check
              className="mt-1 h-4 w-4 shrink-0 text-emerald-600"
              strokeWidth={3}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function NotIncludedToday({ items }) {
  return (
    <div className="rounded-2xl border border-amber-300/80 bg-amber-50 p-3.5">
      <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-amber-800">
        <AlertTriangle className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
        Not included today
      </p>
      <p className="mt-1 text-[11px] font-medium text-amber-800/60">
        Extras you arrange or pay for at the spot
      </p>
      <ul className="mt-2.5 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-base leading-relaxed text-amber-950/80">
            <Minus
              className="mt-1 h-4 w-4 shrink-0 text-amber-600"
              strokeWidth={3}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function IndianFoodBox({ dining }) {
  return (
    <div className="rounded-2xl border border-orange-300/80 bg-orange-50 p-3.5">
      <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-orange-800">
        <UtensilsCrossed className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
        Indian food nearby
      </p>
      <p className="mt-1 text-[11px] font-medium text-orange-800/60">
        {dining.label} · veg &amp; Jain-friendly options
      </p>

      <p className="mt-2 text-[14.5px] leading-relaxed text-orange-950/75">
        {dining.note}
      </p>

      <ul className="mt-2.5 space-y-2">
        {dining.restaurants.map((restaurant) => (
          <li
            key={restaurant.name}
            className="rounded-xl bg-white/75 px-3 py-2.5 ring-1 ring-orange-200/70"
          >
            <p className="text-[15px] font-bold leading-snug text-orange-950">
              {restaurant.name}
            </p>
            <p className="mt-0.5 text-[10.5px] font-bold uppercase tracking-[0.06em] text-orange-700/70">
              {restaurant.area}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ShoppingNearby({ shopping, onOpenMarkets }) {
  return (
    <div className="rounded-2xl border border-rose-200/80 bg-rose-50/80 p-3.5">
      <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-rose-800">
        <ShoppingBag className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
        Shopping nearby
      </p>
      <p className="mt-1 text-[11px] font-medium text-rose-800/60">
        {shopping.label}
      </p>

      <p className="mt-2 text-[14.5px] leading-relaxed text-rose-950/75">
        {shopping.note}
      </p>

      <ul className="mt-2.5 space-y-2">
        {shopping.markets.map((market) => (
          <li
            key={market.name}
            className="rounded-xl bg-white/75 px-3 py-2.5 ring-1 ring-rose-200/70"
          >
            <p className="text-[15px] font-bold leading-snug text-rose-950">
              {market.name}
            </p>
            <p className="mt-0.5 flex items-start gap-1 text-[11px] font-bold uppercase tracking-[0.05em] text-rose-700/70">
              <MapPin
                className="mt-px h-3 w-3 shrink-0"
                strokeWidth={2.4}
                aria-hidden="true"
              />
              <span>{market.distance}</span>
            </p>
            {market.blurb && (
              <p className="mt-1 text-[13.5px] leading-relaxed text-rose-950/65">
                {market.blurb}
              </p>
            )}
          </li>
        ))}
      </ul>

      {onOpenMarkets && (
        <button
          type="button"
          onClick={onOpenMarkets}
          className="mt-2.5 inline-flex items-center gap-1 text-[12.5px] font-extrabold text-rose-700 transition hover:text-rose-800"
        >
          Full markets guide
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.6} aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

function NearbyBox({ places, onOpenPhoto }) {
  return (
    <div className="rounded-2xl border border-teal-200/90 bg-teal-50/80 p-3.5">
      <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-teal-800">
        <Compass className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
        Nearby attractive spots
      </p>
      <p className="mt-1 text-[11px] font-medium text-teal-800/60">
        Not in tour · optional visit if time permits
      </p>

      <div className="mt-2.5 space-y-3">
        {places.map((place) => (
          <NearbyItem key={place.name} place={place} onOpenPhoto={onOpenPhoto} />
        ))}
      </div>
    </div>
  )
}

function NearbyItem({ place, onOpenPhoto }) {
  const [failed, setFailed] = useState(false)
  const canOpen = Boolean(place.image) && !failed

  return (
    <div className="flex items-start gap-3">
      {place.image ? (
        <button
          type="button"
          onClick={() => canOpen && onOpenPhoto(place.photoId)}
          aria-label={canOpen ? `Open photo: ${place.name}` : place.name}
          className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-teal-900 ring-1 ring-teal-900/10"
        >
          {canOpen ? (
            <img
              src={place.image}
              alt={place.name}
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <PhotoPlaceholder label="" />
          )}
        </button>
      ) : (
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-teal-600/10 text-teal-700">
          <MapPin className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </span>
      )}

      <div className="min-w-0">
        <p className="text-[15.5px] font-bold leading-snug text-teal-950">
          {place.name}
        </p>
        {place.distance && (
          <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.06em] text-teal-700/75">
            {place.distance}
          </p>
        )}
        <p className="mt-1 text-[15px] leading-relaxed text-teal-950/75">
          {place.blurb}
        </p>
      </div>
    </div>
  )
}
