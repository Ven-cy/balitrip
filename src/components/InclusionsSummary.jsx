import { CheckCircle2, XCircle } from 'lucide-react'

/** Master inclusions (green) and exclusions (red) summary. */
export default function InclusionsSummary({ inclusions, exclusions }) {
  return (
    <section className="pt-6">
      <div className="rounded-[1.75rem] border border-ocean-950/[0.06] bg-white/85 p-4 shadow-soft">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-ocean-500">
          At a glance
        </p>
        <h2 className="mt-2 font-display text-[1.9rem] leading-[1.1] text-ocean-950">
          Inclusions &amp; Exclusions
        </h2>

        <div className="mt-4 space-y-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3.5">
            <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-emerald-800">
              <CheckCircle2 className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
              All package inclusions
            </p>
            <ul className="mt-2.5 space-y-1.5">
              {inclusions.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[15px] leading-relaxed text-emerald-950/85"
                >
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-emerald-600"
                    strokeWidth={2.4}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-3.5">
            <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-rose-800">
              <XCircle className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
              All exclusions &amp; extra costs
            </p>
            <ul className="mt-2.5 space-y-1.5">
              {exclusions.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[15px] leading-relaxed text-rose-950/80"
                >
                  <XCircle
                    className="mt-1 h-4 w-4 shrink-0 text-rose-500"
                    strokeWidth={2.4}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-3 rounded-xl bg-sand-100/70 px-3 py-2.5 text-[13px] leading-relaxed text-ocean-900/60">
          Nusa Penida retribution and beach fees are paid in cash on the island —
          keep small IDR notes handy.
        </p>
      </div>
    </section>
  )
}
