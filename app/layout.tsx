import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteUrl, siteName, defaultSeo } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultSeo.title,
    template: `%s | Dr MEZGUELDI - Genas`,
  },
  description: defaultSeo.description,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName,
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: [{ url: '/images/portrait-wendy-2.jpg', width: 800, height: 800, alt: 'Dr Wendy MEZGUELDI' }],
  },
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Cabinet dentaire Dr Wendy MEZGUELDI',
  description: defaultSeo.description,
  url: siteUrl,
  telephone: '+33478401488',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '54 Rue de la République',
    addressLocality: 'Genas',
    postalCode: '69740',
    addressCountry: 'FR',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday',    opens: '10:30', closes: '13:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday',    opens: '14:00', closes: '18:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday',   opens: '09:00', closes: '13:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday',   opens: '14:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '13:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '14:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday',  opens: '09:00', closes: '13:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday',  opens: '14:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday',    opens: '09:00', closes: '13:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday',    opens: '14:00', closes: '19:00' },
  ],
  priceRange: '€€',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
