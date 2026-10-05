import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#14120f",
    icons: [{ src: "/icon", sizes: "32x32", type: "image/png" }],
  };
}
