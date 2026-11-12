# Bali 6N/7D Escape 🌴

A responsive, data-driven travel itinerary and photo showcase for a **6 night / 7 day Bali trip** — **November 15–21, 2026** — staying at **Fairfield by Marriott Bali Legian** and **Danakha Ubud**.

Built with **React + Vite + Tailwind CSS + Lucide React**, and ready for zero-config deployment on **Vercel**. Every stop, photo, hotel and date lives in one file: [`src/data/baliData.js`](src/data/baliData.js).

---

## ✨ What's inside

- **Tropical-luxury theme** — warm sand, deep ocean teal, crisp white cards, soft glassmorphism and gentle hover motion.
- **Hero** — trip title, dates, route ticker, quick stats (7 days · 20 spots · 2 villa stays) and both hotels.
- **Stay section** — a beach-to-jungle timeline with check-in/out dates and hotel cards.
- **Filter bar** — filter by day (`All Days` → `Day 6–7`) and category (`Rides & Adventure`, `Temples`, `Beaches`, `Nature`), plus instant search across titles, locations, descriptions and highlights.
- **Photo grid** — 20 itinerary cards with day badges, category pills, locations, descriptions, highlights and slow image zoom on hover.
- **Full-screen photo lightbox** — keyboard navigation (`←` / `→` / `Esc`), previous/next buttons, swipe gestures, full trip details, tips and tonight's stay.
- **Bundled starter photos** — every stop, hotel and the hero ships with a local image, plus a footer-linked `/credits.html` page and [`public/images/CREDITS.md`](public/images/CREDITS.md) for attribution.
- **Graceful image fallback** — a branded inline SVG appears if a photo path is wrong, so the layout never breaks.
- **Vercel ready** — `vercel.json` with SPA rewrites, static assets served from `public/`, and an included deployment guide.

---

## 🚀 Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens http://localhost:5173)
npm run dev

# 3. Create a production build
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires **Node.js 18+** (Node 20/22 recommended).

---

## 📁 Project structure

```
bali-trip/
├── public/
│   ├── favicon.svg
│   ├── credits.html             # Standalone photo-credits page
│   └── images/                  # ← starter photos + your own photos
│       ├── CREDITS.md
│       └── README.md
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky, transparent → glass on scroll
│   │   ├── Hero.jsx             # Title, dates, stats, stay summary
│   │   ├── StaySection.jsx      # Hotel timeline + stay cards
│   │   ├── FilterBar.jsx        # Search, day tabs, category chips
│   │   ├── PlaceCard.jsx        # Photo card with badges & highlights
│   │   ├── PhotoModal.jsx       # Full-screen lightbox + keyboard nav
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── baliData.js          # ⭐ all trip content lives here
│   │   └── 1.png … 5.png        # Personal trip photos (imported)
│   ├── lib/
│   │   └── theme.js             # Category colors + image fallback
│   ├── App.jsx                  # Filtering state & page composition
│   ├── index.css                # Tailwind layers + custom utilities
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── README.md
```

---

## 🗂️ Managing the trip data

Open **`src/data/baliData.js`**. It exports five things:

| Export | Purpose |
| --- | --- |
| `tripInfo` | Title, dates, route, hero image, stats and packing note |
| `hotels` | The two stays with dates, areas, photos and highlights |
| `dayFilters` | The day tabs in the filter bar |
| `categoryFilters` | The category chips and which category each maps to |
| `places` | The 20 itinerary cards (everything else is generated from this) |

### Add a new stop

Append an object to the `places` array:

```js
{
  id: 'nusa-dua-beach',                 // unique, kebab-case
  day: 'Day 7',                          // "Day 1" … "Day 7"
  date: 'Sat, Nov 21',
  category: 'Islands & Beaches',         // must match one of the four categories
  title: 'Nusa Dua Beach',
  location: 'Nusa Dua, Badung',
  time: '9:00 AM',
  description: 'A calm, reef-protected swim before the airport run.',
  imageUrl: '/images/nusa-dua.jpg',      // local photo in public/images/
  highlights: ['Calm water', 'Snorkelling', 'Last swim'],
  tip: 'Rinse off before the flight — the airport is 25 minutes away.',
  stay: 'Danakha Ubud',
}
```

The category values must be exactly one of:

- `Water Sports & Rides` → shown as **Rides & Adventure**
- `Temples` → shown as **Temples**
- `Islands & Beaches` → shown as **Beaches**
- `Nature & Culture` → shown as **Nature**

### Edit dates, hotels or stats

Everything is in the same file:

```js
export const tripInfo = {
  dates: 'Nov 15 – 21, 2026',
  // ...
  stats: [
    { value: '7', label: 'Days', hint: 'Nov 15–21' },
    { value: '20', label: 'Spots', hint: 'Rides, temples & beaches' },
    { value: '2', label: 'Villa stays', hint: 'Beach + Ubud' },
  ],
}
```

