/* =============================================================================
   BALI 6N/7D TOUR — SINGLE SOURCE OF TRUTH
   -----------------------------------------------------------------------------
   Everything the app shows lives in this one file: trip details, hotels, the
   day-wise itinerary, inclusions/exclusions, photo URLs and the women's photo
   pose guide.

   HOW TO ADD YOUR OWN PHOTOS
   • Drop a photo into  public/images/  and point `image` at it:
         image: '/images/my-photo.jpg'
   • Or import a photo at the top of this file (Vite fingerprints it at build):
         import myPhoto from './my-photo.jpg'
         ...
         image: myPhoto
   • Use lowercase-with-dashes file names. Vercel runs Linux, so file names are
     case-sensitive — match them exactly.
   • `image: null` renders a tidy placeholder tile instead of a broken image,
     so you can publish first and add photos later.
   • Photos 1.png – 20.png in this folder are the trip's personal photos.
     /images/*.jpg are curated starter photos (see public/images/CREDITS.md).
   ============================================================================= */

import bedugulTemple from './13.png'
import handaraGatePhoto from './14.png'
import tanahLotPhoto from './12.png'
import kintamaniPhoto from './15.png'
import tegalalangPhoto from './16.png'
import tegenunganPhoto from './17.png'
import ubudMarketPhoto from './18.png'
import baliDesaSwingPhoto from './19.png'
import atvPhoto from './20.png'
import kelingkingPhoto from './6.png'
import brokenBeachPhoto from './7.png'
import angelsBillabongPhoto from './8.png'
import crystalBayPhoto from './9.png'
import bananaBoatPhoto from './3.png'
import parasailingPhoto from './4.png'
import jetSkiPhoto from './5.png'
import legianNightPhoto from './1.png'
import padangPadangPhoto from './11.png'
import Wanagiri from './21.png'
import Paluang from './22.png'
import TirtaEmpulTemple from './23.png'
import SaraswatiTemple from './24.png'
import fairfieldPhoto from './hotel1.png'
import danakhaPhoto from './hotel2.png'
import semabuPhoto from './hotel3.png'

/* -------------------------------------------------------------------------- */
/*  TRIP OVERVIEW                                                             */
/* -------------------------------------------------------------------------- */

export const trip = {
  title: 'Bali 6N/7D Trip Guide',
  subtitle: 'Itinerary · Indian food · Markets · Photo guide',
  heroImage: '/images/bali-hero.jpg',
  // Shown as chips directly under the title.
  quickInfo: [
    { id: 'dates', label: '15th Nov, 2026' },
    { id: 'party', label: '4 Adults (2 Rooms)' },
    { id: 'meals', label: 'Breakfast & Dinner Included' },
  ],
}

/* -------------------------------------------------------------------------- */
/*  HOTELS (3N Kuta · 1N Nusa Penida · 2N Ubud)                               */
/* -------------------------------------------------------------------------- */

export const hotels = [
  {
    id: 'fairfield-legian',
    nights: '3N',
    area: 'Kuta',
    name: 'Fairfield Legian by Marriott Bali',
    room: 'Deluxe Rooms',
    image: fairfieldPhoto,
  },
  {
    id: 'semabu-hills',
    nights: '1N',
    area: 'Nusa Penida',
    name: 'Semabu Hills',
    room: 'Grand Deluxe Room · Garden View',
    // Add your own photo: image: '/images/semabu-hills.jpg'
    image: semabuPhoto,
  },
  {
    id: 'danakha',
    nights: '2N',
    area: 'Ubud',
    name: 'Danakha',
    room: 'One Bedroom Pool Villa · Garden View',
    image: danakhaPhoto,
  },
]

/* -------------------------------------------------------------------------- */
/*  DAY-WISE ITINERARY                                                        */
/*                                                                            */
/*  photo:     { id, title, location, image }                                 */
/*  included:  everything covered by the package on that day                  */
/*  excluded:  add-ons / fees paid at the spot (amber warning box)            */
/*  nearby:    optional places NOT in the tour (teal callout box)             */
/* -------------------------------------------------------------------------- */

