import { BASE_URL, ORGANIZATION, SITE_NAME } from "../lib/seo-config";

interface SchemaOrgProps {
    type?: "website" | "organization" | "faq";
    faqItems?: { question: string; answer: string }[];
}

export default function SchemaOrg({ type = "website", faqItems }: SchemaOrgProps) {
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

    const faqSchema = faqItems
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const schemas: any[] = [organizationSchema, websiteSchema];
    if (faqSchema) {
        schemas.push(faqSchema);
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
