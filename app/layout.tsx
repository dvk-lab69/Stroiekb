import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SchemaOrg from "./components/SchemaOrg";
import { BASE_URL, SITE_NAME, SITE_DESCRIPTION } from "./lib/seo-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap", // Optimize font loading for Core Web Vitals
});

// Enhanced metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} — Благоустройство и фасадные решения`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "малые архитектурные формы",
    "парковая мебель",
    "корзины для кондиционеров",
    "вентиляционные решетки",
    "благоустройство",
    "Екатеринбург",
    "МАФ",
    "фасадные решения",
  ],
  authors: [{ name: "ИП Кольберг Марк" }],
  creator: "Urban Furniture",
  publisher: "ИП Кольберг Марк",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Благоустройство и фасадные решения`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#906252",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <SchemaOrg type="website" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
