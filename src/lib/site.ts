/* ============ EDIT THIS FILE ============ */
export const SITE = {
  name: "Kolorstones Home Interiors",
  shortName: "Kolorstones",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com").replace(/\/$/, ""),
  description:
    "Kolorstones Home Interiors is a Thanjavur interior design studio creating homes and workplaces that balance function, craft and personal style.",
  whatsapp: "919159115197", // digits only with country code
  whatsappMessage: "Hi, I would like to enquire about your interior design services.",
  instagram:
    "https://www.instagram.com/kolorstones_home_interiors?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  formspree: process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/xrpgwjpl",
  email: "", // add your real email; it is hidden everywhere while empty
  phone: "+919159115197",
  phoneDisplay: "+91 91591 15197",
  address: {
    street: "21, Thiyagi velu nagar, Madhakottai, Panchayat, Nanjikottai",
    city: "Thanjavur",
    region: "Tamil Nadu",
    postalCode: "613007",
    country: "IN",
  },
  // From Google Maps: right-click your studio pin -> first line gives "lat, lng". Strongly recommended.
  geo: null as null | { lat: number; lng: number },
  // Your Google Business Profile / Maps share link. Strongly recommended (feeds schema `hasMap`).
  googleMapsUrl: "",
  // e.g. ["Mo-Sa 09:30-19:00"]. Leave empty until confirmed.
  openingHours: [] as string[],
  heroImage: "photo-1600210492486-724fe5c67fb0",
  services: ["Residential Interiors", "Modular Kitchens", "Office & Commercial", "Turnkey Execution"],
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  lastUpdated: "2026-10-05",
};

export const unsplash = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const abs = (path = "/") => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
export const fullAddress = () =>
  `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`;
