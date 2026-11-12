import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Palmtree, X } from 'lucide-react'
import { tripInfo } from '../data/baliData'

const links = [
  { label: 'Itinerary', href: '#itinerary' },
  { label: 'Stays', href: '#stays' },
  { label: 'Photos', href: '#photos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-ocean-950/5 bg-sand-50/85 text-ocean-950 shadow-[0_10px_40px_-30px_rgba(7,33,36,0.5)] backdrop-blur-xl'
          : 'bg-transparent py-2 text-sand-50'
      }`}
    >
      <div className="container-bali">
        <div className="flex h-16 items-center justify-between gap-4 md:h-[76px]">
          {/* Brand */}
          <a
            href="#top"
            className="group flex items-center gap-3 rounded-2xl"
            aria-label={`${tripInfo.title} — back to top`}
          >
            <span
              className={`grid h-10 w-10 place-items-center rounded-2xl transition duration-500 group-hover:rotate-[-6deg] ${
                solid
                  ? 'bg-ocean-900 text-sand-100'
                  : 'border border-white/20 bg-white/10 text-sand-50 backdrop-blur-md'
              }`}
            >
              <Palmtree className="h-5 w-5" strokeWidth={1.7} />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[1.35rem] font-normal tracking-[-0.02em]">
                Bali ’26
              </span>
              <span
                className={`mt-1 block text-[9px] font-bold uppercase tracking-[0.26em] ${
                  solid ? 'text-ocean-600' : 'text-sand-200/80'
                }`}
              >
                6N / 7D escape
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-300 ${
                  solid
                    ? 'text-ocean-800 hover:bg-ocean-900/5 hover:text-ocean-950'
                    : 'text-sand-100/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#photos"
              className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold transition duration-300 sm:inline-flex ${
                solid
                  ? 'bg-ocean-900 text-sand-50 hover:-translate-y-0.5 hover:bg-ocean-800 hover:shadow-soft'
                  : 'border border-white/25 bg-white/10 text-sand-50 backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/20'
              }`}
            >
              Explore photos
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={`grid h-10 w-10 place-items-center rounded-full border transition md:hidden ${
                solid
                  ? 'border-ocean-900/10 bg-white text-ocean-900'
                  : 'border-white/25 bg-white/10 text-sand-50 backdrop-blur-md'
              }`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-ocean-950/5 bg-sand-50/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav className="container-bali flex flex-col gap-1 py-4" aria-label="Mobile navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-ocean-900 transition hover:bg-ocean-900/5"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 text-ocean-400" />
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between rounded-2xl bg-sand-100 px-4 py-3 text-xs text-ocean-700">
            <span className="font-semibold">{tripInfo.dates}</span>
            <span>Bali, Indonesia</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
