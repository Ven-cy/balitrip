import {
  Landmark,
  LayoutGrid,
  Leaf,
  Palmtree,
  Search,
  SlidersHorizontal,
  Waves,
  X,
} from 'lucide-react'
import {
  categoryFilters,
  dayFilters,
  places as allPlaces,
} from '../data/baliData'
import { toGujaratiNumber } from '../lib/numbers'

const categoryIcons = {
  all: LayoutGrid,
  rides: Waves,
  temples: Landmark,
  beaches: Palmtree,
  nature: Leaf,
}

const dayCounts = dayFilters.reduce((counts, filter) => {
  counts[filter.id] = filter.days
    ? allPlaces.filter((place) => filter.days.includes(place.day)).length
    : allPlaces.length
  return counts
}, {})

export default function FilterBar({
  query,
  onQueryChange,
  activeDay,
  onDayChange,
  activeCategory,
  onCategoryChange,
  resultCount,
  onReset,
}) {
  const hasFilters = query.trim() || activeDay !== 'all' || activeCategory !== 'all'

  return (
    <div className="md:sticky md:top-[88px] md:z-30">
      <div className="rounded-[1.5rem] border border-ocean-950/[0.06] bg-sand-50/90 p-4 shadow-soft backdrop-blur-xl sm:rounded-[1.75rem] sm:p-5">
        {/* Search + reset */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <label htmlFor="spot-search" className="sr-only">
              સ્થળ અને રાઇડ શોધો
            </label>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ocean-400"
              strokeWidth={2}
              aria-hidden="true"
            />
            <input
              id="spot-search"
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="સ્થળ, રાઇડ કે બીચ શોધો…"
              className="h-12 w-full rounded-full border border-ocean-950/[0.08] bg-white/80 pl-11 pr-11 text-sm text-ocean-950 placeholder:text-ocean-900/35 transition focus:border-ocean-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-ocean-400/10 [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-ocean-500 transition hover:bg-ocean-900/[0.06] hover:text-ocean-900"
                aria-label="શોધ સાફ કરો"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 lg:justify-end">
            <p
              className="text-[11px] font-semibold text-ocean-900/50"
              aria-live="polite"
            >
              <span className="text-ocean-900">{toGujaratiNumber(resultCount)}</span> / {toGujaratiNumber(allPlaces.length)}{' '}
              સ્થળો
            </p>
            {hasFilters && (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-1.5 rounded-full border border-ocean-950/[0.08] bg-white/70 px-3 py-1.5 text-[11px] font-bold text-ocean-700 transition hover:border-coral-300 hover:bg-coral-50 hover:text-coral-600"
              >
                <X className="h-3 w-3" />
                રીસેટ
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 h-px bg-ocean-950/[0.06]" />

        {/* Day tabs */}
        <div className="mt-4 flex items-start gap-2 sm:gap-3">
          <span className="mt-2.5 hidden w-14 shrink-0 text-[10px] font-bold text-ocean-900/35 sm:block">
            દિવસ
          </span>
          <div
            className="no-scrollbar -mx-1 flex flex-1 gap-1.5 overflow-x-auto px-1 pb-1"
            role="group"
            aria-label="દિવસ પ્રમાણે ફિલ્ટર"
          >
            {dayFilters.map((filter) => {
              const active = activeDay === filter.id
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => onDayChange(filter.id)}
                  aria-pressed={active}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-bold transition duration-300 sm:text-xs ${
                    active
                      ? 'bg-ocean-900 text-sand-50 shadow-soft'
                      : 'bg-white/60 text-ocean-700 ring-1 ring-ocean-950/[0.06] hover:bg-white hover:text-ocean-900'
                  }`}
                >
                  {filter.label}
                  <span
                    className={`text-[9px] font-bold tabular-nums ${
                      active ? 'text-gold-300' : 'text-ocean-900/35'
                    }`}
                  >
                    {toGujaratiNumber(dayCounts[filter.id])}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Category chips */}
        <div className="mt-2 flex items-start gap-2 sm:gap-3">
          <span className="mt-2.5 hidden w-14 shrink-0 text-[10px] font-bold text-ocean-900/35 sm:block">
            મૂડ
          </span>
          <div
            className="no-scrollbar -mx-1 flex flex-1 gap-1.5 overflow-x-auto px-1 pb-1"
            role="group"
            aria-label="શ્રેણી પ્રમાણે ફિલ્ટર"
          >
            {categoryFilters.map((filter) => {
              const active = activeCategory === filter.id
              const Icon = categoryIcons[filter.id] ?? SlidersHorizontal
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => onCategoryChange(filter.id)}
                  aria-pressed={active}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-[11px] font-semibold transition duration-300 sm:text-xs ${
                    active
                      ? 'border-ocean-900 bg-ocean-900 text-sand-50 shadow-soft'
                      : 'border-ocean-950/[0.06] bg-white/55 text-ocean-700 hover:border-ocean-300 hover:bg-white hover:text-ocean-900'
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 ${
                      active ? 'text-gold-300' : 'text-ocean-400'
                    }`}
                    strokeWidth={1.9}
                  />
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