export const days = [
  {
    id: 'day-1',
    number: 1,
    label: 'Day 1',
    title: 'Arrival & Kuta Check-in',
    date: 'Sun, 15 Nov 2026',
    stay: 'Fairfield Legian by Marriott Bali',
    photos: [
      {
        id: 'photo-airport-welcome',
        title: 'Bali Airport Pickup & Flower Garland Welcome',
        location: 'Ngurah Rai Airport → Kuta',
        image: '/images/bali-hero.jpg',
      },
      {
        id: 'photo-fairfield',
        title: 'Check-in at Fairfield Legian by Marriott',
        location: 'Legian, Kuta · Deluxe Rooms',
        image: fairfieldPhoto,
      },
    ],
    included: [
      'Bali Airport Pickup',
      'Flower Garland Welcome',
      'Check-in at Fairfield Legian by Marriott Bali',
      'Dinner',
    ],
    excluded: ['Lunch', 'Personal shopping / SIM card at the airport'],
    indianFood: {
      label: 'Lunch / snacks',
      note: 'Both are 5–10 mins from Fairfield Legian and serve authentic North Indian, Gujarati/Jain-friendly thalis and chaat.',
      restaurants: [
        { name: 'Gateway of India', area: 'Legian / Seminyak' },
        { name: 'Atithi Indian Contemporary Resto & Bar', area: 'Legian' },
      ],
    },
    shopping: {
      label: 'Souvenirs near the hotel',
      note: 'All within 10 minutes of Fairfield Legian — an easy first-evening stroll after dinner.',
      markets: [
        {
          name: 'Garlic Lane (Jalan Sahadewa) & Jalan Legian',
          distance: '5-min walk from the hotel',
          blurb: 'Beach dresses, resort wear, sunglasses and boutiques.',
        },
        {
          name: 'Merta Nadi Art Market (Legian)',
          distance: '5 mins from the hotel',
          blurb: 'T-shirts, sarongs and crafts — bargain 40–50% off.',
        },
        {
          name: 'Kuta Art Market & Beachwalk Shopping Center',
          distance: '10 mins from the hotel',
          blurb: 'Beachside market next to Kuta Beach plus a modern open-air mall.',
        },
      ],
    },
    nearby: [
      {
        name: 'Legian Beach & Double Six Beach',
        distance: '5-min walk from the hotel',
        blurb:
          'Colourful beanbags, live music and one of Kuta\u2019s best sunsets — an easy first-evening wander.',
        image: legianNightPhoto,
        photoId: 'photo-legian-nearby',
      },
    ],
  },
  {
    id: 'day-2',
    number: 2,
    label: 'Day 2',
    title: 'Water Sports & Uluwatu Temple',
    date: 'Mon, 16 Nov 2026',
    stay: 'Fairfield Legian by Marriott Bali',
    photos: [
      {
        id: 'photo-banana-boat',
        title: 'Banana Boat Ride',
        location: 'Tanjung Benoa · group ride',
        image: bananaBoatPhoto,
      },
      {
        id: 'photo-parasailing',
        title: 'Parasailing',
        location: 'Tanjung Benoa · 12-min flight',
        image: parasailingPhoto,
      },
      {
        id: 'photo-jet-ski',
        title: 'Jet Ski',
        location: 'Tanjung Benoa · guided',
        image: jetSkiPhoto,
      },
      {
        id: 'photo-uluwatu',
        title: 'Uluwatu Temple',
        location: 'Pecatu · clifftop sea temple',
        image: '/images/uluwatu-temple.jpg',
      },
    ],
    included: [
      'Banana Boat Ride at Tanjung Benoa',
      'Parasailing at Tanjung Benoa',
      'Jet Ski at Tanjung Benoa',
      'Uluwatu Temple visit',
      'Dinner',
    ],
    excluded: [
      'Lunch',
      'Extra water rides: Flyboarding, Scuba / Sea Walker, Rolling Donut',
      'GoPro / underwater photo packages',
      'Uluwatu Kecak & Fire Dance sunset show tickets',
    ],
    indianFood: {
      label: 'Lunch',
      note: 'Right by the water-sports hub and on the way to Uluwatu Temple — hot curries, naan and biryani.',
      restaurants: [
        { name: 'Saffron Indian Cuisine', area: 'Nusa Dua / Tanjung Benoa' },
        { name: 'Kama Indian Cuisine', area: 'Uluwatu' },
      ],
    },
    nearby: [
      {
        name: 'Padang Padang Beach & Suluban Cliff',
        distance: '10 mins from Uluwatu',
        blurb:
          'Iconic beach entered through a narrow rock cave, with a clifftop surf hangout a few steps above.',
        image: padangPadangPhoto,
        photoId: 'photo-padang-padang-nearby',
      },
    ],
  },
  {
    id: 'day-3',
    number: 3,
    label: 'Day 3',
    title: 'Bedugul, Handara Gate & Tanah Lot',
    date: 'Tue, 17 Nov 2026',
    stay: 'Fairfield Legian by Marriott Bali',
    photos: [
      {
        id: 'photo-bedugul',
        title: 'Bedugul Temple (Ulun Danu Beratan)',
        location: 'Bedugul highlands · lakeside temple',
        image: bedugulTemple,
      },
      {
        id: 'photo-handara',
        title: 'Handara Gate',
        location: 'Bedugul · iconic photo gate',
        image: handaraGatePhoto,
      },
      {
        id: 'photo-tanah-lot',
        title: 'Tanah Lot Temple',
        location: 'Tabanan · sunset sea temple',
        image: tanahLotPhoto,
      },
    ],
    included: [
      'Bedugul Temple (Ulun Danu Beratan)',
      'Handara Gate photo stop',
      'Tanah Lot Temple',
      'Dinner',
    ],
    excluded: [
      'Lunch',
      'Boat rides on Lake Beratan',
      'Professional camera / drone fees at Handara Gate',
    ],
    indianFood: {
      label: 'Lunch',
      note: 'Great stops between the highland temples and Tanah Lot for fresh Indian meals and masala chai.',
      restaurants: [
        { name: 'Royal India Restaurant', area: 'Bedugul / Candikuning' },
        { name: "Chai'ba Street Kitchen", area: 'Canggu · on the route to Tanah Lot' },
      ],
    },
    shopping: {
      label: 'On the drive back to Kuta',
      note: 'Sunset Road is on your way home from Tanah Lot — a quick fixed-price souvenir stop.',
      markets: [
        {
          name: 'Krisna Oleh-Oleh (Sunset Road)',
          distance: 'On the route back · 10 mins from the hotel',
          blurb: 'Souvenirs, Bali coffee, snacks and batik — no bargaining needed.',
        },
      ],
    },
    nearby: [
      {
        name: 'Wanagiri Hidden Hills & Banyumala Twin Waterfalls',
        distance: '5–10 mins from Handara Gate',
        image: Wanagiri,
        blurb:
          'Panoramic twin-lake photo swings and a pair of serene jungle waterfalls if the day is running ahead.',
      },
    ],
  },
  {
    id: 'day-4',
    number: 4,
    label: 'Day 4',
    title: 'Nusa Penida West Island Tour',
    date: 'Wed, 18 Nov 2026',
    stay: 'Semabu Hills · Grand Deluxe Room Garden View',
    photos: [
      {
        id: 'photo-kelingking',
        title: 'Kelingking Bay',
        location: 'Nusa Penida · the T-Rex cliff',
        image: kelingkingPhoto,
      },
      {
        id: 'photo-broken-beach',
        title: 'Broken Bay (Broken Beach)',
        location: 'Nusa Penida · natural stone arch',
        image: brokenBeachPhoto,
      },
      {
        id: 'photo-angels-billabong',
        title: "Angel's Billabong",
        location: 'Nusa Penida · natural infinity pool',
        image: angelsBillabongPhoto,
      },
      {
        id: 'photo-crystal-bay',
        title: 'Crystal Bay',
        location: 'Nusa Penida · swim & sunset',
        image: crystalBayPhoto,
      },
    ],
    included: [
      'Kelingking Bay',
      'Broken Bay (Broken Beach)',
      "Angel's Billabong",
      'Crystal Bay',
      'Local Snack Lunch',
      'Dinner',
    ],
    excluded: [
      'Mandatory Nusa Penida Retribution Fee — IDR 25,000 / person, cash at the island',
      'Beach Entry Fee — IDR 25,000 / person per beach, cash at each beach',
      'Snorkeling boat trips',
      'Steep hike down to Kelingking Beach',
    ],
    indianFood: {
      label: 'Proper meal option',
      note: 'If you want a proper meal instead of the snack lunch — curries, dal tadka and jeera rice.',
      restaurants: [
        { name: 'Mantra Indian Kitchen & Bar', area: 'Nusa Penida' },
        { name: 'Maruti Express Indian Restaurant', area: 'Near Toyapakeh Harbour' },
      ],
    },
    nearby: [
      {
        name: 'Paluang Cliff',
        distance: '3 mins from Kelingking Bay',
        image: Paluang,
        blurb:
          'The best side-angle viewpoint of the T-Rex cliff — same view, far fewer crowds.',
      },
    ],
  },
  {
    id: 'day-5',
    number: 5,
    label: 'Day 5',
    title: 'Kintamani, Ubud Nature & Adventure',
    date: 'Thu, 19 Nov 2026',
    stay: 'Danakha, Ubud',
    photos: [
      {
        id: 'photo-kintamani',
        title: 'Kintamani',
        location: 'Mount & Lake Batur viewpoint',
        image: kintamaniPhoto,
      },
      {
        id: 'photo-tegalalang',
        title: 'Tegalalang Rice Terrace',
        location: 'Tegalalang, Ubud',
        image: tegalalangPhoto,
      },
      {
        id: 'photo-tegenungan',
        title: 'Tegenungan Waterfall',
        location: 'Sukawati, Gianyar',
        image: tegenunganPhoto,
      },
      {
        id: 'photo-ubud-market',
        title: 'Ubud Art Market (Celuk & Mas Village)',
        location: 'Central Ubud',
        image: ubudMarketPhoto,
      },
      {
        id: 'photo-bali-desa-swing',
        title: 'Bali Desa Swing',
        location: 'Tegalalang · jungle swing',
        image: baliDesaSwingPhoto,
      },
      {
        id: 'photo-atv',
        title: 'ATV Tarantula Package B',
        location: 'Payangan · guided quad-bike trail',
        image: atvPhoto,
      },
    ],
    included: [
      'Kintamani — Mount & Lake Batur view',
      'Tegalalang Rice Terrace',
      'Tegenungan Waterfall',
      'Ubud Art Market (Celuk & Mas Village)',
      'Bali Desa Swing',
      'ATV Tarantula Package B',
      'Dinner',
    ],
    excluded: [
      'Lunch at Kintamani',
      'Flowing dress rentals & professional photographer packages at Bali Desa Swing',
      'Waterfall locker / towel rentals',
    ],
    indianFood: {
      label: 'Lunch',
      note: 'Along the Ubud–Tegalalang sightseeing route, with full vegetarian, Jain and North/South Indian menus.',
      restaurants: [
        { name: 'Indian Delights Ubud', area: 'Ubud' },
        { name: 'Ganesha Ek Sanskriti', area: 'Ubud' },
      ],
    },
    shopping: {
      label: 'On today’s Ubud route',
      note: 'The Ubud Art Market is already an included stop today; Sukawati is a quick add-on on the way back.',
      markets: [
        {
          name: 'Ubud Art Market (Pasar Seni Ubud)',
          distance: 'Included stop · central Ubud',
          blurb: 'Rattan bags, silk scarves, boho dresses and dreamcatchers.',
        },
        {
          name: 'Sukawati Art Market',
          distance: '15–20 mins south of Ubud',
          blurb: 'Wholesale Balinese outfits, paintings and budget souvenirs.',
        },
      ],
    },
    nearby: [
      {
        name: 'Cretya Ubud (Alas Harum) & Tirta Empul Temple',
        distance: 'Right next to Tegalalang',
        image: TirtaEmpulTemple,
        blurb:
          'Jungle infinity pools overlooking the rice terraces, plus the sacred holy-water temple of Tirta Empul.',
      },
    ],
  },
  {
    id: 'day-6',
    number: 6,
    label: 'Day 6',
    title: 'Floating Breakfast & Ubud Leisure',
    date: 'Fri, 20 Nov 2026',
    stay: 'Danakha, Ubud',
    photos: [
      {
        id: 'photo-floating-breakfast',
        title: 'Floating Breakfast at Danakha Pool Villa',
        location: 'Danakha · private pool villa',
        // Swap for your own floating-breakfast shot: '/images/floating-breakfast.jpg'
        image: danakhaPhoto,
      },
    ],
    included: [
      'Floating Breakfast at Danakha Pool Villa',
      'Villa leisure time',
      'Dinner',
    ],
    excluded: [
      'Lunch',
      'Ubud spa / massage treatments',
      'Extra sightseeing taxi if going out in Ubud',
    ],
    indianFood: {
      label: 'Lunch',
      note: 'A relaxed afternoon Indian lunch while exploring Ubud town and the markets.',
      restaurants: [
        { name: 'Queens of India', area: 'Ubud' },
        { name: 'Sitara Indian Restaurant', area: 'Central Ubud' },
      ],
    },
    shopping: {
      label: 'Near the pool villa',
      note: 'An easy scooter or taxi ride from Danakha if you fancy a lazy shopping afternoon.',
      markets: [
        {
          name: 'Ubud Art Market (Pasar Seni Ubud)',
          distance: '10–15 mins from the villa',
          blurb: 'Rattan bags, silk scarves, boho dresses and dreamcatchers.',
        },
        {
          name: 'Sukawati Art Market',
          distance: '20 mins south of Ubud',
          blurb: 'Traditional Balinese outfits, paintings and budget souvenirs.',
        },
      ],
    },
    nearby: [
      {
        name: 'Campuhan Ridge Walk & Saraswati Temple',
        distance: 'In central Ubud',
        image: SaraswatiTemple,
        blurb:
          'A scenic green hill walk at golden hour, followed by the lotus-pond water palace in the heart of town.',
      },
    ],
  },
  {
    id: 'day-7',
    number: 7,
    label: 'Day 7',
    title: 'Departure',
    date: 'Sat, 21 Nov 2026',
    stay: 'Check-out & fly home',
    photos: [],
    included: [
      'Breakfast',
      'Hotel check-out',
      'Private transfer to Bali Airport',
    ],
    excluded: ['Lunch / Airport meals & shopping'],
    indianFood: {
      label: 'Before your flight',
      note: 'Just 5 minutes from Ngurah Rai International Airport — a quick, filling Indian meal before check-in.',
      restaurants: [{ name: 'Ganesha Ek Sanskriti', area: 'Kuta / Tuban · near the airport' }],
    },
    shopping: {
      label: 'Last-minute souvenirs',
      note: 'Only if your flight timing allows — leave at least 2 hours for check-in.',
      markets: [
        {
          name: 'Krisna Oleh-Oleh (Sunset Road)',
          distance: 'On the way to the airport · 10 mins from the hotel',
          blurb: 'Fixed-price souvenirs, Bali coffee, snacks and batik.',
        },
        {
          name: 'Kuta Art Market & Beachwalk Shopping Center',
          distance: '15 mins from the airport',
          blurb: 'Beachwear and gifts right by Kuta Beach.',
        },
      ],
    },
    nearby: [],
  },
]

