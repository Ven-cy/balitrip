import { useState } from 'react'
import { Camera, Maximize2, PersonStanding, Sparkles } from 'lucide-react'

/** "Women's Photo Poses & Style Guide" — gallery-style pose reference grid. */
export default function PosesSection({ poses, onOpenPhoto }) {
  return (
    <section id="poses" className="pt-1">
      <div className="rounded-[1.75rem] border border-ocean-950/[0.06] bg-white/85 p-4 shadow-soft">
        <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ocean-500">
          <Sparkles className="h-3.5 w-3.5 text-gold-500" strokeWidth={2.2} aria-hidden="true" />
          Reference guide
        </p>
        <h2 className="mt-2 font-display text-[1.9rem] leading-[1.1] text-ocean-950">
          Women&rsquo;s Photo Poses
          <span className="block text-ocean-600">&amp; Style Guide</span>
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-2.5 xs:grid-cols-2">
          {poses.map((pose) => (
            <PoseCard key={pose.id} pose={pose} onOpenPhoto={onOpenPhoto} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function PoseCard({ pose, onOpenPhoto }) {
  return (
    <li className="overflow-hidden rounded-2xl border border-ocean-950/[0.07] bg-sand-50/60">
      <PoseMedia pose={pose} onOpenPhoto={onOpenPhoto} />
    </li>
  )
}

/** Pose-focused visual: your own photo if added, otherwise a pose placeholder. */
function PoseMedia({ pose, onOpenPhoto }) {
  const [failed, setFailed] = useState(false)
  const canOpen = Boolean(pose.image) && !failed

  const content = (
    <>
      {canOpen ? (
        <img
          src={pose.image}
          alt={`Pose reference: ${pose.title}`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-sand-200 via-sand-100 to-ocean-100 px-2 text-center">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.85),transparent_60%)]"
          />
          <span className="relative grid h-14 w-14 place-items-center rounded-full border border-dashed border-ocean-400/55 bg-white/55">
            <PersonStanding
              className="h-7 w-7 text-ocean-600/60"
              strokeWidth={1.4}
              aria-hidden="true"
            />
          </span>
          <span className="relative text-[9px] font-extrabold uppercase tracking-[0.12em] text-ocean-700/60">
            Pose only
          </span>
        </span>
      )}

      <span className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-ocean-950/85 font-display text-[11px] font-bold text-sand-50">
          {pose.number}
        </span>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-sand-50/85 text-ocean-700 shadow-sm">
          <Camera className="h-3 w-3" strokeWidth={2.4} aria-hidden="true" />
        </span>
      </span>

      {canOpen && (
        <span className="pointer-events-none absolute bottom-2 right-2 grid h-7 w-7 place-items-center rounded-full bg-ocean-950/45 text-white">
          <Maximize2 className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
        </span>
      )}
    </>
  )

  if (canOpen) {
    return (
      <button
        type="button"
        onClick={() => onOpenPhoto(`photo-${pose.id}`)}
        aria-label={`Open pose reference photo: ${pose.title}`}
        className="group relative block aspect-[16/10] w-full overflow-hidden bg-ocean-900 text-left xs:aspect-[4/5]"
      >
        {content}
      </button>
    )
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden xs:aspect-[4/5]" aria-hidden="true">
      {content}
    </div>
  )
}
