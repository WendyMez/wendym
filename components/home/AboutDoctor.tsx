'use client';

import Section from '@/components/ui/Section';
import { Award, Droplets, Heart, Laugh, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutDoctor() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const values = [
    {
      icon: Heart,
      title: 'Patient au centre',
      description: 'Je suis à votre écoute et vous accompagne dans votre parcours de soin, pour vous proposer un plan de traitement personnalisé qui correspond réellement à vos besoins. ',
      image: '/images/patient-centre.jpg'
    },
    {
      icon: Award,
      title: 'Modernité',
      description: 'Parce que la science évolue continuellement, nous investissons régulièrement dans de nouvelles technologies pour être toujours plus précis et pertinent dans notre quotidien. Cone beam, empreintes numériques, aides optiques, etc.',
      image: '/images/modernite.jpg'
    },
    {
      icon: Droplets,
      title: 'Asepsie rigoureuse',
      description: "Chaine de stérilisation complète (décontamination, nettoyage, conditionnement et stérilisation). Nous respectons scrupuleusement les recommandations nationales et des mesures de précautions universelles (c'est-à-dire pour chaque acte et pour chaque patient) sont appliquées.",
      image: '/images/asepsie.jpg'
    },
    {
      icon: Laugh,
      title: "Bien-être",
      description: "Pour ceux qui redoutent les soins dentaires, la technique de la sédation consciente par inhalation du gaz MEOPA, permet de bénéficier d'un état de pleine détente, aussi bien pour les adultes que les enfants. Les effets se dissipent totalement après quelques minutes, permettant ainsi de reprendre une activité normale ensuite.",
      image: '/images/bien-etre.jpg'
    },
  ];

  return (
    <Section background="blue">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos valeurs
          </h2>
        </div>

        {/* Mobile : accordéon */}
        <div className="md:hidden space-y-2">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white/15 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-white"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center gap-3 font-semibold">
                    <Icon size={18} className="shrink-0" />
                    {value.title}
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-4 pb-4 text-sm text-white/85 leading-relaxed">
                    {value.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop : grille de cards */}
        <div className="hidden md:grid md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md text-center">
              <div className="absolute inset-0 z-0">
                <Image src={value.image} alt="" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-white/80 z-10" />
              <div className="relative z-20 p-18">
                <h3 className="font-bold text-gray-700 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