/* -------------------------------------------------------------------------- */
/*  NEARBY SHOPPING & LOCAL MARKETS                                           */
/* -------------------------------------------------------------------------- */

export const markets = {
  intro:
    'Souvenirs, beachwear and bargains — the best markets within easy reach of both hotels.',
  tip: 'Bargain 40–50% off at the art markets. Krisna Oleh-Oleh is fixed-price — no haggling needed.',
  groups: [
    {
      id: 'kuta',
      title: 'Near Kuta / Legian hotel',
      days: 'Days 1–3',
      places: [
        {
          number: 1,
          name: 'Garlic Lane (Jalan Sahadewa) & Jalan Legian',
          distance: 'Walking distance from Fairfield Legian',
          blurb: 'Resort wear, beach dresses, sunglasses and boutiques.',
        },
        {
          number: 2,
          name: 'Merta Nadi Art Market (Legian)',
          distance: '5 mins from the hotel',
          blurb: 'Bargain shopping for T-shirts, sarongs and crafts — bargain 40–50% off.',
        },
        {
          number: 3,
          name: 'Kuta Art Market & Beachwalk Shopping Center',
          distance: '10 mins from the hotel',
          blurb:
            'Beachside market right next to Kuta Beach, plus a modern open-air mall.',
        },
        {
          number: 4,
          name: 'Krisna Oleh-Oleh (Sunset Road)',
          distance: '10 mins from the hotel',
          blurb:
            'Fixed-price mega store for souvenirs, Bali coffee, snacks and batik without bargaining.',
        },
      ],
    },
    {
      id: 'ubud',
      title: 'Near Ubud pool villa',
      days: 'Days 5–6',
      places: [
        {
          number: 5,
          name: 'Ubud Art Market (Pasar Seni Ubud)',
          distance: 'Central Ubud · opposite Ubud Palace',
          blurb:
            'Handwoven rattan bags, silk scarves, boho dresses and dreamcatchers.',
        },
        {
          number: 6,
          name: 'Sukawati Art Market',
          distance: '15–20 mins south of Ubud',
          blurb:
            'Wholesale market for traditional Balinese outfits, paintings and budget souvenirs.',
        },
      ],
    },
  ],
}

