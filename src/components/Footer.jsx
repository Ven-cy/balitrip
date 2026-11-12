import {
  ArrowUp,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Heart,
  MapPin,
  Palmtree,
  Sparkles,
} from 'lucide-react'
import { hotels, tripInfo } from '../data/baliData'

const footerLinks = [
  { label: 'The itinerary', href: '#itinerary' },
  { label: 'Where we stay', href: '#stays' },
  { label: 'Photo gallery', href: '#photos' },
  { label: 'Back to top', href: '#top' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ocean-950 text-sand-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-ocean-700/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <Palmtree
          className="absolute -bottom-10 right-4 h-64 w-64 rotate-12 text-white/[0.035]"
          strokeWidth={0.8}
          aria-hidden="true"
        />
      </div>

      <div className="container-bali relative py-14 sm:py-16">
        {/* Travel note */}
        <div className="mb-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3.5">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold-300/15 text-gold-200">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-gold-200">
                Before you go
              </p>
              <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-sand-100/65">
                {tripInfo.packingNote}
              </p>
            </div>
          </div>
          <a
            href="#itinerary"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2.5 text-[11px] font-bold text-sand-100 transition hover:border-white/30 hover:bg-white/10 sm:self-auto"
          >
            Revisit the plan
            <ArrowUpRight className="h-3.5 w-3.5 text-gold-200" />
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="group inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/[0.07] text-gold-200 transition duration-500 group-hover:rotate-[-6deg]">
                <Palmtree className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <span>
                <span className="block font-display text-2xl font-light text-sand-50">
                  Bali ’26
                </span>
                <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.26em] text-sand-200/50">
                  6N / 7D escape
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-sand-100/55">
              A personal travel journal for one week in Bali — saltwater mornings,
              temple sunsets and the slow green quiet of Ubud.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold text-sand-100/65">
                <CalendarDays className="h-3 w-3 text-gold-300" />
                {tripInfo.dates}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold text-sand-100/65">
                <MapPin className="h-3 w-3 text-gold-300" />
                Bali, Indonesia
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-gold-200/80">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[13px] text-sand-100/60 transition hover:text-sand-50"
                  >
                    <span className="h-px w-3 bg-gold-300/40 transition-all group-hover:w-5 group-hover:bg-gold-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trip details */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-gold-200/80">
              The essentials
            </p>
            <ul className="mt-4 space-y-3">
              {hotels.map((hotel) => (
                <li key={hotel.id} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-300/60" />
                  <div>
                    <p className="text-[12px] font-semibold leading-snug text-sand-100/80">
                      {hotel.shortName}
                    </p>
                    <p className="text-[10px] text-sand-100/40">
                      {hotel.checkIn} – {hotel.checkOut} · {hotel.nights}
                    </p>
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-300/60" />
                <div>
                  <p className="text-[12px] font-semibold leading-snug text-sand-100/80">
                    Departure day
                  </p>
                  <p className="text-[10px] text-sand-100/40">Nov 21 · Ubud → Denpasar</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-sand-100/35">
            <span>© {new Date().getFullYear()} Bali 6N/7D Escape</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span className="inline-flex items-center gap-1">
              Made for golden hour
              <Heart className="h-2.5 w-2.5 text-coral-400" fill="currentColor" />
            </span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <a
              href="/credits.html"
              className="inline-flex items-center gap-1 transition hover:text-sand-100/70"
            >
              Photo credits
            </a>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition hover:text-sand-100/70"
            >
              Deployed on Vercel
              <ArrowUpRight className="h-2.5 w-2.5" />
            </a>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <a
              href="#photos"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-[10px] font-bold text-sand-100/60 transition hover:border-white/25 hover:text-sand-50"
            >
              <Camera className="h-3 w-3" />
              Photo journal
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-[10px] font-bold text-sand-100/60 transition hover:border-white/25 hover:text-sand-50"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3 w-3" />
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
