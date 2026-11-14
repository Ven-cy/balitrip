import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import PhotoPlaceholder from './PhotoPlaceholder'

/** Full-screen photo preview with swipe, arrow keys and Esc. */
export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)
  const touchStartX = useRef(null)
  const [failed, setFailed] = useState(false)

  const photo = photos[index]

  useEffect(() => {
    setFailed(false)
  }, [photo?.src])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onNext, onPrev])

  const handleTouchStart = useCallback((event) => {
    touchStartX.current = event.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(
    (event) => {
      if (touchStartX.current === null) return
      const delta = event.changedTouches[0].clientX - touchStartX.current
      if (Math.abs(delta) > 55) {
        if (delta > 0) onPrev()
        else onNext()
      }
      touchStartX.current = null
    },
    [onNext, onPrev],
  )

  if (!photo) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo preview: ${photo.title}`}
      className="fixed inset-0 z-[100] flex flex-col bg-ocean-950/95 backdrop-blur-md"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-[11px] font-bold tabular-nums text-white/65">
          {index + 1} / {photos.length}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo preview"
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0"
        >
          <X className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-3"
        onClick={onClose}
      >
        {failed ? (
          <div className="aspect-video w-full max-w-lg overflow-hidden rounded-2xl">
            <PhotoPlaceholder label="Photo coming soon" />
          </div>
        ) : (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.title}
            onError={() => setFailed(true)}
            onClick={(event) => event.stopPropagation()}
            className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
          />
        )}

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            onPrev()
          }}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            onNext()
          }}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>

      <div className="px-5 pb-7 pt-3 text-center">
        <p className="font-display text-lg leading-snug text-white">{photo.title}</p>
        {photo.caption && (
          <p className="mt-1 text-[12.5px] font-medium text-white/60">{photo.caption}</p>
        )}
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/30">
          Swipe or use arrow keys
        </p>
      </div>
    </div>,
    document.body,
  )
}
