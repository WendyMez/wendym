import Hero from '@/components/home/Hero';
import AboutDoctor from '@/components/home/AboutDoctor';
import FAQ from '@/components/pedodontie/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutDoctor />
      <div className="my-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
            Questions fréquentes
        </h2>
        <FAQ />
      </div>
    </>
  );
}