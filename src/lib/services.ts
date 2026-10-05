import type { Faq } from "./data";

export type Service = {
  slug: string; name: string; title: string; summary: string; intro: string;
  includes: string[]; faqs: Faq[];
};

export const SERVICES: Service[] = [
  {
    slug: "residential-interiors", name: "Residential Interiors", title: "Residential Interior Design",
    summary: "Complete home interiors designed around your family, routines and taste.",
    intro: "From a single room to a full home, we design living rooms, bedrooms, dining areas and more so that every space is comfortable, practical and personal.",
    includes: ["Living room, bedroom and dining design", "Wardrobes, TV units and custom joinery", "False ceiling and lighting plans", "Colour, material and furniture selection", "On-site execution and final handover"],
    faqs: [
      { q: "Do you design a single room or only full homes?", a: "Both. We can design one room, a few key areas or the entire home, depending on what you need." },
      { q: "Can you work with a home I am renovating?", a: "Yes. We begin with a site visit, then plan what to retain, what to change and how to add storage and finishes." },
    ],
  },
  {
    slug: "modular-kitchens", name: "Modular Kitchens", title: "Modular Kitchen Design",
    summary: "Clean, practical modular kitchens planned for daily cooking and storage.",
    intro: "A good kitchen is planned around how you cook. We design layouts, storage and finishes that make daily work easier and keep the space tidy.",
    includes: ["Layout planning around your cooking style", "Handle-less and conventional cabinetry", "Storage, pull-outs and utility planning", "Countertop, backsplash and finish selection", "Installation and handover"],
    faqs: [
      { q: "How do you plan a modular kitchen layout?", a: "We study the room, your cooking routine and appliance needs, then propose a layout that keeps work zones efficient and storage easy to reach." },
      { q: "Can I choose the materials and finishes?", a: "Yes. We guide you through options and finalise materials with you before execution begins." },
    ],
  },
  {
    slug: "office-commercial-interiors", name: "Office & Commercial", title: "Office & Commercial Interior Design",
    summary: "Offices, showrooms and retail spaces that look professional and work hard.",
    intro: "We design workplaces and shops around workflow, brand and the people who use them, from small offices to retail interiors.",
    includes: ["Space planning for teams and workflow", "Reception, cabins and meeting areas", "Retail and showroom layouts", "Lighting, branding and display planning", "Execution coordinated by one team"],
    faqs: [
      { q: "Do you design shops and showrooms as well as offices?", a: "Yes. We design both workplace and retail interiors, planning layouts around workflow, product display and customer movement." },
      { q: "Can you work around our business schedule?", a: "We plan the execution schedule with you so disruption to your operations is kept as low as possible." },
    ],
  },
  {
    slug: "turnkey-interior-execution", name: "Turnkey Execution", title: "Turnkey Interior Execution",
    summary: "One team for design, material selection and execution through to handover.",
    intro: "With turnkey execution you deal with one accountable team from the first idea to the day you move in, instead of coordinating many vendors.",
    includes: ["Design and detailed planning", "Material selection and procurement guidance", "Site execution and supervision", "Quality checks along the way", "Final handover"],
    faqs: [
      { q: "What does turnkey interior work mean?", a: "It means we handle the full project: design, materials, execution and handover, so you have a single point of contact." },
      { q: "Will I be kept informed during execution?", a: "Yes. Clear communication is part of our process, so you know the progress and what comes next." },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
