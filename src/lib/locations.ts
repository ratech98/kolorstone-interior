export type Location = {
  slug: string;
  name: string;
  alt?: string; // alternate name people search for
  district: string;
  intro: string; // unique opening paragraph
  context: string; // unique local-context paragraph
  areas: string[]; // neighbourhoods / nearby towns covered
  nearby: string[]; // slugs for internal linking
};

/**
 * Each page gets unique copy. Before launch, add real details per town
 * (completed projects, local landmarks, client stories) so every page stays genuinely distinct.
 */
export const LOCATIONS: Location[] = [
  {
    slug: "thanjavur", name: "Thanjavur", alt: "Tanjore", district: "Thanjavur",
    intro: "Kolorstones Home Interiors is based in Nanjikottai, Thanjavur, so our design team is right here for site visits, measurements and on-site supervision. We design homes, modular kitchens and workplaces for families and businesses across the city.",
    context: "Thanjavur homes often balance a love of tradition with the need for modern storage, light and easy upkeep. We design interiors that respect that balance: warm timber, practical joinery, and finishes chosen for the local climate, with space planned around festivals, family gatherings and everyday routines.",
    areas: ["Nanjikottai", "Medical College Road", "Srinivasapuram", "Vallam", "Thanjavur town and surrounding villages"],
    nearby: ["vallam", "orathanadu", "thiruvaiyaru", "kumbakonam", "trichy"],
  },
  {
    slug: "trichy", name: "Trichy", alt: "Tiruchirappalli", district: "Tiruchirappalli",
    intro: "Looking for interior designers in Trichy (Tiruchirappalli)? Kolorstones designs and executes residential and commercial interiors for clients in Trichy, working from our Thanjavur studio with regular site visits.",
    context: "Trichy has a mix of independent houses, apartments and growing commercial areas, and each calls for a different approach. For apartments we focus on space-saving layouts and smart storage; for independent homes we plan full interiors from living areas to kitchens and bedrooms; for offices and shops we design around workflow and customers.",
    areas: ["Srirangam", "Thillai Nagar", "KK Nagar", "Woraiyur", "Ponmalai", "Cantonment", "Tennur"],
    nearby: ["thanjavur", "pudukkottai", "karur", "perambalur", "ariyalur"],
  },
  {
    slug: "kumbakonam", name: "Kumbakonam", district: "Thanjavur",
    intro: "Kolorstones designs homes, kitchens and commercial interiors in Kumbakonam, combining thoughtful planning with clean, durable finishes.",
    context: "Kumbakonam is known for its temples, traditional houses and strong craft heritage. Many families here are renovating older homes or building new ones that still feel rooted. We help you decide what to keep, what to modernise and how to add storage and modular work without losing the character of the house.",
    areas: ["Kumbakonam town", "Swamimalai", "Darasuram", "Thiruvidaimarudur", "Surrounding villages"],
    nearby: ["thanjavur", "mayiladuthurai", "thiruvaiyaru", "ariyalur"],
  },
  {
    slug: "pattukkottai", name: "Pattukkottai", district: "Thanjavur",
    intro: "Kolorstones offers complete interior design and execution for homes and shops in Pattukkottai, from the first consultation through to final handover.",
    context: "For growing families and new home owners in Pattukkottai, the priority is usually generous storage, a practical kitchen and finishes that last. We plan around how you live, then manage material selection and execution so that you are not coordinating several vendors.",
    areas: ["Pattukkottai town", "Adirampattinam", "Madukkur", "Peravurani", "Nearby villages"],
    nearby: ["thanjavur", "mannargudi", "orathanadu", "pudukkottai"],
  },
  {
    slug: "mannargudi", name: "Mannargudi", district: "Tiruvarur",
    intro: "Planning a new home or renovation in Mannargudi? Kolorstones brings design, material selection and on-site execution from a single team.",
    context: "We start with a site visit to understand your plot, light and ventilation, then design living, dining, kitchen and bedroom interiors that suit your budget and routine. Modular kitchens and built-in wardrobes are among the most common requests we plan for.",
    areas: ["Mannargudi town", "Needamangalam", "Thiruthuraipoondi", "Nearby villages"],
    nearby: ["tiruvarur", "pattukkottai", "thanjavur", "mayiladuthurai"],
  },
  {
    slug: "pudukkottai", name: "Pudukkottai", district: "Pudukkottai",
    intro: "Kolorstones designs residential and commercial interiors for clients in Pudukkottai, with a clear process, transparent communication and careful execution.",
    context: "Whether you are furnishing a new independent house or reworking an existing one, we begin with your requirements and budget, propose a layout and material palette, and then execute to that plan so what you approve is what you get.",
    areas: ["Pudukkottai town", "Aranthangi", "Alangudi", "Nearby villages"],
    nearby: ["trichy", "thanjavur", "pattukkottai", "karur"],
  },
  {
    slug: "tiruvarur", name: "Tiruvarur", district: "Tiruvarur",
    intro: "Kolorstones provides interior design for homes, kitchens and workplaces in Tiruvarur, delivered end to end by one accountable team.",
    context: "We focus on practical layouts, good natural light and storage that suits daily family life. From a modular kitchen to a complete home, we guide you through each step so decisions are clear and the work stays on plan.",
    areas: ["Tiruvarur town", "Nannilam", "Kodavasal", "Nearby villages"],
    nearby: ["mannargudi", "mayiladuthurai", "kumbakonam", "thanjavur"],
  },
  {
    slug: "mayiladuthurai", name: "Mayiladuthurai", alt: "Mayiladuthurai (Mayavaram)", district: "Mayiladuthurai",
    intro: "Kolorstones works with home owners and businesses in Mayiladuthurai to design interiors that are comfortable, functional and built to last.",
    context: "We listen first, then plan. A site visit and consultation shape the layout, materials and finishes, and our turnkey execution means the design you approve is the space you move into.",
    areas: ["Mayiladuthurai town", "Sirkazhi", "Kuthalam", "Nearby villages"],
    nearby: ["kumbakonam", "tiruvarur", "thanjavur"],
  },
  {
    slug: "karur", name: "Karur", district: "Karur",
    intro: "Kolorstones designs residential and commercial interiors for clients in Karur, including offices, showrooms and family homes.",
    context: "Karur's business community often needs workplaces and showrooms that look professional and work hard every day. We plan commercial interiors around workflow and customer experience, and residential interiors around family life, with execution handled by our team.",
    areas: ["Karur town", "Kulithalai", "Aravakurichi", "Nearby villages"],
    nearby: ["trichy", "pudukkottai", "perambalur", "thanjavur"],
  },
  {
    slug: "perambalur", name: "Perambalur", district: "Perambalur",
    intro: "Kolorstones offers end-to-end interior design for homes and workplaces in Perambalur, from planning to handover.",
    context: "We begin with a consultation to understand how you use your space, then develop a concept, finalise materials with you, and execute the work on site with clear communication throughout.",
    areas: ["Perambalur town", "Veppanthattai", "Kunnam", "Nearby villages"],
    nearby: ["trichy", "ariyalur", "karur"],
  },
  {
    slug: "ariyalur", name: "Ariyalur", district: "Ariyalur",
    intro: "Kolorstones designs interiors for homes, kitchens and commercial spaces in Ariyalur with a transparent, step-by-step process.",
    context: "From the first site visit to the final handover, you will know what is happening and what comes next. We keep the design practical, the finishes durable and the communication clear.",
    areas: ["Ariyalur town", "Jayankondam", "Udayarpalayam", "Nearby villages"],
    nearby: ["trichy", "perambalur", "kumbakonam", "thanjavur"],
  },
  {
    slug: "thiruvaiyaru", name: "Thiruvaiyaru", district: "Thanjavur",
    intro: "Kolorstones designs and executes interiors for homes in Thiruvaiyaru and the surrounding Cauvery belt, with regular site supervision from our Thanjavur studio.",
    context: "We help families plan living areas, kitchens and bedrooms that make the most of the available space, with storage and finishes chosen to be practical and long lasting.",
    areas: ["Thiruvaiyaru town", "Thirukkattupalli", "Kandiyur", "Nearby villages"],
    nearby: ["thanjavur", "kumbakonam", "trichy", "orathanadu"],
  },
  {
    slug: "orathanadu", name: "Orathanadu", district: "Thanjavur",
    intro: "Kolorstones provides interior design and turnkey execution for homes in Orathanadu and nearby villages.",
    context: "New houses and renovations both benefit from a clear plan. We prepare layouts and material choices with you, then manage the execution so the project stays organised from start to finish.",
    areas: ["Orathanadu town", "Nearby villages"],
    nearby: ["thanjavur", "pattukkottai", "mannargudi", "vallam"],
  },
  {
    slug: "vallam", name: "Vallam", district: "Thanjavur",
    intro: "Kolorstones is close to Vallam and designs homes and workspaces for clients in and around the area.",
    context: "Being near our Nanjikottai studio means quick site visits and easy coordination. We design practical, good-looking interiors and take responsibility for execution through to handover.",
    areas: ["Vallam", "Nanjikottai", "Nearby villages"],
    nearby: ["thanjavur", "orathanadu", "pudukkottai", "trichy"],
  },
  {
    slug: "ayyampettai", name: "Ayyampettai", district: "Thanjavur",
    intro: "Kolorstones Home Interiors designs and executes custom residential and commercial interiors in Ayyampettai and nearby Cauvery delta neighbourhoods.",
    context: "Conveniently accessible from our studio, Ayyampettai homes blend classic delta architecture with modern modular living. We specialize in tailored modular kitchens, durable bedroom wardrobes, custom pooja spaces, and elegant living room makeovers designed for durability and daily comfort.",
    areas: ["Ayyampettai town", "Pasupathikoil", "Chakkarapalli", "Thiruvaiyaru Road", "Nearby panchayats"],
    nearby: ["thanjavur", "kumbakonam", "thiruvaiyaru", "vallam"],
  },
];

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);
