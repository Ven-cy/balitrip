/* =============================================================================
   BALI 6N/7D — CENTRAL TRIP DATA
   -----------------------------------------------------------------------------
   Everything the site displays lives in this one file. Edit the trip, swap a
   photo, or add a new stop here — no component changes required.

   HOW PHOTOS WORK
   • Trip photos 1.png … 12.png are imported from this folder. Vite fingerprints
     them at build time, so they deploy reliably on Vercel.
   • Curated starter photos for the remaining stops live in public/images/ and
     are referenced with root-relative paths like '/images/kelingking-bay.jpg'.
   • To use your own photo, either:
       a) drop it in public/images/ and use
              imageUrl: '/images/my-photo.jpg',
       b) or import it at the top of this file and use
              imageUrl: myPhoto,
   • Root-relative paths work locally AND on Vercel. Vercel runs Linux, where
     file names are case-sensitive — match them exactly.
   • Keep names lowercase-with-dashes. JPG, PNG, WEBP and AVIF all work.

   Starter photo credits: public/images/CREDITS.md
   ============================================================================= */
import image1 from './1.png'
import image2 from './2.png'
import image3 from './3.png'
import image4 from './4.png'
import image5 from './5.png'
import image6 from './6.png'
import image7 from './7.png'
import image8 from './8.png'
import image9 from './9.png'
import image10 from './10.png'
import image11 from './11.png'
import image12 from './12.png'
import hotel1 from './hotel1.png'
import hotel2 from './hotel2.png'
export const tripInfo = {
  title: 'Bali 6N/7D Escape',
  shortTitle: 'Bali ’26',
  eyebrow: 'The island edition',
  tagline: 'Six nights between salt, ceremony and the green heart of Ubud.',
  description:
    'A slow-and-wild Bali loop: water sports in Tanjung Benoa, the cliffs of Nusa Penida, a sunset temple on the Indian Ocean, then misty highlands and rice terraces in Ubud.',
  dates: 'Nov 15 – 21, 2026',
  dateRange: 'November 15 – 21, 2026',
  duration: '6 Nights · 7 Days',
  location: 'Bali, Indonesia',
  // Local starter photo — swap for '/images/your-hero.jpg'
  heroImage: '/images/bali-hero.jpg',
  stats: [
    { value: '7', label: 'Days', hint: 'Nov 15–21' },
    { value: '20', label: 'Spots', hint: 'Rides, temples & beaches' },
    { value: '2', label: 'Villa stays', hint: 'Beach + Ubud' },
  ],
  route: ['Legian', 'Tanjung Benoa', 'Nusa Penida', 'Uluwatu', 'Bedugul', 'Ubud'],
  packingNote:
    'Reef-safe sunscreen, a sarong for temples, grippy sandals and a dry bag for boat days.',
}

/* Hotels — shown as glass cards in the hero and as a stay timeline above the grid */
export const hotels = [
  {
    id: 'fairfield-legian',
    name: 'Fairfield by Marriott Bali Legian',
    shortName: 'Fairfield Legian',
    area: 'Legian, Badung',
    nights: '3 nights',
    checkIn: 'Nov 15',
    checkOut: 'Nov 18',
    description:
      'A laid-back beach base minutes from Legian’s surf break — rooftop pool, tropical breakfast and easy access to Seminyak.',
    highlights: ['Rooftop pool', '5 min to beach', 'Legian'],
    imageUrl: hotel1,
    // Swap for your own hotel photo: imageUrl: '/images/my-legian-hotel.jpg',
  },
  {
    id: 'danakha-ubud',
    name: 'Danakha Ubud',
    shortName: 'Danakha Ubud',
    area: 'Ubud, Gianyar',
    nights: '3 nights',
    checkIn: 'Nov 18',
    checkOut: 'Nov 21',
    description:
      'A quiet jungle hideaway above Ubud — rice-field views, a frangipani-lined pool and slow mornings before the waterfalls.',
    highlights: ['Jungle views', 'Ubud centre', 'Rice terraces'],
    imageUrl: hotel2,
    // Swap for your own hotel photo: imageUrl: '/images/my-ubud-hotel.jpg',
  },
]

