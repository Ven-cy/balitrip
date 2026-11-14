import { useCallback, useEffect, useRef, useState } from 'react'
import { House, ShoppingBag, Sparkles } from 'lucide-react'

const iconMap = {
  home: House,
  shopping: ShoppingBag,
  sparkles: Sparkles,
}

/** Sticky section switcher: Overview · Day 1 … Day 7 · Markets · Poses. */
export default function TopNav({ items, activeId, onChange }) {
  const railRef = useRef(null)
  const activeRef = useRef(null)
  const [edges, setEdges] = useState({ left: false, right: false })

  const syncEdges = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    const maxScroll = rail.scrollWidth - rail.clientWidth
    setEdges({
      left: rail.scrollLeft > 4,
      right: rail.scrollLeft < maxScroll - 4,
    })
  }, [])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    syncEdges()
    rail.addEventListener('scroll', syncEdges, { passive: true })
    window.addEventListener('resize', syncEdges)

    return () => {
      rail.removeEventListener('scroll', syncEdges)
      window.removeEventListener('resize', syncEdges)
    }
  }, [syncEdges])

  /* Keep the active pill centred in the rail. */
  useEffect(() => {
    const rail = railRef.current
    const pill = activeRef.current
    if (!rail || !pill) return

    const target = pill.offsetLeft - (rail.clientWidth - pill.clientWidth) / 2
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    rail.scrollTo({
      left: Math.max(0, target),
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }, [activeId])

  return (
    <header className="sticky top-0 z-40 border-b border-ocean-950/[0.06] bg-sand-50/90 backdrop-blur-xl">
      <nav aria-label="Choose a section" className="mx-auto w-full max-w-lg px-3 sm:px-4">
        <div className="relative">
          <div
            ref={railRef}
            className="no-scrollbar flex items-center gap-1.5 overflow-x-auto py-2.5"
          >
            {items.map((item) => {
              const isActive = item.id === activeId
              const Icon = item.icon ? iconMap[item.icon] : null

              return (
                <button
                  key={item.id}
                  ref={isActive ? activeRef : null}
                  type="button"
                  onClick={() => onChange(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-3 text-[12.5px] font-bold transition duration-200 ${
                    isActive
                      ? 'bg-ocean-900 text-sand-50 shadow-soft'
                      : 'bg-white/70 text-ocean-800 ring-1 ring-ocean-950/[0.08] hover:bg-white'
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`h-3.5 w-3.5 ${isActive ? 'text-gold-300' : 'text-gold-500'}`}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  )}
                  {item.label}
                </button>
              )
            })}
          </div>

          {edges.left && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-7 bg-gradient-to-r from-sand-50 to-transparent"
            />
          )}
          {edges.right && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-7 bg-gradient-to-l from-sand-50 to-transparent"
            />
          )}
        </div>
      </nav>
    </header>
  )
}
