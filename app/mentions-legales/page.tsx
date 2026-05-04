import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Mentions légales - Cabinet dentaire Dr MEZGUELDI',
  description: 'Mentions légales du cabinet dentaire Dr MEZGUELDI à Genas',
};

export default function MentionsLegalesPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-700 mb-8">Mentions légales</h1>
        
        <Card className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Éditeur du site</h2>
          <div className="space-y-2 text-gray-600">
            <p><strong>Nom :</strong> {contactInfo.name}</p>
            <p><strong>SIRET :</strong> {contactInfo.siret}</p>
            <p><strong>Téléphone :</strong> {contactInfo.phone}</p>
            <p><strong>Adresse :</strong> {contactInfo.address.street}, {contactInfo.address.city}, {contactInfo.address.postalCode}</p>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Directeur de publication</h2>
          <p className="text-gray-600">Dr MEZGUELDI</p>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Conception et développement</h2>
          <div className="space-y-2 text-gray-600">
            <p>Site conçu et développé par LianeCC</p>
            <a href="https://votre-site.com" className="text-primary-600 hover:underline">www.lianecc.com</a>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Hébergement</h2>
          <div className="space-y-2 text-gray-600">
            <p>Le site est hébergé par :</p>
            <p><strong>Vercel Inc.</strong></p>
            <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <a href="https://vercel.com" className="text-primary-600 hover:underline">www.vercel.com</a>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Propriété intellectuelle</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur
            et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
            documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Les photographies présentes sur ce site sont la propriété exclusive de leurs auteurs et ne sont
            pas libres de droits. Toute reproduction, diffusion ou utilisation, même partielle, sans autorisation
            préalable est strictement interdite.
          </p>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Responsabilité</h2>
          <p className="text-gray-600 leading-relaxed">
            Les informations contenues sur ce site sont aussi précises que possible et le site est 
            périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
            ou des lacunes. Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, 
            merci de bien vouloir nous le signaler par téléphone.
          </p>
        </Card>
      </div>
    </Section>
  );
}