/* -------------------------------------------------------------------------- */
/*  WOMEN'S PHOTO POSES & STYLE GUIDE                                         */
/* -------------------------------------------------------------------------- */

export const poseCards = [
  {
    id: 'pose-swing',
    number: '01',
    title: 'The Flying Dress Twirl',
    spot: 'Bali Desa Swing & Rice Terraces',
    image: null,
    poseTips: [
      'Sit sideways on the swing, let the dress trail, and look back over your shoulder.',
      'Start the video before the push — hold the pose for three seconds at the peak.',
    ],
    outfit:
      'A flowy red or yellow maxi dress. A single solid colour pops against the green valley.',
  },
  {
    id: 'pose-handara',
    number: '02',
    title: 'Centered Silhouette / Walking Away',
    spot: 'Handara Gate',
    image: null,
    poseTips: [
      'Stand dead-centre between the split gates, feet apart, arms slightly raised from your sides.',
      'Or walk slowly away toward the mist and glance back on the third step.',
    ],
    outfit:
      'Long white or cream dress, or flowy trousers — the light colour contrasts the dark gate.',
  },
  {
    id: 'pose-cliff',
    number: '03',
    title: 'Over-the-Shoulder Cliff Gaze',
    spot: 'Kelingking Bay & Uluwatu Cliffs',
    image: null,
    poseTips: [
      'Stand or sit near the wooden railing, turn three-quarters away from the camera and look out to sea.',
      'Let the wind move your hair, sunglasses on your head; shoot slightly low so the cliff fills the frame.',
    ],
    outfit:
      'Earthy rust, olive or white linen. Skip busy prints — the coastline is the hero.',
  },
  {
    id: 'pose-floating-breakfast',
    number: '04',
    title: 'Poolside Tray Candid',
    spot: 'Floating Breakfast, Danakha Pool Villa',
    image: null,
    poseTips: [
      'Lean on the floating heart / round tray with your elbows, chin resting near one hand.',
      'Hold a tropical drink or your sunglasses; shoot from water level for the tray and villa reflection.',
    ],
    outfit:
      'Swimsuit with a sheer white or pastel cover-up, plus simple gold jewellery.',
  },
  {
    id: 'pose-temple',
    number: '05',
    title: 'Traditional Sarong & Temple Steps',
    spot: 'Temples — Bedugul & Tanah Lot',
    image: null,
    poseTips: [
      'Walk sideways up the stone steps, holding the sarong lightly at one side.',
      'Soft candid smile looking down, then pause and look up for a second frame.',
    ],
    outfit:
      'Sage, terracotta or cream sarong. Keep shoulders covered for temple etiquette.',
  },
  {
    id: 'pose-beach',
    number: '06',
    title: 'Golden Hour Walking Candid',
    spot: 'Beach & Sunset — Crystal Bay / Legian',
    image: null,
    poseTips: [
      'Walk barefoot along the wet shoreline holding a woven straw hat, looking down and laughing.',
      'Shoot into the setting sun for a rim-lit silhouette; let your partner walk past the camera.',
    ],
    outfit:
      'A white or cream flowy dress, or a linen set. The straw hat doubles as your prop.',
  },
]

