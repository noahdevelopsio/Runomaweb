import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Example block if needed later
    },
    sitemap: "https://runoma.com.ng/sitemap.xml",
  };
}
