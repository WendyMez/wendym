import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ExternalLink } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function Map() {
  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Nous localiser</h2>
      
      {/* Google Maps intégrée - Responsive */}
      <div className="relative w-full h-0 pb-[75%] mb-4 rounded-lg overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.0724281229682!2d4.998144274817578!3d45.73165441555598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c66473435029%3A0xd8abdfcada3dd9ad!2sWendy%20Mezgueldi!5e1!3m2!1sfr!2sfr!4v1767365692783!5m2!1sfr!2sfr" 
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      
      {contactInfo.googleMapsLink && (
        <Button 
          href={contactInfo.googleMapsLink}
          variant="outline"
          className="w-full hover:bg-teal-950 hover:text-white"
        >
          <ExternalLink size={18} className="mr-2" />
          Ouvrir dans Google Maps
        </Button>
      )}
    </Card>
  );
}