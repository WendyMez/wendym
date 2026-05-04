import Card from '@/components/ui/Card';
import { Baby, Shield, Heart } from 'lucide-react';

export default function PedodontieContent() {
  return (
    <div className="space-y-8">
      
      {/* Approche */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center">
          <Baby className="text-primary-600 mb-4 mx-auto" size={32} />
          <h3 className="font-bold text-gray-700 mb-2">Approche adaptée</h3>
          <p className="text-sm text-gray-600">
            Une approche douce et rassurante pour mettre votre enfant en confiance 
            et créer une expérience positive.
          </p>
        </Card>

        <Card className="text-center">
          <Shield className="text-primary-600 mb-4 mx-auto" size={32} />
          <h3 className="font-bold text-gray-700 mb-2">Prévention</h3>
          <p className="text-sm text-gray-600">
            Bilans bucco-dentaires, vernis fluorés, scellements de sillons et 
            éducation à l&apos;hygiène dentaire.
          </p>
        </Card>

        <Card className="text-center">
          <Heart className="text-primary-600 mb-4 mx-auto" size={32} />
          <h3 className="font-bold text-gray-700 mb-2">Confort</h3>
          <p className="text-sm text-gray-600">
            Possibilité de soins sous sédation consciente (MEOPA) pour plus de 
            sérénité.
          </p>
        </Card>
      </div>

      {/* Types de soins */}
      <Card>
        <h3 className="text-xl font-bold text-gray-700 mb-4">
          Types de soins proposés
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Prévention</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Bilan bucco-dentaire</li>
              <li>• Application de vernis fluorés</li>
              <li>• Scellements de sillons</li>
              <li>• Révélateurs de plaque</li>
              <li>• Éducation à l&apos;hygiène</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Soins & Prothèses</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Composites</li>
              <li>• Pulpotomies</li>
              <li>• Mainteneurs d&apos;espace</li>
              <li>• Inlay, onlay</li>
              <li>• Coiffe pédodontique</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}