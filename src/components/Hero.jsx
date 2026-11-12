import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Hotel,
  MapPin,
  MoonStar,
  Sparkles,
} from 'lucide-react'
import { hotels, places, tripInfo } from '../data/baliData'
import { handleImageError } from '../lib/theme'
import { toGujaratiNumber } from '../lib/numbers'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ocean-950 text-sand-50"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={tripInfo.heroImage}
          alt="સોનેરી કલાકે બાલીનો કિનારો"
          onError={handleImageError}
          fetchPriority="high"
          className="h-full w-full scale-105 object-cover opacity-60 animate-slow-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950 via-ocean-950/75 to-ocean-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-ocean-950/50" />
        <div className="absolute -right-40 top-24 h-[30rem] w-[30rem] rounded-full bg-gold-300/10 blur-3xl" />
      </div>

      <div className="container-bali flex flex-1 flex-col justify-center pb-12 pt-32 sm:pt-36 lg:pb-16 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Copy */}
          <div className="max-w-2xl">
            <div
              className="eyebrow animate-fade-up text-gold-200"
              style={{ animationDelay: '40ms' }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>બાલી, ઇન્ડોનેશિયા</span>
              <span className="h-1 w-1 rounded-full bg-gold-200/60" />
              <span className="text-sand-200/80">૬ રાત · ૭ દિવસ</span>
            </div>

            <h1
              className="mt-6 animate-fade-up font-display font-light text-shadow-soft"
              style={{ animationDelay: '120ms' }}
            >
              <span className="block text-[clamp(4rem,13vw,8.5rem)] leading-[1.04]">
                બાલી
              </span>
              <span className="mt-2 block text-[clamp(1.4rem,4.6vw,2.6rem)] font-normal leading-[1.3] text-sand-200">
                ૬ રાત / ૭ દિવસની સફર
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-sand-100/80 sm:text-[17px]"
              style={{ animationDelay: '220ms' }}
            >
              {tripInfo.tagline} એક જ અઠવાડિયામાં વોટર સ્પોર્ટ્સ, ટાપુની ભેખડો,
              સૂર્યાસ્તનાં મંદિરો અને ઉબુદની ધીમી સવારો.
            </p>

            <div
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 animate-fade-up text-sm text-sand-200/90"
              style={{ animationDelay: '300ms' }}
            >
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gold-300" strokeWidth={1.8} />
                {tripInfo.dateRange}
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-300" strokeWidth={1.8} />
                લેજિયન → નુસા પેનિડા → ઉબુદ
              </span>
            </div>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: '380ms' }}
            >
              <a href="#itinerary" className="btn-primary group">
                યાત્રાપથ જુઓ
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a href="#stays" className="btn-ghost-light group">
                <Hotel className="h-4 w-4 text-gold-200" strokeWidth={1.8} />
                બે ઉતારા
              </a>
            </div>

            {/* Quick stats */}
            <div
              className="mt-10 grid max-w-lg animate-fade-up grid-cols-3 divide-x divide-white/15 overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] backdrop-blur-xl"
              style={{ animationDelay: '460ms' }}
            >
              {tripInfo.stats.map((stat) => (
                <div key={stat.label} className="px-4 py-4 text-center sm:px-5 sm:py-5">
                  <div className="font-display text-2xl font-light leading-none text-sand-50 sm:text-[1.8rem]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] font-bold text-gold-200 sm:text-[11px]">
                    {stat.label}
                  </div>
                  <div className="mt-1 hidden text-[10px] text-sand-200/55 sm:block">
                    {stat.hint}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stay summary card (desktop) */}
          <div
            className="relative hidden animate-fade-up lg:block"
            style={{ animationDelay: '500ms' }}
          >
            <div className="absolute -inset-8 rounded-[3.5rem] bg-gradient-to-br from-gold-300/15 via-transparent to-ocean-300/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] shadow-glow backdrop-blur-2xl">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={hotels[1].imageUrl}
                  alt="ઉબુદનો જંગલ ઉતારો"
                  onError={handleImageError}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="eyebrow text-gold-200">
                    <MoonStar className="h-3.5 w-3.5" />
                    જ્યાં તમે સવારે ઉઠશો
                  </p>
                  <p className="mt-1.5 font-display text-2xl font-normal text-sand-50">
                    પહેલાં બીચ. પછી જંગલ.
                  </p>
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-ocean-950/40 px-3 py-1 text-[10px] font-bold text-sand-100 backdrop-blur-md">
                  ૨ ઉતારા · ૬ રાત
                </span>
              </div>

              <div className="space-y-2.5 p-4">
                {hotels.map((hotel) => (
                  <a
                    key={hotel.id}
                    href="#stays"
                    className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.06] p-2.5 transition duration-300 hover:border-white/20 hover:bg-white/[0.11]"
                  >
                    <img
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      onError={handleImageError}
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-bold text-sand-50">
                        {hotel.shortName}
                      </p>
                      <p className="mt-0.5 flex items-center gap-1 text-[11px] text-sand-200/65">
                        <MapPin className="h-3 w-3" />
                        {hotel.area}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-bold text-gold-200">{hotel.nights}</p>
                      <p className="mt-0.5 text-[10px] text-sand-200/55">
                        {hotel.checkIn} → {hotel.checkOut}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-sand-200/40 transition group-hover:translate-x-0.5 group-hover:text-gold-200" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glow">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-300/20 text-gold-200">
                <CalendarDays className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] font-bold text-gold-200/90">
                  કેલેન્ડર પર
                </p>
                <p className="text-sm font-semibold text-sand-50">{tripInfo.dates}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Route ticker */}
      <div className="relative border-t border-white/10 bg-ocean-950/40 backdrop-blur-md">
        <div className="container-bali flex items-center gap-4 py-4">
          <span className="hidden shrink-0 text-[10px] font-bold text-gold-200 sm:block">
            સફરનો રસ્તો
          </span>
          <div className="no-scrollbar flex flex-1 items-center gap-2.5 overflow-x-auto text-[11px] font-semibold text-sand-200/70 sm:gap-3">
            {tripInfo.route.map((stop, index) => (
              <span key={stop} className="flex shrink-0 items-center gap-2.5 sm:gap-3">
                <span className="whitespace-nowrap transition hover:text-sand-50">{stop}</span>
                {index < tripInfo.route.length - 1 && (
                  <ChevronRight className="h-3 w-3 shrink-0 text-gold-300/60" />
                )}
              </span>
            ))}
          </div>
          <span className="hidden shrink-0 items-center gap-1.5 text-[10px] font-semibold text-sand-200/55 sm:flex">
            <Sparkles className="h-3 w-3 text-gold-300" />
            {toGujaratiNumber(places.length)} સાચવેલાં સ્થળો
          </span>
        </div>
      </div>
    </section>
  )
}
