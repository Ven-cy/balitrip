import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react'
import TopNav from './components/TopNav'
import OverviewCard from './components/OverviewCard'
import DaySection from './components/DaySection'
import PosesSection from './components/PosesSection'
import MarketsSection from './components/MarketsSection'
import InclusionsSummary from './components/InclusionsSummary'
import Lightbox from './components/Lightbox'
import SiteFooter from './components/SiteFooter'
import {
  days,
  exclusions,
  gallery,
  hotels,
  inclusions,
  markets,
  poseCards,
  trip,
} from './data/tourData'

const navItems = [
  { id: 'overview', label: 'Overview', icon: 'home' },
  ...days.map((day) => ({ id: day.id, label: day.label })),
  { id: 'markets', label: 'Markets', icon: 'shopping' },
  { id: 'poses', label: 'Poses', icon: 'sparkles' },
]

const viewIds = new Set(navItems.map((item) => item.id))

const galleryIndexById = new Map(
  gallery.map((photo, index) => [photo.id, index]),
)

function readHash() {
  const id = window.location.hash.replace(/^#/, '')
  return viewIds.has(id) ? id : 'overview'
}

export default function App() {
  const [view, setView] = useState(readHash)
  const [openIndex, setOpenIndex] = useState(-1)

  /* Keep the view in sync with the URL hash (links, back/forward). */
  useEffect(() => {
    window.history.scrollRestoration = 'manual'

    const id = readHash()
    if (window.location.hash !== `#${id}`) {
      window.history.replaceState(null, '', `#${id}`)
    }

    const syncView = () => setView(readHash())
    window.addEventListener('hashchange', syncView)
    window.addEventListener('popstate', syncView)

    return () => {
      window.removeEventListener('hashchange', syncView)
      window.removeEventListener('popstate', syncView)
    }
  }, [])

  /* Every section is its own page — always start it at the top. */
  useEffect(() => {
    let frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
      frame = window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [view])

  const showView = useCallback((id) => {
    if (!viewIds.has(id)) return
    setView(id)
    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `#${id}`)
    }
  }, [])

  const openPhoto = useCallback((photoId) => {
    const index = galleryIndexById.get(photoId)
    if (typeof index === 'number') setOpenIndex(index)
  }, [])

  const closePhoto = useCallback(() => setOpenIndex(-1), [])

  const showPreviousPhoto = useCallback(() => {
    setOpenIndex((current) => (current - 1 + gallery.length) % gallery.length)
  }, [])

  const showNextPhoto = useCallback(() => {
    setOpenIndex((current) => (current + 1) % gallery.length)
  }, [])

  const activeDay = days.find((day) => day.id === view)

  const viewTitle = activeDay
    ? `${activeDay.label} – ${activeDay.title}`
    : view === 'markets'
      ? 'Nearby Shopping & Local Markets'
      : view === 'poses'
        ? 'Women’s Photo Poses & Style Guide'
        : trip.title

  return (
    <div className="min-h-dvh">
      <TopNav items={navItems} activeId={view} onChange={showView} />

      <main className="mx-auto w-full max-w-lg px-4 pt-4 sm:px-5 sm:pt-5">
        {view !== 'overview' && <h1 className="sr-only">{viewTitle}</h1>}

        {view === 'overview' && (
          <OverviewView onStart={() => showView('day-1')} onOpenPhoto={openPhoto} />
        )}

        {activeDay && (
          <DaySection
            day={activeDay}
            onOpenPhoto={openPhoto}
            onOpenMarkets={() => showView('markets')}
          />
        )}

        {view === 'markets' && <MarketsSection markets={markets} />}

        {view === 'poses' && (
          <PosesSection poses={poseCards} onOpenPhoto={openPhoto} />
        )}

        <StepNav current={view} onNavigate={showView} />
      </main>

      <SiteFooter />

      {openIndex >= 0 && (
        <Lightbox
          photos={gallery}
          index={openIndex}
          onClose={closePhoto}
          onPrev={showPreviousPhoto}
          onNext={showNextPhoto}
        />
      )}
    </div>
  )
}

/** Overview: trip card, master inclusions/exclusions and the entry point. */
function OverviewView({ onStart, onOpenPhoto }) {
  return (
    <>
      <OverviewCard trip={trip} hotels={hotels} onOpenPhoto={onOpenPhoto} />

      <section className="pt-4">
        <button
          type="button"
          onClick={onStart}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-ocean-900 px-4 py-4 text-[15px] font-extrabold text-sand-50 shadow-soft transition active:scale-[0.99]"
        >
          <Compass className="h-4 w-4 text-gold-300" strokeWidth={2.4} aria-hidden="true" />
          Start the itinerary
        </button>
      </section>

      <InclusionsSummary inclusions={inclusions} exclusions={exclusions} />
    </>
  )
}

/** Prev / Next through the sections, in top-bar order. */
function StepNav({ current, onNavigate }) {
  const index = navItems.findIndex((item) => item.id === current)
  const previous = navItems[index - 1]
  const next = navItems[index + 1]

  if (!previous && !next) return null

  return (
    <nav aria-label="Section navigation" className="mt-5 pb-1">
      <div className="flex items-stretch gap-2.5">
        {previous ? (
          <button
            type="button"
            onClick={() => onNavigate(previous.id)}
            className="flex min-w-0 flex-1 items-center gap-2 rounded-2xl border border-ocean-950/[0.07] bg-white/85 px-3 py-2.5 text-left shadow-soft transition active:scale-[0.99]"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-ocean-500" strokeWidth={2.4} aria-hidden="true" />
            <span className="min-w-0">
              <span className="block text-[9px] font-extrabold uppercase tracking-[0.14em] text-ocean-900/40">
                Previous
              </span>
              <span className="block truncate text-[13px] font-bold text-ocean-900">
                {previous.label}
              </span>
            </span>
          </button>
        ) : (
          <span className="flex-1" aria-hidden="true" />
        )}

        {next ? (
          <button
            type="button"
            onClick={() => onNavigate(next.id)}
            className="flex min-w-0 flex-1 items-center justify-end gap-2 rounded-2xl border border-ocean-950/[0.07] bg-white/85 px-3 py-2.5 text-right shadow-soft transition active:scale-[0.99]"
          >
            <span className="min-w-0">
              <span className="block text-[9px] font-extrabold uppercase tracking-[0.14em] text-ocean-900/40">
                Next
              </span>
              <span className="block truncate text-[13px] font-bold text-ocean-900">
                {next.label}
              </span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-ocean-500" strokeWidth={2.4} aria-hidden="true" />
          </button>
        ) : (
          <span className="flex-1" aria-hidden="true" />
        )}
      </div>
    </nav>
  )
}
