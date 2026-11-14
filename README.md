# Bali 6N/7D Tour Itinerary, Indian Food, Shopping & Photo Guide

A mobile-first React + Tailwind journey guide for our Bali trip (15–21 Nov 2026).
Built with Vite and ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Navigation

Every section is its own view — tapping **Day 4** shows only Day 4, not a long
continuous page. The sticky pill bar holds `Overview`, `Day 1` … `Day 7`,
`Markets` and `Poses`, and each view also has Previous / Next buttons at the
bottom. Views are reflected in the URL hash (`#overview`, `#day-1`, `#markets`,
`#poses` …), so links and the browser back button work.

**Overview** holds the trip card, the hotels and the master inclusions /
exclusions checklist, plus a "Start the itinerary" button.

## Project structure

```
src/
  data/tourData.js        ← the single content file (edit this)
  components/
    TopNav.jsx            sticky Overview · Day 1 … Day 7 · Markets · Poses switcher
    OverviewCard.jsx      title, quick info, hotels
    DaySection.jsx        day card + included / excluded / Indian food / nearby boxes
    MarketsSection.jsx    shopping & local markets guide
    PhotoCard.jsx         16:9 photo with the green INCLUDED badge
    PosesSection.jsx      women's photo poses & style guide (gallery-style grid)
    InclusionsSummary.jsx master green / red checklist
    Lightbox.jsx          full-screen photo preview
    SiteFooter.jsx
  App.jsx                 view switching, hash routing, prev/next, gallery state
  index.css               base styles
public/images/            your photos (served at /images/...)
```

## Add or change photos

Everything is driven by `src/data/tourData.js`.

1. Drop a photo into `public/images/`, e.g. `public/images/floating-breakfast.jpg`.
2. Point the matching entry at it:

   ```js
   image: '/images/floating-breakfast.jpg',
   ```

   Use a root-relative path — not `public/images/...` and not a Windows path.
   Vercel runs Linux, so file names are **case-sensitive**.

Photos can also be imported at the top of `tourData.js` (this is how the trip
photos `1.png` – `20.png` in `src/data/` are wired). Set `image: null` to show a
tidy placeholder tile instead of a broken image.

Tap any photo in the app to open the full-screen preview; it can be swiped or
navigated with the arrow keys.

## Editing content

- `trip` — title, date, party size, meals, cover photo
- `hotels` — 3N Kuta, 1N Nusa Penida, 2N Ubud
- `days` — each day's photos, included items, "not included" warnings, nearby
  Indian restaurants, nearby markets (where one is close to that day's route)
  and nearby spots
- `markets` — Kuta/Legian and Ubud market guide (full list, linked from every
  day's shopping box)
- `poseCards` — the six pose-only reference cards. Visuals are placeholders; add
  `public/images/pose-01.jpg` … `pose-06.jpg` and set that card's `image` to the
  matching path to show your own pose reference
- `inclusions` / `exclusions` — master checklists
- `gallery` — built automatically from the sections above, so new photos are
  included in the preview without any extra wiring

## Deploy

The repo includes `vercel.json` (framework `vite`, build `npm run build`,
output `dist`, SPA rewrites), so importing the repo on Vercel works as-is.

Photo credits and licenses: `public/images/CREDITS.md`.
