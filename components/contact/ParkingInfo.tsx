import React from 'react';
import Card from '@/components/ui/Card';
import { Car, Navigation, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function ParkingInfo() {
  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Accès et parking</h2>
      
      <div className="space-y-6">
        {/* À pied / Transport en commun */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <Navigation className="text-primary-600" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Transport en commun</h3>
            <p className="text-gray-600 text-ms">
              {contactInfo.bus.info}
            </p>
          </div>
        </div>

        {/* En voiture */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <Car className="text-primary-600" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">En voiture</h3>
            <p className="text-gray-600 text-ms">
              {contactInfo.parking.info}
            </p>
          </div>
        </div>

        {/* Adresse */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <MapPin className="text-primary-600" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Adresse exacte</h3>
            <p className="text-gray-600 text-ms">
              {contactInfo.address.street}<br />
              {contactInfo.address.postalCode} {contactInfo.address.city}<br />
              {contactInfo.address.region}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}