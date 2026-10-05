import { unsplash as U } from "./site";

export type Project = {
  name: string; place: string; style: string; cat: string; desc: string; imgs: string[]; alt: string;
};

/* Replace each Unsplash id with your own photo. First image is the card cover. */
export const PROJECTS: Project[] = [
  { name: "Modern Minimalist Residence", place: "Thanjavur", style: "Contemporary • Residential", cat: "Living Room", desc: "A calm, light-filled living space with warm timber and soft textures.", imgs: [U("photo-1600210492486-724fe5c67fb0"), U("photo-1618221195710-dd6b41faaea6"), U("photo-1600585154340-be6161a56a0c")], alt: "Modern minimalist living room interior in Thanjavur" },
  { name: "The Quiet Suite", place: "Trichy", style: "Warm Modern • Residential", cat: "Bedroom", desc: "A restful master bedroom layered in neutral tones and tactile fabrics.", imgs: [U("photo-1616594039964-ae9021a400a0"), U("photo-1505693416388-ac5ce068fe85"), U("photo-1540518614846-7eded433c457")], alt: "Neutral master bedroom interior in Trichy" },
  { name: "Handle-less Kitchen", place: "Kumbakonam", style: "Minimal • Residential", cat: "Kitchen", desc: "A clean modular kitchen planned for daily cooking and effortless storage.", imgs: [U("photo-1556909114-f6e7ad7d3136"), U("photo-1600585152220-90363fe7e115"), U("photo-1565538810643-b5bdb714032a")], alt: "Modern modular kitchen in Kumbakonam" },
  { name: "Family Dining Hall", place: "Thanjavur", style: "Classic Contemporary • Residential", cat: "Dining Area", desc: "A generous dining area built for long meals and festive gatherings.", imgs: [U("photo-1617806118233-18e1de247200"), U("photo-1600566753086-00f18fb6b3ea"), U("photo-1615529182904-14819c35db37")], alt: "Elegant dining area interior" },
  { name: "Studio Workspace", place: "Chennai", style: "Modern • Office", cat: "Office", desc: "A focused, well-lit workplace that supports concentration and collaboration.", imgs: [U("photo-1497366216548-37526070297c"), U("photo-1524758631624-e2822e304c36"), U("photo-1497366811353-6870744d04b2")], alt: "Modern office interior design" },
  { name: "The Gold Residence", place: "Coimbatore", style: "Luxury • Residential", cat: "Luxury Interior", desc: "Rich materials, brass detailing and custom joinery throughout a premium home.", imgs: [U("photo-1618219908412-a29a1bb7b86e"), U("photo-1600607687939-ce8a6c25118c"), U("photo-1600566752355-35792bedcfea")], alt: "Luxury home interior with gold accents" },
  { name: "Boutique Retail Space", place: "Madurai", style: "Contemporary • Commercial", cat: "Commercial Interior", desc: "A branded retail interior designed to showcase product and guide the customer.", imgs: [U("photo-1604014237800-1c9102c219da"), U("photo-1441986300917-64674bd600d8"), U("photo-1567401893414-76b7b1e5a7a5")], alt: "Boutique commercial interior" },
];

export const WHY: [string, string, string][] = [
  ["Personalized Design", "Every space is designed around your lifestyle, taste and requirements.", "M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z"],
  ["Attention to Detail", "We focus on the details that transform an ordinary space into something exceptional.", "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5"],
  ["Quality Materials", "We work with carefully selected materials and finishes.", "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5"],
  ["End-to-End Service", "From concept and planning to execution, we guide you through the process.", "M4 12h16M14 6l6 6-6 6"],
  ["Transparent Process", "Clear communication and planning throughout your project.", "M4 5h16v11H8l-4 4V5z"],
  ["Experienced Team", "A creative team focused on delivering functional and beautiful spaces.", "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M17 11a2.5 2.5 0 1 0 0-5M17 14c2.5 0 4 2 4 5"],
];

export const STEPS = ["Consultation", "Site Visit", "Concept & Design", "Material Selection", "Execution", "Final Handover"];

export type Review = { name: string; type: string; stars: number; text: string };
/**
 * Add REAL client reviews here, e.g.
 * { name: "R. Priya", type: "Residential Interior Client", stars: 5, text: "..." }
 * The reviews section stays hidden while this list is empty (placeholder text hurts SEO and trust).
 */
export const REVIEWS: Review[] = [];

export const INSTA = [
  "photo-1600210492486-724fe5c67fb0", "photo-1556909114-f6e7ad7d3136", "photo-1616594039964-ae9021a400a0",
  "photo-1618219908412-a29a1bb7b86e", "photo-1497366216548-37526070297c", "photo-1617806118233-18e1de247200",
];

export type Faq = { q: string; a: string };
export const HOME_FAQS: Faq[] = [
  { q: "Which areas do you serve for interior design?", a: "Our studio is in Nanjikottai, Thanjavur, and we design and execute interiors across Thanjavur, Trichy (Tiruchirappalli), Kumbakonam, Pattukkottai, Mannargudi, Pudukkottai, Tiruvarur, Mayiladuthurai, Karur, Perambalur, Ariyalur and nearby towns." },
  { q: "What interior design services do you offer?", a: "We offer residential interiors, modular kitchens, office and commercial interiors, and turnkey execution that covers design, material selection and on-site work through to handover." },
  { q: "How does an interior design project with Kolorstones begin?", a: "It starts with a consultation and a site visit. We then prepare the concept and design, finalise materials with you, execute the work and complete a final handover." },
  { q: "Can I get a quote before committing?", a: "Yes. Share your space, requirements and approximate budget through the enquiry form or WhatsApp, and we will get back to you with the next steps." },
  { q: "Do you handle both design and execution?", a: "Yes. Our turnkey service means one team looks after design, material selection and on-site execution so you are not coordinating multiple vendors." },
  { q: "How can I contact Kolorstones Home Interiors?", a: "Call or WhatsApp +91 91591 15197, use the enquiry form on this website, or message us on Instagram at @kolorstones_home_interiors." },
];
