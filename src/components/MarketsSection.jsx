import { MapPin, ShoppingBag } from 'lucide-react'

/** "Nearby Shopping & Local Markets" — Kuta/Legian and Ubud market guide. */
export default function MarketsSection({ markets }) {
  return (
    <section id="markets" className="pt-1">
      <div className="rounded-[1.75rem] border border-ocean-950/[0.06] bg-white/85 p-4 shadow-soft">
        <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ocean-500">
          <ShoppingBag className="h-3.5 w-3.5 text-gold-500" strokeWidth={2.2} aria-hidden="true" />
          Shop local
        </p>
        <h2 className="mt-2 font-display text-[1.9rem] leading-[1.1] text-ocean-950">
          Nearby Shopping
          <span className="block text-ocean-600">&amp; Local Markets</span>
        </h2>
        <p className="mt-2 text-base leading-relaxed text-ocean-900/65">
          {markets.intro}
        </p>

        <div className="mt-4 space-y-4">
          {markets.groups.map((group) => (
            <div key={group.id}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-[10.5px] font-extrabold uppercase tracking-[0.1em] text-ocean-500">
                  {group.title}
                </h3>
                <span className="rounded-full bg-ocean-900 px-2.5 py-1 text-[10px] font-extrabold text-sand-50">
                  {group.days}
                </span>
              </div>

              <ul className="mt-2 space-y-2">
                {group.places.map((place) => (
                  <MarketItem key={place.number} place={place} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-3 flex gap-2 rounded-xl bg-gold-100/60 px-3 py-2.5 text-[12.5px] leading-relaxed text-ocean-900/70 ring-1 ring-gold-200/70">
          <span aria-hidden="true" className="mt-px font-bold text-gold-500">
            ★
          </span>
          <span>{markets.tip}</span>
        </p>
      </div>
    </section>
  )
}

function MarketItem({ place }) {
  return (
    <li className="flex gap-3 rounded-2xl border border-ocean-950/[0.06] bg-sand-50/60 p-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ocean-900 text-[11px] font-bold tabular-nums text-sand-50">
        {place.number}
      </span>
      <div className="min-w-0">
        <p className="text-[15px] font-bold leading-snug text-ocean-950">
          {place.name}
        </p>
        <p className="mt-0.5 flex items-start gap-1 text-[12px] font-semibold text-ocean-600/80">
          <MapPin className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={2.4} aria-hidden="true" />
          <span>{place.distance}</span>
        </p>
        <p className="mt-1 text-[14.5px] leading-relaxed text-ocean-900/65">
          {place.blurb}
        </p>
      </div>
    </li>
  )
}