/* -------------------------------------------------------------------------- */
/*  MASTER INCLUSIONS & EXCLUSIONS                                            */
/* -------------------------------------------------------------------------- */

export const inclusions = [
  'Hotel & Villa Stays — 3N Kuta, 1N Nusa Penida, 2N Ubud',
  'Visa',
  'Flight Tickets',
  'Private Guide',
  'Flower Garland Welcome',
  'Airport & Tour Transfers',
  'Basic English-Speaking Driver',
  'Daily Water Bottle during tours & transfers',
  'All Indonesian Taxes',
]

export const exclusions = [
  '"I LOVE BALI" Tourist Tax',
  'Nusa Penida Retribution & Beach Fees — IDR 25,000 + IDR 25,000 per beach',
  'Lunches (except the Day 4 snack lunch)',
  'Optional rides, shows & dress rentals',
  'Shopping & souvenirs',
  'Tips & gratuities',
  'Anything not listed in the inclusions',
]

/* -------------------------------------------------------------------------- */
/*  GALLERY — every photo on the page, in reading order.                      */
/*  Used by the full-screen preview so you can swipe through all of them.     */
/* -------------------------------------------------------------------------- */

const tripHeroPhoto = {
  id: 'photo-trip-hero',
  src: trip.heroImage,
  title: trip.title,
  caption: 'Bali · 15–21 Nov 2026',
}

const hotelPhotos = hotels
  .filter((hotel) => Boolean(hotel.image))
  .map((hotel) => ({
    id: `photo-hotel-${hotel.id}`,
    src: hotel.image,
    title: hotel.name,
    caption: `${hotel.nights} ${hotel.area} · ${hotel.room}`,
  }))

const dayPhotos = days.flatMap((day) =>
  day.photos.map((photo) => ({
    id: photo.id,
    src: photo.image,
    title: photo.title,
    caption: `${day.label} · ${day.title}`,
  })),
)

const nearbyPhotos = days.flatMap((day) =>
  day.nearby
    .filter((place) => Boolean(place.image))
    .map((place) => ({
      id: place.photoId,
      src: place.image,
      title: place.name,
      caption: `Nearby ${day.label} · not in tour`,
    })),
)

const posePhotos = poseCards
  .filter((pose) => Boolean(pose.image))
  .map((pose) => ({
    id: `photo-${pose.id}`,
    src: pose.image,
    title: pose.title,
    caption: `Pose guide · ${pose.spot}`,
  }))

export const gallery = [
  tripHeroPhoto,
  ...hotelPhotos,
  ...dayPhotos,
  ...nearbyPhotos,
  ...posePhotos,
]

export default days
