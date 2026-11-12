# Photos

This folder ships with curated starter photos for the itinerary and hotels, so
the site is complete out of the box. **You can replace any of them with your own
pictures.**

## Swapping a photo

1. Add your image here, e.g. `public/images/my-beach.jpg`.
2. Point the matching `imageUrl` in `src/data/baliData.js` at it:

   ```js
   imageUrl: '/images/my-beach.jpg',
   ```

Use a **root-relative path** (`/images/...`), not `public/images/...` and not a
Windows path. Vercel runs Linux and is case-sensitive, so match the filename
exactly.

Keep files roughly **1600px wide** (JPG, WEBP, AVIF or PNG all work) and use
lowercase-with-dashes names.

## Or import the photo

Photos can also live next to the data file and be imported. This is how the
personal trip photos `1.png` – `5.png` in `src/data/` are wired up:

```js
import myPhoto from './my-photo.jpg'

// ...
imageUrl: myPhoto,
```

Vite fingerprints imported assets at build time, so they deploy reliably.

## Current contents

`bali-hero.jpg` and the two hotel photos, plus the landmark and activity photos
referenced from `baliData.js`. Attribution and licenses are in
[CREDITS.md](./CREDITS.md).

If a path is wrong or an image goes missing, the app shows a branded SVG
fallback instead of a broken image — check the path and filename first.
