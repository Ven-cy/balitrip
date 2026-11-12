import { useCallback, useDeferredValue, useMemo, useState } from 'react'
import { Compass, MapPinned, SearchX, Sparkles } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StaySection from './components/StaySection'
import FilterBar from './components/FilterBar'
import PlaceCard from './components/PlaceCard'
import PhotoModal from './components/PhotoModal'
import Footer from './components/Footer'
import { toGujaratiNumber, toGujaratiPadded } from './lib/numbers'
import {
  places,
  categoryFilters,
  dayFilters,
  tripInfo,
} from './data/baliData'

export default function App() {
  const [query, setQuery] = useState('')
  const [activeDay, setActiveDay] = useState('all')
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedId, setSelectedId] = useState(null)

  const deferredQuery = useDeferredValue(query)

  const filteredPlaces = useMemo(() => {
    const dayFilter = dayFilters.find((filter) => filter.id === activeDay)
    const categoryFilter = categoryFilters.find((filter) => filter.id === activeCategory)
    const search = deferredQuery.trim().toLowerCase()

    return places.filter((place) => {
      if (dayFilter?.days && !dayFilter.days.includes(place.day)) return false
      if (categoryFilter?.category && place.category !== categoryFilter.category) {
        return false
      }
      if (!search) return true

      const haystack = [
        place.title,
        place.location,
        place.description,
        place.category,
        place.day,
        place.date,
        place.stay,
        ...place.highlights,
      ]
        .join(' ')
        .toLowerCase()

      return haystack.includes(search)
    })
  }, [activeDay, activeCategory, deferredQuery])

  const selectedIndex = useMemo(
    () => (selectedId ? places.findIndex((place) => place.id === selectedId) : -1),
    [selectedId],
  )

  const selectedPlace = selectedIndex >= 0 ? places[selectedIndex] : null

  const closeModal = useCallback(() => setSelectedId(null), [])

  const showPrevious = useCallback(() => {
    setSelectedId((current) => {
      if (!current) return current
      const currentIndex = places.findIndex((place) => place.id === current)
      if (currentIndex < 0) return current
      return places[(currentIndex - 1 + places.length) % places.length].id
    })
  }, [])

  const showNext = useCallback(() => {
    setSelectedId((current) => {
      if (!current) return current
      const currentIndex = places.findIndex((place) => place.id === current)
      if (currentIndex < 0) return current
      return places[(currentIndex + 1) % places.length].id
    })
  }, [])

  const resetFilters = useCallback(() => {
    setQuery('')
    setActiveDay('all')
    setActiveCategory('all')
  }, [])

  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />

      <main>
        <Hero />
        <StaySection />

        <section
          id="itinerary"
          className="relative scroll-mt-24 overflow-hidden border-y border-ocean-950/[0.05] bg-sand-100/30 py-20 sm:py-24 lg:py-28"
        >
          {/* Soft decorative wash */}
          <div className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-ocean-200/20 blur-3xl" />
            <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-gold-200/25 blur-3xl" />
          </div>

          <div className="container-bali relative">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow text-ocean-500">
                  <Compass className="h-3.5 w-3.5" />
                  યાત્રાપથ
                </p>
                <h2 className="section-title mt-4">
                  દરેક સ્થળ,{' '}
                  <span className="text-ocean-500">એક જ જગ્યાએ.</span>
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ocean-900/60">
                  સાત દિવસમાં વીસ ક્ષણો — દિવસ કે મૂડ પ્રમાણે ફિલ્ટર કરો, પ્રિય
                  સ્થળ શોધો, પછી કોઈ પણ ફોટા પર ટેપ કરીને મોટા આકારમાં જુઓ.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <div className="flex items-center gap-3 rounded-2xl border border-ocean-950/[0.05] bg-white/60 px-4 py-3 shadow-soft">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-ocean-900 text-sand-100">
                    <MapPinned className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-display text-xl leading-none text-ocean-950">
                      {toGujaratiNumber(places.length)}
                    </p>
                    <p className="mt-1 text-[10px] font-bold text-ocean-900/40">
                      સ્થળો
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-ocean-950/[0.05] bg-white/60 px-4 py-3 shadow-soft">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-300 text-ocean-950">
                    <Sparkles className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-display text-xl leading-none text-ocean-950">
                      ૭
                    </p>
                    <p className="mt-1 text-[10px] font-bold text-ocean-900/40">
                      દિવસો
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-12">
              <FilterBar
                query={query}
                onQueryChange={setQuery}
                activeDay={activeDay}
                onDayChange={setActiveDay}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                resultCount={filteredPlaces.length}
                onReset={resetFilters}
              />
            </div>

            <div id="photos" className="mt-8 scroll-mt-32 sm:mt-10">
              {filteredPlaces.length > 0 ? (
                <>
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <p className="text-[10px] font-bold text-ocean-900/35">
                      {toGujaratiPadded(filteredPlaces.length)} સ્થળો દેખાય છે
                    </p>
                    <p className="hidden text-[11px] font-semibold text-ocean-900/35 sm:block">
                      કાર્ડ પર ટેપ કરો · {tripInfo.dateRange}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredPlaces.map((place, index) => (
                      <PlaceCard
                        key={place.id}
                        place={place}
                        index={index}
                        onOpen={setSelectedId}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-ocean-950/10 bg-white/50 px-6 py-20 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-ocean-50 text-ocean-400">
                    <SearchX className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-normal text-ocean-950">
                    એ શોધ સાથે કોઈ સ્થળ મળ્યું નહીં
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ocean-900/50">
                    બીજું નામ પ્રયત્ન કરો, અથવા ફિલ્ટર સાફ કરીને બધાં વીસ સ્થળો
                    જુઓ.
                  </p>
                  <button type="button" onClick={resetFilters} className="btn-dark mt-6">
                    બધા ફિલ્ટર સાફ કરો
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedPlace && (
        <PhotoModal
          place={selectedPlace}
          places={places}
          index={selectedIndex}
          onClose={closeModal}
          onPrev={showPrevious}
          onNext={showNext}
        />
      )}
    </div>
  )
}
