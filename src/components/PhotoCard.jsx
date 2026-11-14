import { useState } from 'react'
import { Check, Maximize2 } from 'lucide-react'
import PhotoPlaceholder from './PhotoPlaceholder'

/** Big 16:9 activity photo with the green "included" badge. */
export default function PhotoCard({ photo, onOpen, priority = false }) {
  const [failed, setFailed] = useState(false)
  const canOpen = Boolean(photo.image) && !failed

  return (
    <button
      type="button"
      onClick={() => canOpen && onOpen(photo.id)}
      aria-label={canOpen ? `Open photo: ${photo.title}` : photo.title}
      className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl bg-ocean-900 text-left ring-1 ring-ocean-950/10 transition duration-300 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
    >
      <div className="aspect-video w-full overflow-hidden">
        {canOpen ? (
          <img
            src={photo.image}
            alt={photo.title}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <PhotoPlaceholder label="Add a photo in public/images/" />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/10 to-ocean-950/30" />

      <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1.5 text-[9.5px] font-extrabold uppercase tracking-[0.05em] text-white shadow-sm">
        <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden="true" />
        Included in package
      </span>

      {canOpen && (
        <span className="absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center rounded-full bg-ocean-950/35 text-white/90 backdrop-blur-sm">
          <Maximize2 className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
        </span>
      )}

      <span className="absolute inset-x-0 bottom-0 block p-3.5">
        <span className="block font-display text-[1.2rem] leading-snug text-white [text-shadow:0_1px_12px_rgba(7,33,36,0.5)]">
          {photo.title}
        </span>
        {photo.location && (
          <span className="mt-0.5 block text-[12.5px] font-medium text-white/75">
            {photo.location}
          </span>
        )}
      </span>
    </button>
  )
}
