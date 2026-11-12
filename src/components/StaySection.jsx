import { CalendarCheck, Check, Hotel, MapPin, MoonStar, Sparkles } from 'lucide-react'
import { hotels, tripInfo } from '../data/baliData'
import { handleImageError } from '../lib/theme'
import { toGujaratiNumber, toGujaratiPadded } from '../lib/numbers'

export default function StaySection() {
  return (
    <section id="stays" className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="container-bali">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-ocean-500">
              <Hotel className="h-3.5 w-3.5" />
              ક્યાં રહેશો
            </p>
            <h2 className="section-title mt-4">
              બે ઉતારા, એક ધીમો{' '}
              <span className="text-ocean-500">વળાંક.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ocean-900/60">
              લેજિયનમાં રેતી પર ત્રણ રાત, પછી ઉબુદની ઉપર લીલા ટેકરાઓમાં ત્રણ રાત.
              એક જ વાર પેક કરો, એક જ વાર જગ્યા બદલો — બાકી બધું ટાપુના સમય પ્રમાણે.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-2xl border border-ocean-950/[0.06] bg-white/60 px-4 py-3 shadow-soft backdrop-blur-sm lg:self-auto">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-ocean-900 text-sand-100">
              <CalendarCheck className="h-4 w-4" strokeWidth={1.7} />
            </span>
            <div>
              <p className="text-[10px] font-bold text-ocean-500">
                ચેક-ઇનથી ચેક-આઉટ
              </p>
              <p className="mt-0.5 text-sm font-bold text-ocean-950">{tripInfo.dates}</p>
            </div>
          </div>
        </div>

        {/* Stay timeline */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {hotels.map((hotel, index) => (
            <div
              key={`${hotel.id}-timeline`}
              className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-ocean-950/[0.05] bg-white/50 px-4 py-3.5"
            >
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                  index === 0 ? 'bg-ocean-900 text-sand-50' : 'bg-gold-300 text-ocean-950'
                }`}
              >
                {toGujaratiNumber(index + 1)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-ocean-900">
                  {hotel.checkIn} — {hotel.checkOut}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ocean-800/55">
                  <MapPin className="h-3 w-3" />
                  {hotel.area}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-ocean-900/[0.06] px-3 py-1 text-[10px] font-bold text-ocean-700">
                {hotel.nights}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {hotels.map((hotel, index) => (
            <article
              key={hotel.id}
              className="group overflow-hidden rounded-[1.75rem] border border-ocean-950/[0.05] bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ocean-900">
                <img
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  onError={handleImageError}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[900ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 via-ocean-950/5 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-ocean-950/35 px-3 py-1.5 text-[10px] font-bold text-sand-50 backdrop-blur-md">
                  ઉતારો {toGujaratiPadded(index + 1)}
                </span>
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold text-sand-100/85">
                      <MapPin className="h-3 w-3 text-gold-300" />
                      {hotel.area}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-normal leading-tight text-white sm:text-[1.7rem]">
                      {hotel.shortName}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full bg-sand-50/95 px-3 py-1.5 text-[10px] font-bold text-ocean-900">
                    {hotel.nights}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold text-ocean-600">
                  <MoonStar className="h-3.5 w-3.5 text-gold-500" />
                  <span>
                    {hotel.checkIn} → {hotel.checkOut}
                  </span>
                  <span className="text-ocean-300">·</span>
                  <span className="text-ocean-800/55">{hotel.name}</span>
                </div>

                <p className="mt-3 text-[13px] leading-relaxed text-ocean-900/65">
                  {hotel.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {hotel.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-1.5 rounded-full bg-sand-100 px-2.5 py-1 text-[10px] font-semibold text-ocean-800/80"
                    >
                      <Check className="h-2.5 w-2.5 text-ocean-500" strokeWidth={3} />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 flex flex-wrap items-center justify-center gap-2 text-center text-[11px] text-ocean-900/45">
          <Sparkles className="h-3.5 w-3.5 text-gold-500" />
          સામાન્ય ચેક-ઇન બપોરે ૩ · ચેક-આઉટ બપોરે ૧૨. હોટેલના ફોટા બદલવા માટે{' '}
          <code className="rounded bg-ocean-950/[0.06] px-1.5 py-0.5 text-[10px] text-ocean-800">
            src/data/baliData.js
          </code>
        </p>
      </div>
    </section>
  )
}
