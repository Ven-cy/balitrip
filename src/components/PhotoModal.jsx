import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Hotel,
  Lightbulb,
  MapPin,
  X,
} from 'lucide-react'
import { getCategoryTheme, handleImageError } from '../lib/theme'

export default function PhotoModal({ place, places, index, onClose, onPrev, onNext }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const touchStartX = useRef(null)

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNext()
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onPrev()
        return
      }

      // Keep keyboard focus inside the dialog while it is open.
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    },
    [onClose, onNext, onPrev],
  )

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  if (!place) return null

  const category = getCategoryTheme(place.category)

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 60) {
      if (delta > 0) onPrev()
      else onNext()
    }
    touchStartX.current = null
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 lg:p-8"
      role="presentation"
    >
      <div
        className="absolute inset-0 animate-fade-in bg-ocean-950/85 backdrop-blur-xl"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-modal-title"
        className="relative z-10 flex h-[92dvh] w-full max-w-6xl animate-modal-in flex-col overflow-hidden rounded-[1.75rem] bg-sand-50 shadow-2xl lg:h-[86vh] lg:max-h-[880px] lg:flex-row"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Photo */}
        <div className="relative h-[36dvh] shrink-0 overflow-hidden bg-ocean-950 lg:h-auto lg:w-[58%]">
          <img
            key={place.id}
            src={place.imageUrl}
            alt={`${place.title} — ${place.location}`}
            onError={handleImageError}
            className="h-full w-full animate-fade-in object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ocean-950/85 via-transparent to-ocean-950/35" />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="rounded-full border border-white/25 bg-ocean-950/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                {place.day}
              </span>
              <span
                className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] backdrop-blur-sm ${category.badge}`}
              >
                {category.short}
              </span>
            </div>
            <span className="rounded-full border border-white/20 bg-ocean-950/35 px-3 py-1.5 text-[10px] font-bold tabular-nums text-white/90 backdrop-blur-md">
              {String(index + 1).padStart(2, '0')} / {String(places.length).padStart(2, '0')}
            </span>
          </div>

          {/* Prev / next over image */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4">
            <button
              type="button"
              onClick={onPrev}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-ocean-950/35 text-white backdrop-blur-md transition hover:scale-105 hover:bg-ocean-950/55 focus-visible:ring-white sm:h-11 sm:w-11"
              aria-label="Previous photo"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-ocean-950/35 text-white backdrop-blur-md transition hover:scale-105 hover:bg-ocean-950/55 focus-visible:ring-white sm:h-11 sm:w-11"
              aria-label="Next photo"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/85">
              <MapPin className="h-3.5 w-3.5 text-gold-300" />
              {place.location}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/85">
              <Clock3 className="h-3.5 w-3.5 text-gold-300" />
              {place.time}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="flex min-h-0 flex-1 flex-col bg-sand-50">
          <div className="flex items-start justify-between gap-4 border-b border-ocean-950/[0.06] px-5 py-4 sm:px-6">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-ocean-500">
                Stop {String(index + 1).padStart(2, '0')} · {place.day}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold text-ocean-900/50">
                <CalendarDays className="h-3 w-3" />
                {place.date}
              </p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ocean-950/10 bg-white text-ocean-700 transition hover:rotate-90 hover:border-ocean-950/20 hover:bg-sand-100 hover:text-ocean-950"
              aria-label="Close photo viewer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
            <h2
              id="photo-modal-title"
              className="font-display text-[2rem] font-light leading-[1.05] tracking-[-0.02em] text-ocean-950 sm:text-[2.4rem]"
            >
              {place.title}
            </h2>

            <p className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-ocean-700/65">
              <MapPin className="h-3.5 w-3.5 text-ocean-400" />
              {place.location}
            </p>

            <p className="mt-4 text-[13.5px] leading-relaxed text-ocean-900/70">
              {place.description}
            </p>

            <div className="mt-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ocean-900/35">
                Don’t miss
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {place.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-semibold ${category.soft}`}
                  >
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {place.tip && (
              <div className="mt-5 rounded-2xl border border-gold-200 bg-gold-100/40 p-3.5">
                <p className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-gold-500">
                  <Lightbulb className="h-3.5 w-3.5" />
                  Good to know
                </p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ocean-900/70">
                  {place.tip}
                </p>
              </div>
            )}

            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-ocean-950/[0.06] bg-white/60 p-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ocean-900 text-sand-100">
                <Hotel className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ocean-500">
                  Tonight’s stay
                </p>
                <p className="text-xs font-bold text-ocean-900">{place.stay}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-ocean-950/[0.06] px-4 py-3.5 sm:px-5">
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ocean-950/10 bg-white px-4 py-2.5 text-[11px] font-bold text-ocean-800 transition hover:border-ocean-300 hover:bg-sand-100"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Previous
            </button>
            <button
              type="button"
              onClick={onNext}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ocean-900 px-4 py-2.5 text-[11px] font-bold text-sand-50 transition hover:bg-ocean-800"
            >
              Next photo
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <p className="hidden border-t border-ocean-950/[0.04] px-5 py-2.5 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-ocean-900/30 lg:block">
            Use ← → to browse · Esc to close
          </p>
        </div>
      </div>
    </div>,
    document.body,
  )
}
