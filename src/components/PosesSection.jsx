import { useState } from 'react'
import { Camera, MapPin, Maximize2, PersonStanding, Shirt, Sparkles } from 'lucide-react'

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
        <p className="mt-2 text-base leading-relaxed text-ocean-900/65">
          Six poses matched to our exact stops — a quick gallery-style board to
          save and show your photographer.
        </p>

        <ul className="mt-4 grid grid-cols-1 gap-2.5 xs:grid-cols-2">
          {poses.map((pose) => (
            <PoseCard key={pose.id} pose={pose} onOpenPhoto={onOpenPhoto} />
          ))}
        </ul>

        <p className="mt-3 rounded-xl bg-sand-100/70 px-3 py-2.5 text-[12px] leading-relaxed text-ocean-900/55">
          These are pose-only cards. Add your own reference photo for any pose
          (<span className="font-semibold text-ocean-800/70">public/images/pose-01.jpg</span>{' '}
          … <span className="font-semibold text-ocean-800/70">pose-06.jpg</span>) and
          it appears here, then opens in the same full-screen gallery as the trip
          photos.
        </p>
      </div>
    </section>
  )
}

function PoseCard({ pose, onOpenPhoto }) {
  return (
    <li className="flex flex-col overflow-hidden rounded-2xl border border-ocean-950/[0.07] bg-sand-50/60">
      <PoseMedia pose={pose} onOpenPhoto={onOpenPhoto} />

      <div className="flex flex-1 flex-col p-2.5">
        <h3 className="font-display text-[1.05rem] leading-[1.2] text-ocean-950">
          {pose.title}
        </h3>

        <p className="mt-1 flex items-start gap-1 text-[11px] font-semibold leading-snug text-ocean-600/85">
          <MapPin className="mt-px h-3 w-3 shrink-0" strokeWidth={2.2} aria-hidden="true" />
          <span>{pose.spot}</span>
        </p>

        <div className="mt-2">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.1em] text-ocean-500">
            How to pose
          </p>
          <ul className="mt-1 space-y-1">
            {pose.poseTips.map((tip) => (
              <li
                key={tip}
                className="flex gap-1.5 text-[12px] leading-[1.45] text-ocean-900/75"
              >
                <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2 flex gap-1.5 rounded-lg bg-gold-100/60 p-2 ring-1 ring-gold-200/70">
          <Shirt
            className="mt-0.5 h-3 w-3 shrink-0 text-gold-500"
            strokeWidth={2.2}
            aria-hidden="true"
          />
          <p className="text-[12px] leading-[1.45] text-ocean-900/75">
            <span className="font-bold text-ocean-900">Outfit: </span>
            {pose.outfit}
          </p>
        </div>
      </div>
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
