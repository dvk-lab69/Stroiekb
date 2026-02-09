// Global SEO configuration
// Change this URL when deploying to production domain
export const BASE_URL = "https://YOUR-FUTURE-DOMAIN.com";

export const SITE_NAME = "Urban Furniture";
export const SITE_DESCRIPTION = "Производственная компания полного цикла. Малые архитектурные формы, парковая мебель, корзины для кондиционеров, вентиляционные решетки.";

// Organization info for Schema.org
export const ORGANIZATION = {
    name: "ИП Кольберг Марк",
    alternateName: "Urban Furniture",
    description: SITE_DESCRIPTION,
    email: "m4Rk@yandex.ru",
    telephone: ["+7 (912) 244-90-03", "+7 (912) 241-73-73", "+7 (912) 248-79-59"],
    address: {
        streetAddress: "ул. Тверитина, 34А",
        addressLocality: "Екатеринбург",
        addressCountry: "RU",
    },
};

// Pages configuration for sitemap
export const PAGES = [
    { path: "/", priority: 1.0, changefreq: "weekly" },
    { path: "/catalog", priority: 0.9, changefreq: "weekly" },
    { path: "/solutions/baskets", priority: 0.8, changefreq: "monthly" },
    { path: "/solutions/ventilation", priority: 0.8, changefreq: "monthly" },
    { path: "/portfolio", priority: 0.7, changefreq: "monthly" },
    { path: "/about", priority: 0.6, changefreq: "monthly" },
    { path: "/contacts", priority: 0.6, changefreq: "monthly" },
    { path: "/request", priority: 0.8, changefreq: "monthly" },
    { path: "/privacy", priority: 0.3, changefreq: "yearly" },
];
