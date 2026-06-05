import logo from '../assets/masterpiece/logo/logo2.jpeg'
import namasteProfile from '../assets/masterpiece/photos/namaste-profile.jpeg'
import ladyBossProfile from '../assets/masterpiece/optimized/lady-boss-profile.jpg'
import mapQr from '../assets/masterpiece/generated/map-qr.png'
import googleReviewQr from '../assets/masterpiece/generated/qr-google-review.png'
import whatsappQr from '../assets/masterpiece/generated/qr-whatsapp.png'
import instagramQr from '../assets/masterpiece/generated/qr-instagram.png'
import facebookQr from '../assets/masterpiece/generated/qr-facebook.png'
import tiktokQr from '../assets/masterpiece/generated/qr-tiktok.png'
import tenInOne from '../assets/masterpiece/products/ten-in-one.jpeg'
import wellFaceWash from '../assets/masterpiece/products/well10-face-wash.jpg'
import wellSunscreen from '../assets/masterpiece/products/well10-sunscreen.jpg'
import wellMoisturizer from '../assets/masterpiece/optimized/well10-moisturizer.jpg'
import wellSerum from '../assets/masterpiece/products/well10-serum.jpg'

export type Course = {
  id: string
  title: string
  duration: string
  level: string
  description: string
  highlights: string[]
}

export type ServicePage = {
  title: string
  eyebrow: string
  services: Array<{
    name: string
    detail: string
    price: string
  }>
}

export type Product = {
  id: string
  name: string
  category: string
  price: string
  previousPrice?: string
  badge: string
  image: string
}

export type ContactScan = {
  id: string
  title: string
  eyebrow: string
  description: string
  image: string
  href?: string
  actionLabel?: string
}

export const brand = {
  name: 'Masterpiece Beauty Make-up Studio & Academy',
  shortName: 'Masterpiece',
  tagline: 'Reflections of Perfections',
  phone: '+9779762256121',
  locationName: 'Tilottama-3, Shankarnagar, Sitaricemill',
  mapUrl: 'https://maps.app.goo.gl/mvgyUAmwAfCRYXyY7',
  logo,
  namasteProfile,
  ladyBossProfile,
  mapQr,
  socialLinks: {
    instagram:
      'https://www.instagram.com/mbm_studio_academy?igsh=dDV5YzRxMm94cW1p&utm_source=qr',
    tiktok: 'https://www.tiktok.com/@masterpiecebeautyhub1?_r=1&_t=ZS-96l36CxhUqP',
    facebook: 'https://www.facebook.com/share/18nD7fNWdP/?mibextid=wwXIfr',
  },
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Courses', href: '/courses' },
  { label: 'Products', href: '/products' },
  { label: 'Profile', href: '/profile' },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: '100%', label: 'Practical training' },
  { value: 'Small', label: 'Focused batches' },
  { value: 'Pro', label: 'Studio guidance' },
]

export const contactScans: ContactScan[] = [
  {
    id: 'google-review',
    title: 'Review us',
    eyebrow: 'Google',
    description: 'Scan to review Masterpiece and support the studio reputation.',
    image: googleReviewQr,
    href: brand.mapUrl,
    actionLabel: 'Open Google',
  },
  {
    id: 'whatsapp-connect',
    title: 'Connect us',
    eyebrow: 'WhatsApp',
    description: 'Scan to message the studio directly for services, products, or courses.',
    image: whatsappQr,
    actionLabel: 'Message Now',
  },
  {
    id: 'instagram-follow',
    title: 'Follow us',
    eyebrow: 'Instagram',
    description: 'Scan to see beauty work, course updates, and studio moments.',
    image: instagramQr,
    href: brand.socialLinks.instagram,
    actionLabel: 'Open Instagram',
  },
  {
    id: 'facebook-follow',
    title: 'Follow us',
    eyebrow: 'Facebook',
    description: 'Scan to follow announcements, offers, and studio updates.',
    image: facebookQr,
    href: brand.socialLinks.facebook,
    actionLabel: 'Open Facebook',
  },
  {
    id: 'tiktok-follow',
    title: 'Follow us',
    eyebrow: 'TikTok',
    description: 'Scan or tap to follow short beauty videos and academy content.',
    image: tiktokQr,
    href: brand.socialLinks.tiktok,
    actionLabel: 'Open TikTok',
  },
]

