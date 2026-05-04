import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import AboutDoctor from '@/components/home/AboutDoctor';
import FAQ from '@/components/pedodontie/FAQ';
import { siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Cabinet dentaire Dr Wendy MEZGUELDI - Genas (69)',
  description:
    'Cabinet dentaire à Genas (69740). Dr Wendy MEZGUELDI, omnipraticienne spécialisée en implantologie, parodontologie, esthétique du sourire et pédodontie. Urgences sous 24h.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Cabinet dentaire Dr Wendy MEZGUELDI - Genas',
    description:
      'Cabinet dentaire à Genas (69740). Omnipratique, pédodontie, implantologie et esthétique du sourire. Urgences dentaires sous 24h.',
    url: siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutDoctor />
      <div className="my-12 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
          Questions fréquentes
        </h2>
        <FAQ />
      </div>
    </>
  );
}
