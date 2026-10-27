import { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.siteUrl,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