export const courses: Course[] = [
  {
    id: 'basic-beautician',
    title: 'Basic Beautician Course',
    duration: '2 to 3 months',
    level: 'Beginner friendly',
    description:
      'A practical foundation course for students starting a professional beauty career.',
    highlights: ['Threading', 'Waxing', 'Facial', 'Hair wash', 'Mehendi', 'Client consultation'],
  },
  {
    id: 'advance-beautician',
    title: 'Advance Beautician Course',
    duration: 'Fast-track learning',
    level: 'Advanced',
    description:
      'Advanced salon skills for learners who want stronger technique and professional confidence.',
    highlights: ['Hair straight', 'Keratin smoothing', 'Bridal hairstyles', 'Makeup', 'Skin analysis'],
  },
  {
    id: 'diploma-cosmetology',
    title: 'Diploma in Cosmetology',
    duration: 'Complete professional course',
    level: 'Career program',
    description:
      'A complete cosmetology pathway covering skin, hair, makeup, hygiene, and salon management.',
    highlights: ['Skin science', 'Hair science', 'Chemical treatments', 'Nail art', 'Salon management'],
  },
  {
    id: 'self-makeup',
    title: '7 Days Self Makeup Class',
    duration: '7 days',
    level: 'Personal grooming',
    description:
      'Learn everyday looks, product knowledge, skin prep, and confident self makeup routines.',
    highlights: ['Skin knowledge', 'Eyebrow shaping', 'Everyday makeup', 'Full glam', 'Product knowledge'],
  },
  {
    id: 'basic-nail',
    title: '25 Days Basic Nail Class',
    duration: '25 days',
    level: 'Nail techniques',
    description:
      'A hands-on nail class covering prep, shaping, gel polish, extensions, and basic nail art.',
    highlights: ['Nail anatomy', 'Cuticle cleaning', 'Gel polish', 'Extensions', 'Nail art'],
  },
  {
    id: 'wax-training',
    title: 'Waxing & Beauty Service Training',
    duration: 'Short course',
    level: 'Service skill',
    description:
      'Focused training for waxing and essential beauty service routines with hygiene-first practice.',
    highlights: ['Waxing hygiene', 'Full body waxing', 'Client care', 'Aftercare', 'Salon confidence'],
  },
]

export const servicePages: ServicePage[] = [
  {
    title: 'Skin & Face Rituals',
    eyebrow: 'Page 01',
    services: [
      { name: 'Threading', detail: 'Brow, face, and clean shaping', price: 'Starts from NPR 50' },
      { name: 'Clean-up', detail: 'Quick freshness for daily glow', price: 'Starts from NPR 100' },
      { name: 'Facial', detail: 'Skin-focused facial treatment', price: 'NPR 1500 to 4500' },
      { name: 'Skin treatment', detail: 'Consultation-led care plan', price: 'On consultation' },
    ],
  },
  {
    title: 'Hair Studio',
    eyebrow: 'Page 02',
    services: [
      { name: 'Haircut', detail: 'Shape, trim, and finish', price: 'Starts from NPR 300' },
      { name: 'Hair wash', detail: 'Shampoo and treatment wash', price: 'Starts from NPR 300' },
      { name: 'Hair color', detail: 'Color service with wash', price: 'NPR 2000 to 2500' },
      { name: 'Highlights', detail: 'Bleach, color, wash, blow dry', price: 'NPR 1500 to 4500' },
    ],
  },
  {
    title: 'Hair Repair',
    eyebrow: 'Page 03',
    services: [
      { name: 'Hair treatment', detail: 'Treatment, steam, wash, blow dry', price: 'NPR 700 to 2500' },
      { name: 'Keratin / Protein', detail: 'Hair health restoration', price: 'Starts from NPR 4500' },
      { name: 'Hair botox', detail: 'Smoothness and shine support', price: 'On consultation' },
      { name: 'Blow dry styling', detail: 'Soft finish for events', price: 'On consultation' },
    ],
  },
  {
    title: 'Makeup & Nails',
    eyebrow: 'Page 04',
    services: [
      { name: 'Bridal makeup', detail: 'Premium bridal-ready look', price: 'On booking' },
      { name: 'Party makeup', detail: 'Elegant event makeup', price: 'On booking' },
      { name: 'Nail care', detail: 'Manicure, pedicure, and polish', price: 'On consultation' },
      { name: 'Academy practice', detail: 'Hands-on course support', price: 'Enroll to learn' },
    ],
  },
]

export const products: Product[] = [
  {
    id: 'ten-in-one',
    name: '10 in one',
    category: 'Silk hair care',
    price: 'NPR 1350',
    previousPrice: 'NPR 1700',
    badge: 'Sale',
    image: tenInOne,
  },
  {
    id: 'well10-face-wash',
    name: 'Anti-Acne Face Wash',
    category: 'Well 10',
    price: 'NPR 1350',
    previousPrice: 'NPR 1700',
    badge: 'Sale',
    image: wellFaceWash,
  },
  {
    id: 'well10-sunscreen',
    name: 'Well 10 Sunscreen',
    category: 'Well 10',
    price: 'Inquiry',
    badge: 'Coming soon',
    image: wellSunscreen,
  },
  {
    id: 'well10-moisturizer',
    name: 'Well 10 Moisturizer',
    category: 'Well 10',
    price: 'Inquiry',
    badge: 'Preview',
    image: wellMoisturizer,
  },
  {
    id: 'well10-serum',
    name: 'Well 10 Serum',
    category: 'Well 10',
    price: 'Inquiry',
    badge: 'Preview',
    image: wellSerum,
  },
]

export const benefits = [
  'Expert trainers',
  'Hands-on practice',
  'Certificate support',
  'Small focused batches',
  'Studio hygiene',
  'Career guidance',
]

export const profileHighlights = [
  'Beauty educator and studio mentor',
  'Practical training with personal guidance',
  'Client-first approach for makeup, skin, hair, and academy learning',
]
