import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://runoma.com.ng";

  // Base routes
  const routes = ["", "/about", "/services", "/pricing", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Add dynamic portfolio routes if queried from a CMS. 
  // Given current static focus, these are the core indexable pages.

  return [...routes];
}