/* Filter tabs — `days` lists every day group the tab should include */
export const dayFilters = [
  { id: 'all', label: 'All Days', days: null },
  { id: 'day-1', label: 'Day 1', days: ['Day 1'] },
  { id: 'day-2', label: 'Day 2', days: ['Day 2'] },
  { id: 'day-3', label: 'Day 3', days: ['Day 3'] },
  { id: 'day-4', label: 'Day 4', days: ['Day 4'] },
  { id: 'day-5', label: 'Day 5', days: ['Day 5'] },
  { id: 'day-6-7', label: 'Day 6–7', days: ['Day 6', 'Day 7'] },
]

/* The category values match the badges on the cards exactly */
export const categoryFilters = [
  { id: 'all', label: 'All', category: null },
  { id: 'rides', label: 'Rides & Adventure', category: 'Water Sports & Rides' },
  { id: 'temples', label: 'Temples', category: 'Temples' },
  { id: 'beaches', label: 'Beaches', category: 'Islands & Beaches' },
  { id: 'nature', label: 'Nature', category: 'Nature & Culture' },
]

/* -----------------------------------------------------------------------------
   THE ITINERARY
   Fields: id · day · category · title · location · description · imageUrl ·
           highlights · time · tip · stay
   -------------------------------------------------------------------------- */
