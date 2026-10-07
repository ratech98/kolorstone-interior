"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";

export default function ContactForm({ defaultLocation = "" }: { defaultLocation?: string }) {
  const pathname = usePathname();
  const [state, setState] = useState<{ kind: "idle" | "ok" | "err"; text: string }>({ kind: "idle", text: "" });
  const [sending, setSending] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");

  // Field-level validation state
  const [errors, setErrors] = useState<{name?: string; phone?: string}>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    
    const newErrors: {name?: string; phone?: string} = {};
    if (!name) newErrors.name = "Name is required";
    if (!phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Enter a valid 10-digit phone number";

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      setState({ kind: "err", text: "Please fix the errors above." });
      return;
    }

    if (SITE.formspree.includes("YOUR_")) {
      setState({ kind: "err", text: "Form is not connected yet." });
      return;
    }
    setSending(true);
    try {
      const r = await fetch(SITE.formspree, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (!r.ok) throw new Error("bad");
      form.reset();
      setPhoneValue("");
      setErrors({});
      setState({ kind: "ok", text: "Thank you! Your enquiry has been sent." });
    } catch {
      setState({ kind: "err", text: "Could not send enquiry. Please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form id="form" noValidate className="w-full font-satoshi flex flex-col gap-6 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-[#14120f]/5 border border-gray-100" onSubmit={onSubmit} suppressHydrationWarning>
      <div className="flex flex-col gap-1.5 h-0 overflow-hidden opacity-0" aria-hidden="true">
        <input name="_gotcha" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="source_page" value={pathname} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="n" className="text-[15px] font-semibold text-[#14120f]">Full Name *</label>
          <input id="n" name="name" required autoComplete="name" className={`w-full px-4 py-3.5 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-[#f3f3f3]/50'} focus:outline-none focus:border-[#3F6A80] focus:ring-1 focus:ring-[#3F6A80] transition-colors`} placeholder="Enter your full name" />
          <div className="h-5 text-xs text-red-500 font-medium px-1">{errors.name}</div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="p" className="text-[15px] font-semibold text-[#14120f]">Phone Number *</label>
          <input id="p" name="phone" type="tel" required autoComplete="tel" maxLength={10} value={phoneValue} onChange={(e) => { setPhoneValue(e.target.value.replace(/\D/g, '')); }} className={`w-full px-4 py-3.5 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-[#f3f3f3]/50'} focus:outline-none focus:border-[#3F6A80] focus:ring-1 focus:ring-[#3F6A80] transition-colors`} placeholder="e.g. 9876543210" />
          <div className="h-5 text-xs text-red-500 font-medium px-1">{errors.phone}</div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="e" className="text-[15px] font-semibold text-[#14120f]">Email</label>
          <input id="e" name="email" type="email" autoComplete="email" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f3f3f3]/50 focus:outline-none focus:border-[#3F6A80] focus:ring-1 focus:ring-[#3F6A80] transition-colors" placeholder="your@email.com" />
          <div className="h-5"></div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="t" className="text-[15px] font-semibold text-[#14120f]">Project Type</label>
          <select id="t" name="project_type" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f3f3f3]/50 focus:outline-none focus:border-[#3F6A80] focus:ring-1 focus:ring-[#3F6A80] transition-colors cursor-pointer">
            {["Residential", "Commercial", "Office", "Kitchen", "Bedroom", "Other"].map((o) => <option key={o}>{o}</option>)}
          </select>
          <div className="h-5"></div>
        </div>
      </div>

      <div className="flex flex-col gap-2 -mt-2">
        <label htmlFor="m" className="text-[15px] font-semibold text-[#14120f]">Message</label>
        <textarea id="m" name="message" rows={4} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f3f3f3]/50 focus:outline-none focus:border-[#3F6A80] focus:ring-1 focus:ring-[#3F6A80] transition-colors resize-none" placeholder="Tell us about your project requirements..." />
      </div>

      {/* Fixed height container for form-level messages to prevent layout jump */}
      <div className="h-6 flex items-center justify-center mt-2">
        {state.kind !== "idle" && (
          <p className={`text-sm font-semibold ${state.kind === "ok" ? "text-green-600" : "text-red-500"}`}>
            {state.text}
          </p>
        )}
      </div>

      <button type="submit" disabled={sending} className="w-full bg-[#3F6A80] hover:bg-[#2c4b5b] text-white text-[16px] tracking-wide font-semibold py-4 rounded-xl transition-all shadow-lg shadow-[#3F6A80]/20 hover:shadow-[#3F6A80]/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none">
        {sending ? "Sending Details..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
