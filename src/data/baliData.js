/* =============================================================================
   BALI 6N/7D — CENTRAL TRIP DATA (GUJARATI)
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
  title: 'બાલી ૬ રાત/૭ દિવસની સફર',
  shortTitle: 'બાલી ’૨૬',
  eyebrow: 'ટાપુની આવૃત્તિ',
  tagline: 'છ રાત — ખારા પાણી, પરંપરા અને ઉબુદના લીલા હૃદય વચ્ચે.',
  description:
    'ધીમી અને જંગલી બાલી સફર: તંજુંગ બેનોઆમાં વોટર સ્પોર્ટ્સ, નુસા પેનિડાની ભેખડો, હિંદ મહાસાગર પર સૂર્યાસ્તનું મંદિર, અને પછી ધુમ્મસભર્યા ઉચ્ચ પ્રદેશ અને ઉબુદની ડાંગરની ખેતરવા.',
  dates: '૧૫ – ૨૧ નવેમ્બર, ૨૦૨૬',
  dateRange: '૧૫ – ૨૧ નવેમ્બર, ૨૦૨૬',
  duration: '૬ રાત · ૭ દિવસ',
  location: 'બાલી, ઇન્ડોનેશિયા',
  // Local starter photo — swap for '/images/your-hero.jpg'
  heroImage: '/images/bali-hero.jpg',
  stats: [
    { value: '૭', label: 'દિવસ', hint: '૧૫–૨૧ નવે' },
    { value: '૨૦', label: 'સ્થળો', hint: 'રાઇડ્સ, મંદિરો અને બીચ' },
    { value: '૨', label: 'વિલા ઉતારા', hint: 'બીચ + ઉબુદ' },
  ],
  route: ['લેજિયન', 'તંજુંગ બેનોઆ', 'નુસા પેનિડા', 'ઉલુવાતુ', 'બેદુગુલ', 'ઉબુદ'],
  packingNote:
    'રીફ-સેફ સનસ્ક્રીન, મંદિર માટે સારંગ, પકડ સારી મળે એવા સેન્ડલ અને બોટવાળા દિવસો માટે ડ્રાય બેગ.',
}

/* Hotels — shown as glass cards in the hero and as a stay timeline above the grid */
export const hotels = [
  {
    id: 'fairfield-legian',
    name: 'Fairfield by Marriott Bali Legian',
    shortName: 'ફેરફિલ્ડ લેજિયન',
    area: 'લેજિયન, બાદુંગ',
    nights: '૩ રાત',
    checkIn: '૧૫ નવે',
    checkOut: '૧૮ નવે',
    description:
      'લેજિયનના સર્ફ પોઇન્ટથી થોડી જ મિનિટના અંતરે આરામદાયક બીચ બેઝ — છત પર પૂલ, ટ્રોપિકલ નાસ્તો અને સેમિન્યાક સુધી સહેલી પહોંચ.',
    highlights: ['છત પર પૂલ', 'બીચ ૫ મિનિટ', 'લેજિયન'],
    imageUrl: hotel1,
    // Swap for your own hotel photo: imageUrl: '/images/my-legian-hotel.jpg',
  },
  {
    id: 'danakha-ubud',
    name: 'Danakha Ubud',
    shortName: 'દાનાખા ઉબુદ',
    area: 'ઉબુદ, જિયાન્યાર',
    nights: '૩ રાત',
    checkIn: '૧૮ નવે',
    checkOut: '૨૧ નવે',
    description:
      'ઉબુદની ઉપર જંગલમાં શાંત આશ્રય — ડાંગરના ખેતરોના દૃશ્યો, ચંપાના ફૂલોથી ઘેરાયેલો પૂલ અને ધોધ પહેલાંની ધીમી સવારો.',
    highlights: ['જંગલના દૃશ્યો', 'ઉબુદ કેન્દ્ર', 'ડાંગરના ખેતરો'],
    imageUrl: hotel2,
    // Swap for your own hotel photo: imageUrl: '/images/my-ubud-hotel.jpg',
  },
]