export const places = [
  /* ------------------------------- DAY 1 -------------------------------- */
  {
    id: 'legian-beach-sunset',
    day: 'Day 1',
    date: 'Sun, Nov 15',
    category: 'Islands & Beaches',
    title: 'Legian Beach Sunset',
    location: 'Legian Beach, Badung',
    time: '5:30 PM',
    description:
      'Land, drop the bags and walk straight onto the sand. Legian’s long golden curve is best at golden hour, with surfers silhouetted against the sky.',
    imageUrl:
      image1,
    highlights: ['Sunset', 'Beach walk', 'Surf watching'],
    tip: 'Bean bags at the beach bars fill up fast — claim one by 5 PM and order a young coconut.',
    stay: 'Fairfield Legian',
  },
  {
    id: 'double-six-beach',
    day: 'Day 1',
    date: 'Sun, Nov 15',
    category: 'Islands & Beaches',
    title: 'Double Six Beach',
    location: 'Seminyak, Badung',
    time: '7:00 PM',
    description:
      'A lively strip of beach bars and night surf just north of Legian — the perfect low-key first dinner with your toes in the sand.',
    imageUrl: image2,
    highlights: ['Beach bars', 'Night surf', 'Dinner'],
    tip: 'Try the grilled seafood at one of the beachfront warungs — cash is easier than card here.',
    stay: 'Fairfield Legian',
  },

  /* ------------------------------- DAY 2 -------------------------------- */
  {
    id: 'banana-boat-ride',
    day: 'Day 2',
    date: 'Mon, Nov 16',
    category: 'Water Sports & Rides',
    title: 'Banana Boat Ride',
    location: 'Tanjung Benoa, Badung',
    time: '9:00 AM',
    description:
      'Hold on tight. A high-energy start to the water-sports morning on the calm, warm water of Tanjung Benoa Bay.',
    imageUrl: image3,
    highlights: ['Group fun', '40 min', 'All levels'],
    tip: 'Wear a rash guard and leave valuables in the operator’s locker — everything gets wet.',
    stay: 'Fairfield Legian',
  },
  {
    id: 'parasailing',
    day: 'Day 2',
    date: 'Mon, Nov 16',
    category: 'Water Sports & Rides',
    title: 'Parasailing',
    location: 'Tanjung Benoa, Badung',
    time: '10:30 AM',
    description:
      'Lift off over the bay for a quiet, wide-open view of Bali’s southern coastline — the calm counterpoint to the banana boat.',
    imageUrl: image4,
    highlights: ['Ocean views', '12 min flight', 'Tandem available'],
    tip: 'Morning wind is gentlest. Go before 11 AM for the smoothest ride and shortest queue.',
    stay: 'Fairfield Legian',
  },
  {
    id: 'jet-ski',
    day: 'Day 2',
    date: 'Mon, Nov 16',
    category: 'Water Sports & Rides',
    title: 'Jet Ski',
    location: 'Tanjung Benoa, Badung',
    time: '12:00 PM',
    description:
      'Fifteen minutes of throttle, spray and pure adrenaline across Tanjung Benoa Bay. Instructors ride alongside beginners.',
    imageUrl: image5,
    highlights: ['Adrenaline', '15 min', 'Guided'],
    tip: 'Bring a waterproof phone pouch — the best shots are mid-spray.',
    stay: 'Fairfield Legian',
  },

  /* ------------------------------- DAY 3 -------------------------------- */
  {
    id: 'kelingking-bay',
    day: 'Day 3',
    date: 'Tue, Nov 17',
    category: 'Islands & Beaches',
    title: 'Kelingking Bay',
    location: 'Nusa Penida, Klungkung',
    time: '9:30 AM',
    description:
      'The iconic T-Rex cliff. Turquoise water curls around a limestone headland, and the viewpoint delivers one of the most photographed scenes in Bali.',
    imageUrl: image6,
    highlights: ['Iconic viewpoint', 'Cliff walk', 'Photo spot'],
    tip: 'Skip the infamous cliff descent unless you’re fully confident — the view from the top is the reward.',
    stay: 'Fairfield Legian',
  },
  {
    id: 'broken-beach',
    day: 'Day 3',
    date: 'Tue, Nov 17',
    category: 'Islands & Beaches',
    title: 'Broken Beach',
    location: 'Nusa Penida, Klungkung',
    time: '12:00 PM',
    description:
      'A natural limestone arch rings a hidden cove. Walk the rim, watch the swell fold through the opening and let the ocean do the rest.',
    imageUrl: image7,
    highlights: ['Natural arch', 'Coastal walk', 'Lookout'],
    tip: 'Combine with Angel’s Billabong — they share a car park, five minutes apart.',
    stay: 'Fairfield Legian',
  },
  {
    id: 'angels-billabong',
    day: 'Day 3',
    date: 'Tue, Nov 17',
    category: 'Islands & Beaches',
    title: "Angel’s Billabong",
    location: 'Nusa Penida, Klungkung',
    time: '12:45 PM',
    description:
      'A crystal-clear natural infinity pool carved into the rock, opening straight onto the Indian Ocean. Check the tide before you dip.',
    imageUrl: image8,
    highlights: ['Natural pool', 'Tide-dependent', 'Cliffside'],
    tip: 'Visit at low tide for safe swimming. At high tide the pool closes and the waves crash over the edge.',
    stay: 'Fairfield Legian',
  },
  {
    id: 'crystal-bay',
    day: 'Day 3',
    date: 'Tue, Nov 17',
    category: 'Islands & Beaches',
    title: 'Crystal Bay',
    location: 'Nusa Penida, Klungkung',
    time: '3:00 PM',
    description:
      'A coconut-lined cove with calm water and an easy snorkel straight off the sand. Stay for the slow ferry back to Sanur.',
    imageUrl: image9,
    highlights: ['Snorkelling', 'Beach time', 'Sunset'],
    tip: 'The last fast boat back to Sanur leaves around 5 PM — set an alarm.',
    stay: 'Fairfield Legian',
  },

  /* ------------------------------- DAY 4 -------------------------------- */
  {
    id: 'uluwatu-temple',
    day: 'Day 4',
    date: 'Wed, Nov 18',
    category: 'Temples',
    title: 'Uluwatu Temple',
    location: 'Pecatu, Badung',
    time: '10:00 AM',
    description:
      'A sea temple perched 70 metres above the surf. Clifftop paths, mischievous monkeys and the vast blue theatre of the Indian Ocean.',
    imageUrl: image10,
    highlights: ['Clifftop temple', 'Ocean views', 'Sarong provided'],
    tip: 'Hold tight to sunglasses and phones — the monkeys are charming and extremely fast.',
    stay: 'Moving to Ubud',
  },
  {
    id: 'padang-padang-beach',
    day: 'Day 4',
    date: 'Wed, Nov 18',
    category: 'Islands & Beaches',
    title: 'Padang Padang Beach',
    location: 'Pecatu, Badung',
    time: '1:00 PM',
    description:
      'A little surfers’ cove tucked between limestone cliffs — walk through the narrow rock passage and emerge onto soft sand and warm water.',
    imageUrl: image11,
    highlights: ['Hidden cove', 'Swimming', 'Surf vibes'],
    tip: 'Parking is tight; go early afternoon after the morning surf crowd thins out.',
    stay: 'Moving to Ubud',
  },
  {
    id: 'tanah-lot-temple',
    day: 'Day 4',
    date: 'Wed, Nov 18',
    category: 'Temples',
    title: 'Tanah Lot Temple',
    location: 'Tabanan, Bali',
    time: '5:30 PM',
    description:
      'Bali’s most cinematic sunset. The sea temple sits on a tidal rock, framed by gold light and the silhouettes of the crowd along the shore.',
    imageUrl: image12,
    highlights: ['Sunset icon', 'Sea temple', 'Night market'],
    tip: 'Arrive 45 minutes before sunset, then browse the souvenir stalls on the walk back.',
    stay: 'Danakha Ubud',
  },

  /* ------------------------------- DAY 5 -------------------------------- */
  {
    id: 'bedugul-temple',
    day: 'Day 5',
    date: 'Thu, Nov 19',
    category: 'Temples',
    title: 'Bedugul Temple',
    location: 'Ulun Danu Beratan, Bedugul',
    time: '9:00 AM',
    description:
      'Ulun Danu Beratan floats on the still, cool water of Lake Beratan. Morning mist, mountain air and meru towers mirrored in the lake.',
    imageUrl:
      '/images/bedugul-temple.jpg',
    highlights: ['Lake temple', 'Misty morning', 'Mountain air'],
    tip: 'The highlands are 8–10°C cooler. Bring a light jacket for the early start.',
    stay: 'Danakha Ubud',
  },
  {
    id: 'handara-gate',
    day: 'Day 5',
    date: 'Thu, Nov 19',
    category: 'Nature & Culture',
    title: 'Handara Gate',
    location: 'Bedugul, Buleleng',
    time: '11:00 AM',
    description:
      'The famous candy-cane gate framed by green hills. A short photo stop that feels like stepping into a postcard.',
    imageUrl:
      '/images/handara-gate.jpg',
    highlights: ['Photo stop', 'Bali gate', 'Highlands'],
    tip: 'Queues build fast. Arrive before 11 AM and have your pose ready.',
    stay: 'Danakha Ubud',
  },
  {
    id: 'kintamani',
    day: 'Day 5',
    date: 'Thu, Nov 19',
    category: 'Nature & Culture',
    title: 'Kintamani',
    location: 'Mount Batur, Bangli',
    time: '1:00 PM',
    description:
      'Lunch on the rim of a volcanic caldera. Mount Batur and its dark lava fields roll out below, with Lake Batur glinting in the distance.',
    imageUrl:
      '/images/kintamani.jpg',
    highlights: ['Volcano views', 'Caldera lunch', 'Cool climate'],
    tip: 'Pick a restaurant on the eastern rim for the clearest view of Batur — and the best photo light.',
    stay: 'Danakha Ubud',
  },
  {
    id: 'tegalalang-rice-terrace',
    day: 'Day 5',
    date: 'Thu, Nov 19',
    category: 'Nature & Culture',
    title: 'Tegalalang Rice Terrace',
    location: 'Tegalalang, Gianyar',
    time: '4:00 PM',
    description:
      'Emerald terraces stacked into a jungle valley. Walk the ridges, swing over the palms and catch the late-afternoon light.',
    imageUrl:
      '/images/tegalalang-rice-terrace.jpg',
    highlights: ['Rice terraces', 'Valley walk', 'Jungle swings'],
    tip: 'The lower valley is quieter than the roadside viewpoints. Bring small cash for the terrace paths.',
    stay: 'Danakha Ubud',
  },

  /* ------------------------------- DAY 6 -------------------------------- */
  {
    id: 'tegenungan-waterfall',
    day: 'Day 6',
    date: 'Fri, Nov 20',
    category: 'Nature & Culture',
    title: 'Tegenungan Waterfall',
    location: 'Sukawati, Gianyar',
    time: '8:30 AM',
    description:
      'A broad jungle waterfall a short drive from Ubud. Descend the steps early, before the heat and the crowds, and feel the spray from the rocks.',
    imageUrl:
      '/images/tegenungan-waterfall.jpg',
    highlights: ['Waterfall', 'Morning swim', 'Jungle'],
    tip: 'The steps are steep and slippery — grippy shoes make the climb back much easier.',
    stay: 'Danakha Ubud',
  },
  {
    id: 'ubud-art-market',
    day: 'Day 6',
    date: 'Fri, Nov 20',
    category: 'Nature & Culture',
    title: 'Ubud Art Market',
    location: 'Ubud Centre, Gianyar',
    time: '11:30 AM',
    description:
      'Woven bags, wood carvings and batik in a maze of stalls behind the palace. Browse slowly, bargain with a smile, then find a café on Jalan Hanoman.',
    imageUrl:
      '/images/ubud-art-market.jpg',
    highlights: ['Local crafts', 'Batik', 'Café stop'],
    tip: 'Start at half the asking price and keep it friendly — it’s part of the ritual.',
    stay: 'Danakha Ubud',
  },
  {
    id: 'bali-desa-swing',
    day: 'Day 6',
    date: 'Fri, Nov 20',
    category: 'Water Sports & Rides',
    title: 'Bali Desa Swing',
    location: 'Tegalalang, Gianyar',
    time: '2:00 PM',
    description:
      'The shot you came for: a jungle swing over a palm-filled valley, with the camera roll already rolling. Safety harness, dramatic backdrop, zero chill.',
    imageUrl:
      '/images/bali-desa-swing.jpg',
    highlights: ['Jungle swing', 'Photo package', 'Adrenaline'],
    tip: 'Ask for the photo package upfront — the on-site photographers know the best angles.',
    stay: 'Danakha Ubud',
  },
  {
    id: 'atv-ride',
    day: 'Day 6',
    date: 'Fri, Nov 20',
    category: 'Water Sports & Rides',
    title: 'ATV Ride',
    location: 'Payangan, Gianyar',
    time: '4:00 PM',
    description:
      'Mud, river crossings and narrow jungle tracks on a guided quad-bike loop. The adventurous finale before a slow final dinner in Ubud.',
    imageUrl:
      '/images/atv-ride.jpg',
    highlights: ['Quad biking', 'Jungle track', '2 hours'],
    tip: 'Leave your nice clothes at the hotel and bring a full change. You will get muddy.',
    stay: 'Danakha Ubud',
  },
]

/* A few gentle sync helpers used by the UI */
export const hotelByShortName = Object.fromEntries(
  hotels.map((hotel) => [hotel.shortName, hotel]),
)

export const getPlacesForDayFilter = (filterId) => {
  const filter = dayFilters.find((item) => item.id === filterId)
  if (!filter || !filter.days) return places
  return places.filter((place) => filter.days.includes(place.day))
}

export default places
