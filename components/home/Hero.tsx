import { Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { contactInfo } from '@/data/contact';
import Formation from './Formation';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">

      {/* Contenu */}
      <div className="relative z-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between container-custom py-16 md:py-24 gap-12 lg:gap-12">

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 mb-6">
              Cabinet dentaire du
              <span className="block text-primary-600 mt-2">Dr Wendy MEZGUELDI</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Situé à Genas, notre cabinet vous offre une médecine bucco-dentaire dans un <span className="font-medium text-teal-950">environnement moderne et chaleureux</span>. Notre approche globale permet de vous proposer une thérapeutique personnelle et <span className="font-medium text-teal-950">adaptée à votre problématique </span> orale, autour de traitements alliant esthétique du sourire, implantologie et chirurgie osseuse, parodontologie, endodontie ou dentisterie pédiatrique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                variant="outline"
                size="lg"
                className='hover:bg-teal-950 hover:text-white'
              >
                <Phone size={20} className="mr-2" />
                Prendre rendez-vous
              </Button>
              
              <Button 
                href="/soins"
                variant="outline"
                size="lg"
                className='hover:bg-teal-950 hover:text-white'

              >
                Découvrir nos soins
              </Button>
            </div>

            {/* Info urgences */}
            <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border-l-4 border-teal-950">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Urgences dentaires
              </p>
              <p className="text-sm text-gray-600">
                Créneaux disponibles dans les 24h pour les patients du cabinet
              </p>
            </div>
          </div>

          <Formation />

        </div>
      </div>
    </div>
  );
}