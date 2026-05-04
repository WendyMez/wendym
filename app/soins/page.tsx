import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import ServicesList from '@/components/soins/ServicesList';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import PhotoGallery from '@/components/ui/PhotoGallery';
import { Phone, Info } from 'lucide-react';
import { pricingNote } from '@/data/services';
import { contactInfo } from '@/data/contact';

const cabinetPhotos = [
  'salle-soin-1.jpg',
  'salle-soin-2.jpg',
  'wendy-en-soin.jpg',
  'wendy-en-soin-2.jpg',
];

export const metadata: Metadata = {
  title: 'Nos soins - Cabinet dentaire Dr MEZGUELDI',
  description: 'Découvrez tous nos soins dentaires : urgences, soins généraux, pédodontie, esthétique, implantologie et plus.',
};

export default function SoinsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="blue">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos soins dentaires
          </h1>
          <p className="text-xl text-white mb-8">
            Une gamme complète de soins pour toute la famille, avec des technologies de pointe et une approche personnalisée
          </p>
          <Button 
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            size="lg"
            variant="outline2"
          >
            <Phone size={20} className="mr-2" />
            Prendre rendez-vous
          </Button>
        </div>
      </Section>

      {/* Liste des services */}
      <Section>
        <ServicesList />
      </Section>

      {/* Information tarifs */}
      <Section background="white" className='pt-0'>
        <Card className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4">
            <Info className="text-primary-600 shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-gray-700 mb-2">Informations tarifaires</h3>
              <p className="text-gray-600">{pricingNote}</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* Galerie cabinet */}
      <Section background="white" className='pt-0 pb-12'>
        <PhotoGallery images={cabinetPhotos} columns={4} />
      </Section>
    </>
  );
}