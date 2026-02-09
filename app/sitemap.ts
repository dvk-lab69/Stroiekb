import { BASE_URL, PAGES } from "./lib/seo-config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date().toISOString();

    return PAGES.map((page) => ({
        url: `${BASE_URL}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changefreq as "weekly" | "monthly" | "yearly",
        priority: page.priority,
    }));
}
