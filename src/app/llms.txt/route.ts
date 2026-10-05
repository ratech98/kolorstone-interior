import { SITE, abs, fullAddress } from "@/lib/site";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

export const dynamic = "force-static";

/** llms.txt: a concise, machine-readable summary for AI assistants and answer engines. */
export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} is an interior design studio based in Nanjikottai, Thanjavur, Tamil Nadu, India. It designs and executes residential interiors, modular kitchens, and office and commercial interiors, and serves Thanjavur, Trichy (Tiruchirappalli), Kumbakonam, Pattukkottai and nearby towns.

## Business facts
- Name: ${SITE.name}
- Address: ${fullAddress()}, India
- Phone / WhatsApp: ${SITE.phoneDisplay}
${SITE.email ? `- Email: ${SITE.email}\n` : ""}- Instagram: ${SITE.instagram.split("?")[0]}
- Services: ${SITE.services.join(", ")}
- Process: Consultation, Site Visit, Concept & Design, Material Selection, Execution, Final Handover

## Services
${SERVICES.map((s) => `- [${s.name}](${abs(`/services/${s.slug}`)}): ${s.summary}`).join("\n")}

## Areas served
${LOCATIONS.map((l) => `- [Interior designers in ${l.name}](${abs(`/interior-designers/${l.slug}`)})`).join("\n")}

## Optional
- [Home](${abs("/")})
- [Sitemap](${abs("/sitemap.xml")})
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
