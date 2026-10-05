import type { Faq as FaqT } from "@/lib/data";
import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/schema";

export default function Faq({ faqs, title = "Frequently Asked Questions" }: { faqs: FaqT[]; title?: string }) {
  return (
    <section id="faq">
      <div className="wrap">
        <h2 className="rv">{title}</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
