// Replace this with your actual Google Analytics Measurement ID (e.g., "G-1234567890")
export const GA_TRACKING_ID =  "G-3VRXJF2SL0";
// export const GA_TRACKING_ID =  process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// Fire specific custom events to Google Analytics
export const trackEvent = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