/* Filter tabs — `days` lists every day group the tab should include */
export const dayFilters = [
  { id: 'all', label: 'બધા દિવસો', days: null },
  { id: 'day-1', label: 'દિવસ ૧', days: ['દિવસ ૧'] },
  { id: 'day-2', label: 'દિવસ ૨', days: ['દિવસ ૨'] },
  { id: 'day-3', label: 'દિવસ ૩', days: ['દિવસ ૩'] },
  { id: 'day-4', label: 'દિવસ ૪', days: ['દિવસ ૪'] },
  { id: 'day-5', label: 'દિવસ ૫', days: ['દિવસ ૫'] },
  { id: 'day-6-7', label: 'દિવસ ૬–૭', days: ['દિવસ ૬', 'દિવસ ૭'] },
]

/* The category values match the badges on the cards exactly */
export const categoryFilters = [
  { id: 'all', label: 'બધા', category: null },
  { id: 'rides', label: 'રાઇડ્સ અને રોમાંચ', category: 'વોટર સ્પોર્ટ્સ અને રાઇડ્સ' },
  { id: 'temples', label: 'મંદિરો', category: 'મંદિરો' },
  { id: 'beaches', label: 'બીચ', category: 'ટાપુ અને બીચ' },
  { id: 'nature', label: 'પ્રકૃતિ', category: 'પ્રકૃતિ અને સંસ્કૃતિ' },
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
    day: 'દિવસ ૧',
    date: 'રવિ, ૧૫ નવે',
    category: 'ટાપુ અને બીચ',
    title: 'લેજિયન બીચ પર સૂર્યાસ્ત',
    location: 'લેજિયન બીચ, બાદુંગ',
    time: 'સાંજે ૫:૩૦',
    description:
      'ઊતરો, બેગ મૂકો અને સીધા રેતી પર ચાલવા નીકળી જાઓ. લેજિયનનો લાંબો સોનેરી વળાંક સૂર્યાસ્ત વખતે સૌથી સુંદર લાગે — આકાશ સામે સર્ફર્સની છાયાઓ.',
    imageUrl:
      image1,
    highlights: ['સૂર્યાસ્ત', 'બીચ વોક', 'સર્ફિંગ જોવું'],
    tip: 'બીચ બારના બીન બેગ ઝડપથી ભરાઈ જાય છે — સાંજે ૫ વાગ્યા સુધીમાં એક પકડી લો અને લીલું નાળિયેર મંગાવો.',
    stay: 'ફેરફિલ્ડ લેજિયન',
  },
  {
    id: 'double-six-beach',
    day: 'દિવસ ૧',
    date: 'રવિ, ૧૫ નવે',
    category: 'ટાપુ અને બીચ',
    title: 'ડબલ સિક્સ બીચ',
    location: 'સેમિન્યાક, બાદુંગ',
    time: 'સાંજે ૭:૦૦',
    description:
      'લેજિયનની ઉત્તરે બીચ બાર અને રાતના સર્ફની જીવંત પટ્ટી — પગ રેતીમાં નાખીને પહેલું શાંત વિલાસ ભોજન.',
    imageUrl: image2,
    highlights: ['બીચ બાર', 'રાતનું સર્ફ', 'વિલાસ ભોજન'],
    tip: 'બીચફ્રન્ટ વારુંગમાં ગ્રિલ્ડ સીફૂડ ટ્રાય કરો — અહીં કાર્ડ કરતાં રોકડ સહેલી છે.',
    stay: 'ફેરફિલ્ડ લેજિયન',
  },

  /* ------------------------------- DAY 2 -------------------------------- */
  {
    id: 'banana-boat-ride',
    day: 'દિવસ ૨',
    date: 'સોમ, ૧૬ નવે',
    category: 'વોટર સ્પોર્ટ્સ અને રાઇડ્સ',
    title: 'બનાના બોટ રાઇડ',
    location: 'તંજુંગ બેનોઆ, બાદુંગ',
    time: 'સવારે ૯:૦૦',
    description:
      'પૂરી તાકાતથી પકડી રાખો. તંજુંગ બેનોઆ ખાડીના શાંત, ગરમ પાણીમાં વોટર-સ્પોર્ટ્સની સવારની જોરદાર શરૂઆત.',
    imageUrl: image3,
    highlights: ['ગ્રુપ મજા', '૪૦ મિનિટ', 'બધા માટે'],
    tip: 'રેશ ગાર્ડ પહેરો અને કીમતી વસ્તુઓ ઓપરેટરના લોકરમાં રાખો — બધું ભીનું થશે.',
    stay: 'ફેરફિલ્ડ લેજિયન',
  },
  {
    id: 'parasailing',
    day: 'દિવસ ૨',
    date: 'સોમ, ૧૬ નવે',
    category: 'વોટર સ્પોર્ટ્સ અને રાઇડ્સ',
    title: 'પેરાસેલિંગ',
    location: 'તંજુંગ બેનોઆ, બાદુંગ',
    time: 'સવારે ૧૦:૩૦',
    description:
      'ખાડી ઉપર ઊડીને બાલીના દક્ષિણ કિનારાનું શાંત, પહોળું દૃશ્ય જુઓ — બનાના બોટનો શાંત વિરોધાભાસ.',
    imageUrl: image4,
    highlights: ['મહાસાગરના દૃશ્યો', '૧૨ મિનિટ ફ્લાઇટ', 'ટેન્ડમ ઉપલબ્ધ'],
    tip: 'સવારનો પવન સૌથી હળવો હોય છે. સૌથી આરામદાયક રાઇડ અને ટૂંકી લાઇન માટે સવારે ૧૧ પહેલાં જાઓ.',
    stay: 'ફેરફિલ્ડ લેજિયન',
  },
  {
    id: 'jet-ski',
    day: 'દિવસ ૨',
    date: 'સોમ, ૧૬ નવે',
    category: 'વોટર સ્પોર્ટ્સ અને રાઇડ્સ',
    title: 'જેટ સ્કી',
    location: 'તંજુંગ બેનોઆ, બાદુંગ',
    time: 'બપોરે ૧૨:૦૦',
    description:
      'તંજુંગ બેનોઆ ખાડીમાં પંદર મિનિટની થ્રોટલ, છંટકાવ અને શુદ્ધ એડ્રિનાલિન. શીખનારાઓની સાથે ઇન્સ્ટ્રક્ટર પણ રાઇડ કરે છે.',
    imageUrl: image5,
    highlights: ['એડ્રિનાલિન', '૧૫ મિનિટ', 'ગાઇડેડ'],
    tip: 'વોટરપ્રૂફ ફોન પાઉચ લાવો — સૌથી સરસ ફોટા છંટકાવ વચ્ચેના જ હોય છે.',
    stay: 'ફેરફિલ્ડ લેજિયન',
  },

  /* ------------------------------- DAY 3 -------------------------------- */
  {
    id: 'kelingking-bay',
    day: 'દિવસ ૩',
    date: 'મંગળ, ૧૭ નવે',
    category: 'ટાપુ અને બીચ',
    title: 'કેલિંકિંગ બે',
    location: 'નુસા પેનિડા, ક્લુંગકુંગ',
    time: 'સવારે ૯:૩૦',
    description:
      'ટી-રેક્સ જેવી પ્રખ્યાત ભેખડ. ફિરોઝી પાણી ચૂનાના ખડકના ટેકરાને વીંટળાઈ જાય છે, અને આ વ્યુપોઇન્ટ બાલીના સૌથી વધુ ફોટા પડતા દૃશ્યોમાંનું એક છે.',
    imageUrl: image6,
    highlights: ['પ્રખ્યાત વ્યુપોઇન્ટ', 'ભેખડ પર ચાલ', 'ફોટો સ્પોટ'],
    tip: 'ખૂબ આત્મવિશ્વાસ ન હોય તો એ કુખ્યાત ભેખડ ઉતરાણ છોડી દો — ઉપરનું દૃશ્ય જ સાચું ઇનામ છે.',
    stay: 'ફેરફિલ્ડ લેજિયન',
  },
  {
    id: 'broken-beach',
    day: 'દિવસ ૩',
    date: 'મંગળ, ૧૭ નવે',
    category: 'ટાપુ અને બીચ',
    title: 'બ્રોકન બીચ',
    location: 'નુસા પેનિડા, ક્લુંગકુંગ',
    time: 'બપોરે ૧૨:૦૦',
    description:
      'કુદરતી ચૂનાનો કમાન એક છૂપી ખાડીને વીંટળે છે. કિનારે ચાલો, છિદ્રમાંથી લહેરોને વળતી જુઓ અને બાકીનું મહાસાગરને સોંપી દો.',
    imageUrl: image7,
    highlights: ['કુદરતી કમાન', 'કિનારાની સફર', 'દેખાવ પોઇન્ટ'],
    tip: 'એન્જલ્સ બિલાબોંગ સાથે જોડો — બંનેનું પાર્કિંગ એક જ છે, પાંચ મિનિટના અંતરે.',
    stay: 'ફેરફિલ્ડ લેજિયન',
  },
  {
    id: 'angels-billabong',
    day: 'દિવસ ૩',
    date: 'મંગળ, ૧૭ નવે',
    category: 'ટાપુ અને બીચ',
    title: 'એન્જલ્સ બિલાબોંગ',
    location: 'નુસા પેનિડા, ક્લુંગકુંગ',
    time: 'બપોરે ૧૨:૪૫',
    description:
      'ખડકમાં કોતરેલો સ્ફટિક જેવો કુદરતી ઇન્ફિનિટી પૂલ, જે સીધો હિંદ મહાસાગરમાં ખૂલે છે. ડુબકી મારતાં પહેલાં ભરતી-ઓટ જોઈ લો.',
    imageUrl: image8,
    highlights: ['કુદરતી પૂલ', 'ભરતી પર આધારિત', 'ભેખડ પર'],
    tip: 'સુરક્ષિત તરવા માટે ઓટ વખતે જાઓ. ભરતીમાં પૂલ બંધ થાય અને લહેરો કિનારા પર ફૂટે છે.',
    stay: 'ફેરફિલ્ડ લેજિયન',
  },
  {
    id: 'crystal-bay',
    day: 'દિવસ ૩',
    date: 'મંગળ, ૧૭ નવે',
    category: 'ટાપુ અને બીચ',
    title: 'ક્રિસ્ટલ બે',
    location: 'નુસા પેનિડા, ક્લુંગકુંગ',
    time: 'બપોરે ૩:૦૦',
    description:
      'નાળિયેરના વૃક્ષોથી ઘેરાયેલી શાંત ખાડી, જ્યાં રેતી પરથી જ સહેલું સ્નોર્કલિંગ થાય. સાનુર પાછા જતી ધીમી ફેરી માટે થોડો સમય રોકાઓ.',
    imageUrl: image9,
    highlights: ['સ્નોર્કલિંગ', 'બીચ ટાઇમ', 'સૂર્યાસ્ત'],
    tip: 'સાનુર પાછી જતી છેલ્લી ફાસ્ટ બોટ સાંજે ૫ વાગ્યે નીકળે છે — એલાર્મ મૂકી દો.',
    stay: 'ફેરફિલ્ડ લેજિયન',
  },

  /* ------------------------------- DAY 4 -------------------------------- */
  {
    id: 'uluwatu-temple',
    day: 'દિવસ ૪',
    date: 'બુધ, ૧૮ નવે',
    category: 'મંદિરો',
    title: 'ઉલુવાતુ મંદિર',
    location: 'પેચાતુ, બાદુંગ',
    time: 'સવારે ૧૦:૦૦',
    description:
      'સર્ફથી ૭૦ મીટર ઊંચે બેઠેલું સમુદ્ર મંદિર. ભેખડ પરના પથ, શરારતી વાંદરાઓ અને હિંદ મહાસાગરનું વિશાળ ભૂરું રંગમંચ.',
    imageUrl: image10,
    highlights: ['ભેખડ પર મંદિર', 'મહાસાગરના દૃશ્યો', 'સારંગ મળશે'],
    tip: 'સનગ્લાસ અને ફોન પકડી રાખો — વાંદરાઓ મોહક છે અને અતિ ઝડપી પણ.',
    stay: 'ઉબુદ જવાનું',
  },
  {
    id: 'padang-padang-beach',
    day: 'દિવસ ૪',
    date: 'બુધ, ૧૮ નવે',
    category: 'ટાપુ અને બીચ',
    title: 'પદાંગ પદાંગ બીચ',
    location: 'પેચાતુ, બાદુંગ',
    time: 'બપોરે ૧:૦૦',
    description:
      'ચૂનાના ખડકો વચ્ચે છૂપાયેલી નાની સર્ફર્સની ખાડી — સાંકળા ખડક માર્ગમાંથી પસાર થઈને મુલાયમ રેતી અને ગરમ પાણીમાં નીકળો.',
    imageUrl: image11,
    highlights: ['છૂપી ખાડી', 'તરવું', 'સર્ફ એહેવાલ'],
    tip: 'પાર્કિંગ સાંકડું છે; સવારના સર્ફર્સની ભીડ ઓછી થાય પછી બપોરે શરૂઆતમાં જાઓ.',
    stay: 'ઉબુદ જવાનું',
  },
  {
    id: 'tanah-lot-temple',
    day: 'દિવસ ૪',
    date: 'બુધ, ૧૮ નવે',
    category: 'મંદિરો',
    title: 'તનાહ લોટ મંદિર',
    location: 'તબાનન, બાલી',
    time: 'સાંજે ૫:૩૦',
    description:
      'બાલીનો સૌથી સિનેમેટિક સૂર્યાસ્ત. સમુદ્ર મંદિર ભરતીના ખડક પર બેઠું છે, સોનેરી પ્રકાશ અને કિનારે ઊભેલા લોકોની છાયાઓથી ઘેરાયેલું.',
    imageUrl: image12,
    highlights: ['સૂર્યાસ્તનું પ્રતીક', 'સમુદ્ર મંદિર', 'રાતનું બજાર'],
    tip: 'સૂર્યાસ્તના ૪૫ મિનિટ પહેલાં પહોંચો, પછી પાછા ફરતાં સ્મારક સ્ટોલ જોઈ લો.',
    stay: 'દાનાખા ઉબુદ',
  },

  /* ------------------------------- DAY 5 -------------------------------- */
  {
    id: 'bedugul-temple',
    day: 'દિવસ ૫',
    date: 'ગુરુ, ૧૯ નવે',
    category: 'મંદિરો',
    title: 'બેદુગુલ મંદિર',
    location: 'ઉલુન દાનુ બેરાતાન, બેદુગુલ',
    time: 'સવારે ૯:૦૦',
    description:
      'ઉલુન દાનુ બેરાતાન સરોવરના શાંત, ઠંડા પાણી પર તરતું લાગે છે. સવારનું ધુમ્મસ, પહાડી હવા અને સરોવરમાં પ્રતિબિંબિત મેરુ શિખરો.',
    imageUrl:
      '/images/bedugul-temple.jpg',
    highlights: ['સરોવર મંદિર', 'ધુમ્મસભરી સવાર', 'પહાડી હવા'],
    tip: 'ઉચ્ચ પ્રદેશ ૮–૧૦°C ઠંડો હોય છે. વહેલી સવાર માટે હળવું જેકેટ લાવો.',
    stay: 'દાનાખા ઉબુદ',
  },
  {
    id: 'handara-gate',
    day: 'દિવસ ૫',
    date: 'ગુરુ, ૧૯ નવે',
    category: 'પ્રકૃતિ અને સંસ્કૃતિ',
    title: 'હંદારા ગેટ',
    location: 'બેદુગુલ, બુલેલેંગ',
    time: 'સવારે ૧૧:૦૦',
    description:
      'લીલા ટેકરાઓથી ઘેરાયેલું પ્રખ્યાત કેન્ડી-કેન જેવું દ્વાર. પોસ્ટકાર્ડમાં પ્રવેશ્યાની લાગણી આપતો ટૂંકો ફોટો સ્ટોપ.',
    imageUrl:
      '/images/handara-gate.jpg',
    highlights: ['ફોટો સ્ટોપ', 'બાલી દ્વાર', 'ઉચ્ચ પ્રદેશ'],
    tip: 'લાઇન ઝડપથી લાંબી થાય છે. સવારે ૧૧ પહેલાં પહોંચો અને પોઝ તૈયાર રાખો.',
    stay: 'દાનાખા ઉબુદ',
  },
  {
    id: 'kintamani',
    day: 'દિવસ ૫',
    date: 'ગુરુ, ૧૯ નવે',
    category: 'પ્રકૃતિ અને સંસ્કૃતિ',
    title: 'કિંતામણિ',
    location: 'માઉન્ટ બાતુર, બાંગલી',
    time: 'બપોરે ૧:૦૦',
    description:
      'જ્વાળામુખી કાલ્ડેરાના કિનારે ભોજન. નીચે માઉન્ટ બાતુર અને તેના કાળા લાવા મેદાન ફેલાયેલા, દૂર બાતુર સરોવર ઝળકે છે.',
    imageUrl:
      '/images/kintamani.jpg',
    highlights: ['જ્વાળામુખીના દૃશ્યો', 'કાલ્ડેરા ભોજન', 'ઠંડી આબોહવા'],
    tip: 'બાતુરનું સૌથી સ્પષ્ટ દૃશ્ય અને શ્રેષ્ઠ ફોટો લાઇટ માટે પૂર્વ કિનારે આવેલી રેસ્ટોરાં પસંદ કરો.',
    stay: 'દાનાખા ઉબુદ',
  },
  {
    id: 'tegalalang-rice-terrace',
    day: 'દિવસ ૫',
    date: 'ગુરુ, ૧૯ નવે',
    category: 'પ્રકૃતિ અને સંસ્કૃતિ',
    title: 'તેગલાલાંગ ડાંગરના ખેતરો',
    location: 'તેગલાલાંગ, જિયાન્યાર',
    time: 'બપોરે ૪:૦૦',
    description:
      'જંગલની ખીણમાં થર થર લીલી ખેતરવા. પથ પર ચાલો, તાડ પર ઝૂલો અને બપોર પછીનો સોનેરી પ્રકાશ ઝીલો.',
    imageUrl:
      '/images/tegalalang-rice-terrace.jpg',
    highlights: ['ડાંગરના ખેતરો', 'ખીણમાં સફર', 'જંગલ સ્વિંગ'],
    tip: 'નીચેની ખીણ રસ્તાના વ્યુપોઇન્ટ કરતાં શાંત છે. ખેતરવાના પથ માટે નાની રોકડ લાવો.',
    stay: 'દાનાખા ઉબુદ',
  },

  /* ------------------------------- DAY 6 -------------------------------- */
  {
    id: 'tegenungan-waterfall',
    day: 'દિવસ ૬',
    date: 'શુક્ર, ૨૦ નવે',
    category: 'પ્રકૃતિ અને સંસ્કૃતિ',
    title: 'તેગેનુંગન ધોધ',
    location: 'સુકાવતી, જિયાન્યાર',
    time: 'સવારે ૮:૩૦',
    description:
      'ઉબુદથી થોડા અંતરે જંગલમાં પહોળો ધોધ. ગરમી અને ભીડ પહેલાં વહેલા પગથિયાં ઉતરો અને ખડકો પરથી ફેલાતો છંટકાવ અનુભવો.',
    imageUrl:
      '/images/tegenungan-waterfall.jpg',
    highlights: ['ધોધ', 'સવારે સ્નાન', 'જંગલ'],
    tip: 'પગથિયાં ઢોળાવવાળાં અને લપસણાં છે — પકડ સારી મળે એવા બૂટ પાછા ચઢવાનું સહેલું કરે છે.',
    stay: 'દાનાખા ઉબુદ',
  },
  {
    id: 'ubud-art-market',
    day: 'દિવસ ૬',
    date: 'શુક્ર, ૨૦ નવે',
    category: 'પ્રકૃતિ અને સંસ્કૃતિ',
    title: 'ઉબુદ આર્ટ માર્કેટ',
    location: 'ઉબુદ કેન્દ્ર, જિયાન્યાર',
    time: 'સવારે ૧૧:૩૦',
    description:
      'મહેલ પાછળના સ્ટોલના ભુલભુલામણાંમાં વણાયેલી બેગ, લાકડાની કોતરણી અને બાટિક. ધીમે ધીમે જુઓ, સ્મિત સાથે ભાવતાલ કરો, પછી જાલાન હનોમન પર કોફી શોધો.',
    imageUrl:
      '/images/ubud-art-market.jpg',
    highlights: ['સ્થાનિક હસ્તકલા', 'બાટિક', 'કોફી સ્ટોપ'],
    tip: 'માંગેલા ભાવથી અડધાથી શરૂ કરો અને મિત્રતાપૂર્વક રાખો — એ રીતનો જ ભાગ છે.',
    stay: 'દાનાખા ઉબુદ',
  },
  {
    id: 'bali-desa-swing',
    day: 'દિવસ ૬',
    date: 'શુક્ર, ૨૦ નવે',
    category: 'વોટર સ્પોર્ટ્સ અને રાઇડ્સ',
    title: 'બાલી દેસા સ્વિંગ',
    location: 'તેગલાલાંગ, જિયાન્યાર',
    time: 'બપોરે ૨:૦૦',
    description:
      'તમે જેના માટે આવ્યા છો એ ફોટો: તાડથી ભરેલી ખીણ પર જંગલ સ્વિંગ, કેમેરા રોલ પહેલેથી ચાલુ. સેફ્ટી હાર્નેસ, નાટકીય બેકડ્રોપ, શૂન્ય ઠંડક.',
    imageUrl:
      '/images/bali-desa-swing.jpg',
    highlights: ['જંગલ સ્વિંગ', 'ફોટો પેકેજ', 'એડ્રિનાલિન'],
    tip: 'ફોટો પેકેજ પહેલાં જ માંગી લો — સ્થળ પરના ફોટોગ્રાફરોને શ્રેષ્ઠ એંગલ ખબર છે.',
    stay: 'દાનાખા ઉબુદ',
  },
  {
    id: 'atv-ride',
    day: 'દિવસ ૬',
    date: 'શુક્ર, ૨૦ નવે',
    category: 'વોટર સ્પોર્ટ્સ અને રાઇડ્સ',
    title: 'એટીવી રાઇડ',
    location: 'પાયાંગન, જિયાન્યાર',
    time: 'બપોરે ૪:૦૦',
    description:
      'કાદવ, નદી પાર કરવાના રસ્તા અને સાંકળા જંગલ ટ્રેક પર ગાઇડેડ ક્વોડ-બાઇક લૂપ. ઉબુદમાં ધીમા છેલ્લા વિલાસ ભોજન પહેલાંનો સાહસિક અંત.',
    imageUrl:
      '/images/atv-ride.jpg',
    highlights: ['ક્વોડ બાઇકિંગ', 'જંગલ ટ્રેક', '૨ કલાક'],
    tip: 'સારા કપડાં હોટેલમાં જ રાખો અને બદલવા માટે પૂરો સેટ લાવો. તમે કાદવવાળા થશો જ.',
    stay: 'દાનાખા ઉબુદ',
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
