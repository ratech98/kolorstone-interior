"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";

export default function ContactForm({ defaultLocation = "" }: { defaultLocation?: string }) {
  const pathname = usePathname();
  const [state, setState] = useState<{ kind: "idle" | "ok" | "err"; text: string }>({ kind: "idle", text: "" });
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (!String(fd.get("name") || "").trim() || !String(fd.get("phone") || "").trim()) {
      setState({ kind: "err", text: "Please enter your name and phone number." });
      return;
    }
    if (SITE.formspree.includes("YOUR_")) {
      setState({ kind: "err", text: "Form is not connected yet. Set NEXT_PUBLIC_FORMSPREE_URL." });
      return;
    }
    setSending(true);
    try {
      const r = await fetch(SITE.formspree, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (!r.ok) throw new Error("bad");
      form.reset();
      setState({ kind: "ok", text: "Thank you. Your enquiry has been sent and we will contact you soon." });
    } catch {
      setState({ kind: "err", text: "Your enquiry could not be sent. Please try again, or message us on WhatsApp." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form id="form" noValidate className="rv" onSubmit={onSubmit}>
      <input className="hp" name="_gotcha" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="source_page" value={pathname} />
      <div className="f half"><label htmlFor="n">Full Name</label><input id="n" name="name" required autoComplete="name" /></div>
      <div className="half"><label htmlFor="p">Phone Number</label><input id="p" name="phone" type="tel" required autoComplete="tel" /></div>
      <div className="half"><label htmlFor="e">Email</label><input id="e" name="email" type="email" autoComplete="email" /></div>
      <div className="half">
        <label htmlFor="t">Project Type</label>
        <select id="t" name="project_type">
          {["Residential", "Commercial", "Office", "Kitchen", "Bedroom", "Other"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="half"><label htmlFor="l">Location</label><input id="l" name="location" defaultValue={defaultLocation} /></div>
      <div className="half"><label htmlFor="b">Approximate Budget</label><input id="b" name="budget" placeholder="e.g. ₹10–15 lakh" /></div>
      <div className="half"><label htmlFor="d">Preferred Contact Date</label><input id="d" name="contact_date" type="date" /></div>
      <div className="f"><label htmlFor="m">Message</label><textarea id="m" name="message" /></div>
      <div className="f"><button className="btn fill" type="submit" disabled={sending}>{sending ? "Sending…" : "Send Enquiry"}</button></div>
      <div className={`msg${state.kind === "ok" ? " ok" : state.kind === "err" ? " err" : ""}`} role="status">{state.text}</div>
    </form>
  );
}