Hotel cards, the hero stay summary and the modal's "Tonight's stay" line all read from `hotels` and each place's `stay` field.

---

## 📸 Photos

The site **ships with a complete set of curated starter photos**, so it looks
finished on the first run. All trip images are local — no hotlinked external URLs
and no internet connection needed after deployment. Credits and licenses are in
[`public/images/CREDITS.md`](public/images/CREDITS.md) and on the in-app
[photo credits page](public/credits.html) (linked from the footer).

There are two supported ways to swap in your own pictures.

### Option A — drop files into `public/images/`

1. **Create** your images at roughly **1600px wide** (JPG, WEBP, AVIF or PNG).
   Keep names lowercase with dashes, e.g. `my-beach.jpg`.
2. **Drop them into `public/images/`**.
3. **Reference them from the data file** with a root-relative path:

   ```js
   imageUrl: '/images/my-beach.jpg',
   ```

Vite copies everything in `public/` to the root of the built site, so
`/images/my-beach.jpg` works in development **and** on Vercel.

> ⚠️ Use `/images/...` — **not** `public/images/...` and not a Windows file path.
> Vercel's Linux servers are case-sensitive, so match the filename exactly
> (`My-Beach.jpg` ≠ `my-beach.jpg`).

### Option B — import the image next to the data file

This is how the personal photos `1.png` – `5.png` are wired up. Imports are
fingerprinted by Vite at build time:

```js
import myPhoto from './my-beach.jpg'

// inside the places array
imageUrl: myPhoto,
```

Use this when the photo belongs to the app bundle rather than to the public
folder. Either approach works on Vercel.

### Replacing a starter photo

Each `imageUrl` in [`src/data/baliData.js`](src/data/baliData.js) points at one
of the bundled photos — for example `'/images/kelingking-bay.jpg'`. Replace the
file (keeping the name) or update the path. The included credits page lists every
starter photo and its source.

If an image is missing or a path is wrong, a branded fallback graphic is
displayed instead of a broken image.

### Recommended photo checklist

| Use | Aspect ratio | Suggested width |
| --- | --- | --- |
| Card / hero | 4:5 portrait, 16:9 landscape | 1200–2000px |
| Hotel cards | 16:10 landscape | 1200px |
| Lightbox full view | Any | 1600–2400px |

---

## ▲ Deploy to Vercel

### Option A — GitHub import (recommended)

1. Create a new repository on GitHub.
2. Push this project:

   ```bash
   git init
   git add .
   git commit -m "Bali 6N/7D itinerary & photo showcase"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. Go to [vercel.com/new](https://vercel.com/new), import the repository and click **Deploy**.
4. Vercel auto-detects Vite. The included `vercel.json` already sets:
   - framework: `vite`
   - build command: `npm run build`
   - output directory: `dist`
   - SPA fallback: every route rewrites to `/index.html`

No environment variables are required. Every push to `main` deploys automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### Why `vercel.json` matters

The app is a single-page React application. The rewrite tells Vercel to serve `index.html` for any non-file route, so deep links and refreshes never 404. Your images in `public/images/` are served as static files before the rewrite is applied.

---

## 🎨 Customising the look

| What | Where |
| --- | --- |
| Colors, fonts, shadows, animations | `tailwind.config.js` |
| Global tweaks, glass utilities, focus states | `src/index.css` |
| Google Fonts (Fraunces + Manrope) and page meta | `index.html` |
| Category badge colors | `src/lib/theme.js` |
| Modal / card behavior | the matching component in `src/components/` |

---

## ⌨️ Interaction notes

- **Click any card** to open the full-screen photo and details.
- Inside the lightbox: **← / →** browse all 20 photos, **Esc** closes, or use the on-screen arrows. Swipe left/right on touch devices.
- Filters combine: e.g. **Day 3 + Beaches** shows the Nusa Penida coastline; the search then narrows within that selection.
- Body scroll is locked while the lightbox is open, and focus is trapped inside the dialog.
- Motion respects `prefers-reduced-motion`.

---

## 🧰 Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start Vite with hot module replacement |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Serve the production build locally |

---

## 📝 Notes

- This is a **frontend-only** project — no backend, auth or database needed.
- Photos are not uploaded through the UI; they are local files referenced by the
  data file (either in `public/images/` or imported next to it), which keeps the
  build fast, the deploy free and the site self-contained.
- The bundled starter photos are free to use; attribution for the Creative
  Commons images is in [`public/images/CREDITS.md`](public/images/CREDITS.md) and
  on `/credits.html`. Replace them with your own shots whenever you like.
- All 20 itinerary items are grouped across Day 1–6, with Day 7 reserved for the slow departure. The `Day 6–7` tab covers both.

Made for golden hour. Have a good trip. 🌊
#   b a l i t r i p  
 