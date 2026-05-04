import Section from '@/components/ui/Section';
import { Award, Droplets, Heart, Laugh } from 'lucide-react';
import Image from 'next/image';

export default function AboutDoctor() {
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
      description: 'Chaine de stérilisation complète (décontamination, nettoyage, conditionnement et stérilisation). Nous respectons scrupuleusement les recommandations nationales et des mesures de précautions universelles (c\'est-à-dire pour chaque acte et pour chaque patient) sont appliquées.',
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

        {/* Valeurs */}
        <div className="grid md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md text-center">
              {/* Image de fond de la card */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={value.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay blanc semi-transparent */}
              <div className="absolute inset-0 bg-white/80 z-10"></div>

              {/* Contenu de la card */}
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