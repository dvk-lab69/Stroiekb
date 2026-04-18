import { BASE_URL, ORGANIZATION, SITE_NAME } from "../lib/seo-config";

export interface BreadcrumbItem {
    name: string;
    item: string;
}

export interface ProductSchemaProps {
    name: string;
    image: string;
    description: string;
    price: number | string;
    currency?: string;
    sku?: string;
}

export interface SchemaOrgProps {
    faqItems?: { question: string; answer: string }[];
    breadcrumbs?: BreadcrumbItem[];
    product?: ProductSchemaProps;
}

export default function SchemaOrg({ faqItems, breadcrumbs, product }: SchemaOrgProps) {
    const schemas: Record<string, unknown>[] = [];

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: ORGANIZATION.name,
        alternateName: ORGANIZATION.alternateName,
        description: ORGANIZATION.description,
        url: BASE_URL,
        email: ORGANIZATION.email,
        telephone: ORGANIZATION.telephone[0],
        address: {
            "@type": "PostalAddress",
            streetAddress: ORGANIZATION.address.streetAddress,
            addressLocality: ORGANIZATION.address.addressLocality,
            addressCountry: ORGANIZATION.address.addressCountry,
        },
        sameAs: [],
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: BASE_URL,
        publisher: {
            "@type": "Organization",
            name: ORGANIZATION.name,
        },
        potentialAction: {
            "@type": "SearchAction",
            target: `${BASE_URL}/catalog?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };

    schemas.push(organizationSchema, websiteSchema);

    const faqSchema = faqItems && faqItems.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        }
        : null;

    if (faqSchema) {
        schemas.push(faqSchema);
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: `${BASE_URL}${item.item}`,
            })),
        });
    }

    if (product) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: product.image.startsWith("http") ? product.image : `${BASE_URL}${product.image}`,
            description: product.description,
            sku: product.sku,
            brand: {
                "@type": "Brand",
                name: SITE_NAME,
            },
            offers: {
                "@type": "Offer",
                url: BASE_URL,
                priceCurrency: product.currency || "RUB",
                price: product.price,
                availability: "https://schema.org/InStock",
                seller: {
                    "@type": "Organization",
                    name: ORGANIZATION.name,
                },
            },
        });
    }

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}
