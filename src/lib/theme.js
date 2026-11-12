/* Shared visual language for itinerary categories and image fallbacks. */

export const categoryTheme = {
  'Water Sports & Rides': {
    short: 'Rides & Adventure',
    badge: 'bg-coral-500/95 text-white',
    soft: 'bg-coral-50 text-coral-700 ring-1 ring-coral-200/70',
    dot: 'bg-coral-400',
    bar: 'from-coral-400 to-gold-300',
  },
  Temples: {
    short: 'Temples',
    badge: 'bg-gold-500/95 text-ocean-950',
    soft: 'bg-gold-100 text-gold-500 ring-1 ring-gold-200/80',
    dot: 'bg-gold-400',
    bar: 'from-gold-300 to-sand-400',
  },
  'Islands & Beaches': {
    short: 'Islands & Beaches',
    badge: 'bg-ocean-500/95 text-white',
    soft: 'bg-ocean-50 text-ocean-700 ring-1 ring-ocean-200/70',
    dot: 'bg-ocean-400',
    bar: 'from-ocean-300 to-ocean-600',
  },
  'Nature & Culture': {
    short: 'Nature & Culture',
    badge: 'bg-emerald-700/95 text-white',
    soft: 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/70',
    dot: 'bg-emerald-500',
    bar: 'from-emerald-300 to-emerald-700',
  },
}

export const defaultCategoryTheme = {
  short: 'Bali',
  badge: 'bg-ocean-700/95 text-white',
  soft: 'bg-sand-100 text-ocean-800 ring-1 ring-sand-300',
  dot: 'bg-ocean-400',
  bar: 'from-ocean-300 to-sand-300',
}

export const getCategoryTheme = (category) =>
  categoryTheme[category] ?? defaultCategoryTheme

/** Inline SVG shown if an Unsplash/local image can't be loaded. */
const fallbackSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0E3032"/>
      <stop offset="0.55" stop-color="#1E6666"/>
      <stop offset="1" stop-color="#B99A6E"/>
    </linearGradient>
    <radialGradient id="sun" cx="0.78" cy="0.22" r="0.5">
      <stop offset="0" stop-color="#F6E9CB" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#F6E9CB" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="1500" fill="url(#g)"/>
  <rect width="1200" height="1500" fill="url(#sun)"/>
  <g fill="none" stroke="#FCF8F1" stroke-opacity="0.35" stroke-width="3">
    <path d="M0 1100 C 220 980, 380 1240, 620 1110 S 980 1020, 1200 1130"/>
    <path d="M0 1180 C 240 1060, 420 1320, 680 1180 S 1000 1080, 1200 1200"/>
  </g>
  <g transform="translate(600 690)" fill="#FCF8F1" fill-opacity="0.9">
    <path d="M0 0 C -12 -90 -60 -150 -150 -180 C -60 -170 -10 -120 0 -40 C 8 -120 58 -174 148 -178 C 58 -144 14 -86 0 0Z"/>
    <path d="M0 0 C 86 -30 166 -20 228 24 C 150 -4 78 6 0 0Z"/>
    <path d="M-2 0 C -84 20 -140 70 -168 142 C -128 68 -70 28 -2 0Z"/>
  </g>
  <text x="600" y="1020" font-family="Georgia, serif" font-size="58" fill="#FCF8F1" text-anchor="middle" letter-spacing="4">BALI</text>
  <text x="600" y="1070" font-family="Arial, sans-serif" font-size="24" fill="#FCF8F1" fill-opacity="0.65" text-anchor="middle" letter-spacing="7">PHOTO COMING SOON</text>
</svg>`

export const FALLBACK_IMAGE = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  fallbackSvg,
)}`

/** Attach to <img onError={handleImageError} /> */
export const handleImageError = (event) => {
  event.currentTarget.onerror = null
  event.currentTarget.src = FALLBACK_IMAGE
}
